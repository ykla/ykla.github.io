import{_ as a,r as n,o as s,c as o,a as e,b as r,e as l,d as i}from"./app.4897455b.js";var d="/assets/i3wm_preview.752b74bb.png";const c={},h=l(`<h1 id="_29-1-installing-i3wm" tabindex="-1"><a class="header-anchor" href="#_29-1-installing-i3wm" aria-hidden="true">#</a> 29.1 Installing i3wm</h1><h2 id="installing-i3wm" tabindex="-1"><a class="header-anchor" href="#installing-i3wm" aria-hidden="true">#</a> Installing i3wm</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># pkg install -y xorg i3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>or via ports\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cd /usr/ports/x11-wm/i3/
# make install clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ echo &quot;/usr/local/bin/i3&quot; &gt;&gt; /usr/home/your-name/.xinitrc
$ chown your-name /usr/home/your-name/.xinitrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="start" tabindex="-1"><a class="header-anchor" href="#start" aria-hidden="true">#</a> start</h2><p>Start i3 by <code>startx</code> \u3002</p><p><img src="`+d+'" alt=""></p><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>',11),m={href:"https://www.freebsd.org/cgi/man.cgi?query=i3&apropos=0&sektion=1&manpath=freebsd-ports&format=html",target:"_blank",rel:"noopener noreferrer"},u=i("i3 Reference"),p={href:"http://bottlenix.wikidot.com/installing-i3wm",target:"_blank",rel:"noopener noreferrer"},_=i("http://bottlenix.wikidot.com/installing-i3wm"),g={href:"https://unixsheikh.com/tutorials/how-to-setup-freebsd-with-a-riced-desktop-part-3-i3.html#xterm",target:"_blank",rel:"noopener noreferrer"},f=i("https://unixsheikh.com/tutorials/how-to-setup-freebsd-with-a-riced-desktop-part-3-i3.html#xterm"),b={href:"https://forums.freebsd.org/threads/how-to-install-i3.62305/",target:"_blank",rel:"noopener noreferrer"},x=i("https://forums.freebsd.org/threads/how-to-install-i3.62305/"),w={href:"https://www.freebsd.org/cgi/man.cgi?query=i3%5Capropos=0%5Csektion=1%5Cmanpath=freebsd-ports%5Cformat=html",target:"_blank",rel:"noopener noreferrer"},v=i("https://www.freebsd.org/cgi/man.cgi?query=i3\\apropos=0\\sektion=1\\manpath=freebsd-ports\\format=html");function k(y,C){const t=n("ExternalLinkIcon");return s(),o("div",null,[h,e("ul",null,[e("li",null,[e("a",m,[u,r(t)])]),e("li",null,[e("a",p,[_,r(t)])]),e("li",null,[e("a",g,[f,r(t)])]),e("li",null,[e("a",b,[x,r(t)])]),e("li",null,[e("a",w,[v,r(t)])])])])}var q=a(c,[["render",k],["__file","29.1-installing-i3wm.html.vue"]]);export{q as default};
