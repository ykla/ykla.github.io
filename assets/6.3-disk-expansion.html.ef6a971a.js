import{_ as e,o as i,c as s,e as d}from"./app.a03a6ae4.js";const n={},a=d(`<h1 id="_6-3-disk-expansion" tabindex="-1"><a class="header-anchor" href="#_6-3-disk-expansion" aria-hidden="true">#</a> 6.3 Disk Expansion</h1><h2 id="expansion-methods" tabindex="-1"><a class="header-anchor" href="#expansion-methods" aria-hidden="true">#</a> Expansion methods</h2><ol><li><code>gpart show</code></li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># gpart show
=&gt; 63 209715137 vtbd0 MBR (100G)
63 1 - free - (512B)
64 62914496 **1** freebsd [active] (30G)
62914560 146800640 - free - (70G)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Check the system disk size is only 30G, it shows <code>1</code> only this one disk.</p><ol start="2"><li>Execute the expand command, <code>vtbd0</code> from <code>gpart show</code> and then view it.</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># gpart resize -i 1 vtbd0
vtbd0s1 resized
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>Start the <code>growfs</code> service to automatically complete the extension.</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># service growfs onestart

Growing root partition to fill device
vtbd0s1 resized
gpart: arg0 &#39;ufsid/62b5826d&#39;: Invalid argument
super-block backups (for fsck_ffs -b #) at:
64112192 65394432 66676672 67958912 69241152 70523392
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>Use the <code>df -h</code> command to view the results.</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># df -h
Filesystem Size Used Avail Capacity Mounted on
/dev/ufsid/62b5826d 97G 15G 75G 16% /
devfs 1.0K 1.0K 0B 100% /dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),t=[a];function l(r,o){return i(),s("div",null,t)}var v=e(n,[["render",l],["__file","6.3-disk-expansion.html.vue"]]);export{v as default};
