import{_ as e,o as t,c as i,e as s}from"./app.eb802b87.js";const r={},o=s(`<h1 id="_8-4-user-permissions" tabindex="-1"><a class="header-anchor" href="#_8-4-user-permissions" aria-hidden="true">#</a> 8.4 User Permissions</h1><p>FreeBSD file access privileges can be illustrated by 10 flag bits, which are composed of 4 parts.</p><p>The first part is bit 1, denoted by d for directories, - for normal files, l for links, b for block device files, p for pipe files, c for character device files, and s for socket files.</p><p>The second part is bits 2-4, which identifies the access rights of the user to the file, using <code>rwx</code> for read, write, and execute rights, and - for no rights.</p><p>The third part is bits 5-7, which are used to identify the access rights to the file by the members of the group to which the file belongs, refer to the second part for the identification.</p><p>The fourth part is bits 8-10, which identifies the access rights of other users to the file.</p><p>Read, write, and execute can also be represented by the numbers 4, 2, and 1 in addition to rwx, and 0 for no privileges. The numbers of each part are added together to form a 3-digit representation.</p><p>For example:</p><table><thead><tr><th style="text-align:center;">Character identifier permissions</th><th style="text-align:center;">Number identifier permissions</th><th style="text-align:center;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">-rwxrwxrwx</td><td style="text-align:center;">777</td><td style="text-align:center;">Common files that can be read, written, and executed by everyone</td></tr><tr><td style="text-align:center;">drw-------</td><td style="text-align:center;">600</td><td style="text-align:center;">This is a directory that can only be read and written to by the user it belongs to</td></tr><tr><td style="text-align:center;">-rwxr-xr-x</td><td style="text-align:center;">755</td><td style="text-align:center;">A normal file that can be read, written, or executed by the user it belongs to, but can only be read or executed by the same group of users or other users, not written to.</td></tr></tbody></table><ol><li>ls command, list the files, common parameters.</li></ol><p><code>-l</code>, list file information, including permissions, owner, file size, date and time of modification, etc., you can also use ll command directly</p><p><code>-a</code>, the hidden files should also be displayed</p><p>Example:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ls -l -a # list all files including hidden files 
# ll -a # Same effect as the above example 
# ls -l /tmp/a.log # list the /tmp/a.log file 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>The chmod command, which modifies file access rights, can be used in two ways.</li></ol><p>One is the operator way, such as.</p><p><code># chmod a+x t.sh</code> In &quot;a+x&quot;:</p><p>The first bit is the operation object, <code>u</code> is the user, <code>g</code> is the group, <code>o</code> is other users, and <code>a</code> is all users, not written as the system default;</p><p>The second bit is the operator, + is to add permissions, - is to reduce permissions;</p><p>The third bit is the permission mode, <code>rwx</code> means read, write and execute respectively, and <code>s</code> means the process owner or group is set to be the same as the file owner or group when the file is executed, which is more intuitive to use.</p><p>Another way is numeric, e.g. chmod 750 t.sh</p><p>where 7 means the user has read, write, and execute privileges, and the same group has read and execute privileges, while the other users have no privileges at all.</p><p>Then <code>chmod</code> has one more important parameter.</p><p><code> -R</code>, recursive assignment</p><p>Example:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># chmod -R 777 /tmp #All files in the /tmp directory will be read, written, and executed by any user 
# chmod -R a+rwx /tmp # All files in the /tmp directory will be allowed to be read, written, and executed by any user 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><code>chown</code> command, modify the owner of the file, including the user and group it belongs to.</li></ol><p>Common parameters.</p><p><code>-R</code>, recursive assignment</p><p>Example:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># chown test1 t.sh # Modify t.sh to belong to user test1 
# chown test1:test t.sh # Modify t.sh to belong to user test1, group test 
# chown -R test1:test /tmp # Modify the ownership of all files in the /tmp directory to user test1, group test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),n=[o];function a(d,l){return t(),i("div",null,n)}var h=e(r,[["render",a],["__file","8.4-user-privileges.html.vue"]]);export{h as default};