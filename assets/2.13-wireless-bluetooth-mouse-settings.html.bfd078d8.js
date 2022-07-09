import{_ as e,o as t,c as o,e as i}from"./app.6991678c.js";const s={},d=i(`<h1 id="_2-13-wireless-bluetooth-mouse-setup" tabindex="-1"><a class="header-anchor" href="#_2-13-wireless-bluetooth-mouse-setup" aria-hidden="true">#</a> 2.13 Wireless Bluetooth Mouse Setup</h1><blockquote><p>This article is based on FreeBSD 13.0 and uses the Logitech m337.</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># sysrc hcsecd_enable=&quot;YES&quot;.
# sysrc bthidd_enable=&quot;YES&quot;
# service hcsecd start
# service bthidd start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Just use <code>bluetooth-config</code> tool to add Bluetooth devices.</p><p>Turn the Bluetooth mouse to pairing mode, run <code># bluetooth-config scan</code> and follow the prompts to add the device.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># bluetooth-config scan
Scan for new bluetooth devices (1 out of 5 attempts)... Done.
Found 1 new Bluetooth device (now scanning for name).
[1] 34:88:5d:12:34:56 &quot;Bluetooth Mouse M336/M337/M535&quot; (Logitech-M337)
Select the device to be paired [1, or 0 to rescan].1

This device provides HMI device service.
Set it? [Yes].
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Note: Logitech M337 will automatically disconnect after pairing connection. Solution: Delete the <code>bd_addr</code> line <code>xx:xx:xx:xx</code> in the <code>/var/db/bthidd.hids</code> file corresponding to the mouse and restart the bthidd service <code># service bthidd restart</code>.</p></blockquote>`,7),n=[d];function c(l,a){return t(),o("div",null,n)}var u=e(s,[["render",c],["__file","2.13-wireless-bluetooth-mouse-settings.html.vue"]]);export{u as default};
