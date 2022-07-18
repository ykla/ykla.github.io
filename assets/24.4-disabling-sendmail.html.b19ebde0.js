import{_ as e,o as i,c as a,e as n}from"./app.f800b8af.js";const s={},t=n(`<h1 id="_24-4-disabling-sendmail" tabindex="-1"><a class="header-anchor" href="#_24-4-disabling-sendmail" aria-hidden="true">#</a> 24.4 Disabling Sendmail</h1><p>Sendmail is always started by default on FreeBSD systems, which is useless for most people and causes a delay of several minutes at startup; its service can be disabled during installation, as described in the installation instructions.</p><p>Edit <code>/etc/rc.conf</code> and add the following lines.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sendmail_enable=&quot;NO&quot;
sendmail_submit_enable=&quot;NO&quot;
sendmail_outbound_enable=&quot;NO&quot;
sendmail_msp_queue_enable=&quot;NO&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Edit <code>/etc/periodic.conf</code> and add the following lines to disable certain settings that are only used by Sendmail.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>daily_clean_hoststat_enable=&quot;NO&quot;
daily_status_mail_rejects_enable=&quot;NO&quot;
daily_status_include_submit_mailq=&quot;NO&quot;
daily_submit_queuerun=&quot;NO&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),d=[t];function l(o,u){return i(),a("div",null,d)}var r=e(s,[["render",l],["__file","24.4-disabling-sendmail.html.vue"]]);export{r as default};
