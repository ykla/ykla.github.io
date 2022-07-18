import{_ as e,o as a,c as n,e as i}from"./app.3b75d2e9.js";const d={},t=i(`<h1 id="_28-1-installation-and-configuration" tabindex="-1"><a class="header-anchor" href="#_28-1-installation-and-configuration" aria-hidden="true">#</a> 28.1 Installation and Configuration</h1><h2 id="change-source" tabindex="-1"><a class="header-anchor" href="#change-source" aria-hidden="true">#</a> Change source</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ee /usr/local/etc/pkg/repos/df-latest.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Find the domestic source, change <code>no</code> to <code>yes</code> and change the previous source to <code>no</code>.</p><h2 id="i18n" tabindex="-1"><a class="header-anchor" href="#i18n" aria-hidden="true">#</a> i18n</h2><p><code>/etc/csh.cshrc</code> Add:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>setenv LANG &quot;zh_CN.UTF-8&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Add to <code>/etc/profile</code> file:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>export LANG=zh_CN.UTF-8
export LC_ALL=&quot;en_US.ISO8859-1&quot;
export LANG=&quot;en_US.ISO8859-1&quot;
export LC_CTYPE=&quot;en_US.ISO8859-1&quot;
export LANG=zh_CN.eucCN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="intel-i915kms-graphics-card-support" tabindex="-1"><a class="header-anchor" href="#intel-i915kms-graphics-card-support" aria-hidden="true">#</a> intel i915kms graphics card support</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># kldload drm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,11),s=[t];function r(c,o){return a(),n("div",null,s)}var u=e(d,[["render",r],["__file","28.1-installation-and-configuration.html.vue"]]);export{u as default};