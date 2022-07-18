import{_ as o,r as a,o as d,c as r,a as t,b as s,e as i,d as e}from"./app.3b75d2e9.js";var l="/assets/1.e01b8739.png",h="/assets/2.2ec25496.png";const c={},u=i('<h1 id="_2-4-tencent-cloud-lightweight-cloud-and-other-servers-dd-installing-freebsd" tabindex="-1"><a class="header-anchor" href="#_2-4-tencent-cloud-lightweight-cloud-and-other-servers-dd-installing-freebsd" aria-hidden="true">#</a> 2.4 Tencent Cloud Lightweight Cloud and other servers dd Installing FreeBSD</h1><blockquote><p><strong>Note: Although this article has nothing to do with dd, it is not recommended if you don&#39;t already know what <code>dd</code> is. This is all beyond your hands-on skills and knowledge base.</strong></p><p><strong>Also, for versions that are no longer supported by security, such as <code>9.2</code>, please refer to this article and work with the manual FreeBSD installation section.</strong></p></blockquote><h2 id="video-guideline" tabindex="-1"><a class="header-anchor" href="#video-guideline" aria-hidden="true">#</a> Video Guideline</h2><p>http://b23.tv/zcfHa4K</p><h2 id="text-guideline" tabindex="-1"><a class="header-anchor" href="#text-guideline" aria-hidden="true">#</a> Text Guideline</h2><p>Machines such as Tencent Cloud Lightweight and AliCloud do not have support for FreeBSD and can only be installed violently by special methods. <strong>Please be careful with data security, the following tutorials are dangerous and require you to have some hands-on skills.</strong></p>',6),m=e("He is a server panel without a FreeBSD image IDC, so you have to use a strange method to install it. Because the FreeBSD and Linux kernels are not common and the executables are not common, you cannot install them by chroot and then delete the source system. The installation is done by booting the FreeBSD system on a memory disk, i.e. "),p={href:"https://mfsbsd.vx.sk",target:"_blank",rel:"noopener noreferrer"},f=e("mfsBSD"),b=e(", and then formatting the hard disk to install the new system. mfsBSD is a FreeBSD system that is fully loaded into memory, similar to PE in Windows."),g=e("We needed to download the "),v={href:"https://mfsbsd.vx.sk/files/images/13/amd64/mfsbsd-se-13.0-RELEASE-amd64.img",target:"_blank",rel:"noopener noreferrer"},y=e("mfsBSD image in img format"),w=e(", and I didn't know how well the mfsBSD server was connected in China, so I just transferred the file first I didn't know how the mfsBSD server was connected in China, so I transferred the file to another file server in China first."),x=i(`<h3 id="why-can-t-i-dd-directly-error-demonstration-for-illustration-only-please-do-not-execute" tabindex="-1"><a class="header-anchor" href="#why-can-t-i-dd-directly-error-demonstration-for-illustration-only-please-do-not-execute" aria-hidden="true">#</a> Why can&#39;t I dd directly? (Error demonstration, for illustration only, please do not execute)</h3><p>I tried to dd the mfsBSD img directly to the hard disk in a normal Linux system, and after rebooting, the bootloader loaded normally, but the memory disk could not be mounted properly because the system had written to the hard disk again.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># wget https://mfsbsd.vx.sk/files/images/13/amd64/mfsbsd-se-13.0-RELEASE-amd64.img -O- | dd of=/dev/vda
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>|</code> here means pipeline, using the standard output of the previous command as the standard input of the next command. <code>-O-</code> means to download the file output to the standard output, while dd will automatically read the content from the standard input when no if is specified.</p><p><img src="`+l+'" alt=""></p><h3 id="the-real-mfsbsd-startup-method" tabindex="-1"><a class="header-anchor" href="#the-real-mfsbsd-startup-method" aria-hidden="true">#</a> The real mfsBSD startup method</h3><p>It is because of the problem just described, and the fact that FreeBSD is a different ecology than normal Linux, that we need to access a Linux memory disk first, and then write mfsBSD to the hard disk in a Linux running in memory.</p>',7),_=e("Just below the mfsBSD download location, there is "),k={href:"https://mfsbsd.vx.sk/files/iso/mfslinux/mfslinux-0.1.9-dd4a135.iso",target:"_blank",rel:"noopener noreferrer"},S=e("mfsLinux"),B=e(", which is the tool we can use. Since it is only in ISO format, it cannot be booted directly in the current environment, and since it says it is pure initrd, we will extract the initrd and kernel to boot it and put it on the hard disk to boot manually."),D=i(`<p>We know that in a normal Linux system, initrd is a miniature but complete Linux AGVDbNVutgwiep6615bjTJnQkScwWuUEMuU95NredRG5 initrd is loaded by the bootloader, and the script in initrd does the boot preparation and runs the the initialization process on the hard drive.</p><p>We first put the kernel and initrd files extracted from the ISO in the root folder, say qwq, and then reboot the machine into the GRUB command line interface (you can press <code>e</code> during the countdown to enter edit mode, delete all <code>linux</code> and <code>initrd</code> lines, and press <code>Ctrl X</code> to load them after writing) and manually boot and initrd (you can use the <code>Tab</code> key to complete the path).</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>linux (hd0,msdos1)/qwq/vmlinuz
initrd (hd0,msdos1)/qwq/initramfs.igz
boot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+h+`" alt=""></p><p>This special initrd does not load the local system after booting, but connects itself to the network and opens the ssh server. So we get a Linux system running in memory.</p><p>At this point the server should be able to be connected by ssh and the hard disk can be safely formatted.</p><p>The root password for mfsBSD and mfsLinux images is <code>mfsroot</code> by default</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cd /tmp
# wget https://mfsbsd.vx.sk/files/images/13/amd64/mfsbsd-se-13.0-RELEASE-amd64.img
# dd if=mfsbsd-se-13.0-RELEASE-amd64.img of=/dev/vda
# reboot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Hint: It is recommended to use the server&#39;s &quot;snapshot&quot; feature to backup the server here, in case the following tutorials are missed and delayed.</strong></p><h3 id="installing-freebsd" tabindex="-1"><a class="header-anchor" href="#installing-freebsd" aria-hidden="true">#</a> Installing FreeBSD</h3><p>Once the system has been initialized, you can ssh on, but there is one more step needed to install it properly (otherwise the installation wizard will report an error afterwards)</p><p>We also need to download the FreeBSD installation manifest file.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># mkdir -p /usr/freebsd-dist
# cd /usr/freebsd-dist
# fetch http://ftp.freebsd.org/pub/FreeBSD/releases/amd64/13.0-RELEASE/MANIFEST
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Finally, just run <code># bsdinstall</code> for a normal installation (preferably with automatic ufs partitioning). Please note that most servers, such as the Tencent Lightweight Cloud example in this article, do not support UEFI and still use the traditional BIOS; please also use ufs, zfs installation will cause errors.</p>`,14);function E(L,I){const n=a("ExternalLinkIcon");return d(),r("div",null,[u,t("p",null,[m,t("a",p,[f,s(n)]),b]),t("p",null,[g,t("a",v,[y,s(n)]),w]),x,t("p",null,[_,t("a",k,[S,s(n)]),B]),D])}var T=o(c,[["render",E],["__file","2.4-tencent-cloud-lightweight-cloud-and-other-servers-installation-freebsd.html.vue"]]);export{T as default};