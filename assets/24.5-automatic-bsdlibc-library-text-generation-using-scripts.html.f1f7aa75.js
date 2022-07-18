import{_ as s,r as l,o as t,c as r,a as n,b as d,d as i,e as v}from"./app.3b75d2e9.js";const a={},c=n("h1",{id:"_24-5-automatic-bsdlibc-library-text-generation-using-scripts",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_24-5-automatic-bsdlibc-library-text-generation-using-scripts","aria-hidden":"true"},"#"),i(" 24.5 Automatic BSDlibc library text generation using scripts")],-1),u=i("This section is from the FreeBSD forum, by mrclksr. The original is located at "),o={href:"https://forums.freebsd.org/threads/wheres-bsd-libc-documentation.63107/",target:"_blank",rel:"noopener noreferrer"},m=i("https://forums.freebsd.org/threads/wheres-bsd-libc-documentation.63107/"),b=i("."),p=v(`<p>First install the dependencies:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># pkg install  netpbm groff ghostscript9-base
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/sh

pstarget=&quot;/tmp/$$.libcdoc.ps&quot;
pdftarget=&quot;libcdoc.pdf&quot;
pdftarget_noidx=&quot;/tmp/$$.$pdftarget&quot;
pdfindex=&quot;/tmp/$$.pdfindex.info&quot;
index=&quot;/tmp/$$.index&quot;
sorted_index=&quot;$index.sorted&quot;
flist=&quot;/tmp/$$.flist&quot;
tocin=&quot;/tmp/$$.toc.mdoc&quot;
keywords=&quot;/tmp/$$.keywords&quot;
mandir=&quot;/usr/share/man&quot;
paths=&quot;$mandir/man2 $mandir/man3&quot;
content_offset=0

mkidx()
{
   for i in \`find $paths -name &quot;*.gz&quot;\`; do
       if zgrep -q &#39;.Lb libc&#39; $i &amp;&amp; zgrep -q &#39;.Sh LIBRARY&#39; $i; then
           for j in \`gettitles $i\`; do
               echo &quot;$j:$i&quot; &gt;&gt; $index
           done
       fi
   done
   cat $index | sort -n | uniq | awk -F: &#39;BEGIN { prev = &quot;&quot; } {
       if ($1 != prev) {
           print $0;
       }
       prev = $1;
   }&#39; &gt; $index.tmp
   mv $index.tmp $index

   for i in \`cat $index\`; do
       fname=\`echo $i | cut -d: -f2\`
       grep $fname $index | sort -n | awk -F: &#39;BEGIN {n = 0} {
           if (n++ &gt; 0)
               printf &quot;,&quot;;
           printf &quot;%s&quot;, $1;
       }&#39;
       echo &quot;:$fname&quot;
   done | sort -n | uniq &gt; $index.tmp
   mv $index.tmp $index

   currp=1
   for i in \`cat $index\`; do
       fname=\`echo $i  | cut -d: -f2\`
       kwords=\`echo $i | cut -d: -f1\`
       nextp=\`mandoc -T ps $fname|egrep &#39;%%Pages: [0-9]+&#39;|cut -d: -f2\`
       echo &quot;$kwords:$currp:$fname&quot; &gt;&gt; $index.tmp
       currp=\`expr $currp + $nextp\`
   done
   mv $index.tmp $index
   for i in \`cat $index | sed -E &#39;s/(^[^:]+):.*/1/&#39; | tr &#39;,&#39; &#39; &#39;\`; do
       echo $i
   done | sort -n &gt; $keywords
   
   for i in \`cat $keywords\`; do
       page=\`grep -w $i $index | tail -1 | cut -d: -f 2\`
       echo $i:$page
   done &gt; $sorted_index
}

mkpsdoc()
{
   for i in \`cat $index\`; do
       fname=\`echo $i | cut -d: -f3\`
       zcat $fname | sed -e &#39;s/^.Dd.*$/.Dd __PAGENO__/&#39; 
                 -e &#39;/.Os.*/d&#39; | mandoc -T ps &gt;&gt; $pstarget
   done
}

mktoc()
{
   echo &quot;.XS 1&quot; &gt; $tocin
   echo &quot;Table of Contents&quot; &gt;&gt; $tocin
   for i in \`cat $sorted_index\`; do
       kword=\`echo $i | cut -d: -f 1\`
       page=\`echo $i | cut -d: -f 2\`
       page=\`expr $content_offset + $page\`
       printf &quot;.XA $pagen$kwordn&quot; &gt;&gt; $tocin
   done
   echo &quot;.XE&quot; &gt;&gt; $tocin
   echo &quot;.PX&quot; &gt;&gt; $tocin
}

get_content_offset()
{
   mktoc
   content_offset=\`groff -T ps -ms $tocin | egrep &#39;%%Pages: [0-9]+&#39; | 
       cut -d: -f2\`
   content_offset=\`expr $content_offset + 0\`
}

prepend_toc()
{
   in=$1
   tmp=$in.tmp

   groff -T ps -ms $tocin &gt; $tmp
   cat $in &gt;&gt; $tmp
   mv $tmp $in
}

mkpdfidx()
{
   printf &quot;[/Page 1 /View [/XYZ null null null] &quot; &gt; $pdfindex
   printf &quot;/Title (Table of Contents) /OUT pdfmarkn&quot; &gt;&gt; $pdfindex

   for i in \`cat $sorted_index\`; do
       kword=\`echo $i | cut -d: -f 1\`
       page=\`echo $i | cut -d: -f 2\`
       page=\`expr $page + $content_offset\`
       printf &quot;[/Page $page /View &quot;       &gt;&gt; $pdfindex
       printf &quot;[/XYZ null null null] &quot;       &gt;&gt; $pdfindex
       printf &quot;/Title ($kword) /OUT pdfmarkn&quot; &gt;&gt; $pdfindex
   done
}

gettitles()
{
   zcat $1 | sed -n &#39;/.Sh NAME/,/.Sh LIBRARY/p&#39; | 
       egrep &#39;^.Nm [^ ]+&#39; | cut -d&quot; &quot; -f 2 | sort -n | uniq
}

mkidx
mkpsdoc
get_content_offset
mktoc
prepend_toc $pstarget
mkpdfidx

cat $pstarget | awk -v p=$content_offset &#39;{
   if ($0 ~ /(__PAGENO__)/) {
        t = sprintf(&quot;(%s)&quot;, ++p);
        sub(/(__PAGENO__)/, t);
   }
   print $0;
 }&#39; &gt; $pstarget.tmp

mv $pstarget.tmp $pstarget

ps2pdf $pstarget $pdftarget_noidx

gs -sDEVICE=pdfwrite -q -dBATCH -dNOPAUSE -sOutputFile=$pdftarget $pdfindex 
   -f $pdftarget_noidx

rm -f $tocin
rm -f $pstarget
rm -f $index
rm -f $pdftarget_noidx
rm -f $pdfindex
rm -f $sorted_index
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Run the script to find the PDF document in the same path folder. For ready-made documents, visit:</p>`,4),f={href:"https://github.com/FreeBSD-Ask/BSDlibc",target:"_blank",rel:"noopener noreferrer"},$=i("https://github.com/FreeBSD-Ask/BSDlibc");function g(_,x){const e=l("ExternalLinkIcon");return t(),r("div",null,[c,n("blockquote",null,[n("p",null,[u,n("a",o,[m,d(e)]),b])]),p,n("p",null,[n("a",f,[$,d(e)])])])}var h=s(a,[["render",g],["__file","24.5-automatic-bsdlibc-library-text-generation-using-scripts.html.vue"]]);export{h as default};
