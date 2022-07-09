import{_ as e,o as a,c as r,e as t}from"./app.4897455b.js";const i={},o=t('<h1 id="_12-3-raid-1" tabindex="-1"><a class="header-anchor" href="#_12-3-raid-1" aria-hidden="true">#</a> 12.3 RAID 1</h1><p><img src="https://pic4.zhimg.com/80/v2-ce32cc051e177ba0b56609147e210fb1_720w.jpg" alt="img"></p><p><strong>Implementation:</strong> RAID 1 uses two identical disk systems to mirror each other, storing data on the primary drive while also writing the same data on the mirror drive. When the main hard disk is damaged, the mirror hard disk works instead of the main hard disk.</p><p><strong>RAID1 data recovery:</strong> If any disk is damaged, you can immediately recover data from the mirror disk. For example, if the above figure <code>Disk0</code> is damaged resulting in data loss, we can replace the failed disk with a new disk, read the data from <code>Disk1</code>, and copy it to the new disk, thus achieving data recovery.</p><p><strong>Application Scenario:</strong> RAID 1 is used in applications that require high sequential read/write performance and attach great importance to data protection. For example: servers, database storage field.</p><p><strong>Minimum number of drives:</strong> Minimum 2 drives required to create RAID 1</p><p><strong>Available Capacity:</strong> The actual number of available drives is half of the total number of drives</p>',7),s=[o];function d(n,c){return a(),r("div",null,s)}var m=e(i,[["render",d],["__file","12.3-raid-1.html.vue"]]);export{m as default};
