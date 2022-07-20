import{_ as e,o as t,c as i,e as d}from"./app.6b09a359.js";const n={},a=d(`<h1 id="_12-9-zfs-disk-encryption-and-decryption" tabindex="-1"><a class="header-anchor" href="#_12-9-zfs-disk-encryption-and-decryption" aria-hidden="true">#</a> 12.9 ZFS disk encryption and decryption</h1><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><p>If ZFS disk encryption is selected during installation, how do I mount the disk?</p><p>Disk structure (FreeBSD 11 onwards)</p><table><thead><tr><th style="text-align:center;">Partition Type</th><th style="text-align:center;">Mount Point</th><th style="text-align:center;">Device</th></tr></thead><tbody><tr><td style="text-align:center;">freebsd-boot /EFI</td><td style="text-align:center;"></td><td style="text-align:center;">/dev/ada0p1</td></tr><tr><td style="text-align:center;">freebsd-zfs</td><td style="text-align:center;">/</td><td style="text-align:center;">/dev/ada0p2/, /dev/ada0p2.eli</td></tr><tr><td style="text-align:center;">freebsd-swap</td><td style="text-align:center;"></td><td style="text-align:center;">/dev/ada0p3, /dev/ada0p3.eli</td></tr></tbody></table><p>It&#39;s easy and doesn&#39;t require a key.</p><p>Execute the command <code># geli attach /dev/ada0p3</code></p><p>Then enter the correct password to import the disk with the <code>zfs mount zroot/ROOT/default</code> command.</p><h2 id="use-geli-to-encrypt-zfs-volumes" tabindex="-1"><a class="header-anchor" href="#use-geli-to-encrypt-zfs-volumes" aria-hidden="true">#</a> Use GELI to encrypt ZFS volumes</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>## Create a block device
# zfs create -V 256M zroot/test
# Create a randomly generated, 4K-sized key
# dd if=/dev/random of=/tmp/test.key bs=4k count=1
# Initialize and load the encrypted disk
# geli init -K /tmp/test.key /dev/zvol/zroot/test
# geli attach -k /tmp/test.key /dev/zvol/zroot/test
# discover a new device
# ls /dev/zvol/zroot/test.geli
# We can create a new file partition on this device
# zpool create -m /tmp/ztest ztest /dev/zvol/zroot/test.eli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="geli-data-backup-and-recovery" tabindex="-1"><a class="header-anchor" href="#geli-data-backup-and-recovery" aria-hidden="true">#</a> GELI data backup and recovery</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>## Backup GELT data
# geli backup /dev/zvol/zroot/test /tmp/test.eli
# Clear GELT data
# geli clear /dev/zvol/zroot/test
# GELI tries to mount the GELT device, but cannot do so because his GELT data cannot be found
# geli attach -k /tmp/test.key /dev/zvol/zroot/test
# restore GELT data
# geli restore /tmp/test.eli /dev/zvol/zroot/test
# Now we can mount the device and import the pool
# geli attach -k /tmp/test.key /dev/zvol/zroot/test
# zpool import
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="resize-the-geli-disk" tabindex="-1"><a class="header-anchor" href="#resize-the-geli-disk" aria-hidden="true">#</a> Resize the GELI disk</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># Adjust ZFS volume
# zfs set volsize=512M zroot/test
# You can&#39;t mount the GELT device yet, because GELT can&#39;t find the data
# geli attach /dev/zvol/zroot/test
# We need to tell GELT the storage size of the previous device
# geli resize -s 256M /dev/zvol/zroot/test
# Now we can mount the device and import the pool
# geli attach -k /tmp/test.key /dev/zvol/zroot/test
# zpool import
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),s=[a];function r(l,o){return t(),i("div",null,s)}var v=e(n,[["render",r],["__file","12.9-zfs-disk-encryption-and-decryption.html.vue"]]);export{v as default};
