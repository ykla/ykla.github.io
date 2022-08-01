import{_ as a,r as n,o as s,c as i,a as t,b as d,e as r,d as e}from"./app.eb802b87.js";const l={},c=r('<h1 id="_2-1-comparison-of-three-virtual-machines-and-freebsd-versions" tabindex="-1"><a class="header-anchor" href="#_2-1-comparison-of-three-virtual-machines-and-freebsd-versions" aria-hidden="true">#</a> 2.1 Comparison of Three Virtual Machines and FreeBSD Versions</h1><h2 id="freebsd-version-comparison" tabindex="-1"><a class="header-anchor" href="#freebsd-version-comparison" aria-hidden="true">#</a> FreeBSD Version Comparison</h2><p>The following versions of FreeBSD are known: rc, beta, release, current, and stable.</p><p>release is absolutely stable, while stable and current are both development branches and are less stable.</p><p>current will be pushed to stable when it is relatively stable, but there is no guarantee that stable is free of major bugs, just that it is ABI-compatible.</p><h3 id="freebsd-version-selection" tabindex="-1"><a class="header-anchor" href="#freebsd-version-selection" aria-hidden="true">#</a> FreeBSD Version Selection</h3><p>where rc and beta are both beta releases.</p><p>For everyday use, you should choose the release version, and when there are multiple releases, you should choose the latest one.</p><p>If the hardware is relatively new or you need to test the ax200 NIC, you should choose the current version, which is a rolling development release.</p>',9),h=e("Note: Only rc, beta and release can update the system using the freebsd-update command ("),p={href:"https://www.freebsd.org/platforms/",target:"_blank",rel:"noopener noreferrer"},u=e("and is a first-level architecture"),y=e("), the rest of the systems need to update the system by source code compilation."),m=r('<h2 id="comparison-of-three-types-of-virtual-machines" tabindex="-1"><a class="header-anchor" href="#comparison-of-three-types-of-virtual-machines" aria-hidden="true">#</a> Comparison of three types of virtual machines</h2><h3 id="virtual-box-vs-vmware-workstation-pro" tabindex="-1"><a class="header-anchor" href="#virtual-box-vs-vmware-workstation-pro" aria-hidden="true">#</a> Virtual Box vs. VMware Workstation Pro</h3><p>There are two types of virtual machines commonly used on personal computers, one is Virtual Box and the other is VMware Workstation Pro.</p><p>In general, VMware Workstation Pro (hereafter VM) is recommended for Windows systems and Virtual Box (hereafter VB) is recommended for Linux systems.</p><p>VM is closed-source and provided by a commercial company, which requires a fee and is available as a free trial, and there is also a free version of <em>VMware Workstation Player</em>; VB is an open-source product of Oracle, which is free.</p><p>Personally, VM is less buggy than VB in practice: VB has some odd problems (see the VB section for details), and it takes time to troubleshoot them. But in order to give you more freedom, we provide you with the installation and use of both VMs.</p><h3 id="hyper-v" tabindex="-1"><a class="header-anchor" href="#hyper-v" aria-hidden="true">#</a> Hyper-V</h3><p>Hyper-V is a virtual machine developed for Windows, and is divided into <code>Gen 1</code> and <code>Gen 2</code>.</p><p>The difference between <code>Gen 1</code> and <code>Gen 2</code> is as follows.</p><table><thead><tr><th style="text-align:center;">Hyper-V generation</th><th style="text-align:center;">disk</th><th style="text-align:center;">boot boot</th></tr></thead><tbody><tr><td style="text-align:center;">Gen 1</td><td style="text-align:center;">IDE + SCSI</td><td style="text-align:center;">MBR only</td></tr><tr><td style="text-align:center;">Gen 2</td><td style="text-align:center;">SCSI only</td><td style="text-align:center;">UEFI + Secure Boot support + PXE support</td></tr></tbody></table><p><strong>FreeBSD currently (as of 2022-1-28) does not yet run a mouse or keyboard properly on Hyper-V, as the mouse has no drivers. It is not recommended, and the support is listed below. In short, either the mouse doesn&#39;t work or the keyboard doesn&#39;t work, but of course if you say you use VNC then there&#39;s nothing to say.</strong></p><p>The system was quickly created for <code>Gen 2</code>.</p><table><thead><tr><th style="text-align:center;">Hyper-V Generations</th><th style="text-align:center;">FreeBSD Versions</th><th style="text-align:center;">Mouse</th><th style="text-align:center;">Keyboard</th><th style="text-align:center;">Remarks</th></tr></thead><tbody><tr><td style="text-align:center;">Gen 1</td><td style="text-align:center;">13.0</td><td style="text-align:center;">Supported</td><td style="text-align:center;">Unsupported</td><td style="text-align:center;">/</td></tr><tr><td style="text-align:center;">Gen 2</td><td style="text-align:center;">13.0</td><td style="text-align:center;">not supported</td><td style="text-align:center;">supported</td><td style="text-align:center;">need to change parameter <code>sysctl kern.evdev.rcpt_mask=6</code></td></tr><tr><td style="text-align:center;">Gen 2</td><td style="text-align:center;">14.0-2022-1-27</td><td style="text-align:center;">not supported</td><td style="text-align:center;">supported</td><td style="text-align:center;"></td></tr></tbody></table><h3 id="virtual-machines-paravirtualized-with-virtio-technology" tabindex="-1"><a class="header-anchor" href="#virtual-machines-paravirtualized-with-virtio-technology" aria-hidden="true">#</a> Virtual machines paravirtualized with virtio technology</h3><blockquote><p><strong>Note: The following is for reference only and is subject to testing.</strong></p></blockquote><p>According to feedback, installing or upgrading FreeBSD on semi-virtualized platforms such as VMware EXSI will encounter failures (e.g. Aliyun virtio-blk driver will have problems), you need to press <code>ESC</code> at boot, then type <code>set kern.maxphys=65536</code> to enter, then type <code>boot</code> to boot normally. After installation, you need to add <code>kern.maxphys=65536</code> to <code>/boot/loader.conf</code> to avoid repeating the operation every time you turn on the computer. After Aliyun upgrade is finished, you may get stuck in the boot screen due to such problem, so you need to reboot and enter VNC to do the above operation again.</p><p>Reference link: https://wiki.freebsd.org/SystemTuning</p>',17);function b(f,g){const o=n("ExternalLinkIcon");return s(),i("div",null,[c,t("p",null,[h,t("a",p,[u,d(o)]),y]),m])}var x=a(l,[["render",b],["__file","2.1-comparison-of-three-virtual-machines-and-freebsd-versions.html.vue"]]);export{x as default};