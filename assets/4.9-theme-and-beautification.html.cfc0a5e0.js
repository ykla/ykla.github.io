import{_ as a,r as s,o as l,c,a as e,b as o,e as n,d as t}from"./app.f03e71e5.js";const h={},d=n('<h1 id="_4-9-themes-and-beautification" tabindex="-1"><a class="header-anchor" href="#_4-9-themes-and-beautification" aria-hidden="true">#</a> 4.9 Themes and Beautification</h1><p>After installing the desktop environment on <strong>FreeBSD</strong>, as with other <strong>class Unix</strong> systems, a simple and plain color palette is often what comes to mind. This unadorned setting may be overwhelming to new users for a while. The logic behind it is actually quite simple: firstly, it is for the stability of the system, and secondly, the beautification of the desktop system, which involves personal aesthetics, is difficult to be adjusted by the public. For the sake of system aesthetics, we learn to add <strong>Theme</strong> and <strong>Icons</strong> in this section.</p><h2 id="installing-packages" tabindex="-1"><a class="header-anchor" href="#installing-packages" aria-hidden="true">#</a> Installing packages</h2><ul><li>[ ] Beginner&#39;s task: Choose one theme and one icon from each of the following packages to install.</li></ul><p><strong>Note: This section only covers the <code>GTK</code> library of desktop themes, including the <code>Gnome</code>, <code>XFCE</code>, <code>MATE</code>, <code>Cinnamon</code> and <code>LXDE</code> desktop environments.</strong></p>',5),r=t("Only some of the icons and themes are included below, for more resources, please visit "),m={href:"https://www.freshports.org",target:"_blank",rel:"noopener noreferrer"},u=t("FreshPorts"),p=t("."),g=n('<h3 id="themes" tabindex="-1"><a class="header-anchor" href="#themes" aria-hidden="true">#</a> Themes</h3><ul><li>matcha theme: <code># pkg install matcha-gtk-themes</code></li><li>Qogir theme: <code># pkg install qogir-gtk-themes</code></li><li>Pop theme: <code># pkg install pop-gtk-themes</code></li><li>Flat theme: <code># pkg install flat-remix-gtk-themes</code></li><li>Numix theme: <code># pkg install numix-gtk-theme</code></li><li>Sierra theme: <code># pkg install sierra-gtk-themes</code></li><li>Yaru theme: <code># pkg install yaru-gtk-themes</code></li><li>Canta theme: <code># pkg install canta-gtk-themes</code></li></ul><h3 id="icons" tabindex="-1"><a class="header-anchor" href="#icons" aria-hidden="true">#</a> icons</h3><ul><li>papirus icon: <code># pkg install papirus-icon-theme</code></li><li>Qogir icon: <code># pkg install qogir-icon-themes</code></li><li>Pop icon: <code># pkg install pop-icon-theme</code></li><li>Flat icon: <code># pkg install flat-remix-icon-themes</code></li><li>Numix icons: <code># pkg install numix-icon-theme</code></li><li>Numix circle icons: <code># pkg install numix-icon-theme-circle</code></li><li>Yaru icon: <code># pkg install yaru-icon-theme</code></li><li>Canta icon: <code># pkg install canta-icon-theme</code></li></ul><h2 id="terminal-mode-installation" tabindex="-1"><a class="header-anchor" href="#terminal-mode-installation" aria-hidden="true">#</a> Terminal mode installation</h2><p><em>Hint: Users new to Unix may skip this section</em>.</p><ul><li>[ ] Advanced task: Install a theme and icons for KDE or Gnome that emulate the MacOS system style.</li><li>[x] Advance task 1: Install bash: <code># pkg install bash</code></li><li>[x] Advance task 2 install plank: <code># pkg install plank</code></li><li>[x] Pre-task 3 install git: <code># pkg install git</code></li></ul><h3 id="kde-theme-beautification" tabindex="-1"><a class="header-anchor" href="#kde-theme-beautification" aria-hidden="true">#</a> KDE theme beautification</h3>',8),_=t("We are going to install the "),f={href:"https://www.pling.com/p/1398840/",target:"_blank",rel:"noopener noreferrer"},k=t("WhiteSur"),b=t(" theme."),x=n('<ol><li>Download the theme source package: <code>git clone https://github.com/vinceliuice/WhiteSur-kde</code> 2.</li><li>Go to the theme package directory: <code>cd WhiteSur-kde</code> 3.</li><li>modify shebang: <code>ee install.sh</code>, modify the first line to <code>#! /usr/local/bin/bash</code>, then save it. 4.</li><li>Execute the installation: <code>bash install.sh</code></li></ol><h3 id="gnome-theme-beautification" tabindex="-1"><a class="header-anchor" href="#gnome-theme-beautification" aria-hidden="true">#</a> Gnome theme beautification</h3>',2),w=t("Again we are going to install the "),v={href:"https://www.pling.com/p/1403328/",target:"_blank",rel:"noopener noreferrer"},y=t("WhiteSur"),S=t(" theme."),T=n("<ol><li>Download the theme source package: <code>git clone https://github.com/vinceliuice/WhiteSur-gtk-theme</code> 2.</li><li>Go to the theme package directory: <code>cd WhiteSur-gtk-theme</code>. 3.</li><li>modify shebang: <code>ee install.sh</code>, modify the first line to <code>#! /usr/local/bin/bash</code>, then save it. 4.</li><li>Execute the installation: <code>bash install.sh</code></li></ol>",1),E={id:"icons-1",tabindex:"-1"},W=e("a",{class:"header-anchor",href:"#icons-1","aria-hidden":"true"},"#",-1),D=t(),B={href:"https://www.pling.com/p/1405756/",target:"_blank",rel:"noopener noreferrer"},N=t("icons"),A=n("<ol><li>Download the icon: <code>git clone https://github.com/vinceliuice/WhiteSur-icon-theme</code></li><li>enter the software directory: <code>cd WhiteSur-icon-theme</code> 3.</li><li>Modify shebang: <code>ee install.sh</code>, change the first line to <code>#! /usr/local/bin/bash</code>, then save it. 4.</li><li>Execute the installation: <code>bash install.sh</code></li></ol>",1),M={id:"cursor",tabindex:"-1"},P=e("a",{class:"header-anchor",href:"#cursor","aria-hidden":"true"},"#",-1),C=t(),F={href:"https://www.pling.com/p/1355701/",target:"_blank",rel:"noopener noreferrer"},G=t("cursor"),I=n('<ol><li>Download the cursor: <code>git clone https://github.com/vinceliuice/McMojave-cursors</code></li><li>enter the software directory: <code>cd McMojave-cursors</code> 3.</li><li>modify shebang: <code>ee install.sh</code>, modify the first line to <code>#! /usr/local/bin/bash</code>, then save it. 4.</li><li>Execute the installation: <code>bash install.sh</code></li></ol><h3 id="background-image" tabindex="-1"><a class="header-anchor" href="#background-image" aria-hidden="true">#</a> Background image</h3>',2),V={href:"https://github.com/vinceliuice/WhiteSur-kde/tree/master/wallpaper",target:"_blank",rel:"noopener noreferrer"},j=t("download address"),q=e("h3",{id:"post-class-exercise",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#post-class-exercise","aria-hidden":"true"},"#"),t(" Post-class exercise")],-1),K=t("Try to follow the steps below to install "),L={href:"https://www.gnome-look.org/p/1166289/",target:"_blank",rel:"noopener noreferrer"},U=t("Papirus icon"),O=t(" in the terminal:"),Q=n(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git clone https://github.com/PapirusDevelopmentTeam/papirus-icon-theme
cd papirus-icon-theme
. /install.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function X(Y,H){const i=s("ExternalLinkIcon");return l(),c("div",null,[d,e("p",null,[r,e("a",m,[u,o(i)]),p]),g,e("p",null,[_,e("a",f,[k,o(i)]),b]),x,e("p",null,[w,e("a",v,[y,o(i)]),S]),T,e("h3",E,[W,D,e("a",B,[N,o(i)])]),A,e("h3",M,[P,C,e("a",F,[G,o(i)])]),I,e("p",null,[e("a",V,[j,o(i)])]),q,e("p",null,[K,e("a",L,[U,o(i)]),O]),Q])}var J=a(h,[["render",X],["__file","4.9-theme-and-beautification.html.vue"]]);export{J as default};