import{_ as e,o as t,c as s,e as i}from"./app.be834f5f.js";var n="/assets/kde1.9ccb7ef2.png",a="/assets/kde2.2407993a.png";const d={},o=i(`<h1 id="_4-10-remote-desktop-management" tabindex="-1"><a class="header-anchor" href="#_4-10-remote-desktop-management" aria-hidden="true">#</a> 4.10 Remote Desktop Management</h1><h2 id="vnc" tabindex="-1"><a class="header-anchor" href="#vnc" aria-hidden="true">#</a> VNC</h2><p>Enabling VNC Services</p><p>TigerVNC Server.</p><blockquote><p>Use tightvnc as well.</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># pkg install -y tigervnc-server 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After installation, you have to do some setup. 1.</p><ol><li><p>Execute the command <code>vncpasswd</code> in the terminal to set the access password. 2.</p></li><li><p>Create <code>~/.vnc/xstartup</code> file with the following contents.</p></li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#! /bin/sh 
unset SESSION_MANAGER 
unset DBUS_SESSION_BUS_ADDRESS 
[ -x /etc/X11/xinit/xinitrc ] &amp;&amp; exec /etc/X11/xinit/xinitrc 
[ -f /etc/X11/xinit/xinitrc ] &amp;&amp; exec sh /etc/X11/xinit/xinitrc 
xsetroot -solid grey 
$command &amp;  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note: <code>$command</code> needs to be replaced, please be careful to keep <code>&amp;</code>, it needs to be replaced under different desktops, Gnome with <code>gnome-session</code>, KDE with <code>startplasma-x11</code>, MATE with <code>mate-session</code>, Xfce with <code>xfce4-session</code>.</p><p>After saving, execute the command <code># chmod 755 ~/.vnc/xstartup</code>. 3.</p><ol start="3"><li>Next, execute the command <code>vncserver</code> or <code>vncserver :1</code> in the terminal.</li></ol><p>Where <code>:1</code> is equivalent to <code>DISPLAY=:1</code>, which specifies that the communication port of the desktop display is <code>1</code>, which corresponds to the communication port of the VNC service as <code>5901</code>. Although the desktop display communication port starts from 0, the port is already occupied by the current desktop, so although the default port of VNC service is 5900, the actual execution often starts from 5901.</p><p>If you do not specify the communication port when starting the service, it will be automatically specified according to the usage.</p><p>To shut down the service, please use the command <code># vncserver -kill :1</code>, where the communication port must be specified. 4.</p><ol start="4"><li>If the firewall is enabled, then you also need to open the firewall at this time. Take ipfw as an example, enter the command in the terminal.</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ipfw add allow tcp from any to me 5900-5910 in keep-state 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The above command opens ports 5900-5910, i.e. ports 0-10 of DISPLAY, which is usually enough even if you need to open many desktops. Finally, don&#39;t forget to add the command to the ruleset file, otherwise it will be lost after OS reboot.</p><h2 id="xrdp" tabindex="-1"><a class="header-anchor" href="#xrdp" aria-hidden="true">#</a> XRDP</h2><h3 id="remote-freebsd-using-another-machine" tabindex="-1"><a class="header-anchor" href="#remote-freebsd-using-another-machine" aria-hidden="true">#</a> Remote FreeBSD using another machine</h3><p>To install the package (using the KDE5 desktop as a base).</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>## pkg install xorg kde5 xrdp wqy-fonts xdg-user-dirs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Configuration:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># sysrc xrdp_enable=&quot;YES&quot;
# sysrc xrdp_sesman_enable=&quot;YES&quot;
# sysrc dbus_enable=&quot;YES&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Edit <code># ee /etc/fstab</code> and add:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>proc /proc procfs rw 0 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Edit <code>/usr/local/etc/xrdp/startwm.sh</code>.</p><p>Find <code>#### start desktop environment</code> and modify it as follows:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#### start desktop environment
# exec gnome-session
# exec mate-session
# exec start-lumina-desktop
exec ck-launch-session startplasma-x11 # change here
# exec startxfce4
# exec xterm # change here
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then restart the system.</p><p>Open the remote desktop link that comes with windows and enter the IP address/username/password to link.</p><blockquote><p><strong>Note</strong></p><p>If you see a menu with a blue background. Please leave the xrdp default settings as they are, and enter Xorg on the first line, the user name from your FreeBSD system on the second line, and its password on the third line. Click <code>OK</code> to go to the desktop.</p></blockquote><h4 id="i18n-this-user-is-using-sh-as-a-shell" tabindex="-1"><a class="header-anchor" href="#i18n-this-user-is-using-sh-as-a-shell" aria-hidden="true">#</a> i18n (this user is using sh as a shell).</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#### set environment variables here if you want
export LANG=zh_CN.UTF-8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="using-freebsd-to-remote-other-machines" tabindex="-1"><a class="header-anchor" href="#using-freebsd-to-remote-other-machines" aria-hidden="true">#</a> Using FreeBSD to remote other machines</h3><p>Installation command.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># pkg install -y rdesktop 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>However, rdesktop will not generate a menu on the system after installation, so enter the command in the terminal.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># rdesktop windows device ip 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The first time you log in to the device you will be prompted for security, type <code>yes</code>, enter and the remote desktop window will pop up.</p><p><img src="`+n+'" alt=""></p><p><img src="'+a+`" alt=""></p><h2 id="anydesk" tabindex="-1"><a class="header-anchor" href="#anydesk" aria-hidden="true">#</a> anydesk</h2><p>By using anydesk you can remotely assist with.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cd /usr/ports/deskutils/anydesk/ &amp;&amp; make install clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>That&#39;s it.</p>`,46),r=[o];function c(l,m){return t(),s("div",null,r)}var u=e(d,[["render",c],["__file","4.10-remote-desktop-management.html.vue"]]);export{u as default};