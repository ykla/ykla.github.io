import{_ as s,r as d,o as r,c as a,a as e,b as l,d as i,e as t}from"./app.af761329.js";var u="/assets/installPureFTPD.2bc65383.jpg";const o={},v=e("h1",{id:"_16-1-ftp-server",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_16-1-ftp-server","aria-hidden":"true"},"#"),i(" 16.1 FTP server")],-1),c=e("p",null,"FTP means File Transfer Protocol. Use FTP service to build a server to transfer files quickly.",-1),m=e("h2",{id:"pure-ftpd-with-mysql-support-as-an-example",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pure-ftpd-with-mysql-support-as-an-example","aria-hidden":"true"},"#"),i(" pure-ftpd (with MySQL support as an example)")],-1),b=e("strong",null,"Support for RFC 2640 has been removed, so i18n FTP files name under Windows are garbled, visit",-1),p=i(),h={href:"https://www.pureftpd.org/project/pure-ftpd/news/",target:"_blank",rel:"noopener noreferrer"},f=e("strong",null,"https://www.pureftpd.org/project/pure-ftpd/news/",-1),g=i(),L=e("strong",null,"Unable to fix, also not recommended to change the system encoding of Windows to UTF8, which will cause more garbled code, such as zip files.",-1),E=e("p",null,[e("strong",null,"Note: This example uses mysql 5.x as an example.")],-1),T=t(`<h3 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h3><p>Since the pkg package does not come with database support, you need to install the software via ports:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># /usr/ports/ftp/pure-ftpd
# make config-recursive
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Check mysql and leave the rest of the options as default and enter.</p><p><img src="`+u+`" alt=""></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># make install clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>Note: For basic mysql setup visit Chapter 17</strong></p><p><strong>Please install mysql yourself, it is theoretically compatible with mysql 5.x, 8.x</strong></p></blockquote><h3 id="configure-usr-local-etc-pure-ftpd-conf-file" tabindex="-1"><a class="header-anchor" href="#configure-usr-local-etc-pure-ftpd-conf-file" aria-hidden="true">#</a> Configure /usr/local/etc/pure-ftpd.conf file</h3><h4 id="generate-configuration-file" tabindex="-1"><a class="header-anchor" href="#generate-configuration-file" aria-hidden="true">#</a> Generate configuration file.</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cp /usr/local/etc/pure-ftpd.conf.sample /usr/local/etc/pure-ftpd.conf
# cp /usr/local/etc/pureftpd-mysql.conf.sample /usr/local/etc/pureftpd-mysql.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="edit-the-configuration-file-and-add-mysql-support-to" tabindex="-1"><a class="header-anchor" href="#edit-the-configuration-file-and-add-mysql-support-to" aria-hidden="true">#</a> Edit the configuration file and add mysql support to.</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#Compatible with non-regularized ftp clients like ie

BrokenClientsCompatibility yes

# Passive connection response port range.
PassivePortRange 30000 50000

# The smallest group ID (UID) that authenticated users are allowed to log in to.
MinUID 2000

# Allow only authenticated users for FXP transfers.
AllowUserFXP yes

# User home directory is created automatically if it does not exist.
CreateHomeDir yes

# MySQL configuration file (see README.MySQL)

MySQLConfigFile /usr/local/etc/pureftpd-mysql.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="configure-mysql" tabindex="-1"><a class="header-anchor" href="#configure-mysql" aria-hidden="true">#</a> Configure mysql</h3><h4 id="create-database" tabindex="-1"><a class="header-anchor" href="#create-database" aria-hidden="true">#</a> Create database</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>create database pureftp;
use pureftp;
DROP TABLE IF EXISTS \`users\`;
CREATE TABLE \`users\` (
   \`User\` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
   \`Password\` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
   \`Uid\` int(11) NOT NULL DEFAULT -1 COMMENT &#39;\u7528\u6237ID&#39;,
   \`Gid\` int(11) NOT NULL DEFAULT -1 COMMENT &#39;\u7528\u6237\u7EC4ID&#39;,
   \`Dir\` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
   \`quotafiles\` int(255) NULL DEFAULT 500,
   \`quotasize\` int(255) NULL DEFAULT 30,
   \`ulbandwidth\` int(255) NULL DEFAULT 80,
    \`dlbandwidth\` int(255) NULL DEFAULT 80,
   \`ipaddress\` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT&#39;*&#39;,
   \`comment\` int(255) NULL DEFAULT NULL,
   \`status\` tinyint(4) NULL DEFAULT 1,
   \`ulratio\` int(255) NULL DEFAULT 1,
   \`dlratio\` int(255) NULL DEFAULT 1,
   PRIMARY KEY (\`User\`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;
INSERT INTO \`users\` VALUES (&#39;demo&#39;, &#39;demo&amp;2022*&#39;, 2002, 2000, &#39;/home/www/demo&#39;, 500, 30, 80, 80, &#39;*&#39;, NULL, NULL, 1, 1);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="create-login-database-user-and-set-password" tabindex="-1"><a class="header-anchor" href="#create-login-database-user-and-set-password" aria-hidden="true">#</a> Create login database user and set password</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>grant select,insert,update,delete on pureftp.* to pftp@localhost identified by &quot;Ab123456&amp;&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="configure-usr-local-etc-pureftpd-mysql-conf" tabindex="-1"><a class="header-anchor" href="#configure-usr-local-etc-pureftpd-mysql-conf" aria-hidden="true">#</a> Configure <code>/usr/local/etc/pureftpd-mysql.conf</code></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>##############################################
# #
# Sample Pure-FTPd Mysql configuration file. #
# See README.MySQL for explanations. #
# #
##############################################


# Optional : MySQL server name or IP. Don&#39;t define this for unix sockets.

# MYSQLServer 127.0.0.1
MYSQLServer localhost


# Optional : MySQL port. Don&#39;t define this if a local unix socket is used.

MYSQLPort 3306


# Optional : define the location of mysql.sock if the server runs on this host.

MYSQLSocket /var/run/mysqld/mysqld.sock


# Mandatory : user to bind the server as.

MYSQLUser pftp


# Mandatory : user password. You must have a password.

MYSQLPassword Ab123456&amp;


# Mandatory : database to open.

MYSQLDatabase pureftpd


# Mandatory : how passwords are stored
# Valid values are : &quot;cleartext&quot;, &quot;argon2&quot;, &quot;scrypt&quot;, &quot;crypt&quot;, &quot;sha1&quot;, &quot;md5&quot;,password&quot; and &quot;any&quot;

# (&quot;password&quot; = MySQL password() function, which is sha1(sha1(password)))

#MYSQLCrypt scrypt
MYSQLCrypt cleartext


# In the following directives, parts of the strings are replaced at
# run-time before performing queries :
#
# \\L is replaced by the login of the user trying to authenticate.
# \\I is replaced by the IP address the user connected to.
# \\P is replaced by the port number the user connected to.
# \\R is replaced by the IP address the user connected from.
# \\D is replaced by the remote IP address, as a long decimal number.
#
# Very complex queries can be performed using these substitution strings,
# especially for virtual hosting.

# Query to execute in order to fetch the password

MYSQLGetPW SELECT Password FROM users WHERE User=&#39;\\L&#39;


# Query to execute in order to fetch the system user name or uid
MYSQLGetUID SELECT Uid FROM users WHERE User=&#39;\\L&#39;


# Optional : default UID - if set this overrides MYSQLGetUID

MYSQLDefaultUID 2000


# Query to execute in order to fetch the system user group or gid

MYSQLGetGID SELECT Gid FROM users WHERE User=&#39;\\L&#39;


# Optional : default GID - if set this overrides MYSQLGetGID

MYSQLDefaultGID 2000


# Query to execute in order to fetch the home directory

MYSQLGetDir SELECT Dir FROM users WHERE User=&#39;\\L&#39;


# Optional : query to get the maximal number of files
# Pure-FTPd must have been compiled with virtual quotas support.

# MySQLGetQTAFS SELECT QuotaFiles FROM users WHERE User=&#39;\\L&#39;


# Optional : query to get the maximal disk usage (virtual quotas)
# The number should be in Megabytes.
# Pure-FTPd must have been compiled with virtual quotas support.

# MySQLGetQTASZ SELECT QuotaSize FROM users WHERE User=&#39;\\L&#39;


# Optional : ratios. The server has to be compiled with ratio support.

# MySQLGetRatioUL SELECT ULRatio FROM users WHERE User=&#39;\\L&#39;
# MySQLGetRatioDL SELECT DLRatio FROM users WHERE User=&#39;\\L&#39;


# Optional : bandwidth throttling.
# The server has to be compiled with throttling support.
# Values are in KB/s .

# MySQLGetBandwidthUL SELECT ULBandwidth FROM users WHERE User=&#39;\\L&#39;
# MySQLGetBandwidthDL SELECT DLBandwidth FROM users WHERE User=&#39;\\L&#39;


# Enable ~ expansion. NEVER ENABLE THIS BLINDLY UNLESS :
# 1) You know what you are doing.
# 2) Real and virtual users match.

# MySQLForceTildeExpansion 1


# If you&#39;re using a transactionnal storage engine, you can enable SQL
# transactions to avoid races. Leave this commented if you are using the
# traditional MyIsam engine.

# MySQLTransactions On
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="add-ftp-group-and-user" tabindex="-1"><a class="header-anchor" href="#add-ftp-group-and-user" aria-hidden="true">#</a> Add ftp group and user</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># pw groupadd ftpgroup -g 2000
# pw useradd ftpuser -u 2001 -g 2000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>or</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># pw useradd ftpuser -u 2001 -g 2000 -s /sbin/nologin -w no -d /home/vftp -c &quot;VirtualUser Pure-FTPd&quot; -m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="configuring-ftp-directories" tabindex="-1"><a class="header-anchor" href="#configuring-ftp-directories" aria-hidden="true">#</a> Configuring FTP directories</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># mkdir /home/www/pureftp
# chown -R ftpuser /home/www/
# chgrp -R ftpgroup /home/www/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="service-operations" tabindex="-1"><a class="header-anchor" href="#service-operations" aria-hidden="true">#</a> Service Operations</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># sysrc pureftpd_enable=&quot;YES&quot;
# service pure-ftpd start   #Start the server
# service pure-ftpd stop    #stop the server
# service pure-ftpd restart #restart the server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="proftpd-with-mysql-support-as-an-example" tabindex="-1"><a class="header-anchor" href="#proftpd-with-mysql-support-as-an-example" aria-hidden="true">#</a> proftpd (with mysql support as an example)</h2><h2 id="install-proftpd-with-mysql-support-as-an-example" tabindex="-1"><a class="header-anchor" href="#install-proftpd-with-mysql-support-as-an-example" aria-hidden="true">#</a> Install proftpd (with mysql support as an example)</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># pkg install proftpd proftpd-mod_sql_mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="edit-usr-local-etc-proftpd-conf" tabindex="-1"><a class="header-anchor" href="#edit-usr-local-etc-proftpd-conf" aria-hidden="true">#</a> edit /usr/local/etc/proftpd.conf</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cat /usr/local/etc/proftpd.conf
ServerName &quot;Test Ftp Server&quot;
ServerType standalone
DefaultServer on
ServerIdent on &quot;FTP Server ready&quot;
DeferWelcome off
Port 21
Umask 022
TimeoutLogin 300
TimeoutIdle 36000
TimeoutNoTransfer 36000
TimeoutStalled 36000
TimeoutSession 0
User proftpd
Group proftpd
MaxInstances 100
MaxClientsPerHost 100
AllowRetrieveRestart on
AllowStoreRestart on
AllowOverwrite on
AllowOverride off
RootLogin off
IdentLookups off
UseReverseDNS off
DenyFilter \\*.*/
TimesGMT off
DefaultRoot ~
#RLimitCPU 1200 1200
RLimitMemory 256M 256M
RLimitOpenFiles 1024 1024
PassivePorts 50000 60000
LogFormat default &quot;%h %l %u %t \\&quot;%r\\&quot; %s %b&quot;
LogFormat auth &quot;%v [%P] %h %t \\&quot;%r\\&quot; %s&quot;
LogFormat write &quot;%h %l %u %t \\&quot;%r\\&quot; %s %b&quot;
SystemLog /var/log/proftpd/proftpd.log
TransferLog /var/log/proftpd/xfer.log
ExtendedLog /var/log/proftpd/access.log WRITE,READ write
ExtendedLog /var/log/proftpd/auth.log AUTH auth
LoadModule mod_sql.c
LoadModule mod_sql_mysql.c
&lt;Global&gt;
   SQLConnectInfo proftpd@localhost proftpd proftpd_password
   SQLAuthTypes Crypt
   SQLUserInfo users username password uid gid homedir NULL
   SQLDefaultGID 2000
   SQLDefaultUID 2000
   RequireValidShell off
   SQLAuthenticate users*
   SQLLogFile /var/log/proftpd.log
   SQLNamedQuery getcount SELECT &quot;count, username from users where username=&#39;%u&#39;&quot;
   SQLNamedQuery updatecount UPDATE &quot;count=count+1 WHERE username=&#39;%u&#39;&quot; users
   SQLShowInfo PASS &quot;230&quot; &quot;You&#39;ve logged on %{getcount} times, %u&quot;
   SQLLog PASS updatecount
   SQLLog DELE,RETR,STOR, log_work
   SQLNamedQuery log_work FREEFORM &quot;\\
   INSERT INTO worklog (\\
   user_name,\\
   file_and_path,\\
   bytes,\\
   send_time,\\
   client_ip,\\
   client_name,\\
   client_command) \\
  VALUES(&#39;%u&#39;,&#39;%f&#39;,&#39;%b&#39;,&#39;%T&#39;,&#39;%a&#39;,&#39;%h&#39;,&#39;%m&#39;)&quot;
&lt;/Global&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>We specify in the settings that the server will work on port 21 in active mode and in the range of 50000-60000 in passive mode. These ports should be open in the firewall. For PF, this is done by the following rules.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>pass in quick on $ext_if proto tcp from any to $ext_if port { 21, 50000:60000 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="create-user" tabindex="-1"><a class="header-anchor" href="#create-user" aria-hidden="true">#</a> Create User</h3><p>For security purposes, we will run Proftpd as a non-root user. Therefore, we will create this user.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># adduser
Username: proftpd
Full name: FTP User
Uid (Leave empty for default):
Login group [proftpd]:
Login group is proftpd. Invite proftpd into other groups? []:
Login class [default]:
Shell (sh csh tcsh bash nologin) [sh]: nologin
Home directory [/home/proftpd]:
Home directory permissions (Leave empty for default):
Use password-based authentication? [yes]: no
Lock out the account after creation? [no]:
Username : proftpd
Password : &lt;disabled&gt;
Full Name : FTP User
Uid : 2000
Class :
Groups : proftpd
Home : /home/proftpd
Shell : /usr/sbin/nologin
Locked : no
OK? (yes/no): yes
adduser: INFO: Successfully added (proftpd) to the user database.
Add another user? (yes/no): no
Goodbye!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now you have created your own proftpd user and group ID. So you will use it when adding ftp users. You can determine the UID in the following way.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cat /etc/passwd | grep proftpd
proftpd:*:2000:2000:FTP User:/home/proftpd:/usr/sbin/nologin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="logging-related" tabindex="-1"><a class="header-anchor" href="#logging-related" aria-hidden="true">#</a> Logging related</h3><p>Create a directory to store the FTP server&#39;s logs in.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># mkdir /var/log/proftpd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Create a MySQL database and a user with full access rights to the created database:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>CREATE DATABASE \`proftpd\` CHARACTER SET utf8 COLLATE utf8_general_ci;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Create the database user and password (to authorize the proftpd database).</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>grant select,insert,update,delete on proftpd.* to pftp@localhost identified by &quot;123456&quot;;
FLUSH PRIVILEGES;  #Effective immediately permission
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>or</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>grant select,insert,update,delete on *.* to pftp@&quot;localhost&quot; Identified by &quot;123456&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Volume of data created.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>DROP TABLE IF EXISTS users;
CREATE TABLE \`users\` (
   \`username\` varchar(30) NOT NULL DEFAULT &#39;&#39;,
   \`descr\` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
   \`password\` varchar(30) NOT NULL DEFAULT &#39;&#39;,
   \`uid\` int(11) DEFAULT NULL,
   \`gid\` int(11) DEFAULT NULL,
   \`homedir\` varchar(255) DEFAULT NULL,
   \`shell\` varchar(255) DEFAULT NULL,
   \`count\` int(11) NOT NULL DEFAULT &#39;0&#39;,
  UNIQUE KEY \`username\` (\`username\`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;
DROP TABLE IF EXISTS worklog;
CREATE TABLE worklog (
   id bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
   date timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
   user_name varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
   file_and_path varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
   bytes bigint(20) NULL DEFAULT NULL,
   send_time varchar(9) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
   client_ip varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
   client_name text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
   client_command varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
   PRIMARY KEY (id) USING BTREE,
   UNIQUE INDEX id(id) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Create a directory and a test FTP user, designating the created directory as the user directory:.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># mkdir -p /home/www/ftp
# chown -R proftpd:proftpd /home/www/ftp
# mysql -u proftpd -p
INSERT INTO \`proftpd\`.\`users\` (\`username\` , \`descr\` , \`password\` , \`uid\` , \`gid\` ,\`homedir\` , \`shell\` , \`count\` ) VALUES (&#39;test&#39;, &#39;Test user&#39;, ENCRYPT(&#39;FTPpassword_here&#39; ) , &#39;2000&#39;, &#39;2000&#39;, &#39;/home/www/ftp&#39;, NULL , &#39;0&#39; );

Query OK, 1 row affected, 1 warning (0.02 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="service-operation" tabindex="-1"><a class="header-anchor" href="#service-operation" aria-hidden="true">#</a> Service Operation</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># sysrc  proftpd_enable=&quot;YES&quot;

# service proftpd start #Start the server

# service proftpd stop #Stop the server

# service proftpd restart #Restart the server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="connecting-to-an-ftp-server" tabindex="-1"><a class="header-anchor" href="#connecting-to-an-ftp-server" aria-hidden="true">#</a> Connecting to an FTP server</h2><p>Simple example:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># telnet localhost 21
Trying 127.0.0.1...
Connected to localhost.
Escape character is &#39;^]&#39;.
220 FTP Server ready
quit
221 Goodbye.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Use the <code>ftp</code> command to quickly connect to an FTP server.</p><p>Usage:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ftp [option] [URL]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Options.</p><p><code>-4</code> Force a connection using the IPv4 protocol</p><p><code>-6</code> Force connection using IPv6 protocol</p><p><code>-a</code> Use anonymous login</p><p><code>-q</code> [quittime] Automatically drop the connection if it fails after a set time</p><p><code>-r</code> [wait] Send connection requests every <code>wait</code> seconds</p><p><code>-A</code> force active mode</p><p><code>-d</code> Enable debug mode</p><p><code>-v</code> Enable verbose mode</p><p><code>-V</code> turn off verbose mode</p><h4 id="login-with-the-following-command" tabindex="-1"><a class="header-anchor" href="#login-with-the-following-command" aria-hidden="true">#</a> Login with the following command.</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>account [passwd] submit additional password

append [locol-file] [remote-file] Upload local file to server with remote-file as filename local-file

ascii Set the FTP file transfer type to ASCII mode.

bell Beep after the file is transferred

bye End the session with the server

cd switch directories

cdup Return to the parent directory

delete Delete the file

dir Shows the files and folders in this directory

features Show the features supported by the server

get remote-fil Download the remote-file on the server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,72);function x(y,S){const n=d("ExternalLinkIcon");return r(),a("div",null,[v,c,m,e("blockquote",null,[e("p",null,[b,p,e("a",h,[f,l(n)]),g,L]),E]),T])}var U=s(o,[["render",x],["__file","16.1-ftp-server.html.vue"]]);export{U as default};
