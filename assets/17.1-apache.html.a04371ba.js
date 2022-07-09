import{_ as e,o as a,c as i,e as s}from"./app.67d48eef.js";const n={},t=s(`<h1 id="_17-1-apache" tabindex="-1"><a class="header-anchor" href="#_17-1-apache" aria-hidden="true">#</a> 17.1 Apache</h1><h2 id="installing" tabindex="-1"><a class="header-anchor" href="#installing" aria-hidden="true">#</a> Installing</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cd /usr/ports/www/apache24/ &amp;&amp; make install clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>or</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># pkg install apache24
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="start-the-service" tabindex="-1"><a class="header-anchor" href="#start-the-service" aria-hidden="true">#</a> Start the service</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># add service bootable
# sysrc apache24_enable=YES

# Start the service
# service apache24 start

# Check the status
# service apache24 status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>By definition, the apache service has been started, so now you can open the URL <code>localhost</code> and take a look.</p>`,8),d=[t];function c(r,l){return a(),i("div",null,d)}var v=e(n,[["render",c],["__file","17.1-apache.html.vue"]]);export{v as default};
