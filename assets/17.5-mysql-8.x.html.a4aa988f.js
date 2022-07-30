import{_ as e,o as i,c as n,e as s}from"./app.af761329.js";const a={},r=s(`<h1 id="_17-5-mysql-8-x" tabindex="-1"><a class="header-anchor" href="#_17-5-mysql-8-x" aria-hidden="true">#</a> 17.5 MySQL 8.X</h1><h2 id="mysql-80" tabindex="-1"><a class="header-anchor" href="#mysql-80" aria-hidden="true">#</a> mysql 80</h2><h3 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># pkg install mysql80-server

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>or</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cd /usr/ports/databases/mysql80-server/ &amp;&amp; make install clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="start-service" tabindex="-1"><a class="header-anchor" href="#start-service" aria-hidden="true">#</a> Start Service</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># sysrc mysql_enable=&quot;YES&quot;
# service  mysql-server start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="login" tabindex="-1"><a class="header-anchor" href="#login" aria-hidden="true">#</a> login</h3><p>mysql 8.0 default password is empty, just enter it directly.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>root@ykla:~ # mysql -uroot -p
Enter password: 
Welcome to the MySQL monitor.  Commands end with ; or g.
Your MySQL connection id is 8
Server version: 8.0.27 Source distribution

Copyright (c) 2000, 2021, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type &#39;help;&#39; or &#39;h&#39; for help. Type &#39;c&#39; to clear the current input statement.

root@localhost [(none)]&gt; 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="change-password" tabindex="-1"><a class="header-anchor" href="#change-password" aria-hidden="true">#</a> Change password</h3><p>Set the password to <code>z</code> and refresh the permissions.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>root@localhost [(none)]&gt; alter user &#39;root&#39;@&#39;localhost&#39; identified by &#39;z&#39;;
Query OK, 0 rows affected (0.02 sec)

root@localhost [(none)]&gt; flush privileges;
Query OK, 0 rows affected (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Relogin.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>root@localhost [(none)]&gt; quit;
Bye
root@ykla:~ # mysql -uroot -p
Enter password: 
Welcome to the MySQL monitor.  Commands end with ; or g.
Your MySQL connection id is 9
Server version: 8.0.27 Source distribution

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
4 rows in set (0.01 sec)

root@localhost [(none)]&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),d=[r];function l(t,c){return i(),n("div",null,d)}var v=e(a,[["render",l],["__file","17.5-mysql-8.x.html.vue"]]);export{v as default};
