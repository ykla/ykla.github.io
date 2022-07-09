import{_ as e,o as n,c as i,e as s}from"./app.69650211.js";const a={},l=s(`<h1 id="_17-4-mysql-5-x" tabindex="-1"><a class="header-anchor" href="#_17-4-mysql-5-x" aria-hidden="true">#</a> 17.4 MySQL 5.X</h1><h2 id="mysql-5-5-please-refer-to-5-6-5-6" tabindex="-1"><a class="header-anchor" href="#mysql-5-5-please-refer-to-5-6-5-6" aria-hidden="true">#</a> mysql 5.5 (please refer to 5.6)/5.6</h2><h3 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># pkg install mysql56-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>or</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cd /usr/ports/databases/mysql56-server/ &amp;&amp; make install clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="start-service" tabindex="-1"><a class="header-anchor" href="#start-service" aria-hidden="true">#</a> Start Service</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># sysrc mysql_enable=&quot;YES&quot;
# service mysql-server start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># mysql_secure_installation
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>root@ykla:~ # mysql_secure_installation


NOTE: RUNNING ALL PARTS OF THIS SCRIPT IS RECOMMENDED FOR ALL MySQL
      SERVERS IN PRODUCTION USE!  PLEASE READ EACH STEP CAREFULLY!

In order to log into MySQL to secure it, we&#39;ll need the current
password for the root user.  If you&#39;ve just installed MySQL, and
you haven&#39;t set the root password yet, the password will be blank,
so you should just press enter here.


Enter current password for root (enter for none): 
OK, successfully used password, moving on...

Setting the root password ensures that nobody can log into the MySQL
root user without the proper authorisation.

Set root password? [Y/n] y
New password: 
Re-enter new password: 
Password updated successfully!
Reloading privilege tables..
 ... Success!


By default, a MySQL installation has an anonymous user, allowing anyone
to log into MySQL without having to have a user account created for
them.  This is intended only for testing, and to make the installation
go a bit smoother.  You should remove them before moving into a
production environment.

Remove anonymous users? [Y/n] y
 ... Success!

Normally, root should only be allowed to connect from &#39;localhost&#39;.  This
ensures that someone cannot guess at the root password from the network.

Disallow root login remotely? [Y/n] n
 ... skipping.

By default, MySQL comes with a database named &#39;test&#39; that anyone can
access.  This is also intended only for testing, and should be removed
before moving into a production environment.

Remove test database and access to it? [Y/n] n
 ... skipping.

Reloading the privilege tables will ensure that all changes made so far
will take effect immediately.

Reload privilege tables now? [Y/n] 
 ... Success!




All done!  If you&#39;ve completed all of the above steps, your MySQL
installation should now be secure.

Thanks for using MySQL!


Cleaning up...

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="use" tabindex="-1"><a class="header-anchor" href="#use" aria-hidden="true">#</a> Use</h3><p>Login</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># mysql -u root -p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Example Output</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>root@ykla:~ # mysql -u root -p
Enter password: 
Welcome to the MySQL monitor.  Commands end with ; or g.
Your MySQL connection id is 12
Server version: 5.6.51 Source distribution

Copyright (c) 2000, 2021, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type &#39;help;&#39; or &#39;h&#39; for help. Type &#39;c&#39; to clear the current input statement.

mysql&gt; show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| test               |
+--------------------+
4 rows in set (0.00 sec)

mysql&gt; 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql-5-7" tabindex="-1"><a class="header-anchor" href="#mysql-5-7" aria-hidden="true">#</a> mysql 5.7</h2><p>Note: If you are upgrading from an older version, please execute <code>mysql_upgrade</code> first</p><h3 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h3><p>Choose one of the following two</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># pkg install mysql57-server
# or
# cd /usr/ports/databases/mysql57-server/ &amp;&amp; make install clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="start-the-service" tabindex="-1"><a class="header-anchor" href="#start-the-service" aria-hidden="true">#</a> Start the service</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># sysrc mysql_enable=YES
# service mysql-server start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Example output (you can see that the password is under the <code>/root/.mysql_secret</code> folder and is <code>q(&lt;p2ZZ&gt;lX/:</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>root@ykla:~ # sysrc mysql_enable=YES
mysql_enable:  -&gt; YES
root@ykla:~ # service mysql-server start
Starting mysql.
root@ykla:~ # cat /root/.mysql_secret
# Password set for user &#39;root@localhost&#39; at 2021-12-13 00:21:02 
q(&lt;p2ZZ&gt;lX/:
root@ykla:~ # 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="trying-to-log-in" tabindex="-1"><a class="header-anchor" href="#trying-to-log-in" aria-hidden="true">#</a> Trying to log in</h3><p>An error is reported for logging in, indicating that the password needs to be changed.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>root@ykla:~ # mysql -u root -p
Enter password: 
Welcome to the MySQL monitor.  Commands end with ; or g.
Your MySQL connection id is 2
Server version: 5.7.36-log

Copyright (c) 2000, 2021, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type &#39;help;&#39; or &#39;h&#39; for help. Type &#39;c&#39; to clear the current input statement.

root@localhost [(none)]&gt; show databases;
ERROR 1820 (HY000): You must reset your password using ALTER USER statement before executing this statement.
root@localhost [(none)]&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="change-password" tabindex="-1"><a class="header-anchor" href="#change-password" aria-hidden="true">#</a> Change password</h3><p>Change the current password to <code>your_new_password</code> and refresh the permissions.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>root@localhost [(none)]&gt; SET PASSWORD = PASSWORD(&#39;your_new_password&#39;);
Query OK, 0 rows affected, 1 warning (0.00 sec)
root@localhost [(none)]&gt; flush privileges;
Query OK, 0 rows affected (0.00 sec)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Normal Login</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>root@ykla:~ # mysql -u root -p
Enter password: 
Welcome to the MySQL monitor.  Commands end with ; or g.
Your MySQL connection id is 3
Server version: 5.7.36-log Source distribution

Copyright (c) 2000, 2021, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type &#39;help;&#39; or &#39;h&#39; for help. Type &#39;c&#39; to clear the current input statement.

root@localhost [(none)]&gt; show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
4 rows in set (0.00 sec)

root@localhost [(none)]&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34),d=[l];function r(t,o){return n(),i("div",null,d)}var c=e(a,[["render",r],["__file","17.4-mysql-5.x.html.vue"]]);export{c as default};
