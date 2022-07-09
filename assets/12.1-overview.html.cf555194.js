import{_ as e,o as t,c as i,e as a}from"./app.69650211.js";const s={},n=a(`<h1 id="_12-1-overview" tabindex="-1"><a class="header-anchor" href="#_12-1-overview" aria-hidden="true">#</a> 12.1 Overview</h1><blockquote><p><strong>Note</strong></p><p>This section is from the Internet.</p></blockquote><h2 id="disk-encryption-in-freebsd" tabindex="-1"><a class="header-anchor" href="#disk-encryption-in-freebsd" aria-hidden="true">#</a> Disk Encryption in FreeBSD</h2><p>GBDE (GEOM-based disk encryption)</p><p>GEOM modules in the kernel gbde(4)</p><p>User space tools gbde(8)</p><p>Create a new device with a <code>.bde</code> suffix</p><p>GELI (GEOM eli)</p><p>GEOM module in the kernel</p><p>Userspace tools geli(8)</p><p>Create a new device with the suffix \`.eli</p><p>Operating at the sector level</p><p>Create a new device to allow plain text access to data</p><h2 id="geom-framework" tabindex="-1"><a class="header-anchor" href="#geom-framework" aria-hidden="true">#</a> GEOM framework</h2><p>A standardized way to access the storage layer</p><p>Collection of GEOM classes</p><p>Classes can be freely stacked in any order</p><p>Abstraction of I/O request transformations</p><p>Transformations: striping, mirroring, partitioning, encryption</p><p>Providers and consumers</p><p>Auto-discovery</p><h2 id="gbde" tabindex="-1"><a class="header-anchor" href="#gbde" aria-hidden="true">#</a> GBDE</h2><p>The master key (2048 random bits) is located in a random location on the GEOM device and its location is stored in a lock file.</p><p>The lock file is encrypted using the user password and should be stored separately</p><p>have up to 4 separate user secrets (lock sectors)</p><p>Each sector is encrypted using <code>AES-CBC-128</code> and a random sector key. Sector keys</p><p>The sector key is encrypted using a key extracted from the master key and the sector number. Sector keys are encrypted using a key derived from the master key and sector number</p><p>Disk space overhead for storing each sector key</p><p>Non-atomic disk updates because sector keys are stored separately from the data Because sector keys are stored separately from the data</p><p>Encryption devices in device systems that do not support encryption in / file systems</p><h2 id="geli" tabindex="-1"><a class="header-anchor" href="#geli" aria-hidden="true">#</a> GELI</h2><p>Simple sector-to-sector encryption</p><p>To perform symmetric encryption of sectors, a random master key is chosen</p><p>The master key is encrypted using the user key and stored in the last sector of the GEOM device</p><p>Up to two encrypted copies of the master key can be stored in the sectors</p><p>The user key consists of up to two parts: a user passphrase and a key file</p><p>The passphrase is enhanced using PKCS #5: Password-Based Cryptography Specification 2.0</p><p>Encryption Specification 2.0 (RFC 2898)</p><p>Data integrity can be verified</p><p>Automatically takes advantage of hardware-accelerated cryptographic operations due to the use of the crypto(9) framework</p><p>Supports multiple encryption algorithms (AES-XTS,AES-CBS, Blowfish-CBC, Camellia-CBC, 3DES-CBC) and different key lengths. Different key lengths</p><p>Allow mounting of encrypted devices in /file systems</p><p>Support for booting from encrypted partitions since FreeBSD 11</p><h2 id="geom-modular-disk-transformation-framework-and-other-common-commands-for-disk-management" tabindex="-1"><a class="header-anchor" href="#geom-modular-disk-transformation-framework-and-other-common-commands-for-disk-management" aria-hidden="true">#</a> GEOM Modular Disk Transformation Framework and other common commands for disk management.</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># fdisk -s /dev/da0 # Print summary information about disk objects. Where /dev/da0, the disk object, represents the first hard disk of the machine, if not written the default shows the boot disk information. You can also write it as a slice or partition, such as /dev/da0s1 and /dev/da0s1a, where the hard disk is represented by da, starting from 0, the slice is represented by s, starting from 1, and the partition is represented by the letters a-h. /dev/da0s1a means the first partition of the first slice of the first hard disk, which is the representation of MBR. GPT is directly partitioned, so it uses p for partitions, starting from 1, /dev/da0p1 is the first partition of the first hard disk 

# dd if=/dev/zero of=/dev/da1 bs=1k count=1 # Clean up disk information 

# fdisk -BI /dev/da1 # initialize the disk, default MBR mode bsdlabel -w /dev/da1s1 # write bsdlabel 

# bsdlabel -e /dev/da1s1 # Edit with vi editor 

# bsdlabel geom -t #Tree structure to show disk object relationships

# geom disk lsit #List of used physical disks 

# geom disk status # Show status information for used physical disks 

# gpart list | geom part list #List of created partitions and partitions 

# gpart status | geom part status # Show the status of created partitions and partitions 

# gpart show /dev/da1 # Show information about used drives 

# gpart create -s GPT /dev/da1 #Create partition table for disk /dev/da1, in this case in GPT mode, you can also set MBR, APM, BSD, BSD64, LDM, VTOC8 

# gpart add -b 64 -s 2048m -t freebsd-ufs -i 2 -l root0 /dev/da1 # Create a new partition on disk /dev/da1. -b is the starting position; -s is the allocated space; -t is the partition format, you can use freebsd for partitioning, and freebsd-boot, freebsd-swap, freebsdzfs, etc.; -i is the index, in this case 2, i.e. the new partition is called /dev/da1p2; -l is the label newfs /dev/ da1p2 # format the partition 

# gpart modify -i 2 -t freebsd-zfs -l myroot /dev/da1 # Modify partition with index 2 on disk /dev/da1, both partition format and label can be modified 

# gpart resize -i 2 -s 4g /dev/da1 # resize the index 2 partition on disk /dev/da1 in k, m, g, t. Note that if you want to reduce the partition, the partition cannot be in use, which means that the system partition cannot be reduced by default; if you want to enlarge the partition, there must be free space behind the partition and no other partitions. This means that the system partition cannot be expanded by default. Therefore, when creating a FreeBSD virtual machine, you should take into account the possibility of using the system partition, or avoid using the system partition if possible 

# gpart bootcode -b /boot/mbr /dev/da1 # Write the boot code, commonly used in /boot/gptboot and /boot/boot 

# gpart set -a active -i 1 /dev/da0 # Set the active partition. When the partition table is MBR, bsdinstall and sade AGVDbNVutgwiep6615bjTJnQkScwWuUEMuU95NredRG5 

# gpart delete -i 2 /dev/da1 #Delete the partition with index 2 on disk /dev/da1 

# gpart destroy -F /dev/da1 #Destroy the information on disk /dev/da1, the -F parameter means force 

# mount /dev/da1p1 /data # Mount the partition /dev/da1p1 to the /data directory, use the chown command to set the attribution after mounting, if you want it to be mounted automatically after reboot, execute the command in terminal.
# printf &quot;/dev/da1p1t/datattufstrwt0t0n&quot; &gt;&gt; /etc/fstab 
# umount /data # unmount the /data directory 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Four more sets of examples are given below, for reference.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#1.MBR New partition after extended partition on system disk (assuming 50G disk space has been added to system disk) 

# gpart resize -i 1 -s 149g /dev/da0 #resize the partition /dev/da0s1 to 149G. Although the disk size is 150G, for technical reasons the actual space available is not that much 

# gpart add -t freebsd-ufs /dev/da0s1 # Add a partition to partition /dev/da0s1, type freebsd-ufs; if you do not specify the -s argument, all remaining space will be allocated to this partition 

# newfs /dev/da0s1d # Format the new partition. Note the name of the new partition here, since a is the boot partition, b is the swap partition, and c is already occupied by the partition itself, the new partition is allocated as d by default 
# mkdir /data 
# mount /dev/da0s1d /data 
# printf &quot;/dev/da0s1dt/datattufstrwt2t2n&quot; &gt;&gt; /etc/fstab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#2.MBR Create a partition after creating a new partition on the system disk (assuming 50G of disk space has been added to the system disk) 

# gpart add -t freebsd /dev/da0 # Add a partition to the secondary run /dev/da0, type freebsd. If you don&#39;t specify -s, you will allocate all remaining space to the partition 

# gpart create -s BSD /dev/da0s2 # Set the partition to take effect gpart add -t freebsd-ufs /dev/da0s2 # Add a partition to partition /dev/da0s2, type freebsd-ufs; if -s is not specified, all remaining space will be allocated to the partition 

# newfs /dev/da0s2a # Format the new partition. Since the current partition is the first partition on the current slice, the system default allocation is a 

# gpart set -a active -i 1 /dev/da0 # Set the active partition. This step is required if you create a new partition with bsdinstall or sade 
# mkdir /data mount /dev/da0s2a /data 
# printf &quot;/dev/da0s2at/datattufstrwt2t2n&quot; &gt;&gt; /etc/fstab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#3.GPT New partition on system disk (assuming 50G of disk space has been added to the system disk) 

# gpart add -t freebsd-ufs /dev/da0 # Add partition on disk /dev/da0, there is no concept of partition in GPT 

# newfs /dev/da0p4 # Format the new partition. Note the new partition name here, p1 is the boot partition, p2 is the system partition, and p3 is the swap partition, so the new partition defaults to p4 
# mkdir /data mount /dev/da0p4 /data 
# printf &quot;/dev/da0p4t/datattufstrwt2t2n&quot; &gt;&gt; /etc/fstab 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#4. GPT create data partition 

# gpart create -s GPT /dev/da1 # Set up the partition table for disk /dev/da1. If you want to use MBR partitions, change the value of the -s parameter to MBR 

# gpart add -t freebsd-ufs /dev/da1 # Add partition on disk /dev/da1, type freebsd-ufs 
# newfs /dev/da1p1 # Format the new partition. Since the current partition is the first partition on the current slice, the system default assignment is p1 
# mkdir /data mount /dev/da1p1 /data 
# printf &quot;/dev/da1p1t/datattufstrwt2t2n&quot; &gt;&gt; /etc/fstab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,50),d=[n];function r(o,l){return t(),i("div",null,d)}var p=e(s,[["render",r],["__file","12.1-overview.html.vue"]]);export{p as default};
