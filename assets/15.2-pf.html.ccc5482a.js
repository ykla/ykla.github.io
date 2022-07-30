import{_ as e,o as t,c as i,e as n}from"./app.af761329.js";const s={},o=n(`<h1 id="_15-2-pf" tabindex="-1"><a class="header-anchor" href="#_15-2-pf" aria-hidden="true">#</a> 15.2 PF</h1><p>The OpenBSD Packet Filter (PF) is a firewall ported from OpenBSD that provides a number of features, including ALTQ (Alternate Queuing).</p><p>To enable it, execute the following command in the terminal.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cp /usr/share/examples/pf/pf.conf /etc #Copy the example file as the default configuration ruleset file, otherwise pf will not start 
# service pf enable # Set pf to boot, or set pf_enable via bsdconfig 
# service pf start # start pf 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The administrative command for pf is <code>pfctl</code>, and examples of common operations are as follows.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># pfctl -e # start pf, equivalent to service pf start 

# pfctl -d # stop pf, equivalent to server pf stop 

# pfctl -f /etc/pf.conf #Load rules from the ruleset file 

# pfctl -nf /etc/pf.conf # Parse the rules, but do not load them. The -f parameter can also be used with other parameters, such as -N to load only NAT rules, -R to load only filter rules, -A to load only queue rules, -O to load only option rules 

# pfctl -s all # View information about all objects in pf. If you want to view information about specific objects, you can use nat, queue, rules, Anchors, states, Sources, info, Running, labels, timeouts, memory, Tables, osfp, and Interfaces replace all

# pfctl -F all # Clean up all rules in pf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you want to see specific rules, you can replace all with nat, queue, rules, states, Sources, info, Tables, osfp.</p><p>However, the above operation does not manage the rules, so you also need to modify the ruleset file, commonly used examples are as follows.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># scrub in all # collate all incoming data

block all # Deny all access.

ipfilter # is the default explicitly forbidden firewall, so all access needs to be blocked by this rule. where block is the action, out means deny, and pass means pass; all is shorthand for from any to any, which means from the source address to the destination address, which is usually a network segment (e.g. 192.168.1.0/24) or an IP address (e.g. 192.168.1.100), and any is a special word that means any address; in addition, when the rule applies to both can be omitted when the rule applies to both input in and output out, so this rule applies to both input and output 

pass quick on lo0 all # Release access to the loopback interface, which is not external. quick keyword means that if the rule matches, execution will stop and no subsequent rules will be executed 

pass in quick proto tcp from any to 192.168.1.184 port 80 # Add a rule for TCP protocol access to port 80, allowing any device to access port 80 on the local machine with TCP protocol. where proto tcp is the access protocol, commonly used values are tcp, udp, icmp, icmp6; port = 80 is the port, written after the destination address for the target port, the source address is not written, that is, from the source address of any port to initiate access 

pass out quick proto tcp from 192.168.1.184 port 80 to any # allow to show back information to any device that accesses 

rdr pass on em0 inet proto tcp from any to 192.168.1.184 port 80 -&gt; 192.168.1.166 port 8080 # add port 80 to port 8080 traffic forwarding rules, as the test machine only one NIC, so the forwarding is limited to this machine 

pass quick inet proto icmp all icmp-type 8 code 0 # Allow this machine to ping with external devices, where icmp-type 8 is a query request and code means the return code is 0 

pass out quick inet proto icmp from 192.168.1.184 to any icmp-type 11 code 0 #Allows traceroute commands to be executed with ICMP protocol 

pass out quick proto udp from 192.168.1.184 to any port 33434 &lt;&lt; 34500 #traceroute default protocol UDP, port number from 33434, add 1 for each forwarding port number 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The following ruleset file <code>/etc/pf.conf</code> is organized according to my OS as follows.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#traffic shaping scrub in all #forwarding rules 

rdr pass on em0 inet proto tcp from any to 192.168.1.184 port 8080 -&gt; 192.168.1.184 port 80 # Note the order of the rules, according to pf.conf rules, forwarding rules should be located before the filtering rules, please refer to the relevant content of the help # filtering rules 

block all pass quick on lo0 all # Set any device to access ports 22, 80, 443, 4200, 10000 of the server 

pass in quick proto tcp from any to 192.168.1.184 port { 22,80,443,4200,10000 } 

pass out quick proto tcp from 192.168.1.184 port { 22,80,443,4200,10000 } to any 

pass out quick proto tcp from 192.168.1.184 to any port { 80,443 } keep state # Set the server to access port 80, 443 of any network device 

pass out quick proto udp from any to any port 53 keep state # Set up access to DNS servers 

pass out quick proto udp from any to any port 67 keep state #Set up access to DHCP servers 

pass quick inet proto icmp all icmp-type 8 code 0 

pass out quick inet proto icmp from 192.168.1.184 to any icmp-type 11 code 0 

pass out quick proto udp from 192.168.1.184 to any port 33434 &lt;&lt; 34500 Save the file, then execute the command in the terminal. 

# pfctl -Fa -f /etc/pf.conf # Load the rules from the ruleset file and you will see the result.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),a=[o];function l(r,c){return t(),i("div",null,a)}var u=e(s,[["render",l],["__file","15.2-pf.html.vue"]]);export{u as default};
