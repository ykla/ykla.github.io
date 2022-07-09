import{_ as e,o as a,c as t,e as s}from"./app.4897455b.js";const n={},r=s(`<h1 id="_3-4-usage-of-the-package-manager-pkg" tabindex="-1"><a class="header-anchor" href="#_3-4-usage-of-the-package-manager-pkg" aria-hidden="true">#</a> 3.4 Usage of the package manager pkg</h1><blockquote><p>Please note: pkg can only manage third-party packages, and does not serve to upgrade the system and get security updates. This is because the FreeBSD project maintains the kernel and user space as a whole, rather than Linux where linus torvalds maintains the kernel and the individual distribution people maintain the GNU tools (they are actually designed as individual packages, so the package manager can be used to update and upgrade the system). FreeBSD uses <code> freebsd-update</code> to upgrade the system and get security patches.</p></blockquote><h2 id="how-to-install-software-with-pkg" tabindex="-1"><a class="header-anchor" href="#how-to-install-software-with-pkg" aria-hidden="true">#</a> How to install software with pkg</h2><p>The base system does not have a pkg by default, so first get a pkg: <code># pkg</code> Enter</p><p><code># pkg</code> Enter to confirm the download by typing <code>y</code>.</p><hr><p>pkg use https, install ssl certificate first:</p><p><code># pkg install ca_root_nss</code></p><p>Then change pkg+http to pkg+https in repo.conf.</p><p>Finally, refresh the pkg database: \`# pkg update -f</p><p><code># pkg update -f</code></p><hr><p>To install python 3.</p><p><code># pkg install python</code></p><hr><p>pkg upgrade.</p><p><code># pkg upgrade</code></p><hr><p>Error: <code>You must upgrade the ports-mgmt/pkg port first</code></p><p>Solution.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cd /usr/ports/ports-mgmt/pkg
# make deinstall reinstall
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="how-to-uninstall-software" tabindex="-1"><a class="header-anchor" href="#how-to-uninstall-software" aria-hidden="true">#</a> How to uninstall software</h2><p>Using <code>pkg delete</code> directly will break the normal dependencies and should be avoided (as should <code>make deinstall</code> for ports), instead use the <code>pkg-rmleaf</code> command, which requires the software to be installed by itself: \`# pkg install pkg-rmleaf</p><p><code># pkg install pkg-rmleaf</code></p><h2 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a> Troubleshooting</h2><h3 id="freebsd-pkg-install-software-fails-to-create-user-solution" tabindex="-1"><a class="header-anchor" href="#freebsd-pkg-install-software-fails-to-create-user-solution" aria-hidden="true">#</a> FreeBSD pkg install software fails to create user solution</h3><p>Example problem.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[1/1] Installing package...
===&gt; Creating groups.
Creating group &#39;package&#39; with gid &#39;000&#39;.
===&gt; Creating users
Creating user &#39;package&#39; with uid &#39;000&#39;.
pw: user &#39;package&#39; disappeared during update
pkg: PRE-INSTALL script failed
pkg: PRE-INSTALL script failed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Problem solving: database not synchronized</p><p>Problem solved.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># /usr/sbin/pwd_mkdb -p /etc/master.passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="shared-object-x-so-x-not-found-required-by-xxx" tabindex="-1"><a class="header-anchor" href="#shared-object-x-so-x-not-found-required-by-xxx" aria-hidden="true">#</a> Shared object &quot;x.so.x&quot; not found, required by &quot;xxx&quot;</h3><p>This problem is usually due to a broken ABI, just update it.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># pkg install bsdadminscripts
# pkg_libchk
# port-rebuild
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="newer-freebsd-version-for-package-pkg" tabindex="-1"><a class="header-anchor" href="#newer-freebsd-version-for-package-pkg" aria-hidden="true">#</a> Newer FreeBSD version for package pkg</h3><p>Example problem.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Neuer FreeBSD version for package pkg:
To ignore this error set IGNORE_OSVERSION=yes
- package: 1402843
- running kernel: 1400042
Ignore the mismatch and continue?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This usually occurs on systems that have lost security support or are on the Current version and does not affect usage, just enter <code>y</code>.</p><p>If you want to fix the root cause, you need to uninstall the pkg yourself, install <code>ports-mgmt/pkg</code> from ports, or update the entire system from source.</p><p>If you just don&#39;t want to see this prompt, just follow the instructions and write <code>IGNORE_OSVERSION=yes</code> to <code>/etc/make.conf</code> (or create a new one if you don&#39;t have it).</p>`,40),i=[r];function d(o,l){return a(),t("div",null,i)}var c=e(n,[["render",d],["__file","3.4-usage-of-the-package-manager-pkg.html.vue"]]);export{c as default};
