import{_ as e,o as t,c as o,e as s}from"./app.533a64b2.js";const a={},i=s('<h1 id="_4-0-overview" tabindex="-1"><a class="header-anchor" href="#_4-0-overview" aria-hidden="true">#</a> 4.0 Overview</h1><blockquote><p>All FreeBSD installation media do not include a graphical interface by default (DVD&#39;s do not work) and need to be installed manually. <strong>Please do not use <code>sysutils/desktop-installer</code>, it will cause unnecessary errors and problems.</strong></p><p>It is an unattainable luxury to insist that FreeBSD must exhibit the desktop power of Linux or even Windows; the official FreeBSD slogan is <code>The power to serve</code>.</p></blockquote><p>This chapter is not intended to be a guide to installing all desktops, but rather to provide as many options as possible.</p><p>The basic steps to install a desktop are: \u2460 Install the graphics driver -&gt; \u2461 Install Xorg -&gt; \u2462 Install KDE5/Gnome/XFCE/MATE -&gt; \u2463 Install the display manager sddm/lightdm/slim -&gt; \u2464 Install the input method and other software</p><p>Wayland is a replacement for xorg, but the number of desktops that support Wayland on BSD is 0 at the moment.</p><p>Gnome can omit step 4 because its display manager gdm is automatically installed in step 2.</p><p>The recommended combination of display managers is</p><p>KDE5 + sddm</p><p>Xfce/Mate + lightdm</p><p>Slim is not recommended as the author stopped developing it in 2013, and it can cause some strange bugs (e.g. fcitx5 doesn&#39;t work, dbus doesn&#39;t load).</p><p>The input method framework is currently recommended to use fcitx (for KDE 5 desktops), ibus (for other GTK-based desktops like gnome, xfce, mate......). Do not use scim, the author ran away long time ago (about 16 years ago).</p><blockquote><p>The environment variables are configured differently for different SHELLs, with FreeBSD using <code>csh</code> by default before 14, and <code>sh</code> for 14 and later. Also, different desktops load environment variables in different ways, so the configuration method is different for different desktops and different SHELLs, see specific desktops for details.</p></blockquote><blockquote><p>Story</p><p>sddm gdm lightdm slim messing around with the system.</p><p>sddm:behind me is kde</p><p>gdm:behind me is gnome</p><p>lightdm:behind me can be any</p><p>slim:What should I do? So panic, dive too long, the administrator is going to kick me.</p><p>system:Hopefully you guys are raising compulsions on my turf?</p></blockquote>',13),n=[i];function d(r,l){return t(),o("div",null,n)}var c=e(a,[["render",d],["__file","4.0-overview.html.vue"]]);export{c as default};