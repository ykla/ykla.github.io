import{_ as e,o as n,c as i,e as a}from"./app.67d48eef.js";var s="/assets/image.6fdfaf09.png";const r={},t=a('<h1 id="_16-11-rsync-synchronization-service" tabindex="-1"><a class="header-anchor" href="#_16-11-rsync-synchronization-service" aria-hidden="true">#</a> 16.11 rsync synchronization service</h1><p><img src="'+s+`" alt=""></p><h2 id="environment-introduction" tabindex="-1"><a class="header-anchor" href="#environment-introduction" aria-hidden="true">#</a> Environment introduction</h2><p>Server A, Server B both <code>FreeBSD-12.2-RELEASE-amd64</code></p><p>Server A (initiator): <code>192.168.100.10/24</code></p><p>Server B (synchronization source): <code>192.168.100.20/24</code></p><p><strong>Requirements</strong> : To synchronize data from Server B to Server A</p><h2 id="server-b-sync-source-configuration" tabindex="-1"><a class="header-anchor" href="#server-b-sync-source-configuration" aria-hidden="true">#</a> Server B (sync source) configuration</h2><h3 id="install-rsync-package" tabindex="-1"><a class="header-anchor" href="#install-rsync-package" aria-hidden="true">#</a> Install rsync package</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>## pkg install -y rsync
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="query-for-information-on-installed-rsync-packages" tabindex="-1"><a class="header-anchor" href="#query-for-information-on-installed-rsync-packages" aria-hidden="true">#</a> Query for information on installed rsync packages</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># pkg info | grep rsync 
rsync-3.2.3            
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="create-a-new-test-folder-to-be-backed-up-and-set-its-owner-to-root-and-create-a-new-test-file-inside-it" tabindex="-1"><a class="header-anchor" href="#create-a-new-test-folder-to-be-backed-up-and-set-its-owner-to-root-and-create-a-new-test-file-inside-it" aria-hidden="true">#</a> Create a new <code>test</code> folder to be backed up and set its owner to <code>root</code> and create a new test file inside it</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># mkdir test
# chown root /home/test/
# touch txt001 /home/test/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="edit-the-rsyncd-conf-file" tabindex="-1"><a class="header-anchor" href="#edit-the-rsyncd-conf-file" aria-hidden="true">#</a> Edit the <code>rsyncd.conf</code> file</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ee /usr/local/etc/rsync/rsyncd.conf

uid = root // user of the server OS
gid = wheel // group of the server OS user
use chroot = yes //banned in the source directory
address = 192.168.100.20 //listening address
port 873 // TCP port for communication, the default is 873
log file = /var/log/rsyncd.log //log file location
pid file = /var/run/rsyncd.pid //file location for archived process IDs
hosts allow = 192.168.100.0/24 //addresses of clients allowed to access

[testcom] // name of the shared module, a custom name, not necessarily the same as the sync directory
path = /home/test //name of the synchronized directory, must be the user specified by the uid parameter and the group specified by the gid parameter
comment = testcombackup //module description text     
read only = yes // whether to be read only
dont compress = *.gz *.tgz *.zip *.z *.Z *.rpm *.deb *.bz2 //the type of file that is no longer compressed when synchronizing

auth users = root //authorized accounts
secrets file = /etc/rsyncd_users.db //define the password file for rsync client user authentication
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="create-password-file-for-authorized-backup-account-authentication" tabindex="-1"><a class="header-anchor" href="#create-password-file-for-authorized-backup-account-authentication" aria-hidden="true">#</a> Create password file for authorized backup account authentication</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ee /etc/rsyncd_users.db

root:12345678 //format: authorized account username:password
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="modify-data-file-permissions" tabindex="-1"><a class="header-anchor" href="#modify-data-file-permissions" aria-hidden="true">#</a> Modify data file permissions</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># chmod 600 /etc/rsyncd_users.db
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>rsync&#39;s service name is rsyncd, start the rsync service program</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># rsync --daemon // start the service

# sysnc rsyncd_enable=&quot;YES&quot; //set boot-up

# /usr/local/etc/rc.d/rsyncd start //start the service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="view-rsync-running-port-number" tabindex="-1"><a class="header-anchor" href="#view-rsync-running-port-number" aria-hidden="true">#</a> <strong>View rsync running port number</strong></h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># sockstat | grep rsync
root rsync 1185 4 dgram -&gt; /var/run/logpriv
root rsync 1185 5 tcp4 192.168.100.20:873 *:* 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="firewall-release-for-rsync-service" tabindex="-1"><a class="header-anchor" href="#firewall-release-for-rsync-service" aria-hidden="true">#</a> <strong>Firewall release for rsync service</strong></h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ee /etc/ipfw.rules 

IPF=&quot;ipfw -q add&quot;
ipfw -q -f flush

#loopback 
$IPF 10 allow all from any to any via lo0
$IPF 20 deny all from any to 127.0.0.0/8
$IPF 30 deny all from 127.0.0.0/8 to any
$IPF 40 deny tcp from any to any frag

# statefull
$IPF 50 check-state
$IPF 60 allow tcp from any to any established
$IPF 70 allow all from any to any out keep-state
$IPF 80 allow icmp from any to any

# open port for ssh
$IPF 110 allow tcp from any to any 22 out
$IPF 120 allow tcp from any to any 22 in

# open port for rsync
$IPF 130 allow tcp from any to any 873 in  

# deny and log everything 
$IPF 500 deny log all from any to any
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="server-a-initiator-configuration" tabindex="-1"><a class="header-anchor" href="#server-a-initiator-configuration" aria-hidden="true">#</a> Server A (initiator) configuration</h2><h3 id="create-local-folder-home-testbackup-and-set-permissions-for-it" tabindex="-1"><a class="header-anchor" href="#create-local-folder-home-testbackup-and-set-permissions-for-it" aria-hidden="true">#</a> <strong>Create local folder <code>/home/testBackUp/</code> and set permissions for it</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>## mkdir testBackUp
# chown root:root testBackUp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="the-initiator-accesses-the-sync-source-and-downloads-the-files-to-the-local-home-testbackup-download-directory-requiring-human-interaction-to-manually-enter-the-password" tabindex="-1"><a class="header-anchor" href="#the-initiator-accesses-the-sync-source-and-downloads-the-files-to-the-local-home-testbackup-download-directory-requiring-human-interaction-to-manually-enter-the-password" aria-hidden="true">#</a> <strong>The initiator accesses the sync source and downloads the files to the local <code>/home/testBackUp/</code> download directory, requiring human interaction to manually enter the password</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># rsync -avz root@192.168.100.20::testcom /home/testBackUp     
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="check-sync-status" tabindex="-1"><a class="header-anchor" href="#check-sync-status" aria-hidden="true">#</a> Check sync status</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ls -l /home/testBackUp/
total 0
-rw-r--r-- 1 root root 0 Feb 2 22:27 txt001
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33),d=[t];function c(o,l){return n(),i("div",null,d)}var v=e(r,[["render",c],["__file","16.11-rsync-synchronization-service.html.vue"]]);export{v as default};
