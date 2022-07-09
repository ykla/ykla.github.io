import{_ as s,r as n,o as i,c as l,a as e,b as r,d as t,e as a}from"./app.4897455b.js";const d={},c=e("h2",{id:"_2-3-freebsd-13-0-installation-based-on-vmware-workstation-pro-16",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-3-freebsd-13-0-installation-based-on-vmware-workstation-pro-16","aria-hidden":"true"},"#"),t(" 2.3 FreeBSD 13.0 Installation - Based on Vmware Workstation Pro 16")],-1),h=e("h2",{id:"video-tutorials-4-sections-in-total-for-the-full-version-go-to-bilibili",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#video-tutorials-4-sections-in-total-for-the-full-version-go-to-bilibili","aria-hidden":"true"},"#"),t(" Video tutorials (4 sections in total, for the full version go to bilibili)")],-1),u=e("p",null,"https://www.bilibili.com/video/BV14i4y137mh",-1),p=t("Release Official Mirror Download: "),m={href:"https://download.freebsd.org/ftp/releases/amd64/amd64/ISO-IMAGES/13.0/FreeBSD-13.0-RELEASE-amd64-disc1.iso",target:"_blank",rel:"noopener noreferrer"},v=t("https://download.freebsd.org/ftp/releases/amd64/amd64/ISO-IMAGES/13.0/FreeBSD-13.0-RELEASE-amd64-disc1.iso"),g=e("p",null,"Current beta version (professional users only, for this version, can not start, environment variable errors are normal things!)",-1),b=t("Older versions of FreeBSD are available for download at: "),_={href:"http://ftp-archive.freebsd.org/pub/FreeBSD-Archive/old-releases/amd64/ISO-IMAGES/",target:"_blank",rel:"noopener noreferrer"},f=t("http://ftp-archive.freebsd.org/pub/FreeBSD-Archive/old-releases/amd64/ISO-IMAGES/"),w=e("h2",{id:"vmware-workstation-pro-download",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vmware-workstation-pro-download","aria-hidden":"true"},"#"),t(" VMware Workstation Pro Download")],-1),k=t("Vmware 16.2.2 build-19200509 Currently unable to zoom screen, bugs have been reported: "),x={href:"https://gitlab.freedesktop.org/xorg/app/appres/-/issues/1",target:"_blank",rel:"noopener noreferrer"},S=t("https://gitlab.freedesktop.org/xorg/app/appres/-/issues/1"),y=t(", "),E={href:"https://bugs.freebsd.org/bugzilla/show_bug.cgi?id=262118",target:"_blank",rel:"noopener noreferrer"},q=t("https://bugs.freebsd.org/bugzilla/show_bug.cgi?id=262118"),V=t(" Normal version can be downloaded from the QQ group 905149943 group file VMware Workstation Pro is a free trial download. VMware Workstation Pro is a free trial download, please do not download from third-party sites, otherwise there will be some miserable philosophical consequences. Click Download NOW and you're done. The left side is for Windows and the right side is for Linux. The software is fee-based, but the license code is not difficult to obtain."),M={href:"https://www.vmware.com/products/workstation-pro/workstation-pro-evaluation.html",target:"_blank",rel:"noopener noreferrer"},I=t("https://www.vmware.com/products/workstation-pro/workstation-pro-evaluation.html"),B=e("h3",{id:"vmware-workstation-16-player-download",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vmware-workstation-16-player-download","aria-hidden":"true"},"#"),t(" VMware Workstation 16 Player Download")],-1),D=e("p",null,"VMware Workstation 16 Player is free for personal use, you can also choose this version.",-1),N={href:"https://www.vmware.com/products/workstation-player/workstation-player-evaluation.html",target:"_blank",rel:"noopener noreferrer"},A=t("https://www.vmware.com/products/workstation-player/workstation-player-evaluation.html"),P=a('<h2 id="network-setup" tabindex="-1"><a class="header-anchor" href="#network-setup" aria-hidden="true">#</a> Network Setup</h2><p>Please use NAT mode, if you can&#39;t interoperate with the host (physical machine), please open VMware Edit - Virtual Network Manager and remove the first item &quot;Bridging&quot;. After removing it, restart the virtual machine and it should work.</p><p>If there is no network, please set the DNS to <code>8.8.8.8</code>. Please visit section 4 of this chapter.</p><h2 id="graphics-card-drivers-and-virtual-machine-enhancement-tools" tabindex="-1"><a class="header-anchor" href="#graphics-card-drivers-and-virtual-machine-enhancement-tools" aria-hidden="true">#</a> Graphics card drivers and virtual machine enhancement tools</h2><h3 id="graphics-drivers" tabindex="-1"><a class="header-anchor" href="#graphics-drivers" aria-hidden="true">#</a> Graphics drivers</h3>',5),W=t("Vmware 16.2.2 build-19200509 currently does not scale the screen, bugs have been reported: "),F={href:"https://gitlab.freedesktop.org/xorg/app/appres/-/issues/1",target:"_blank",rel:"noopener noreferrer"},O=t("https://gitlab.freedesktop.org/xorg/app/appres/-/issues/1"),Y=t(", "),G={href:"https://bugs.freebsd.org/bugzilla/show_bug.cgi?id=262118",target:"_blank",rel:"noopener noreferrer"},T=t("https://bugs.freebsd.org/bugzilla/show_bug.cgi?id=262118"),z=t(" Normal version can be downloaded from the group file"),L=a(`<p>VMware auto-scaling screen please install graphics card driver, i.e.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># pkg install xf86-video-vmware
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>You also need to install this driver under wayland.</p></blockquote><blockquote><p>If the screen is not displayed properly (too large), please try: Edit the virtual machine settings --&gt; Hardware, Devices --&gt; Monitor --&gt; Monitor, Specify monitor settings --&gt; Maximum resolution for any monitor, set it to the host&#39;s resolution or slightly lower than the host&#39;s resolution.</p></blockquote><h3 id="virtual-machine-enhancement-tool" tabindex="-1"><a class="header-anchor" href="#virtual-machine-enhancement-tool" aria-hidden="true">#</a> Virtual Machine Enhancement Tool</h3><p>If there is no desktop.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># pkg install open-vm-tools-nox11
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If there is a desktop</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># pkg install open-vm-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Specific configuration</p><p>Add the following lines to <code>/etc/rc.conf</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vmware_guest_vmblock_enable=&quot;YES&quot;
vmware_guest_vmhgfs_enable=&quot;YES&quot;
vmware_guest_vmmemctl_enable=&quot;YES&quot;
vmware_guest_vmxnet_enable=&quot;YES&quot; 
vmware_guestd_enable=&quot;YES&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Edit <code>/boot/loader.conf</code></p><p>Write in</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>fusefs_load=&quot;YES&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="shared-folder" tabindex="-1"><a class="header-anchor" href="#shared-folder" aria-hidden="true">#</a> Shared folder</h3><p>Please install the virtual machine enhancement tool first.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># mount -t .host:/ /mnt/hgfs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>View the shared folder</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ls /mnt/hgfs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Note: Due to a bug, FreeBSD 11/12 may not boot in VmMare&#39;s UEFI environment. Tested 13.0 boots normally.</strong></p>`,21);function C(R,Q){const o=n("ExternalLinkIcon");return i(),l("div",null,[c,h,u,e("p",null,[p,e("a",m,[v,r(o)])]),g,e("p",null,[b,e("a",_,[f,r(o)])]),w,e("blockquote",null,[e("p",null,[e("strong",null,[k,e("a",x,[S,r(o)]),y,e("a",E,[q,r(o)])]),V])]),e("p",null,[e("a",M,[I,r(o)])]),B,D,e("p",null,[e("a",N,[A,r(o)])]),P,e("blockquote",null,[e("p",null,[e("strong",null,[W,e("a",F,[O,r(o)]),Y,e("a",G,[T,r(o)])]),z])]),L])}var U=s(d,[["render",C],["__file","2.3-freebsd-13.0-installation-based-on-vmware-workstation-pro-16.html.vue"]]);export{U as default};
