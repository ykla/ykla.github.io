import{_ as e,o as t,c as i,e as n}from"./app.de72595a.js";const o={},a=n(`<h1 id="_18-2-system-installation" tabindex="-1"><a class="header-anchor" href="#_18-2-system-installation" aria-hidden="true">#</a> 18.2 System Installation</h1><p>Since the Raspberry Pi 3B+, without any changes, the system can be booted from the USB disk, after testing FreeBSD 12/13/14 are supported, but the speed is very slow, on the one hand, the Raspberry Pi using USB2.0 greatly limit the bus speed, on the other hand, may be a metaphysical problem. (I use a Toshiba (TOSHIBA) 64GB USB3.0 USB flash drive U364 high-speed mini car USB drive).</p><p>Therefore, it is not recommended to use the U disk boot, slow I have to hit the niannian cat, who is the niannian cat? It is just a wild civet cat.</p><p>All we have to prepare is a Raspberry Pi 4 board, a piece of network cable, and a memory card. Download the image for the Raspberry Pi 4 from FreeBSD.org:</p><p>https://download.freebsd.org/ftp/releases/arm64/aarch64/ISO-IMAGES/13.0/FreeBSD-13.0-RELEASE-arm64-aarch64-RPI.img.xz</p><p>Download it and unzip it. Burn it with rufus. Plug in the network cable, insert the memory card into the Raspberry Pi, power it on and wait for about five minutes to check the router background to get the IP.</p><p><strong>Note:</strong> After burning, you need to mount the FAT partition to replace all the files inside, otherwise it will start the screen, the replacement file path is:</p><p>https://github.com/FreeBSD-Ask/FreeBSD-rpi4-firmware</p><p>Use XShell to login to Raspberry Pi. The username and password are <code>freebsd</code>. root needs to log in and enter <code>su</code> and the password is <code>root</code>.</p><p>You can enable ssh remote login privileges for the root account by changing the <code>/etc/ssh/sshd_config</code> file.</p><p>Method.</p><p>Edit <code>/etc/sh/sshd_config</code> (note that it is sshd, not ssh! These are two files) and modify or add:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PermitRootLogin yes # Allow root login
PasswordAuthentication yes # Set whether to use password authentication.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>(You can also remove the comment # in front of the corresponding line, note that the default line of <code>PermitRootLogin</code> is no, change it to yes after removing it. (i.e. <code>PermitRootLogin yes</code>).</p><p>Then restart the service:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># server sshd restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then there is the problem of time setting, the Raspberry Pi does not have an on-board coin cell to ensure the CMOS clock is accurate. So it completely relies on the NTP service to correct the time, if the time is not accurate, it will affect the operation of many services, such as the inability to execute the portsnap fetch command.</p><p>The method is simple.</p><p>Add to <code>etc/rc.conf</code>:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ntpd_enable=&quot;YES&quot;
ntpdate_enable=&quot;YES&quot;
ntpdate_program=&quot;ntpdate&quot;
ntpdate_flags=&quot;0.cn.pool.ntp.org&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then turn on the time server:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># service ntpdate start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Enter <code># date</code> to check the time and finish the calibration. Our country uses UTC+8 Beijing time, although not changing it will not affect the software use, it looks inconvenient, you can adjust the region to Asia / China / Shanghai by <code># bsdconfig</code> command.</p><p>The Raspberry Pi should be automatically connected to the Internet, so there is no need to think about networking.</p><p>CPU frequency adjustment (600MHZ to 1500MHZ).</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># sysrc powerd_enable=&quot;YES&quot;
# service powerd restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,26),s=[a];function r(d,c){return t(),i("div",null,s)}var h=e(o,[["render",r],["__file","18.2-system-installation.html.vue"]]);export{h as default};