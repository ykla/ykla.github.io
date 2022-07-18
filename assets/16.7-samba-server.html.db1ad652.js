import{_ as e,o as n,c as i,e as a}from"./app.3b75d2e9.js";const s={},d=a(`<h1 id="_16-7-samba-server" tabindex="-1"><a class="header-anchor" href="#_16-7-samba-server" aria-hidden="true">#</a> 16.7 samba server</h1><h2 id="set-up-samba-as-a-standalone-server" tabindex="-1"><a class="header-anchor" href="#set-up-samba-as-a-standalone-server" aria-hidden="true">#</a> Set up samba as a standalone server</h2><p>Environment: freebsd 11</p><h3 id="install-samba" tabindex="-1"><a class="header-anchor" href="#install-samba" aria-hidden="true">#</a> Install samba</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># pkg install samba413
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="configuration-samba" tabindex="-1"><a class="header-anchor" href="#configuration-samba" aria-hidden="true">#</a> Configuration samba</h3><ol><li>edit /etc/rc.conf</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ee /etc/rc.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>Add the following to the end of <code>/etc/rc.conf</code> and save it.</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>nmbd_enable=&quot;YES&quot;
winbindd_enable=&quot;YES&quot;
samba_enable=&quot;YES&quot;
samba_server_enable=&quot;YES&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>Create <code>/usr/local/etc/smb4.conf</code>, add the following and save it</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#vi /usr/local/etc/smb4.conf

[root]
    comment = root&#39;s stuff
    path = /root
    public = no
    browseable = yes
    writable = yes
    printable = no
    create mask = 0755
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>Create the samba root user.</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># smbpasswd -a root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>edit <code>/usr/local/etc</code></li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cd /usr/local/etc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="6"><li>run</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># service samba_server start //start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>or</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># service samba_server restart //restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="7"><li>View samba status.</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># service samba_server status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="8"><li>Access shared folders under windows using 192.168.X.X (actual IP is used, Windows needs to enable SMB 1.0 support first)</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>192.168.X.X
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="set-samba-as-a-domain-member" tabindex="-1"><a class="header-anchor" href="#set-samba-as-a-domain-member" aria-hidden="true">#</a> Set Samba as a domain member</h2><p>Environment: freebsd 12</p><h3 id="configure-a-static-ip-address" tabindex="-1"><a class="header-anchor" href="#configure-a-static-ip-address" aria-hidden="true">#</a> Configure a static IP address</h3><p>Use the following command to configure.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>bsdconfig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="configure-hostname" tabindex="-1"><a class="header-anchor" href="#configure-hostname" aria-hidden="true">#</a> Configure hostname</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ee /etc/rc.conf
 
hostname=&quot;fb&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="configure-dns" tabindex="-1"><a class="header-anchor" href="#configure-dns" aria-hidden="true">#</a> Configure DNS</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ee /etc/resolv.conf
 
# Generated by resolvconf
search SVROS.COM               //Set domain controller domain name
# nameserver 192.168.253.2
 
nameserver 192.168.253.130     //Set the domain controller IP address
nameserver 223.5.5.5 
nameserver 127.0.0.1
options edns0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="edit-etc-sysctl-conf" tabindex="-1"><a class="header-anchor" href="#edit-etc-sysctl-conf" aria-hidden="true">#</a> edit /etc/sysctl.conf</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># echo &quot;kern.maxfiles=25600&quot; &gt;&gt; /etc/sysctl.conf
# echo &quot;kern.maxfilesperproc=16384&quot; &gt;&gt; /etc/sysctl.conf
# echo &quot;net.inet.tcp.sendspace=65536&quot; &gt;&gt; /etc/sysctl.conf
# echo &quot;net.inet.tcp.recvspace=65536&quot; &gt;&gt; /etc/sysctl.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="create-etc-krb5-conf" tabindex="-1"><a class="header-anchor" href="#create-etc-krb5-conf" aria-hidden="true">#</a> create /etc/krb5.conf</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[libdefaults]
	default_realm = SVROS.COM   //\u8BBE\u7F6E\u57DF\u540D
	dns_lookup_realm = true
	dns_lookup_kdc = true
	ticket_lifetime = 24h
	renew_lifetime = 7d
	forwardable = yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="edit-etc-nsswitch-conf" tabindex="-1"><a class="header-anchor" href="#edit-etc-nsswitch-conf" aria-hidden="true">#</a> edit /etc/nsswitch.conf</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># sed -i -e &quot;s/^passwd:.*/passwd: files winbind/&quot; /etc/nsswitch.conf
# sed -i -e &quot;s/^group:.*/group: files winbind/&quot; /etc/nsswitch.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="create-usr-local-etc-smb4-conf" tabindex="-1"><a class="header-anchor" href="#create-usr-local-etc-smb4-conf" aria-hidden="true">#</a> create /usr/local/etc/smb4.conf</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[global]
	workgroup = SVROS
	server string = Samba Server Version %v
	security = ads
	realm = SVROS.COM
	domain master = no
	local master = no
	preferred master = no
	socket options = TCP_NODELAY IPTOS_LOWDELAY SO_RCVBUF=131072 SO_SNDBUF=131072
	use sendfile = true
	 
	idmap config * : backend = tdb
	idmap config * : range = 100000-299999
	idmap config SVROS : backend = rid
	idmap config SVROS : range = 10000-99999
	winbind separator = +
	winbind enum users = yes
	winbind enum groups = yes
	winbind use default domain = yes
	winbind nested groups = yes
	winbind refresh tickets = yes
	template homedir = /home/%D/%U
	template shell = /bin/false
		 
	client use spnego = yes
	client ntlmv2 auth = yes
	encrypt passwords = yes
	restrict anonymous = 2
	log file = /var/log/samba4/log.%m
	max log size = 50
			 
#============================ Share Definitions ==============================
			 
[testshare]
	comment = Test share
	path = /samba/testshare
	read only = no
	force group = &quot;Domain Users&quot;
	directory mode = 0770
	force directory mode = 0770
	create mode = 0660
	force create mode = 0660
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The last two lines of testshare above actually use permission optimization (optional)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>create mode = 0750
force create mode = 0750
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="add-samba-to-the-domain" tabindex="-1"><a class="header-anchor" href="#add-samba-to-the-domain" aria-hidden="true">#</a> Add samba to the domain</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>net ads join --no-dns-updates -U administrator
net ads testjoin
# Should report &quot;Join is OK&quot;
# On your DC, open the DNS MMC and add an &quot;A&quot; entry for your BSD server so clients can find it
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="make-samba-start-and-set-it-to-boot" tabindex="-1"><a class="header-anchor" href="#make-samba-start-and-set-it-to-boot" aria-hidden="true">#</a> Make samba start and set it to boot</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># echo &quot;samba_server_enable=YES&quot; &gt;&gt; /etc/rc.conf
# echo &quot;winbindd_enable=YES&quot; &gt;&gt; /etc/rc.conf
# service samba_server start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tesat-kerberos" tabindex="-1"><a class="header-anchor" href="#tesat-kerberos" aria-hidden="true">#</a> Tesat Kerberos</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kinit administrator
# Enter domain admin password, it should return to the prompt with no errors
	
klist
# Credentials cache: FILE:/tmp/krb5cc_0
#    Principal: administrator@SVROS.COM
#
# Issued                Expires               Principal
# Dec  6 10:15:39 2021  Feb  4 20:15:39 2021  krbtgt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="test-winbind" tabindex="-1"><a class="header-anchor" href="#test-winbind" aria-hidden="true">#</a> Test Winbind</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>wbinfo -u
# Should return domain users
	
wbinfo -g
# Should return domain groups
	
getent passwd
# Should return domain users at the end of the list with 10000+ UIDs
	
getent group
# Should return domain groups at the end of the list with 10000+ GIDs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="if-the-wbinfo-command-shows-an-error-execute-the-command" tabindex="-1"><a class="header-anchor" href="#if-the-wbinfo-command-shows-an-error-execute-the-command" aria-hidden="true">#</a> If the wbinfo command shows an error, execute the command</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># service samba_server restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="create-shared-folder" tabindex="-1"><a class="header-anchor" href="#create-shared-folder" aria-hidden="true">#</a> Create shared folder</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># mkdir -p /samba/testshare
# chown &quot;administrator&quot;:&quot;domain users&quot; /samba/testshare
# chmod 0770 /samba/testshare
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If only the genus master is allowed to read and write, and the genus group is only allowed to read, use the following command to set</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># chmod 0750 /samba/testshare
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If only generics are allowed to read and write, and neither generics nor others are allowed to read or write, use the following command to set</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># chmod -R 0700 /samba/testshare
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,59),t=[d];function r(l,c){return n(),i("div",null,t)}var u=e(s,[["render",r],["__file","16.7-samba-server.html.vue"]]);export{u as default};
