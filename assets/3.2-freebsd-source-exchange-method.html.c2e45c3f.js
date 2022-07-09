import{_ as e,o as r,c as i,e as s}from"./app.4897455b.js";const t={},n=s(`<h1 id="_3-2-freebsd-source-change-method" tabindex="-1"><a class="header-anchor" href="#_3-2-freebsd-source-change-method" aria-hidden="true">#</a> 3.2 FreeBSD Source Change Method</h1><blockquote><p><strong>Notification</strong></p><p>bjtu Beijing Jiaotong University open source mirror site mirror site is down. Please switch to another source, e.g. freebsd.cn/ustc/nju/163.</p><p>The reason is that the university requires to guarantee online classes, so the exit speed is limited to 100Mbps. now the mirror station is crowded every day.</p><p>Expected fix: summer break, unknown.</p></blockquote><p>FreeBSD has four types of sources: pkg, ports, portsnap, and update.</p><p><strong>For versions that have lost security support, please refer to the last section</strong></p><p><strong>This article lists multiple mirror sites for a source, no need to configure all of them, just choose one of them. Recommend to use Beijing Jiaotong University Free and Open Source Software Mirror Station, because it is mirrored by reverse proxy and can keep synchronized with upstream.</strong></p><p><strong>There is no official mirror site in the territory, the following are unofficial mirror sites.</strong></p><h2 id="pkg-source-pkg-source-provides-binary-installation-package" tabindex="-1"><a class="header-anchor" href="#pkg-source-pkg-source-provides-binary-installation-package" aria-hidden="true">#</a> pkg source: pkg source provides binary installation package</h2><p>The download path for pkg is <code>/var/cache/pkg/</code>.</p><p>The pkg source in FreeBSD is divided into two configuration files, system-level and user-level. It is not recommended to modify <code>/etc/pkg/FreeBSD.conf</code> directly, as this file will change as the base system is updated.</p><p>Create a user-level source directory:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># mkdir -p /usr/local/etc/pkg/repos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="beijing-jiaotong-university-free-and-open-source-software-mirror-site" tabindex="-1"><a class="header-anchor" href="#beijing-jiaotong-university-free-and-open-source-software-mirror-site" aria-hidden="true">#</a> Beijing Jiaotong University Free and Open Source Software Mirror Site</h3><p>Create user-level source files:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ee /usr/local/etc/pkg/repos/bjtu.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Write the following:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>bjtu: {  
url: &quot;pkg+http://mirror.bjtu.edu.cn/reverse/freebsd-pkg/\${ABI}/quarterly&quot;,  
mirror_type: &quot;srv&quot;,  
signature_type: &quot;none&quot;,  
fingerprints: &quot;/usr/share/keys/pkg&quot;,  
enabled: yes
}
FreeBSD: { enabled: no }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Troubleshooting</strong></p><p><strong>To get rolling updates of packages, change <code>quarterly\`&#39;&#39; to </code>latest<code>&#39;. Note that the </code>CURRENT<code>version is only available as</code>latest\`.</strong></p><p><strong>To use https, install <code>security/ca_root_nss</code> and change <code>http</code> to <code>https</code>, then use the command <code># pkg update -f</code> to refresh the cache, as below.</strong></p><h3 id="netease-open-source-mirror-site" tabindex="-1"><a class="header-anchor" href="#netease-open-source-mirror-site" aria-hidden="true">#</a> NetEase open source mirror site</h3><p>Create user-level source files:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ee /usr/local/etc/pkg/repos/163.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Write the following:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>163: {  
url: &quot;pkg+http://mirrors.163.com/freebsd-pkg/\${ABI}/quarterly&quot;,  
mirror_type: &quot;srv&quot;,  
signature_type: &quot;none&quot;,  
fingerprints: &quot;/usr/share/keys/pkg&quot;,  
enabled: yes
}
FreeBSD: { enabled: no }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="university-of-science-and-technology-of-china-open-source-software-mirror-site" tabindex="-1"><a class="header-anchor" href="#university-of-science-and-technology-of-china-open-source-software-mirror-site" aria-hidden="true">#</a> University of Science and Technology of China open source software mirror site</h3><p>Create user-level source files:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ee /usr/local/etc/pkg/repos/ustc.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Write the following:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ustc: {  
url: &quot;pkg+http://mirrors.ustc.edu.cn/freebsd-pkg/\${ABI}/quarterly&quot;,  
mirror_type: &quot;srv&quot;,  
signature_type: &quot;none&quot;,  
fingerprints: &quot;/usr/share/keys/pkg&quot;,  
enabled: yes
}
FreeBSD: { enabled: no }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nanjing-university-open-source-mirror-site" tabindex="-1"><a class="header-anchor" href="#nanjing-university-open-source-mirror-site" aria-hidden="true">#</a> Nanjing University open source mirror site</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ee /usr/local/etc/pkg/repos/nju.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Write the following:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>nju: {  
url: &quot;pkg+http://mirrors.nju.edu.cn/freebsd-pkg/\${ABI}/quarterly&quot;,  
mirror_type: &quot;srv&quot;,  
signature_type: &quot;none&quot;,  
fingerprints: &quot;/usr/share/keys/pkg&quot;,  
enabled: yes
}
FreeBSD: { enabled: no }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="freebsd-cn-unofficial-same-below" tabindex="-1"><a class="header-anchor" href="#freebsd-cn-unofficial-same-below" aria-hidden="true">#</a> FreeBSD.cn (unofficial, same below)</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ee /usr/local/etc/pkg/repos/freebsdcn.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Write the following:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>freebsdcn: {  
url: &quot;pkg+http://pkg.freebsd.cn/\${ABI}/quarterly&quot;,  
mirror_type: &quot;srv&quot;,  
signature_type: &quot;none&quot;,  
fingerprints: &quot;/usr/share/keys/pkg&quot;,  
enabled: yes
}
FreeBSD: { enabled: no }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ports-source-package-manager-that-provides-a-source-way-to-install-software" tabindex="-1"><a class="header-anchor" href="#ports-source-package-manager-that-provides-a-source-way-to-install-software" aria-hidden="true">#</a> ports source: package manager that provides a source way to install software</h2><p>ports download path is <code>/usr/ports/distfiles</code></p><h2 id="beijing-jiaotong-university-free-and-open-source-software-mirror-site-1" tabindex="-1"><a class="header-anchor" href="#beijing-jiaotong-university-free-and-open-source-software-mirror-site-1" aria-hidden="true">#</a> Beijing Jiaotong University Free and Open Source Software mirror site</h2><p>Create or modify the file <code># ee /etc/make.conf</code>:</p><p>Write the following:</p><p><code>MASTER_SITE_OVERRIDE?=http://mirror.bjtu.edu.cn/reverse/freebsd-pkg/ports-distfiles/</code></p><h3 id="ee-open-source-mirror-site" tabindex="-1"><a class="header-anchor" href="#ee-open-source-mirror-site" aria-hidden="true">#</a> ee open source mirror site</h3><p>Create or modify the file <code># ee /etc/make.conf</code>:</p><p>Write the following:</p><p><code>MASTER_SITE_OVERRIDE?=http://mirrors.163.com/freebsd-ports/distfiles/</code></p><h3 id="university-of-science-and-technology-of-china-open-source-software-mirror-site-1" tabindex="-1"><a class="header-anchor" href="#university-of-science-and-technology-of-china-open-source-software-mirror-site-1" aria-hidden="true">#</a> University of Science and Technology of China open source software mirror site</h3><p>Create or modify the file <code># ee /etc/make.conf</code>:</p><p>Write the following:</p><p><code>MASTER_SITE_OVERRIDE?=http://mirrors.ustc.edu.cn/freebsd-ports/distfiles/</code></p><h3 id="freebsd" tabindex="-1"><a class="header-anchor" href="#freebsd" aria-hidden="true">#</a> FreeBSD.</h3><p>Create or modify the file <code># ee /etc/make.conf</code>:</p><p>Write the following:</p><p><code>MASTER_SITE_OVERRIDE?=http://ports.freebsd.cn/ports-distfiles/</code></p><h2 id="portsnap-source-packaged-ports-file" tabindex="-1"><a class="header-anchor" href="#portsnap-source-packaged-ports-file" aria-hidden="true">#</a> portsnap source:packaged ports file</h2><h3 id="beijing-jiaotong-university-free-and-open-source-software-mirror-site-2" tabindex="-1"><a class="header-anchor" href="#beijing-jiaotong-university-free-and-open-source-software-mirror-site-2" aria-hidden="true">#</a> Beijing Jiaotong University Free and Open Source Software mirror site</h3><p>Edit portsnap configuration file <code># ee /etc/portsnap.conf</code> :</p><p>Change <code>SERVERNAME=portsnap.FreeBSD.org</code> to <code>SERVERNAME=freebsd-portsnap.mirror.bjtulug.org</code></p><p><strong>Get portsnap updates</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># portsnap fetch extract
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Troubleshooting</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Snapshot appears to have been created more than one day into the future!
(Is the system clock correct?)
Cowardly refusing to proceed any further.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Need to synchronize time.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ntpdate ntp.api.bz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="freebsd-1" tabindex="-1"><a class="header-anchor" href="#freebsd-1" aria-hidden="true">#</a> FreeBSD.</h3><p>Edit the portsnap configuration file <code># ee /etc/portsnap.conf</code> :</p><p>Change <code>SERVERNAME=portsnap.FreeBSD.org</code> to <code>SERVERNAME=portsnap.FreeBSD.cn</code></p><h2 id="freebsd-update-source-providebase-system-updates" tabindex="-1"><a class="header-anchor" href="#freebsd-update-source-providebase-system-updates" aria-hidden="true">#</a> freebsd-update source: providebase system updates</h2><p>Note: This source is only available for release versions of first-level architectures. This means that current and stable are not available. For a description of the architecture support levels see.</p><p>https://www.freebsd.org/platforms</p><h3 id="beijing-jiaotong-university-free-and-open-source-software-mirror-site-3" tabindex="-1"><a class="header-anchor" href="#beijing-jiaotong-university-free-and-open-source-software-mirror-site-3" aria-hidden="true">#</a> Beijing Jiaotong University Free and Open Source Software Mirror Site</h3><p>Edit the <code># ee /etc/freebsd-update.conf</code> file:</p><p>Change <code>ServerName update.FreeBSD.org</code> to <code>ServerName freebsd-update.mirror.bjtulug.org</code></p><p><strong>Example: upgrading from FreeBSD 12 to 13.0</strong></p><p><code># freebsd-update -r 13.0-RELEASE upgrade</code></p><h3 id="freebsd-2" tabindex="-1"><a class="header-anchor" href="#freebsd-2" aria-hidden="true">#</a> FreeBSD.</h3><p>Edit the <code># ee /etc/freebsd-update.conf</code> file:</p><p>Change <code>ServerName update.FreeBSD.org</code> to <code>ServerName update.FreeBSD.cn</code>.</p><h2 id="versions-not-supported-by-security-use-as-appropriate" tabindex="-1"><a class="header-anchor" href="#versions-not-supported-by-security-use-as-appropriate" aria-hidden="true">#</a> Versions not supported by security (use as appropriate)</h2><p>It is possible to use binary sources for non-security supported versions.</p><blockquote><p>Here, for example, is <code>FreeBSD 9.2</code>.</p></blockquote><p>First switch to a working binary source</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># setenv PACKAGESITE http://ftp-archive.freebsd.org/pub/FreeBSD-Archive/ports/amd64/packages-9.2-release/Latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If the shell is not csh, then:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># export PACKAGESITE=http://ftp-archive.freebsd.org/pub/FreeBSD-Archive/ports/amd64/packages-9.2-release/Latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Installation example: Now install <code>bsdinfo</code>.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>root@ykla:~ # pkg_add -r bsdinfo                                                    
Fetching http://ftp-archive.freebsd.org/pub/FreeBSD-Archive/ports/amd64/packages-9.2-release/Latest/bsdinfo.tbz... Done.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>pkg is not available, it will tell you that <code>digests.txz</code> and <code>repo.txz</code> are not found, because pkgng is not officially supported at that time, only <code>pkg_*</code> command is still supported.</strong></p>`,89),a=[n];function o(d,c){return r(),i("div",null,a)}var u=e(t,[["render",o],["__file","3.2-freebsd-source-exchange-method.html.vue"]]);export{u as default};
