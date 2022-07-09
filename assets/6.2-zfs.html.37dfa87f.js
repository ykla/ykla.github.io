import{_ as a,r,o as t,c as o,a as s,b as d,e as i,d as e}from"./app.aaacb9fc.js";const l={},c=i('<h1 id="_6-2-zfs" tabindex="-1"><a class="header-anchor" href="#_6-2-zfs" aria-hidden="true">#</a> 6.2 ZFS</h1><h2 id="usage-recommendations" tabindex="-1"><a class="header-anchor" href="#usage-recommendations" aria-hidden="true">#</a> Usage recommendations</h2><ul><li>It is recommended to use ZFS on machines with 8G of RAM and above.</li><li>To increase the random read capability of mechanical drives, set <code>vfs.zfs.prefetch_disable=1</code>.</li><li>To avoid ZFS eating up too much memory, set <code>vfs.zfs.arc_max=&quot;XXX&quot;</code>, e.g. 1024 M.</li><li>If you want to copy a file system, you can use <code>zfs send/recv</code>, which also allows you to transfer across the network via ssh.</li><li>SSDs are recommended, using SSDs improves ZFS random reads, and a file system like ZFS that replicates on write is also beneficial for SSD lifetime.</li></ul>',3),v=e("See "),u={href:"https://wiki.freebsd.org/ZFSTuningGuide",target:"_blank",rel:"noopener noreferrer"},m=e("https://wiki.freebsd.org/ZFSTuningGuide"),h=e(" for more optimizations."),b=i(`<h2 id="zfs-snapshots-and-restore" tabindex="-1"><a class="header-anchor" href="#zfs-snapshots-and-restore" aria-hidden="true">#</a> ZFS Snapshots and Restore</h2><p>ZFS snapshots are similar to virtual machine snapshots.</p><p>The default partition creation (Auto ZFS) is as follows:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>root@ykla:/home/ykla # zfs list
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Snapshot <code>/</code> (tested to represent a snapshot of the entire ZFS file system under the default partition above, <code>start1</code> is a random name).</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>root@ykla:/ # zfs snapshot zroot/ROOT/default@start1
root@ykla:/ # zfs list -t snapshot
NAME USED AVAIL REFER MOUNTPOINT
zroot@start 0B - 96K -
zroot/ROOT/default@start1 0B - 1004M -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Snapshot restore verification:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>root@ykla:/ # rm 1.txt
root@ykla:/ # ls
.cshrc boot home mnt root usr
.profile dev lib net sbin var
COPYRIGHT entropy libexec proc sys zroot
bin etc media rescue tmp
root@ykla:/ # zfs rollback -r zroot/ROOT/default@start1
root@ykla:/ # ls
.cshrc bin etc media rescue tmp
.profile boot home mnt root usr
1.txt dev lib net sbin var
COPYRIGHT entropy libexec proc sys zroot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To destroy a snapshot:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>root@ykla:/ # zfs destroy zroot@start 
root@ykla:/ # zfs list -t snap
NAME USED AVAIL REFER MOUNTPOINT
zroot/ROOT/default@start1 8K - 1004M -
root@ykla:/ # 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="caution" tabindex="-1"><a class="header-anchor" href="#caution" aria-hidden="true">#</a> Caution</h2><ul><li>ZFS does not use <code>/etc/fstab</code>, but EFI, Swap still use it.</li></ul>`,12);function p(f,z){const n=r("ExternalLinkIcon");return t(),o("div",null,[c,s("p",null,[v,s("a",u,[m,d(n)]),h]),b])}var x=a(l,[["render",p],["__file","6.2-zfs.html.vue"]]);export{x as default};
