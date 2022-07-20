import{_ as e,o as i,c as n,e as t}from"./app.de72595a.js";const a={},r=t(`<h1 id="_2-12-printer-installation" tabindex="-1"><a class="header-anchor" href="#_2-12-printer-installation" aria-hidden="true">#</a> 2.12 Printer Installation</h1><p>The environment used in this process is <code>KDE5</code> desktop system and <code>HP LaserJet Pro MFP M126nw</code> multifunction laser printer (if other models of HP printers need to be added to the printer can find the corresponding model of the driver can be used), and has been connected to the local area network to achieve network printing.</p><h2 id="install-cups-common-unix-printing-system" tabindex="-1"><a class="header-anchor" href="#install-cups-common-unix-printing-system" aria-hidden="true">#</a> Install CUPS (Common Unix Printing System)</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>## pkg install cups
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>or</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cd /usr/ports/print/cups
# make install clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Please check <code>x11</code> in the interface, this option generates an application to add and configure printers in the kde 5 desktop system.</p><h2 id="add-services" tabindex="-1"><a class="header-anchor" href="#add-services" aria-hidden="true">#</a> add services</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># sysrc cupsd_enable=&quot;YES&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>When finished, start the cups service and execute the following command</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># service cupsd restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="install-the-printer-driver" tabindex="-1"><a class="header-anchor" href="#install-the-printer-driver" aria-hidden="true">#</a> Install the printer driver</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># pkg install hplip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="add-a-printer" tabindex="-1"><a class="header-anchor" href="#add-a-printer" aria-hidden="true">#</a> Add a printer</h2><p>Type <code>http://localhost:631</code> into your browser, which is the administration page for this printer</p><p>Click <code>Administration</code> in the top menu to add a printer</p><p>Or add it in kde 5 System Settings-&gt;Printers</p>`,17),d=[r];function s(l,c){return i(),n("div",null,d)}var h=e(a,[["render",s],["__file","2.12-installation-of-the-printer.html.vue"]]);export{h as default};