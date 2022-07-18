import{_ as e,o as i,c as d,e as n}from"./app.eddf22e9.js";const t={},s=n(`<h1 id="_14-3-usb-rndis-usb-network-sharing" tabindex="-1"><a class="header-anchor" href="#_14-3-usb-rndis-usb-network-sharing" aria-hidden="true">#</a> 14.3 USB RNDIS (USB Network Sharing)</h1><p>This tutorial was tested on a Xiaomi phone and theoretically supports both Android and iOS.</p><p>First load the kernel module.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># kldload if_urndis # Android Android 
# kldload if_ipheth #Apple iOS
# kldload if_cdce # other devices
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Boot time boot load, write to: <code>/boot/loader.conf</code>.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>if_urndis_load=&quot;YES&quot;
if_cdce_load=&quot;YES&quot;
if_ipheth_load=&quot;YES&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),a=[s];function o(r,l){return i(),d("div",null,a)}var u=e(t,[["render",o],["__file","14.3-usb-rndis.html.vue"]]);export{u as default};
