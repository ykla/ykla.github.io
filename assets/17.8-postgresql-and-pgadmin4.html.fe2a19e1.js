import{_ as e,o as i,c as n,e as a}from"./app.472fbc00.js";var s="/assets/pgl.81aad7bc.png",t="/assets/l2.951fc170.png",d="/assets/13.68c54693.png";const l={},r=a(`<h1 id="_17-8-postgresql-and-pgadmin4" tabindex="-1"><a class="header-anchor" href="#_17-8-postgresql-and-pgadmin4" aria-hidden="true">#</a> 17.8 PostgreSQL and pgAdmin4</h1><h2 id="postgresql" tabindex="-1"><a class="header-anchor" href="#postgresql" aria-hidden="true">#</a> PostgreSQL</h2><p>PostgreSQL is a free object-relational database, first released in June 1989. On FreeBSD, a total of 6 major releases are available, 9.6, 10, 11, 12, 13, and 14.</p><h3 id="postgresql-installation-example-for-all-6-versions" tabindex="-1"><a class="header-anchor" href="#postgresql-installation-example-for-all-6-versions" aria-hidden="true">#</a> postgresql installation example, for all 6 versions.</h3><h4 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> installation</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>## pkg install -y postgresql96-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>or</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /usr/ports/databases/postgresql96-server/ &amp;&amp; make install clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="add-boot-items" tabindex="-1"><a class="header-anchor" href="#add-boot-items" aria-hidden="true">#</a> add boot items</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># sysrc postgresql_enable=YES
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="initialize-the-database" tabindex="-1"><a class="header-anchor" href="#initialize-the-database" aria-hidden="true">#</a> Initialize the database</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/usr/local/etc/rc.d/postgresql initdb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Example output.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>root@ykla:~ # /usr/local/etc/rc.d/postgresql initdb
The files belonging to this database system will be owned by user &quot;postgres&quot;.
This user must also own the server process.

The database cluster will be initialized with locales
  COLLATE:  C
  CTYPE:    C.UTF-8
  MESSAGES: C.UTF-8
  MONETARY: C.UTF-8
  NUMERIC:  C.UTF-8
  TIME:     C.UTF-8
The default text search configuration will be set to &quot;english&quot;.

Data page checksums are disabled.

creating directory /var/db/postgres/data96 ... ok
creating subdirectories ... ok
selecting default max_connections ... 100
selecting default shared_buffers ... 128MB
selecting default timezone ... PRC
selecting dynamic shared memory implementation ... posix
creating configuration files ... ok
running bootstrap script ... ok
performing post-bootstrap initialization ... ok
syncing data to disk ... ok

WARNING: enabling &quot;trust&quot; authentication for local connections
You can change this by editing pg_hba.conf or using the option -A, or
--auth-local and --auth-host, the next time you run initdb.

Success. You can now start the database server using:

    /usr/local/bin/pg_ctl -D /var/db/postgres/data96 -l logfile start

root@ykla:~ # 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="login-usage" tabindex="-1"><a class="header-anchor" href="#login-usage" aria-hidden="true">#</a> Login Usage</h4><p>Postgresql does not have a root user by default, so you need to log in with the postgres user it created.</p><p>Example output:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>root@ykla:~ # psql
psql: FATAL: role &quot;root&quot; does not exist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Correct usage.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># switch users
root@ykla:~ # su - postgres  

# Start the service
$ /usr/local/bin/pg_ctl -D /var/db/postgres/data96 -l logfile start

# Create a new user ykla and set a password
$ createuser -sdrP ykla
Enter password for new role: 
Enter it again: 
$ 
# create database
$ createdb new_db
# Log in to the database and give database privileges to user ykla.
$ psql
psql (9.6.24)
Type &quot;help&quot; for help.

postgres=# ALTER USER ykla WITH ENCRYPTED PASSWORD &#39;password&#39;;
ALTER ROLE
postgres=# 
postgres=# GRANT ALL PRIVILEGES ON DATABASE new_db TO ykla;
GRANT
# Quit the database
postgres=# q
$exit
root@ykla:~ #
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="installing-pgadmin4" tabindex="-1"><a class="header-anchor" href="#installing-pgadmin4" aria-hidden="true">#</a> Installing pgAdmin4</h2><p>The following tutorial is based on FreeBSD 13.0.</p><p>pgAdmin4 is the most popular open source application for managing PostgreSQL database servers. pgAdmin4 provides a feature-rich graphical user interface to easily manage databases. It is written in Python and Javascript/ jQuery. It can be used in multiple environments such as Linux, Windows, Unix, and can be used in both desktop and server mode.</p><p><strong>Note: Install the PostgreSQL database before installing pgAdmin4, otherwise the installation of pgAdmin4 will fail.</strong> pgAdmin4 needs to be installed in python.</p><p>pgAdmin4 needs to run in python environment, and the installation should be done via pip of python, so install python first. The default version used in this article is Python 3.8. Please note that there is no python environment on FreeBSD 13 by default. This can be viewed with the following command.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># python
python: Command not found # means there is no python command
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="install-python-and-pip" tabindex="-1"><a class="header-anchor" href="#install-python-and-pip" aria-hidden="true">#</a> Install Python and pip</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># pkg install python
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>pip is the package manager for Python packages. It is used to install and manage the relationship between Python packages and dependent packages.</p><p>virtualenv is used to create a virtual python environment, a python environment dedicated to the project.</p><p>The actual installation in this article was done by creating a separate Python environment via virtualenv to install pgAdmin4.</p><p>To install pip from the py38-pip package.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># pkg install py38-pip   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="installing-and-configuring-virtualenv" tabindex="-1"><a class="header-anchor" href="#installing-and-configuring-virtualenv" aria-hidden="true">#</a> Installing and configuring virtualenv</h3><p>Use virtualenv to create a standalone Python environment. Virtualenv creates an environment for your own Python installation; it does not support libraries with a global or another virtual environment. Run the following command to install Virtualenv.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># pkg install py38-virtualenv (this installation is python version 3.8 so use py38)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Create a virtual environment for pgAdmin4 by running the following command</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># virtualenv-3.8 pgadmin4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If the creation is complete, the following display shows that a virtual environment named <code>pgadmin4</code> has been created in the root directory of the root user.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Using base prefix &#39;/usr/local&#39;
New python executable in /home/vagrant/pgadmin4/bin/python3.8
Also creating executable in /home/vagrant/pgadmin4/bin/python
Installing setuptools, pip, wheel...done.
done.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="installing-sqlite3" tabindex="-1"><a class="header-anchor" href="#installing-sqlite3" aria-hidden="true">#</a> Installing sqlite3</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>## pkg install py38-sqlite3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Activate the created virtual environment.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#source pgadmin4/bin/activate.csh 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You will see that the shell has changed to (pgadmin4) (the following actions are performed under this shell)</p><p>The example is as follows.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(pgadmin4) root@ykla:~ # 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="installing-pgadmin4-1" tabindex="-1"><a class="header-anchor" href="#installing-pgadmin4-1" aria-hidden="true">#</a> Installing pgAdmin4.</h3><p>The pip source now always requires https, which still needs to be installed due to the lack of SSL certificates.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(pgadmin4) root@ykla:~# pkg install ca_root_nss
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then change the source for pip, here use Tsinghua source.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>There is a dependency on openjpeg, install it first</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(pgadmin4) root@ykla:~# pkg install openjpeg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If an error is reported.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>WARNING: Retrying (Retry(total=3, connect=None, read=None, redirect=None, status=None)) after connection broken by &#39;SSLError( SSLCertVerificationError(1, &#39;[SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: certificate is not yet valid (_ssl.c:1136)&#39;)&#39;: / simple/pgadmin4/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This is caused by incorrect time, synchronize the time first:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ntpdate ntp.api.bz
(pgadmin4) root@ykla:~# ntpdate ntp.api.bz
17 Dec 16:35:36 ntpdate[1453]: step time server 114.118.7.161 offset +401965.911037 sec
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then install pgAmdin4 and its dependencies rust: \`\`\`.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(pgadmin4) root@ykla:~# pkg install rust
(pgadmin4) root@ykla:~# pip install pgadmin4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Note: If there is not enough memory (less than 4GB) and there is no swap, it will prompt killed, please add a swap first if this problem occurs.</strong></p><h3 id="configure-and-run-pgadmin4" tabindex="-1"><a class="header-anchor" href="#configure-and-run-pgadmin4" aria-hidden="true">#</a> Configure and run pgAdmin4</h3><p>After installation, create a configuration file for pgAdmin4, copy the pgAdmin4 configuration file to</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(pgadmin4) root@ykla:~# cp . /pgadmin4/lib/python3.8/site-packages/pgadmin4/config.py . /pgadmin4/lib/python3.8/site-packages/pgadmin4/config_local.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Edit a local copy of the configuration file using the ee editor.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(pgadmin4) root@ykla:~# ee . /pgadmin4/lib/python3.8/site-packages/pgadmin4/config_local.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Find <code>DEFAULT_SERVER</code> Change the default server listening address to <code>0.0.0.0</code>. Find <code>DEFAULT_SERVER_PORT</code> to change the port that the application listens on.</p><p>An example is as follows:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>DEFAULT_SERVER = &#39;0.0.0.0&#39; 
DEFAULT_SERVER_PORT = 5050
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Manually create the software directory.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(pgadmin4) root@ykla:~# mkdir -p /var/lib/pgadmin   
(pgadmin4) root@ykla:~# mkdir /var/log/pgadmin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>After the configuration file is edited execute the following command to initialize the account and login password.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(pgadmin4) root@ykla:~# pgadmin4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The example is displayed as follows.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>NOTE: Configuring authentication for SERVER mode.
Enter the email address and password to use for the initial pgAdmin user account:
Email address: your_email //enter your email address
Password: your_new_password //Enter your login password
Retype password: //Enter your password again
Starting pgAdmin 4. Please navigate to http://0.0.0.0:5050 in your browser.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now that we have pgAdmin 4 installed and running, we can access the web control panel via <code>http://ip:5050</code>: !</p><p><img src="`+s+'" alt=""></p><p><img src="'+t+'" alt=""></p><p><img src="'+d+`" alt=""></p><h2 id="keep-pgadmin4-running-in-the-background" tabindex="-1"><a class="header-anchor" href="#keep-pgadmin4-running-in-the-background" aria-hidden="true">#</a> Keep pgAdmin4 running in the background</h2><p>If the service is shut down, the next time you want to run it, go to the root directory using the pgadmin4 installation user (in this case <code>root</code>) and execute the following command.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>root@ykla:~# source pgadmin4/bin/activate.csh
(pgadmin4) root@ykla:~# pgadmin4 &amp; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Tip: <code>&amp;</code> means running in the background</p><p>After the service starts, type <code>&amp;</code> in the current interface and press enter to switch to the foreground command line and let the service run in the background.</p><h2 id="upgrade-pgadmin4" tabindex="-1"><a class="header-anchor" href="#upgrade-pgadmin4" aria-hidden="true">#</a> Upgrade pgAdmin4</h2><p>This article tests that if you use pip to upgrade directly, you are still prompted with the old version.</p><p>If you want to upgrade pgadmin4, you should delete the pgadmin4 directory created with virtualenv and then execute the following command again with the installed user.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>root@ykla:~# virtualenv-3.8 pgadmin4 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After the virtual directory is created, activate</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>root@ykla:~# source pgadmin4/bin/activate.csh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After activation, do not open the service and perform the upgrade directly</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(pgadmin4) root@ykla:~# pip install --upgrade pgadmin4 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Start the service after completing the upgrade</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(pgadmin4) root@ykla:~# pgadmin4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Login account and password is still the original (no more update prompt after login, check the version is already for the latest).</p>`,95),o=[r];function c(u,p){return i(),n("div",null,o)}var g=e(l,[["render",c],["__file","17.8-postgresql-and-pgadmin4.html.vue"]]);export{g as default};
