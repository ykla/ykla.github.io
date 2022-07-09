import{_ as s,r as a,o as r,c as o,a as e,b as t,e as l,d as i}from"./app.e32577e2.js";const h={},c=l(`<h1 id="_5-6-installing-kingsoft-wps" tabindex="-1"><a class="header-anchor" href="#_5-6-installing-kingsoft-wps" aria-hidden="true">#</a> 5.6 Installing Kingsoft WPS</h1><p>Kingsoft WPS provides two versions, one is the international version and the other is the Chinese version. ** The international version has no Chinese Language support. **</p><p>For both, you need to install the Linux compatibility layer first, see the rest of the book for font issues.</p><h2 id="international-version" tabindex="-1"><a class="header-anchor" href="#international-version" aria-hidden="true">#</a> International version</h2><p>linux-wps-office</p><p>Please note: The server of the international version is outside the country, the download speed is very slow in the country, please refer to chapter 7 section 1</p><p>Installation, currently you can only install it via ports</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cd /usr/ports/editors/linux-wps-office/ &amp;&amp; make install clean # add BATCH=yes if you want to default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="chinese-version" tabindex="-1"><a class="header-anchor" href="#chinese-version" aria-hidden="true">#</a> Chinese version</h2><p>linux-wps-office-zh_CN</p><p>Installation, currently only available through ports.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cd /usr/ports/chinese/linux-wps-office-zh_CN/ &amp;&amp; make install clean # add BATCH=yes if you want the default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a> Troubleshooting</h2><ul><li>WPS may not run under KDE5.</li></ul><p>Because the WPS startup file calls the bash shell, it will run normally after installing bash.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># pkg install bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>fcitx 5 does not work with WPS</li></ul><p>This is a known bug in WPS: \`\` # pkg install bash</p><p>Reference.</p>`,19),d={href:"https://bbs.archlinuxcn.org/viewtopic.php?id=10984",target:"_blank",rel:"noopener noreferrer"},p=i("https://bbs.archlinuxcn.org/viewtopic.php?id=10984"),u={href:"https://github.com/fcitx/fcitx5/issues/83",target:"_blank",rel:"noopener noreferrer"},f=i("https://github.com/fcitx/fcitx5/issues/83"),v={href:"https://plumz.me/archives/12331/",target:"_blank",rel:"noopener noreferrer"},g=i("https://plumz.me/archives/12331/"),_=e("p",null,"Translated with www.DeepL.com/Translator (free version)",-1);function m(b,x){const n=a("ExternalLinkIcon");return r(),o("div",null,[c,e("p",null,[e("a",d,[p,t(n)])]),e("p",null,[e("a",u,[f,t(n)])]),e("p",null,[e("a",v,[g,t(n)])]),_])}var k=s(h,[["render",m],["__file","5.6-installing-kingsoft-wps.html.vue"]]);export{k as default};
