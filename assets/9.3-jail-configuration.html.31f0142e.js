import{_ as e,o as i,c as a,e as n}from"./app.be834f5f.js";const d={},s=n(`<h1 id="_9-3-jail-configuration" tabindex="-1"><a class="header-anchor" href="#_9-3-jail-configuration" aria-hidden="true">#</a> 9.3 Jail configuration</h1><h2 id="create-jail-directory" tabindex="-1"><a class="header-anchor" href="#create-jail-directory" aria-hidden="true">#</a> Create jail directory</h2><h3 id="put-in-the-base-system" tabindex="-1"><a class="header-anchor" href="#put-in-the-base-system" aria-hidden="true">#</a> Put in the base system</h3><p>Option 1</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># make buildworld # Compile the base system
# make installworld DESTDIR=/usr/jail/ # install to jail
# make distribution DESTDIR=/usr/jail/ #or
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Option 2</p><p>Download base.txz or extract baes.txz from iso and extract it to jail</p><p><code># tar -xvf base.txz -C /usr/jail/</code></p><p>Mount the devfs filesystem. (not required)</p><p><code># mount -t devfs devfs /usr/jail/dev</code></p><h3 id="write-to-rc-conf" tabindex="-1"><a class="header-anchor" href="#write-to-rc-conf" aria-hidden="true">#</a> Write to <code>rc.conf</code></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>## sysrc jail_enable=&quot;YES&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Create <code>jail.conf</code> file (can be written to <code>rc.conf</code> but it&#39;s easier to manage)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>www {
host.hostname = www.example.org; # hostname
ip4.addr = 192.168.0.10; # IP address
path = &quot;/usr/jail&quot;; # jail location
devfs_ruleset = &quot;www_ruleset&quot;; # devfs ruleset
mount.devfs; # mount devfs filesystem to jail
exec.start = &quot;/bin/sh /etc/rc&quot;; # start command
exec.stop = &quot;/bin/sh /etc/rc.shutdown&quot;; # shutdown command
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="manage" tabindex="-1"><a class="header-anchor" href="#manage" aria-hidden="true">#</a> Manage</h2><p><code>jls</code> View a list of online jail information</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>JID IP Address Hostname Path
3 192.168.0.10 www /usr/jail/www
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="start-and-stop-jail" tabindex="-1"><a class="header-anchor" href="#start-and-stop-jail" aria-hidden="true">#</a> Start and stop jail</h2><p>jail</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># service jail start www
# service jail stop www
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="log-in-to-jail" tabindex="-1"><a class="header-anchor" href="#log-in-to-jail" aria-hidden="true">#</a> Log in to jail</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># jexec 1 tcsh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="cleanly-shut-down-jail" tabindex="-1"><a class="header-anchor" href="#cleanly-shut-down-jail" aria-hidden="true">#</a> Cleanly shut down jail</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># jexec 3 /etc/rc.shutdown
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="upgrade-jail" tabindex="-1"><a class="header-anchor" href="#upgrade-jail" aria-hidden="true">#</a> Upgrade jail</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># freebsd-update -b /here/is/the/jail fetch
# freebsd-update -b /here/is/the/jail install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ping-and-network" tabindex="-1"><a class="header-anchor" href="#ping-and-network" aria-hidden="true">#</a> ping and network</h2><h3 id="turn-on-ping" tabindex="-1"><a class="header-anchor" href="#turn-on-ping" aria-hidden="true">#</a> Turn on ping</h3><p>Write to <code>/etc/jail.conf</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>allow.raw_sockets=1;
allow.sysvipc=1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="network" tabindex="-1"><a class="header-anchor" href="#network" aria-hidden="true">#</a> Network</h3><p>Create <code>/etc/resolv.conf</code>, and edit</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>search lan
nameserver 8.8.8.8
#Don&#39;t write the router address
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="create-jail-directory-1" tabindex="-1"><a class="header-anchor" href="#create-jail-directory-1" aria-hidden="true">#</a> Create jail directory</h2><p>Create 4 templates, skeletons, data, projects</p><h3 id="create-template-directory" tabindex="-1"><a class="header-anchor" href="#create-template-directory" aria-hidden="true">#</a> Create template directory</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>## mkdir -p /jail/j1
## Then put it into the base directory, which is not written again as mentioned above
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="create-the-skeleton-directory" tabindex="-1"><a class="header-anchor" href="#create-the-skeleton-directory" aria-hidden="true">#</a> Create the skeleton directory</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># mkdir -p /jail/j2
## Move the directory etc usr tmp var root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cd /jail/j2/ # Note the directory
# mv /jail/j1/etc . /etc
# mv /jail/j1/tmp . /tmp
# mv /jail/j1/var . /var
# mv /jail/j1/root . /root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="create-a-data-directory" tabindex="-1"><a class="header-anchor" href="#create-a-data-directory" aria-hidden="true">#</a> Create a data directory</h3><p>That is, make a copy of the skeleton for him to use</p><p><code># cp -R /jail/j2/ /jail/js/www/</code></p><h3 id="create-the-project-directory" tabindex="-1"><a class="header-anchor" href="#create-the-project-directory" aria-hidden="true">#</a> Create the project directory</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>### mkdir -p /jail/www/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="create-links" tabindex="-1"><a class="header-anchor" href="#create-links" aria-hidden="true">#</a> Create links</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cd /jail/j1 #cd to the template directory
# mkdir -p jusr # Create the directory to be used for link data
# ln -s jusr/etc etc
# ln -s jusr/home home
# ln -s jusr/root root
# ln -s jusr/usr usr
# ln -s jusr/tmp tmp
# ln -s jusr/var var
# link directory, note the linked directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="create-fstab" tabindex="-1"><a class="header-anchor" href="#create-fstab" aria-hidden="true">#</a> Create fstab</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#ee /jail/www.fstab
## Mount the public read-only system to the project directory
/jail/j1/ /jail/www/ mullfs ro 0 0
#mount the project data directory to the project directory
/jail/js/www/ /jail/www/jusr/ mullfs ro 0 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Create fstab</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ee /jail/www.fstab
# mount the public read-only system to the project directory
/jail/j1/ /jail/www/ mullfs ro 0 0
#Mount the project data directory to the project directory
/jail/js/www/ /jail/www/jusr/ mullfs ro 0 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Write to jail.conf</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># global section


exec.start = &quot;/bin/sh /etc/rc&quot;;
exec.stop = &quot;/bin/sh /etc/rc.shutdown&quot;;
exec.clean;
mount.devfs;
allow.raw_sockets = 1;
allow.sysvipc = 1;


# gateway If not used, leave it out

interface = &quot;NIC address&quot;; # hostname can also be replaced by variable


hostname = &quot;$name.domain.local&quot;;
#jail location, can also use variable
path = &quot;/jail/$name&quot;;


#ip address


ip4.addr = 192.168.1.$ip;


#fstab location


mount.fstab = /jail/www.fstab.
www {
$ip=2
#not using fstab, use
#mount.fstab = &quot;&quot;.

#replace global
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="delete-file-without-permissions" tabindex="-1"><a class="header-anchor" href="#delete-file-without-permissions" aria-hidden="true">#</a> Delete file without permissions</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># chflags -R noschg directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,55),r=[s];function t(l,c){return i(),a("div",null,r)}var u=e(d,[["render",t],["__file","9.3-jail-configuration.html.vue"]]);export{u as default};
