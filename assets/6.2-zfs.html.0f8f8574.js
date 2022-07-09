import{_ as o,r as t,o as r,c as l,a as s,b as a,e as n,d as e}from"./app.6991678c.js";const d={},c=n('<h1 id="_6-2-zfs" tabindex="-1"><a class="header-anchor" href="#_6-2-zfs" aria-hidden="true">#</a> 6.2 ZFS</h1><h2 id="section-2-zfs" tabindex="-1"><a class="header-anchor" href="#section-2-zfs" aria-hidden="true">#</a> Section 2 ZFS</h2><h2 id="usage-recommendations" tabindex="-1"><a class="header-anchor" href="#usage-recommendations" aria-hidden="true">#</a> Usage recommendations</h2><ul><li>It is recommended to use ZFS on machines with 8G of RAM and above.</li><li>To increase the random read capability of mechanical drives, set <code>vfs.zfs.prefetch_disable=1</code>.</li><li>To avoid ZFS eating up too much memory, set <code>vfs.zfs.arc_max=&quot;XXX&quot;</code>, e.g. 1024 M.</li><li>If you want to copy a filesystem, you can use <code>zfs send/recv</code>, which also allows you to transfer across the network via ssh.</li><li>SSDs are recommended, using SSDs improves ZFS random reads, and a file system like ZFS that replicates on write is also beneficial for SSD lifetime.</li></ul>',4),u=e("See "),v={href:"https://wiki.freebsd.org/ZFSTuningGuide",target:"_blank",rel:"noopener noreferrer"},m=e("https://wiki.freebsd.org/ZFSTuningGuide"),h=e(" for more optimizations."),b=n(`<h2 id="zfs-snapshots-and-restore" tabindex="-1"><a class="header-anchor" href="#zfs-snapshots-and-restore" aria-hidden="true">#</a> ZFS Snapshots and Restore</h2><p>ZFS snapshots are similar to virtual machine snapshots.</p><ul><li>Creating Snapshots</li></ul><p>The default partition creation (Auto ZFS) is as follows.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>root@ykla:/home/ykla # zfs list
NAME USED AVAIL REFER MOUNTPOINT
zroot 1.72G 440G 96K /zroot
zroot/ROOT 1004M 440G 96K none
zroot/ROOT/default 1004M 440G 1004M /
zroot/tmp 104K 440G 104K /tmp
zroot/usr 760M 440G 96K /usr
zroot/usr/home 128K 440G 128K /usr/home
zroot/usr/ports 96K 440G 96K /usr/ports
zroot/usr/src 759M 440G 759M /usr/src
zroot/var 628K 440G 96K /var
zroot/var/audit 96K 440G 96K /var/audit
zroot/var/crash 96K 440G 96K /var/crash
zroot/var/log 148K 440G 148K /var/log
zroot/var/mail 96K 440G 96K /var/mail
zroot/var/tmp 96K 440G 96K /var/tmp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Snapshot <code>zroot</code> (tested to represent a snapshot of the entire ZFS file system under the default partition above, <code>-r</code> i.e. recursive snapshot creation, <code>test</code> is a random name)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>root@ykla:/home/ykla # zfs snapshot -r zroot@test
root@ykla:/home/ykla # zfs list -t snap
NAME USED AVAIL REFER MOUNTPOINT
zroot@test 0B - 96K -
zroot/ROOT@test 0B - 96K -
zroot/ROOT/default@test 0B - 7.18G -
zroot/tmp@test 0B - 176K -
zroot/usr@test 0B - 96K -
zroot/usr/home@test 0B - 31.1M -
zroot/usr/ports@test 0B - 1.98G -
zroot/var@test 0B - 96K -
zroot/var/log@test 0B - 444K -
root@ykla:/home/ykla # ls /usr/ports/
CHANGES archivers/ emulators/ misc/ textproc/
CONTRIBUTING.md astro/ finance/ multimedia/ ukrainian/
COPYRIGHT audio/ french/ net-im/ vietnamese/
GIDs base/ ftp/ net-mgmt/ www/
INDEX-13 benchmarks/ games/ net-p2p/ x11-clocks/
Keywords/ biology/ german/ net/ x11-drivers/
MOVED cad/ graphics/ news/ x11-fm/
Makefile chinese/ hebrew/ polish/ x11-fonts/
Mk/ comms/ hungarian/ ports-mgmt/ x11-servers/
README converters/ irc/ portuguese/ x11-themes/
Templates/ databases/ japanese/ print/ x11-toolkits/
Tools/ deskutils/ java/ russian/ x11-wm/
UIDs devel/ korean/ science/ x11/
UPDATING distfiles/ lang/ security/        
accessibility/ dns/ mail/ shells/          
arabic/ editors/ math/ sysutils/        
root@ykla:/home/ykla # rm /usr/ports/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Restore snapshots</li></ul><p>You cannot restore snapshots recursively, you must restore them one by one (if you have a better solution, please let us know, there are scripts available on the web).</p>`,9),p=e("Unlike virtual machine snapshots, by default the "),f=s("code",null,"zfs rollback",-1),k=e(" command cannot roll back to a snapshot other than the latest one ("),z={href:"https://docs.oracle.com/cd/E19253-01/819-7065/gbcxk/index.html",target:"_blank",rel:"noopener noreferrer"},y=e("Reference Manual"),_=e("), unless you use "),g=s("code",null,"r",-1),x=e(", but This will delete all snapshots since that snapshot was created."),S=n(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>root@ykla:/home/ykla # zfs rollback -r zroot@test
root@ykla:/home/ykla # zfs rollback -r zroot/ROOT@test 
root@ykla:/home/ykla # zfs rollback -r zroot/ROOT/default@test
root@ykla:/home/ykla # zfs rollback -r zroot/tmp@test
root@ykla:/home/ykla # zfs rollback -r zroot/usr@test
root@ykla:/home/ykla # zfs rollback -r zroot/usr/home@test
root@ykla:/home/ykla # zfs rollback -r zroot/usr/ports@test
root@ykla:/home/ykla # zfs rollback -r zroot/var@test
root@ykla:/home/ykla # zfs rollback -r zroot/var/log@test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Destroying snapshots</li></ul><p>To destroy a snapshot (you can use <code>r</code> recursive destruction when destroying).</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>root@ykla:/home/ykla # zfs destroy -r zroot@test
root@ykla:/home/ykla # zfs list -t snap
no datasets available
root@ykla:/home/ykla # 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>snapshot</code> can be abbreviated to <code>snap</code> in the command.</p></blockquote><h2 id="caution" tabindex="-1"><a class="header-anchor" href="#caution" aria-hidden="true">#</a> Caution</h2><ul><li>ZFS does not use <code>/etc/fstab</code>, but EFI, Swap still use it.</li></ul>`,7);function K(G,T){const i=t("ExternalLinkIcon");return r(),l("div",null,[c,s("p",null,[u,s("a",v,[m,a(i)]),h]),b,s("p",null,[p,f,k,s("a",z,[y,a(i)]),_,g,x]),S])}var O=o(d,[["render",K],["__file","6.2-zfs.html.vue"]]);export{O as default};
