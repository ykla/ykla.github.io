import{_ as e,o as i,c as n,e as l}from"./app.f800b8af.js";const a={},s=l(`<h1 id="_15-3-ipfw" tabindex="-1"><a class="header-anchor" href="#_15-3-ipfw" aria-hidden="true">#</a> 15.3 IPFW</h1><h2 id="introduction-description" tabindex="-1"><a class="header-anchor" href="#introduction-description" aria-hidden="true">#</a> Introduction Description.</h2><p>IPFIREWALL (IPFW) is a firewall application initiated by FreeBSD and written and maintained by volunteer members of the FreeBSD community.</p><p>In FreeBSD 12, ipfw has been compiled into the kernel by default, and it will have a rule by default, rule number <code>65536</code>, which cannot be removed. This rule will cut off all traffic, so do not start ipfw at random before it has been configured, or you will face the problem of not being able to connect to remote FreeBSD.</p><blockquote><p>Graphical configuration tool:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#pkg install fwbuilder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><h2 id="configuration-ipfw" tabindex="-1"><a class="header-anchor" href="#configuration-ipfw" aria-hidden="true">#</a> configuration ipfw\uFF1A</h2><ol><li>run command\uFF1A</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># sysrc firewall_enable=&quot;YES&quot; # Allow the firewall to start on its own
# sysrc firewall_type=&quot;open&quot; # Let the system pass the traffic through so that the firewall can be used
# sysrc firewall_script=&quot;/etc/ipfw.rules&quot; # Make the path to the ipfw rules, we will edit the rules here later
# sysrc firewall_logging=&quot;YES&quot; # so that ipfw can play logging
# sysrc firewall_logif=&quot;YES&quot; # Log to the \`ipfw0\` device
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>edit <code>/etc/ipfw.rules</code> \uFF1A</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ee /etc/ipfw.rules 

IPF=&quot;ipfw -q add&quot;
ipfw -q -f flush

# loopback 
$IPF 10 allow all from any to any via lo0
$IPF 20 deny all from any to 127.0.0.0/8
$IPF 30 deny all from 127.0.0.0/8 to any
$IPF 40 deny tcp from any to any frag

# statefull
$IPF 50 check-state
$IPF 60 allow tcp from any to any established
$IPF 70 allow all from any to any out keep-state
$IPF 80 allow icmp from any to any

# open port for ssh
$IPF 110 allow tcp from any to any 22 out
$IPF 120 allow tcp from any to any 22 in

# open port for samba
$IPF 130 allow tcp from any to any 139 out
$IPF 140 allow tcp from any to any 139 in
$IPF 150 allow tcp from any to any 445 out
$IPF 160 allow tcp from any to any 445 in
$IPF 170 allow udp from any to any 137 out
$IPF 180 allow udp from any to any 137 in
$IPF 190 allow udp from any to any 138 out
$IPF 200 allow udp from any to any 138 in


# deny and log everything 
$IPF 500 deny log all from any to any
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Additional notes: samba open tcp/139,445 ports, udp/137,138 ports</p><ol start="3"><li>start ipfw.</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># service ipfw start

Firewall rules loaded.
Firewall logging enabled.
ifconfig: interface ipfw0 already exists
Firewall logging pseudo-interface (ipfw0) created.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>View ipfw status:</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># service ipfw status

ipfw is enabled
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>View ipfw rule entries:</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ipfw list

00010 allow ip from any to any via lo0
00020 deny ip from any to 127.0.0.0/8
00030 deny ip from 127.0.0.0/8 to any
00040 deny tcp from any to any frag
00050 check-state :default
00060 allow tcp from any to any established
00070 allow ip from any to any out keep-state :default
00080 allow icmp from any to any
00110 allow tcp from any to any 22 out
00120 allow tcp from any to any 22 in
00500 deny log ip from any to any
65535 deny ip from any to any
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),d=[s];function t(r,o){return i(),n("div",null,d)}var u=e(a,[["render",t],["__file","15.3-ipfw.html.vue"]]);export{u as default};
