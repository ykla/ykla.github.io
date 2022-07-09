import{_ as s,r,o as a,c as o,a as e,b as n,d as t,e as l}from"./app.4897455b.js";const d={},u=e("h1",{id:"_5-5-linux-compatibility-layer",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_5-5-linux-compatibility-layer","aria-hidden":"true"},"#"),t(" 5.5 Linux Compatibility Layer")],-1),c=e("p",null,[e("strong",null,"Note: A common misconception is to treat the Linux compatibility layer of FreeBSD as Wine, believing that this will slow down the software. The reality is that not only will it not be slower, but some software will run faster and more efficiently than it would in Linux.")],-1),m=e("h2",{id:"system-self-contained",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#system-self-contained","aria-hidden":"true"},"#"),t(" System self-contained.")],-1),b=e("p",null,"The following references",-1),h={href:"https://docs.freebsd.org/en/books/handbook/linuxemu/",target:"_blank",rel:"noopener noreferrer"},p=t("https://docs.freebsd.org/en/books/handbook/linuxemu/"),v=l(`<h3 id="turn-on-services" tabindex="-1"><a class="header-anchor" href="#turn-on-services" aria-hidden="true">#</a> Turn on services</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>## sysrc linux_enable=&quot;YES&quot;
# sysrc kld_list+=&quot;linux linux64&quot;
# kldload linux64
# pkg install emulators/linux-c7 dbus
# service linux start
# sysrc dbus_enable=&quot;YES&quot;
# service dbus start
# dbus-uuidgen &gt; /compat/linux/etc/machine-id
# reboot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="configure-fstab" tabindex="-1"><a class="header-anchor" href="#configure-fstab" aria-hidden="true">#</a> Configure fstab</h3><p>Write the following to <code>/etc/fstab</code>:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>linprocfs /compat/linux/proc linprocfs rw 0 0
linsysfs /compat/linux/sys linsysfs rw 0 0
tmpfs /compat/linux/dev/shm tmpfs rw,mode=1777 0 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Check the mount for reported errors.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># mount -al
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># reboot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="build-your-own-ubuntu-compatibility-layer" tabindex="-1"><a class="header-anchor" href="#build-your-own-ubuntu-compatibility-layer" aria-hidden="true">#</a> Build your own Ubuntu compatibility layer</h2><blockquote><p><strong>The following tutorials have only been tested with FreeBSD 13.0. The build is for Ubuntu 20.04 LTS (18.04 is also possible). The compatibility layer uses a technology that is actually Linux jail, not chroot.</strong></p></blockquote><p><strong>You need to configure the native CentOS compatibility layer as per the pkg/ports method first.</strong></p><p><strong>For more information on other systems, see <code>/usr/local/share/debootstrap/scripts</code>.</strong></p><p><strong>See <code>/usr/local/share/debootstrap/scripts/</code></strong> for more information on other systems</p><p>Write <code>nullfs_load=&quot;YES&quot;</code> to <code>/boot/loader.conf</code></p><h3 id="start-the-build" tabindex="-1"><a class="header-anchor" href="#start-the-build" aria-hidden="true">#</a> Start the build</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># pkg install debootstrap
# debootstrap focal /compat/ubuntu http://mirror.bjtu.edu.cn/ubuntu/
# reboot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mount-the-filesystem" tabindex="-1"><a class="header-anchor" href="#mount-the-filesystem" aria-hidden="true">#</a> Mount the filesystem</h3><p>Write the following line to <code>/etc/fstab</code>.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># Device Mountpoint FStype Options Dump Pass#
devfs /compat/ubuntu/dev devfs rw,late 0 0
tmpfs /compat/ubuntu/dev/shm tmpfs rw,late,size=1g,mode=1777 0 0
fdescfs /compat/ubuntu/dev/fd fdescfs rw,late,linrdlnk 0 0
linprocfs /compat/ubuntu/proc linprocfs rw,late 0 0
linsysfs /compat/ubuntu/sys linsysfs rw,late 0 0
/tmp /compat/ubuntu/tmp nullfs rw,late 0 0
/home /compat/ubuntu/home nullfs rw,late 0 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Check the mount for errors.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># mount -al
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If there is no home folder, please create a new one:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># mkdir /home
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="jail" tabindex="-1"><a class="header-anchor" href="#jail" aria-hidden="true">#</a> Jail</h3><p>First chroot into Ubuntu and remove the software that will report an error: <code># mkdir /home</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># chroot /compat/ubuntu /bin/bash 
# apt remove rsyslog # At this point you are already in the Ubuntu compatibility layer.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="change-source" tabindex="-1"><a class="header-anchor" href="#change-source" aria-hidden="true">#</a> Change source</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ee /compat/ubuntu/etc/apt/sources.list # This is a FreeBSD system! Because the Ubuntu compatibility layer does not have a text editor yet.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Writes to.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>deb http://mirror.bjtu.edu.cn/ubuntu/ focal main restricted universe multiverse
deb-src http://mirror.bjtu.edu.cn/ubuntu/ focal main restricted universe multiverse
deb http://mirror.bjtu.edu.cn/ubuntu/ focal-updates main restricted universe multiverse
deb-src http://mirror.bjtu.edu.cn/ubuntu/ focal-updates main restricted universe multiverse
deb http://mirror.bjtu.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
deb-src http://mirror.bjtu.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
deb http://mirror.bjtu.edu.cn/ubuntu/ focal-security main restricted universe multiverse
deb-src http://mirror.bjtu.edu.cn/ubuntu/ focal-security main restricted universe multiverse
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Go to the Ubuntu compatibility layer and start updating your system and installing common software:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># apt update &amp;&amp; apt upgrade &amp;&amp; apt install nano wget # At this point you are already in the Ubuntu compatibility layer.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="run-the-x11-software" tabindex="-1"><a class="header-anchor" href="#run-the-x11-software" aria-hidden="true">#</a> Run the X11 software</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># xhost +local: # At this point in FreeBSD!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="example-running-chrome" tabindex="-1"><a class="header-anchor" href="#example-running-chrome" aria-hidden="true">#</a> Example: running Chrome</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb # No proxy software needed, you can connect directly. At this point it is already in the Ubuntu compatibility layer.
# apt install . /google-chrome-stable_current_amd64.deb # This is already in the Ubuntu compatibility tier.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># /usr/bin/google-chrome-stable --no-sandbox --no-zygote --in-process-gpu # This is already in the Ubuntu compatibility tier.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,37),g=t("Systemd is not available, but you can use "),f=e("code",null,"server xxx start",-1),x=t(". visit "),y={href:"https://wiki.freebsd.org/LinuxApps",target:"_blank",rel:"noopener noreferrer"},_=t("https://wiki.freebsd.org/LinuxApps"),w=t(" for more software that can be run."),k=t("References "),q={href:"https://wiki.freebsd.org/LinuxJails",target:"_blank",rel:"noopener noreferrer"},S=t("https://wiki.freebsd.org/LinuxJails"),L=t(" ,"),j={href:"https://docs.freebsd.org/en/books/handbook/linuxemu/",target:"_blank",rel:"noopener noreferrer"},T=t("https://docs.freebsd.org/en/books/handbook/linuxemu/"),A=t("."),U=e("p",null,"A similar approach can be used to build Debian and Arch-compatible layers (tested to indicate that the kernel is too old, and older versions force upgrades that do not work). gentoo-compatible layers indicate a bash so file error, even if zsh is statically compiled.",-1),B=t("I have imported "),C={href:"https://github.com/zq1997/deepin-wine",target:"_blank",rel:"noopener noreferrer"},D=t("https://github.com/zq1997/deepin-wine"),E=t(" sources to install deepin-qq, deepin-wechat, etc., but they all show segment errors. All Wine programs do not run properly. If you can solve this problem, please raise an issue or pull.");function F(N,W){const i=r("ExternalLinkIcon");return a(),o("div",null,[u,c,m,b,e("p",null,[e("a",h,[p,n(i)])]),v,e("blockquote",null,[e("p",null,[g,f,x,e("a",y,[_,n(i)]),w]),e("p",null,[k,e("a",q,[S,n(i)]),L,e("a",j,[T,n(i)]),A]),U,e("p",null,[B,e("a",C,[D,n(i)]),E])])])}var I=s(d,[["render",F],["__file","5.5-linux-compatibility-layer.html.vue"]]);export{I as default};
