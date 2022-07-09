import{_ as e,o as t,c as a,e as d}from"./app.4897455b.js";const s={},i=d(`<h1 id="_2-11-sound-card-and-network-card-setup" tabindex="-1"><a class="header-anchor" href="#_2-11-sound-card-and-network-card-setup" aria-hidden="true">#</a> 2.11 Sound Card and Network Card Setup</h1><h2 id="freebsd-sound-card" tabindex="-1"><a class="header-anchor" href="#freebsd-sound-card" aria-hidden="true">#</a> FreeBSD Sound Card</h2><h3 id="sound-setup" tabindex="-1"><a class="header-anchor" href="#sound-setup" aria-hidden="true">#</a> Sound setup</h3><p>First load the sound card driver.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># sysrc snd_hda=&quot;YES&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then reboot.</p><p>Check the current sound card device with the following command</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ cat /dev/sndstat
Installed devices:
pcm0: &lt;NVIDIA (0x0083) (HDMI/DP 8ch)&gt; (play)
pcm1: &lt;NVIDIA (0x0083) (HDMI/DP 8ch)&gt; (play)
pcm2: &lt;NVIDIA (0x0083) (HDMI/DP 8ch)&gt; (play)
pcm3: &lt;NVIDIA (0x0083) (HDMI/DP 8ch)&gt; (play)
pcm4: &lt;Realtek ALC892 (Rear Analog 5.1/2.0)&gt; (play/rec) default
pcm5: &lt;Realtek ALC892 (Front Analog)&gt; (play/rec)
pcm6: &lt;Realtek ALC892 (Rear Digital)&gt; (play)
No devices installed from userspace.
No devices installed from userspace.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>followed by default is the oss default device. If the software&#39;s audio uses oss and the output is default, the audio will be output from this device.</p><p>Most FreeBSD software has oss as the audio output driver, some default to pulseaudio (e.g. firefox), visit the last tip for settings for these software.</p><p>The following commands modify the output device. The number at the end is the number after the corresponding pcm.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ sysctl hw.snd.default_unit=5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Here are a few recommended oss mixers.</p><table><thead><tr><th style="text-align:center;">GUI environment</th><th style="text-align:center;">name</th></tr></thead><tbody><tr><td style="text-align:center;">kde5</td><td style="text-align:center;">audio/dsbmixer</td></tr><tr><td style="text-align:center;">gtk</td><td style="text-align:center;">audio/gtk-mixer</td></tr><tr><td style="text-align:center;">non-graphical</td><td style="text-align:center;">audio/mixertui</td></tr></tbody></table><h3 id="tips" tabindex="-1"><a class="header-anchor" href="#tips" aria-hidden="true">#</a> Tips</h3><p>But oss has some drawbacks, you can&#39;t record oss output with <code>obs-studio</code>. Only oss input can be recorded. Looking at the official forum, you can <code>virtual_oss</code> simulate a device to achieve this.</p><p>But <code>obs-studio</code> can record the audio from pulseaudio output.</p><p>So some software can use pulseaudio as output. The audio output of software that uses pulseaudio is not controlled by the above command. pulseaudio will send the audio to the corresponding device according to its own settings, so you need to use the pulseaudio mixer to control it.</p><p>In the audio controller that comes with kde5, the switch device is the pulseaudio control.</p><p>Some of the official packaged multimedia software supports pulseaudio AGVDbNVutgwiep6615bjTJnQkScwWuUEMuU95NredRG5 ports with the compile option to compile it yourself. Set pulseaudio as the audio driver output in the software and you&#39;re done!</p>`,20),o=[i];function n(r,l){return t(),a("div",null,o)}var u=e(s,[["render",n],["__file","2.11-physical-machine-sound-card-and-network-card-settings.html.vue"]]);export{u as default};
