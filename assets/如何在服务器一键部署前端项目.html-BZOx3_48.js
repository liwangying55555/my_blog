import{_ as n,o as a,c as e,e as t}from"./app-DMYYw8_8.js";const p={};function l(i,s){return a(),e("div",null,[...s[0]||(s[0]=[t(`<h2 id="心路历程" tabindex="-1"><a class="header-anchor" href="#心路历程" aria-hidden="true">#</a> 心路历程</h2><p>前端部署最简单粗暴方式：打开xFTP，左边是本地dist目录，右边是线上静态资源目录，然后左边全选拖拽到右边，全部覆盖，点击是。。。</p><p>在无法集成化前端部署的日子里，好像习惯了上述的操作，但是随之带来一个很严重的问题</p><ul><li>每次部署没有备份</li><li>很容易误操作，忘记打开是哪台服务器</li><li>传输速度很慢</li><li>覆盖式部署缓存文件越来越多，删除后再部署，存在空白期，人工操作不保险</li></ul><p>基于上述种种，有了下面这种简版的操作</p><ul><li>打包传输前端部署文件，速度快</li><li>命令式解压部署，先备份，再解压新包</li></ul><h2 id="目录约定" tabindex="-1"><a class="header-anchor" href="#目录约定" aria-hidden="true">#</a> 目录约定</h2><p>服务器上先固定两个目录，后面脚本都围绕它们转：</p><table><thead><tr><th>目录</th><th>作用</th></tr></thead><tbody><tr><td><code>/data/html</code></td><td>正式静态资源目录，下面按项目名分子目录，nginx 直接指向这里</td></tr><tr><td><code>/data/html-tmp</code></td><td>临时区：放待部署的 zip，以及每次部署产生的备份</td></tr></tbody></table><p>举例：线上有个项目叫 <code>demo</code>，那正式路径就是 <code>/data/html/demo</code>。本地把 <code>dist</code> 打成 <code>demo.zip</code>，丢进 <code>/data/html-tmp</code>，跑脚本即可。</p><blockquote><p>注意：zip 包名必须和 <code>/data/html</code> 下的项目目录名一致。脚本是按「包名 = 项目名」来匹配的，对不上就直接跳过，不会乱解压。</p></blockquote><h2 id="怎么使用" tabindex="-1"><a class="header-anchor" href="#怎么使用" aria-hidden="true">#</a> 怎么使用</h2><h3 id="_1-服务端准备-首次" tabindex="-1"><a class="header-anchor" href="#_1-服务端准备-首次" aria-hidden="true">#</a> 1. 服务端准备（首次）</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建正式目录、临时目录，以及具体项目目录（以 demo 为例）</span>
<span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /data/html/demo
<span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /data/html-tmp

<span class="token comment"># 授权，方便上传和解压（内网图省事用 777）</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">777</span> /data/html
<span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">777</span> /data/html-tmp

<span class="token comment"># 把 build.sh 放到服务器任意位置，并赋予执行权限</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> +x /data/html-tmp/build.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>项目目录必须事先建好。脚本不会自动新建正式目录，避免 zip 名写错时乱建文件夹。</p><h3 id="_2-日常部署" tabindex="-1"><a class="header-anchor" href="#_2-日常部署" aria-hidden="true">#</a> 2. 日常部署</h3><ol><li>本地打包，把 <code>dist</code> <strong>里面的内容</strong>打成 zip（不要套一层 dist 文件夹），命名成项目名，如 <code>demo.zip</code></li><li>传到服务器 <code>/data/html-tmp</code></li><li>执行脚本：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">bash</span> /data/html-tmp/build.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>脚本会扫临时目录下所有 zip：把新包先解压到备份目录 → 再覆盖式替换正式目录里的文件（<code>index.html</code> 留在最后替换，保留旧版 hash 静态资源）→ 清掉过旧备份（每个项目只留最近 3 份）。一次传多个包也能批量跑完。</p><blockquote><p>关于 hash 资源：前端打包通常会给静态资源打上内容 hash。新脚本「先覆盖静态资源、最后才替换入口文件 <code>index.html</code>」，能保证线上旧版资源在用户下次强刷前依然可用，实现平滑升级、没有空白期。</p></blockquote><h3 id="_3-统信-uos-上转译脚本-避免报错" tabindex="-1"><a class="header-anchor" href="#_3-统信-uos-上转译脚本-避免报错" aria-hidden="true">#</a> 3. 统信 UOS 上转译脚本（避免报错）</h3><p>本地 Windows 写好的 <code>build.sh</code>，用 xFTP 丢到统信 UOS 后，经常一跑就炸，常见提示类似：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$&#39;\\r&#39;: command not found
syntax error near unexpected token
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>原因很简单：Windows 换行是 <code>CRLF</code>（<code>\\r\\n</code>），Linux / UOS 认的是 <code>LF</code>（<code>\\n</code>）。多出来的 <code>\\r</code>，bash 当命令的一部分解析，自然报错。</p><p>上传后在服务器上转一下格式即可：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 方式一：有 dos2unix 直接转（推荐）</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> dos2unix   <span class="token comment"># UOS/Debian 系；没有就跳过装包，用方式二</span>
dos2unix /data/html-tmp/build.sh

<span class="token comment"># 方式二：没有 dos2unix，用 sed 把 \\r 剔掉</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/\\r$//&#39;</span> /data/html-tmp/build.sh

<span class="token comment"># 再确认可执行</span>
<span class="token function">chmod</span> +x /data/html-tmp/build.sh
<span class="token function">bash</span> /data/html-tmp/build.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>想确认文件是不是还带着 <code>\\r</code>，可以看一眼：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 若输出里带 ^M，说明还有 Windows 换行</span>
<span class="token function">cat</span> <span class="token parameter variable">-A</span> /data/html-tmp/build.sh <span class="token operator">|</span> <span class="token function">head</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>转完再执行，一般就不会再因为换行挂掉了。</p><h2 id="完整脚本" tabindex="-1"><a class="header-anchor" href="#完整脚本" aria-hidden="true">#</a> 完整脚本</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env bash</span>

<span class="token comment"># HTML 多项目批量部署脚本</span>
<span class="token comment"># 扫描 /data/html-tmp 下的 zip 包，按包名部署到 /data/html 同名目录</span>

<span class="token builtin class-name">set</span> <span class="token parameter variable">-euo</span> pipefail

<span class="token assign-left variable">HTML_DIR</span><span class="token operator">=</span><span class="token string">&quot;/data/html&quot;</span>
<span class="token assign-left variable">HTML_TMP</span><span class="token operator">=</span><span class="token string">&quot;/data/html-tmp&quot;</span>
<span class="token assign-left variable">MAX_BACKUP_COUNT</span><span class="token operator">=</span><span class="token number">3</span>

<span class="token comment"># 清理旧备份，仅保留最近 N 份</span>
<span class="token function-name function">cleanup_old_backups</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">local</span> <span class="token assign-left variable">project_name</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$1</span>&quot;</span>
  <span class="token builtin class-name">local</span> <span class="token parameter variable">-a</span> <span class="token assign-left variable">backups</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token builtin class-name">local</span> <span class="token parameter variable">-a</span> <span class="token assign-left variable">sorted</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token builtin class-name">local</span> backup_dir
  <span class="token builtin class-name">local</span> i

  <span class="token builtin class-name">shopt</span> <span class="token parameter variable">-s</span> nullglob
  <span class="token assign-left variable">backups</span><span class="token operator">=</span><span class="token punctuation">(</span> <span class="token string">&quot;<span class="token variable">$HTML_TMP</span>&quot;</span>/<span class="token string">&quot;<span class="token variable">\${project_name}</span>&quot;</span>_back_* <span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${<span class="token operator">#</span>backups<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span> <span class="token parameter variable">-le</span> <span class="token string">&quot;<span class="token variable">$MAX_BACKUP_COUNT</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">return</span> <span class="token number">0</span>
  <span class="token keyword">fi</span>

  <span class="token builtin class-name">mapfile</span> <span class="token parameter variable">-t</span> sorted <span class="token operator">&lt;</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token builtin class-name">printf</span> <span class="token string">&#39;%s\\n&#39;</span> <span class="token string">&quot;<span class="token variable">\${backups<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>&quot;</span> <span class="token operator">|</span> <span class="token function">sort</span> -r<span class="token punctuation">)</span>

  <span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>i <span class="token operator">=</span> MAX_BACKUP_COUNT<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> \${#sorted[@]}<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token assign-left variable">backup_dir</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${sorted<span class="token punctuation">[</span>i<span class="token punctuation">]</span>}</span>&quot;</span>
    <span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token string">&quot;<span class="token variable">$backup_dir</span>&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;已删除旧备份: <span class="token variable"><span class="token variable">$(</span><span class="token function">basename</span> <span class="token string">&quot;<span class="token variable">$backup_dir</span>&quot;</span><span class="token variable">)</span></span>&quot;</span>
  <span class="token keyword">done</span>
<span class="token punctuation">}</span>

<span class="token comment"># 确保临时目录存在</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;<span class="token variable">$HTML_TMP</span>&quot;</span>

<span class="token comment"># 提升权限（后续命令使用 sudo）</span>
<span class="token function">sudo</span> <span class="token boolean">true</span>

<span class="token comment"># 检查是否有 zip 包</span>
<span class="token builtin class-name">shopt</span> <span class="token parameter variable">-s</span> nullglob
<span class="token assign-left variable">zip_files</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&quot;<span class="token variable">$HTML_TMP</span>&quot;</span>/*.zip<span class="token punctuation">)</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${<span class="token operator">#</span>zip_files<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;没有找到待部署的 zip 包&quot;</span>
  <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">zip_path</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">\${zip_files<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>&quot;</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token assign-left variable">zip_name</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">basename</span> <span class="token string">&quot;<span class="token variable">$zip_path</span>&quot;</span><span class="token variable">)</span></span>&quot;</span>
  <span class="token comment"># 去除扩展名，得到项目名称</span>
  <span class="token assign-left variable">project_name</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${zip_name<span class="token operator">%</span>.zip}</span>&quot;</span>
  <span class="token assign-left variable">target_dir</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$HTML_DIR</span>/<span class="token variable">$project_name</span>&quot;</span>

  <span class="token comment"># 判断 /data/html 下是否存在同名目录</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;<span class="token variable">$target_dir</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${zip_name}</span>不存在&quot;</span>
    <span class="token builtin class-name">continue</span>
  <span class="token keyword">fi</span>

    <span class="token comment"># 当前时间：年月日时分秒</span>
  <span class="token assign-left variable">now</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +<span class="token string">&#39;%Y%m%d_%H%M%S&#39;</span><span class="token variable">)</span></span>&quot;</span>
  <span class="token assign-left variable">backup_dir</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${HTML_TMP}</span>/<span class="token variable">\${project_name}</span>_back_<span class="token variable">\${now}</span>&quot;</span>

  <span class="token comment"># 先将发布包完整解压到版本备份目录，解压失败时不影响线上文件</span>
  <span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;<span class="token variable">$backup_dir</span>&quot;</span>
  <span class="token keyword">if</span> <span class="token operator">!</span> <span class="token function">sudo</span> <span class="token function">unzip</span> <span class="token parameter variable">-o</span> <span class="token string">&quot;<span class="token variable">$zip_path</span>&quot;</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;<span class="token variable">$backup_dir</span>&quot;</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token string">&quot;<span class="token variable">$backup_dir</span>&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${project_name}</span> 解压失败，已保留原项目文件&quot;</span>
    <span class="token builtin class-name">continue</span>
  <span class="token keyword">fi</span>

  <span class="token comment"># 先覆盖静态资源，最后替换入口文件，保留旧版本的 hash 静态资源</span>
  <span class="token builtin class-name">shopt</span> <span class="token parameter variable">-s</span> dotglob
  <span class="token keyword">for</span> <span class="token for-or-select variable">source_path</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$backup_dir</span>&quot;</span>/*<span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">basename</span> <span class="token string">&quot;<span class="token variable">$source_path</span>&quot;</span><span class="token variable">)</span></span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;index.html&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
      <span class="token builtin class-name">continue</span>
    <span class="token keyword">fi</span>
    <span class="token function">sudo</span> <span class="token function">cp</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;<span class="token variable">$source_path</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$target_dir</span>&quot;</span>/
  <span class="token keyword">done</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;<span class="token variable">$backup_dir</span>/index.html&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token function">sudo</span> <span class="token function">cp</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;<span class="token variable">$backup_dir</span>/index.html&quot;</span> <span class="token string">&quot;<span class="token variable">$target_dir</span>/index.html&quot;</span>
  <span class="token keyword">fi</span>
  <span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;<span class="token variable">$zip_path</span>&quot;</span>

  <span class="token comment"># 清理该项目的历史备份，仅保留最近 3 份</span>
  cleanup_old_backups <span class="token string">&quot;<span class="token variable">$project_name</span>&quot;</span>

  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${project_name}</span> 部署完成&quot;</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31)])])}const c=n(p,[["render",l],["__file","如何在服务器一键部署前端项目.html.vue"]]);export{c as default};
