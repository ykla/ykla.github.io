import{_ as r,r as n,o as l,c as i,a as e,b as o,e as s,d as t}from"./app.4897455b.js";var d="/assets/install1.a43a2543.png",c="/assets/install2.8604a5ee.png",p="/assets/install3.f714e8f9.png",g="/assets/install4.7726c06d.png",m="/assets/install5.665768a5.png",h="/assets/install6.87f58055.png",u="/assets/install7.6c2bce06.png",b="/assets/install8.45a61cf2.png",_="/assets/install9.f0bb74e8.png",y="/assets/install10.3400721b.png",f="/assets/install11.2a75aff1.png",v="/assets/install12.621fc659.png",x="/assets/install13.61045078.png",w="/assets/install14.6e520f9d.png",S="/assets/install15.21b49f94.png",k="/assets/install16.9b5030e4.png",I="/assets/install17.6234e318.png",N="/assets/install18.c098bbd8.png",T="/assets/install19.7c01edc0.png",D="/assets/install20.745b00bc.png",E="/assets/install21.dfb2d890.png",F="/assets/install22.64c829f7.png",B="/assets/install23.ae550e28.png",P="/assets/install24.bb245e73.png",z="/assets/install25.807da7b1.png",C="/assets/install26.03d0b172.png",A="/assets/install27.8ee94ef0.png",V="/assets/install28.f1b687f9.png",M="/assets/install29.45127c9f.png";const R={},G=s('<h1 id="illustrated-installation" tabindex="-1"><a class="header-anchor" href="#illustrated-installation" aria-hidden="true">#</a> Illustrated Installation</h1><p><img src="'+d+'" alt=""></p><p>It is recommended to wait ten seconds to enter, or you can enter directly.</p><table><thead><tr><th style="text-align:center;">Options</th><th style="text-align:center;">Explanation</th></tr></thead><tbody><tr><td style="text-align:center;">ACPI Support</td><td style="text-align:center;">ACPI Support. There are many tutorials that say to turn it off if you have problems, but that is actually nonsense. If you turn it off, you will have more problems.</td></tr><tr><td style="text-align:center;">Safe Mode</td><td style="text-align:center;">Safe Mode</td></tr><tr><td style="text-align:center;">Single User</td><td style="text-align:center;">Single user mode, to retrieve the root password or repair the disk will be used</td></tr><tr><td style="text-align:center;">Verbose</td><td style="text-align:center;">Verbose mode, show more output</td></tr></tbody></table><p><img src="'+c+'" alt=""></p><p>Select <code>install</code> and press the <code>enter</code> key to install.</p><p><img src="'+p+'" alt=""></p><p>Here is the setup keyboard, just enter directly.</p><p><img src="'+g+'" alt=""></p><p>This is to set the hostname.</p><p><img src="'+m+'" alt=""></p><p>Recommended: <code>src</code> and <code>lib32</code> only. Some graphics card drivers or other programs need <code>src</code>, after testing <code>lib32</code> the day after the installation is invalid. It is not recommended to select <code>ports</code>, because even if <code>ports</code> is selected, it will not be installed, it will still be empty.</p><table><thead><tr><th style="text-align:center;">options</th><th style="text-align:center;">explanation</th></tr></thead><tbody><tr><td style="text-align:center;">base-dbg</td><td style="text-align:center;">activates the base tool for debugging symbols, such as cat, ls, etc.</td></tr><tr><td style="text-align:center;">kernel-dbg</td><td style="text-align:center;">Activate kernel and module debug symbols</td></tr><tr><td style="text-align:center;">lib32-dbg</td><td style="text-align:center;">Compatibility library for running 32-bit applications on 64-bit versions of FreeBSD with debug symbols activated</td></tr><tr><td style="text-align:center;">lib32</td><td style="text-align:center;">Compatibility libraries for running 32-bit applications on 64-bit versions of FreeBSD</td></tr><tr><td style="text-align:center;">ports</td><td style="text-align:center;">ports</td></tr><tr><td style="text-align:center;">src</td><td style="text-align:center;">system source code</td></tr><tr><td style="text-align:center;">tests</td><td style="text-align:center;">test tools</td></tr></tbody></table><p><img src="'+h+'" alt=""></p><p>Recommended: File partitioning is explained in Chapter 6. It is recommended to choose auto ZFS/UFS, in general you should choose UFS if you have less than 8GB of RAM, and ZFS if you have 8G of RAM or more. allow manual partitioning to decompress txz files for customization.</p><p><img src="'+u+'" alt=""></p><p>Modern computers should choose GPT+UEFI. older computers (e.g. before 2013) should choose the option to keep it consistent with the picture (GPT(BIOS)).</p><p><img src="'+b+'" alt=""></p><p><img src="'+_+'" alt=""></p><p><img src="'+y+'" alt=""></p><p><img src="'+f+'" alt=""></p><p>Enter the root password here; it will not be displayed on the screen and will be required to be repeated twice to confirm consistency. Password strength is not required by default.</p><p><img src="'+v+'" alt=""></p><p><img src="'+x+'" alt=""></p><p><img src="'+w+'" alt=""></p><p><img src="'+S+'" alt=""></p><p><img src="'+k+'" alt=""></p><p><img src="'+I+'" alt=""></p><p>Just keep the DHCP-acquired DNS, or you can use another DNS.</p><p><img src="'+N+'" alt=""></p><p><img src="'+T+'" alt=""></p><p><img src="'+D+'" alt=""></p><p><img src="'+E+'" alt=""></p><p><img src="'+F+'" alt=""></p><p><img src="'+B+'" alt=""></p><p><img src="'+P+'" alt=""></p>',36),U=t("It is not recommended to choose "),q=e("code",null,"local_unbound",-1),H=t(", it will affect DNS, visit "),L={href:"https://bugs.freebsd.org/bugzilla/show_bug.cgi?id=262290",target:"_blank",rel:"noopener noreferrer"},O=t("https://bugs.freebsd.org/bugzilla/show_bug.cgi?id=262290"),Z=t("."),j=s('<p>The virtual machine does not need to select <code>powerd</code>.</p><table><thead><tr><th style="text-align:center;">options</th><th style="text-align:center;">explanation</th></tr></thead><tbody><tr><td style="text-align:center;">local_unbound</td><td style="text-align:center;">Enables DNS local unbinding. This is the base system preconfigured unbound for local cache forwarding resolver use only. Note: If enabled, your system will not be networked correctly and you will need to configure DNS manually.</td></tr><tr><td style="text-align:center;">sshd</td><td style="text-align:center;">Turn on the ssh service</td></tr><tr><td style="text-align:center;">moused</td><td style="text-align:center;">Show mouse in tty interface</td></tr><tr><td style="text-align:center;">ntpdate</td><td style="text-align:center;">Enable automatic clock synchronization at boot time</td></tr><tr><td style="text-align:center;">ntpd</td><td style="text-align:center;">The Network Time Protocol (NTP) daemon for automatic clock synchronization</td></tr><tr><td style="text-align:center;">powerd</td><td style="text-align:center;">power management</td></tr><tr><td style="text-align:center;">dumpdev</td><td style="text-align:center;">Enable crash dumps for debugging the system</td></tr></tbody></table><p><img src="'+z+'" alt=""></p><p>Recommended choice: Here is the security enhancement choice, you should choose <code>disable_sendmail</code>, if you do not disable this service will make you stuck for a few minutes every time you boot up, and this service itself is not useful, it is for sending emails.</p><p><img src="'+C+'" alt=""></p><p>This menu option is used to create a normal user. root daredevil can be ignored. Note that it is best to add the user to the wheel group and leave the other parameters as they are by default. As of FreeBSD 14 and later, all user shells have been standardized to sh.</p><p><img src="'+A+'" alt=""></p><p><img src="'+V+'" alt=""></p><p><img src="'+M+'" alt=""></p>',9);function J(K,Q){const a=n("ExternalLinkIcon");return l(),i("div",null,[G,e("p",null,[U,q,H,e("a",L,[O,o(a)]),Z]),j])}var X=r(R,[["render",J],["__file","2.0-illustrated-installation.html.vue"]]);export{X as default};
