import{_ as e,o as i,c as n,e as t}from"./app.7da7c999.js";const s={},l=t(`<h1 id="_4-3-installing-gnome" tabindex="-1"><a class="header-anchor" href="#_4-3-installing-gnome" aria-hidden="true">#</a> 4.3 Installing Gnome</h1><h2 id="installing" tabindex="-1"><a class="header-anchor" href="#installing" aria-hidden="true">#</a> Installing</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># pkg install xorg gnome wqy-fonts xdg-user-dirs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Explanation:</p><table><thead><tr><th style="text-align:center;">software</th><th style="text-align:center;">usage</th></tr></thead><tbody><tr><td style="text-align:center;">xorg</td><td style="text-align:center;">X11</td></tr><tr><td style="text-align:center;">gnome</td><td style="text-align:center;">Gnome main program</td></tr><tr><td style="text-align:center;">wqy-fonts</td><td style="text-align:center;">Wenquanyi Open Source CJK Font</td></tr><tr><td style="text-align:center;">xdg-user-dirs</td><td style="text-align:center;">subdirectories for creating user home directories</td></tr></tbody></table><h2 id="configure" tabindex="-1"><a class="header-anchor" href="#configure" aria-hidden="true">#</a> configure</h2><p><code># ee /etc/fstab</code></p><p>Add the following:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>proc /proc procfs rw 0 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Configure the startup entries:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># sysrc dbus_enable=&quot;YES&quot;
# sysrc gdm_enable=&quot;YES&quot;
# sysrc gnome_enable=&quot;YES&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Enter the following command:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>% echo &quot;/usr/local/bin/gnome-session&quot; &gt; ~/.xinitrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="gnome" tabindex="-1"><a class="header-anchor" href="#gnome" aria-hidden="true">#</a> GNOME</h2><blockquote><p>The user shell in this section should be the default <code>sh</code>, see the next section &quot;Installing input methods&quot; (the default shell for root users is csh, which is not applicable).</p></blockquote><p><code># cd /usr/local/etc/gdm &amp;&amp; ee locale.conf</code></p><p>Add the following:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>LANG=&quot;zh_CN.UTF-8&quot;
LC_CTYPE=&quot;zh_CN.UTF-8&quot;
LC_MESSAGES=&quot;zh_CN.UTF-8&quot;
LC_ALL=&quot;zh_CN.UTF-8&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="install-input-method" tabindex="-1"><a class="header-anchor" href="#install-input-method" aria-hidden="true">#</a> Install input method</h2><p>Below <code>ibus</code>, <code>fcitx5</code>, choose one of them.</p><h3 id="ibus" tabindex="-1"><a class="header-anchor" href="#ibus" aria-hidden="true">#</a> ibus</h3><p>The input method panel bundled with gnome is <code>ibus</code>.</p><p><code># pkg install zh-ibus-libpinyin</code> (install and run initialization command <code>ibus-setup</code>)</p><h3 id="fcitx-5" tabindex="-1"><a class="header-anchor" href="#fcitx-5" aria-hidden="true">#</a> fcitx 5</h3><p>First see if your shell is now <code>sh</code>,<code>bash</code>,<code>zsh</code>.</p><p><code># echo $0</code></p><p>If it is one of <code>sh</code>,<code>bash</code>,<code>zsh</code>, please continue; if not, please refer to chapter 5 section 1.</p><p>Install <code>fcitx5</code>:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># pkg install fcitx5 fcitx5-qt fcitx5-gtk fcitx5-configtool zh-fcitx5-chinese-addons
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Open or create new file <code>~/.xprofile</code>, write:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>export GTK_IM_MODULE=fcitx
export QT_IM_MODULE=fcitx
export XMODIFIERS=@im=fcitx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Reference: The following is an example of this file.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># $FreeBSD$
#
# .profile - Bourne Shell startup script for login shells
#
# visit also sh(1), environ(7).
#

# These are normally set through /etc/login.conf.  You may override them here
# if wanted.
# PATH=/sbin:/bin:/usr/sbin:/usr/bin:/usr/local/sbin:/usr/local/bin:$HOME/bin; export PATH

# Setting TERM is normally done through /etc/ttys.  Do only override
# if you&#39;re sure that you&#39;ll never log in via telnet or xterm or a
# serial line.
# TERM=xterm; 	export TERM

EDITOR=vi;   	export EDITOR
PAGER=less;  	export PAGER

# set ENV to a file invoked each time sh is started for interactive use.
ENV=$HOME/.shrc; export ENV

# Let sh(1) know it&#39;s at home, despite /home being a symlink.
if [ &quot;$PWD&quot; != &quot;$HOME&quot; ] &amp;&amp; [ &quot;$PWD&quot; -ef &quot;$HOME&quot; ] ; then cd ; fi

# Query terminal size; useful for serial lines.
if [ -x /usr/bin/resizewin ] ; then /usr/bin/resizewin -z ; fi

# Display a random cookie on each login.
if [ -x /usr/bin/fortune ] ; then /usr/bin/fortune freebsd-tips ; fi

export GTK_IM_MODULE=fcitx
export QT_IM_MODULE=fcitx
export XMODIFIERS=@im=fcitx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Tips: If you want to display <code>fcitx</code> input method panel, you need to install gnome plugin <code>TopIconsFix</code>, please do not install <code>AppIndicator and KStatusNotifierItem Support</code>, it is known that this plugin conflicts with <code>fcitx5</code>, it will cause the input method to be stuck.</p><p>This plugin needs to be installed by Firefox browser.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># pkg install -y firefox chrome-gnome-shell
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Open the website <code>https://extensions.gnome.org/extension/1674/topiconsfix/</code> to install the plugin.</p><h2 id="terminal-i18n-file-user-root" tabindex="-1"><a class="header-anchor" href="#terminal-i18n-file-user-root" aria-hidden="true">#</a> Terminal i18n (file user root)</h2><p><code># ee .cshrc</code></p><p>Add the following:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>setenv LANG zh_CN.UTF-8
setenv LC_CTYPE zh_CN.UTF-8
setenv LC_ALL zh_CN.UTF-8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="optimize-the-system" tabindex="-1"><a class="header-anchor" href="#optimize-the-system" aria-hidden="true">#</a> Optimize the system</h2><p><code># pkg install gnome-tweaks</code></p><h2 id="uninstall-pre-installed-games-optional" tabindex="-1"><a class="header-anchor" href="#uninstall-pre-installed-games-optional" aria-hidden="true">#</a> Uninstall Pre-installed games (optional)</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># pkg delete gnome-2048 gnome-klotski gnome-tetravex gnome-mines gnome-taquin gnome-sudoku gnome-robots gnome-nibbles lightsoff tali quadrapassel swell-foop gnome-mahjongg five-or-more iagno aisleriot four-in-a-row
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,45),d=[l];function a(o,r){return i(),n("div",null,d)}var u=e(s,[["render",a],["__file","4.3-installing-gnome.html.vue"]]);export{u as default};
