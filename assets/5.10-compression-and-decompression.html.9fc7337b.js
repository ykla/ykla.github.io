import{_ as e,o as i,c as a,e as s}from"./app.a8f25536.js";const t={},n=s(`<h1 id="_5-10-compression-and-decompression" tabindex="-1"><a class="header-anchor" href="#_5-10-compression-and-decompression" aria-hidden="true">#</a> 5.10 Compression and decompression</h1><h2 id="zip" tabindex="-1"><a class="header-anchor" href="#zip" aria-hidden="true">#</a> zip</h2><p>Installing zip zip files <code># pkg install zip unzip</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># zip test.zip test # Pack a zip format file 

# unzip test.zip # Release zip format files 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tar-xz" tabindex="-1"><a class="header-anchor" href="#tar-xz" aria-hidden="true">#</a> tar/xz</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># tar -cvf test.tar test # Pack the tar format file 

# tar -xvf test.tar # release tar format file 

# tar -zcvf test.tar.gz test # Pack gzip format files 

# tar -zxvf test.tar.gz # release gzip format file 

# tar -jcvf test.tar.bz2 test # Pack the bzip2 format file 

# tar -jxvf test.tar.bz2 # release bzip2 format file 

# tar -Jcvf test.tar.xz test # Pack the xz format file 

# tar -Jxvf test.tar.xz # Free xz format files 

# xz -z -k test.tar # Pack the xz format file, if you don&#39;t add the -k parameter, the original file will be deleted after the command is executed 

# xz -d -k test.tar.xz # Free the xz format file, if you don&#39;t add -k parameter, the xz file will be deleted after the command is executed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7z-7za" tabindex="-1"><a class="header-anchor" href="#_7z-7za" aria-hidden="true">#</a> 7z/7za</h2><p>Under FreeBSD, both 7z and 7za commands are obtained via <code># pkg install -y 7-zip</code>, not <code>p7zip</code>.</p><p>Examples are as follows.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># 7z a test.7z test # 7z packaged file 
# 7z x test.7z # 7z release file
# 7za a test.7z test # 7za packaged file 
# 7za x test.7z # 7za release file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),d=[n];function r(l,c){return i(),a("div",null,d)}var v=e(t,[["render",r],["__file","5.10-compression-and-decompression.html.vue"]]);export{v as default};
