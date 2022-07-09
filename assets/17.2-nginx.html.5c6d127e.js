import{_ as d,r as a,o as r,c,a as n,b as s,e as l,d as i}from"./app.533a64b2.js";const v={},t=l('<h2 id="_17-2-nginx" tabindex="-1"><a class="header-anchor" href="#_17-2-nginx" aria-hidden="true">#</a> 17.2 Nginx</h2><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2><ul><li>pkg: <code># pkg install nginx</code></li></ul><p>or</p><ul><li>ports: <code># cd /usr/ports/www/nginx/ &amp;&amp; make install clean</code></li></ul><h3 id="find-the-relevant-packages" tabindex="-1"><a class="header-anchor" href="#find-the-relevant-packages" aria-hidden="true">#</a> Find the relevant packages</h3><ul><li>ports: <code>$ ls /usr/ports/www/ | grep nginx</code></li><li>pkg: <code>$ pkg search -o nginx</code></li></ul><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2>',8),o=i("Configuration tutorials can be found in the "),u={href:"https://nginx.org/en/docs/",target:"_blank",rel:"noopener noreferrer"},m=i("official documentation"),b=i(" and "),h={href:"https://wiki.nginx.org/Configuration",target:"_blank",rel:"noopener noreferrer"},p=i("official wiki"),g=i("."),f=l(`<p>This article will only briefly explain how to start Nginx and the configuration files for Nginx in FreeBSD.</p><h3 id="starting" tabindex="-1"><a class="header-anchor" href="#starting" aria-hidden="true">#</a> Starting</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># sysrc nginx_enable=YES
# service nginx start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>You can check if nginx is up and running by using <code>$ sockstat -4 | grep nginx</code>.</p><h3 id="configuration-files" tabindex="-1"><a class="header-anchor" href="#configuration-files" aria-hidden="true">#</a> Configuration files</h3><p>In FreeBSD, the Nginx configuration file is located in <code>/usr/local/etc/nginx/</code>, and the main configuration file is in <code>/usr/local/etc/nginx/nginx.conf</code></p><p>By default, the root directory of Nginx is <code>/usr/lccal/www/nginx/</code>. If you need to change the directory location, please change the</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>root /usr/lccal/www/nginx;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>to your desired directory location, e.g. <code>root /path/to/new/webroot;</code></p><h2 id="example-files-nginx-typecho-pseudo-static-ssl" tabindex="-1"><a class="header-anchor" href="#example-files-nginx-typecho-pseudo-static-ssl" aria-hidden="true">#</a> Example files (Nginx + Typecho pseudo-static + SSL)</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#user  nobody;
worker_processes  1;

# This default error log path is compiled-in to make sure configuration parsing
# errors are logged somewhere, especially during unattended boot when stderr
# isn&#39;t normally logged anywhere. This path will be touched on every nginx
# start regardless of error log location configured here. See
# https://trac.nginx.org/nginx/ticket/147 for more info. 
#
#error_log  /var/log/nginx/error.log;
#

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
    #                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
    #                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;

    server {
        listen       80;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   /usr/local/www/nginx;
            index  index.html index.htm index.php;
if (-f $request_filename/index.html){
rewrite (.*) $1/index.html break;
}
if (-f $request_filename/index.php){
rewrite (.*) $1/index.php;
}
if (!-f $request_filename){
rewrite (.*) /index.php;}       
 }

 
location ~ .*.php(/.*)*$ {
            root           /usr/local/www/nginx;
            fastcgi_pass   127.0.0.1:9000;
            fastcgi_index  index.php;
            fastcgi_param  SCRIPT_FILENAME $request_filename;
            include        fastcgi_params;
        }





  #location ~ .*.php(/.*)*$ {
   #         include fastcgi_params;
    #        fastcgi_pass  127.0.0.1:9000;
     #   }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   /usr/local/www/nginx-dist;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ .php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        location ~ .*.php(/.*)*$ {
            root           /usr/local/www/nginx;
            fastcgi_pass   127.0.0.1:9000;
            fastcgi_index  index.php;
            fastcgi_param  SCRIPT_FILENAME $request_filename;
            include        fastcgi_params;
        }

        # deny access to .htaccess files, if Apache&#39;s document root
        # concurs with nginx&#39;s one
        #
        #location ~ /.ht {
        #    deny  all;
        #}
    }


    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}


    # HTTPS server
    #
    server {
       listen       443;
       server_name  localhost;

        ssl_certificate      /usr/local/etc/nginx/fbxs.crt;
      ssl_certificate_key   /usr/local/etc/nginx/fbxs.key;

      ssl on;
        ssl_certificate fbxs.crt;
        ssl_certificate_key fbxs.key;
        ssl_session_timeout 5m;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2; #\u6309\u7167\u8FD9\u4E2A\u534F\u8BAE\u914D\u7F6E
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;#\u6309\u7167\u8FD9\u4E2A\u5957\u4EF6\u914D\u7F6E
        ssl_prefer_server_ciphers on;
location ~ .*.php(/.*)*$ {
            root           /usr/local/www/nginx-dist;
            fastcgi_pass   127.0.0.1:9000;
            fastcgi_index  index.php;
            fastcgi_param  SCRIPT_FILENAME $request_filename;
            include        fastcgi_params;
        }
        location / {
            root   /usr/local/www/nginx-dist;
            index  index.php;    
 }
      }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function _(x,w){const e=a("ExternalLinkIcon");return r(),c("div",null,[t,n("p",null,[o,n("a",u,[m,s(e)]),b,n("a",h,[p,s(e)]),g]),f])}var y=d(v,[["render",_],["__file","17.2-nginx.html.vue"]]);export{y as default};
