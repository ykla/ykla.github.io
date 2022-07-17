import{_ as e,o as i,c as n,e as t}from"./app.9e92ab39.js";const d={},s=t(`<h1 id="_5-2-ibus-input-method-framework" tabindex="-1"><a class="header-anchor" href="#_5-2-ibus-input-method-framework" aria-hidden="true">#</a> 5.2 Ibus Input Method Framework</h1><blockquote><p><strong>Note</strong></p><p>This tutorial has only been tested under XFCE desktop. It may not work with KDE5.</p></blockquote><p>The ibus input method framework configuration <code>.xinitrc</code> add:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>XIM=ibus;export XIM
GTK_IM_MODULE=ibus;export GTK_IM_MODULE
QT_IM_MODULE=xim; export QT_IM_MODULE
XMODIFIERS=&#39;@im=ibus&#39;; export XMODIFIERS
XIM_PROGRAM=&quot;ibus-daemon&quot;; export XIM_PROGRAM
XIM_ARGS=&quot;-daemonize -xim&quot;; export XIM_ARGS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Add to <code>.cshrc</code>:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>setenv LANG zh_CN.UTF-8
setenv LC_CTYPE zh_CN.UTF-8
setenv LC_ALL zh_CN.UTF-8
setenv XMODIFIERS @im=ibus
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Add to <code>.profile</code>:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>export LC_ALL=zh_CN.UTF-8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8),r=[s];function o(a,l){return i(),n("div",null,r)}var c=e(d,[["render",o],["__file","5.2-ibus-input-method-framework.html.vue"]]);export{c as default};
