import{_ as i,r as o,o as d,c as s,a as e,b as n,e as t,d as r}from"./app.4897455b.js";const l={},c=t('<h1 id="_2-8-physical-machine-installation-and-hardware-options" tabindex="-1"><a class="header-anchor" href="#_2-8-physical-machine-installation-and-hardware-options" aria-hidden="true">#</a> 2.8 Physical Machine Installation and Hardware Options</h1><h2 id="physical-machine-installation-additions" tabindex="-1"><a class="header-anchor" href="#physical-machine-installation-additions" aria-hidden="true">#</a> Physical machine installation additions</h2><blockquote><p>Note: Please don&#39;t ask me which mirror should be used in the installation, that&#39;s because you are doing it wrong. Do not use a mirror file with the word <code>bootonly</code> unless you know what you are doing.</p></blockquote><p>Installing with <strong>CD</strong> should be done with an image ending in <code>iso</code>.</p><p>Using a <strong>USB stick</strong> installation should use an image that ends in <code>img</code>, for example</p>',5),h={href:"https://download.freebsd.org/ftp/releases/amd64/amd64/ISO-IMAGES/13.1/FreeBSD-13.1-RELEASE-amd64-memstick.img",target:"_blank",rel:"noopener noreferrer"},p=r("https://download.freebsd.org/ftp/releases/amd64/amd64/ISO-IMAGES/13.1/FreeBSD-13.1-RELEASE-amd64-memstick.img"),g=t('<p><strong>FreeBSD does not provide a graphical interface on all installation media including, but not limited to, the virtual machine files, so you will need to install them yourself.</strong></p><p><strong>Note: If you want to use UEFI in a vmware virtual machine, you must use FreeBSD 13.0 and above, otherwise you will get a splash screen on boot.</strong></p><p>The burning tool for Windows should be Rufus, and Linux can be used directly with the <code>dd</code> command.</p><p>https://rufus.ie/</p><p><strong>Note: It is not recommended to use the win32diskimager recommended by Handbook, sometimes the checksum will be wrong (actually the file checksum is normal). Do not use ventory to boot the physical installation, sometimes it will report that the installation file cannot be found. Be honest and rufus.</strong></p><h2 id="hardware-options-all-the-following-hardware-works-fine" tabindex="-1"><a class="header-anchor" href="#hardware-options-all-the-following-hardware-works-fine" aria-hidden="true">#</a> Hardware options (all the following hardware works fine)</h2><p>For more hardware, please refer to:</p>',7),u={href:"https://bsd-hardware.info/?d=FreeBSD",target:"_blank",rel:"noopener noreferrer"},m=r("https://bsd-hardware.info/?d=FreeBSD"),y=t(`<ol><li><p>Xiaomi notebook 12.5 generation: processor 6Y30, graphics card HD515, WIFI intel 8260AC, sound card ALC 233 (actually 235), hard disk NVME INTEL 600P. 2.</p></li><li><p>Lenovo G400: processor i3-3110M/i5-3230M, graphics card HD4000, WIFI intel N135 (Lenovo G400 NIC white list supports three kinds of NICs, if it is Broadcom BCM43142, we recommend replacing it with N135, FUR data number: 04W3783, if the replacement prompts can not be read, please first deactivate in the BIOS) (If the replacement indicates that it cannot be read, please first disable the wireless NIC in BIOS and restore it after upgrading BIOS).</p></li></ol><h5 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a> Troubleshooting.</h5><p>Q: How do I upgrade the BIOS of my Lenovo laptop without a battery?</p><p>A: If you can&#39;t find the battery, please unzip the <code>78cn25ww.exe</code> file (please get the BIOS file from Lenovo USA website), open the <code>platform.ini</code> with Notepad and look for.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[AC_Adapter]
Flag=1
BatteryCheck=1
BatteryBound=30
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Change all the above values to <code>0</code>:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[AC_Adapter]
Flag=0
BatteryCheck=0
BatteryBound=0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After saving, double click <code>InsydeFlash.exe</code> to do so.</p><p><strong>If you lose power, you are responsible for the consequences</strong></p><h3 id="network-card-recommendation" tabindex="-1"><a class="header-anchor" href="#network-card-recommendation" aria-hidden="true">#</a> Network card recommendation</h3><blockquote><p>No interest entanglement.</p></blockquote><table><thead><tr><th style="text-align:center;">type</th><th style="text-align:center;">make/model</th><th style="text-align:center;">chipset/parameters</th><th style="text-align:center;">sales price ($)</th></tr></thead><tbody><tr><td style="text-align:center;">USB Wireless NIC</td><td style="text-align:center;">COMFAST CF-WU810N</td><td style="text-align:center;">RTL8188EUS 150M 2.4G</td><td style="text-align:center;">20</td></tr><tr><td style="text-align:center;">USB Ethernet Card</td><td style="text-align:center;">UGREEN USB 100 Gigabit NIC CR110</td><td style="text-align:center;">AX88772A 100M</td><td style="text-align:center;">11.99</td></tr><tr><td style="text-align:center;">USB Ethernet Card</td><td style="text-align:center;">UGREEN USB Gigabit Card CM209</td><td style="text-align:center;">AX88179A 1000M</td><td style="text-align:center;">14.44</td></tr><tr><td style="text-align:center;">USB Ethernet Card</td><td style="text-align:center;">UGREEN USB 2.5G NIC CM275</td><td style="text-align:center;">RTL8156 2.5G</td><td style="text-align:center;">15.99</td></tr><tr><td style="text-align:center;">Type-C Ethernet Card</td><td style="text-align:center;">UGREEN Type-C to 100 Gb/s NIC 30287</td><td style="text-align:center;">AX88772A 100M</td><td style="text-align:center;">15.99</td></tr><tr><td style="text-align:center;">Type-C Ethernet Card</td><td style="text-align:center;">UGREEN Type-C to Gigabit Card CM199</td><td style="text-align:center;">AX88179A 1000M</td><td style="text-align:center;">16.99</td></tr><tr><td style="text-align:center;">Type-C Ethernet Card</td><td style="text-align:center;">UGREEN Type-C to 2.5G NIC</td><td style="text-align:center;">RTL8156 2.5G</td><td style="text-align:center;">39.99</td></tr></tbody></table>`,12);function b(f,w){const a=o("ExternalLinkIcon");return d(),s("div",null,[c,e("p",null,[e("a",h,[p,n(a)])]),g,e("p",null,[e("a",u,[m,n(a)])]),y])}var v=i(l,[["render",b],["__file","2.8-physical-machine-installation-and-hardware-options.html.vue"]]);export{v as default};
