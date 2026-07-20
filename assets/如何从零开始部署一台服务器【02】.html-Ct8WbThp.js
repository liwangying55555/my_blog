import{_ as t,r as c,o as d,c as r,f as o,e,a as s,b as a,d as l}from"./app-BBKO0RFJ.js";const p="/my_blog/assets/远程桌面-D7OBR5fu.png",u="/my_blog/assets/XShell链接失败-2THvAlZ1.png",m="/my_blog/assets/端口策略-Bq0HPrXr.png",v="/my_blog/assets/nginx官网-DdncZQ3U.png",b="/my_blog/assets/nginx安装目录-D4KSYd9e.png",g="/my_blog/assets/nginx软连接-XWSQwuYi.png",h="/my_blog/assets/nginx开始-CmHbqS7Q.png",k="/my_blog/assets/nginx设置成功-C9waLzeM.png",f="/my_blog/assets/nginx暂停-j_qq00MV.png",x="/my_blog/assets/nginx重启-C0K3rLL0.png",y="/my_blog/assets/ssh初始化-CwK1EQ28.png",_="/my_blog/assets/ssh查看-CGof_5NE.png",q="/my_blog/assets/ssh_github_设置-fUB6WXVd.png",w="/my_blog/assets/ssh_gtihub_新增key-DvaBxhxG.png",z="/my_blog/assets/nodejs安装包解压-BKUiOB3Q.png",j="/my_blog/assets/nodejs包转移-D0go8PDG.png",N="/my_blog/assets/nodejs设置环境变量-DWbxnFGe.png",S="/my_blog/assets/nodejs版本号-BYO5ATYA.png",D="/my_blog/assets/npm设置源-dBSUqMT1.png",E="/my_blog/assets/PM2安装-DvSHVYs7.png",M="/my_blog/assets/mysql版本-_b89-N4d.png",P="/my_blog/assets/mysql初始化-pYnMWquh.webp",$="/my_blog/assets/mysql远程账户权限-DtNJWRon.png",B={},O={href:"http://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"},C={href:"https://pm2.fenxianglu.cn/docs/start",target:"_blank",rel:"noopener noreferrer"},I={href:"https://downloads.mysql.com/archives/community/",target:"_blank",rel:"noopener noreferrer"};function X(R,n){const i=c("ExternalLinkIcon");return d(),r("div",null,[o(" @format "),n[6]||(n[6]=e('<h2 id="_01-开始装机" tabindex="-1"><a class="header-anchor" href="#_01-开始装机" aria-hidden="true">#</a> 01.开始装机</h2><p>因为买的腾讯云，这次选择了腾讯云自己二次开发的<code>OpenCloudOS 9</code>系统，相比较最原始的<code>CentOs</code>，这个系统在界面上稍微开放了一点换肤功能。</p><figure><img src="'+p+'" alt="远程桌面" tabindex="0" loading="lazy"><figcaption>远程桌面</figcaption></figure><p>这是初始状态下的远程桌面，我小小使用了一下换肤功能。</p><h2 id="_02-xshell远程服务器" tabindex="-1"><a class="header-anchor" href="#_02-xshell远程服务器" aria-hidden="true">#</a> 02.<code>XShell</code>远程服务器</h2><p>之后就是使用本地的<code>XShell</code>工具，远程连接服务器。</p><p>然后这里出现了问题，ssh登录的时候，出现了<code>Connection failed</code>的提示。</p><figure><img src="'+u+'" alt="XShell链接失败" tabindex="0" loading="lazy"><figcaption>XShell链接失败</figcaption></figure><p>后面各种尝试了之后（包括确定端口是否开放等因素），才试探性的换了一个外部网络，居然成功了！！！！！</p><p>我是说我怎么就卡在了这么简单的第一步了，还各种无解方案......</p><p>搞半天是我的所在的内部网络被墙了啊😂</p><h2 id="_03-端口策略" tabindex="-1"><a class="header-anchor" href="#_03-端口策略" aria-hidden="true">#</a> 03.端口策略</h2><p>端口的放行很重要，这关乎后面进行的各种服务。</p><p>因为之前那台服务器的端口策略可以直接照抄，因此，这里不做赘述。</p><figure><img src="'+m+`" alt="端口策略" tabindex="0" loading="lazy"><figcaption>端口策略</figcaption></figure><h2 id="_04-安装并设置nginx" tabindex="-1"><a class="header-anchor" href="#_04-安装并设置nginx" aria-hidden="true">#</a> 04.安装并设置nginx</h2><p>前端网页的访问离不开nginx的转发，因此安装nginx是必须的。</p><h3 id="安装nginx" tabindex="-1"><a class="header-anchor" href="#安装nginx" aria-hidden="true">#</a> 安装nginx</h3><p>在开始安装Nginx之前，首先需要安装一些依赖项，以确保Nginx编译和运行正常。打开终端并执行以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">wget</span> gcc-c++ pcre-devel zlib-devel openssl-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这将安装必要的工具和库，以支持Nginx的编译和运行。</p>`,21)),s("p",null,[n[1]||(n[1]=a("nginx官网网址：",-1)),s("a",O,[n[0]||(n[0]=a("http://nginx.org/en/download.html",-1)),l(i)])]),n[7]||(n[7]=e('<figure><img src="'+v+`" alt="nginx官网" tabindex="0" loading="lazy"><figcaption>nginx官网</figcaption></figure><p>选用中间的稳定版本即可</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 选择一个下载文件目录</span>
<span class="token builtin class-name">cd</span> /data/download
<span class="token comment"># 例如，下载Nginx 1.24.0版本</span>
<span class="token function">wget</span> https://nginx.org/download/nginx-1.24.0.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解压nginx" tabindex="-1"><a class="header-anchor" href="#解压nginx" aria-hidden="true">#</a> 解压nginx</h3><p>在当前目录下，解压下载的Nginx源代码包：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> nginx-1.24.0.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="编译和安装" tabindex="-1"><a class="header-anchor" href="#编译和安装" aria-hidden="true">#</a> 编译和安装</h3><p>进入解压后的Nginx目录并进行编译和安装：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 切换到 Nginx 解压目录</span>
<span class="token builtin class-name">cd</span> nginx-1.24.0
<span class="token comment"># 编译前的配置和依赖检查</span>
./configure
<span class="token comment"># 假如安装报错（一）</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> pcre-devel
<span class="token comment"># 加入安装报错（二）</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> openssl openssl-devel
<span class="token comment"># 重新运行安装命令 ./configure</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正确的安装成功之后 nginx会显示你的默认安装路径如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nginx path prefix: <span class="token string">&quot;/usr/local/nginx&quot;</span>
nginx path prefix: <span class="token string">&quot;/usr/local/nginx&quot;</span>
nginx binary file: <span class="token string">&quot;/usr/local/nginx/sbin/nginx&quot;</span>
nginx modules path: <span class="token string">&quot;/usr/local/nginx/modules&quot;</span>
nginx configuration prefix: <span class="token string">&quot;/usr/local/nginx/conf&quot;</span>
nginx configuration file: <span class="token string">&quot;/usr/local/nginx/conf/nginx.conf&quot;</span>
nginx pid file: <span class="token string">&quot;/usr/local/nginx/logs/nginx.pid&quot;</span>
nginx error log file: <span class="token string">&quot;/usr/local/nginx/logs/error.log&quot;</span>
nginx http access log file: <span class="token string">&quot;/usr/local/nginx/logs/access.log&quot;</span>
nginx http client request body temporary files: <span class="token string">&quot;client_body_temp&quot;</span>
nginx http proxy temporary files: <span class="token string">&quot;proxy_temp&quot;</span>
nginx http fastcgi temporary files: <span class="token string">&quot;fastcgi_temp&quot;</span>
nginx http uwsgi temporary files: <span class="token string">&quot;uwsgi_temp&quot;</span>
nginx http scgi temporary files: <span class="token string">&quot;scgi_temp&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译nginx</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 编译安装</span>
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查看nginx是否安装成功</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">whereis</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+b+`" alt="nginx安装目录" tabindex="0" loading="lazy"><figcaption>nginx安装目录</figcaption></figure><p>设置nginx全局命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置软连接</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/nginx/sbin/nginx /usr/bin/nginx
<span class="token comment"># 移除软连接</span>
unlink /usr/bin/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+g+`" alt="nginx软连接" tabindex="0" loading="lazy"><figcaption>nginx软连接</figcaption></figure><h3 id="运行并设置nginx" tabindex="-1"><a class="header-anchor" href="#运行并设置nginx" aria-hidden="true">#</a> 运行并设置nginx</h3><h4 id="启动nginx" tabindex="-1"><a class="header-anchor" href="#启动nginx" aria-hidden="true">#</a> 启动nginx</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入nginx执行文件目录</span>
<span class="token builtin class-name">cd</span> /usr/local/nginx/sbin

<span class="token comment"># 启动nginx</span>
./nginx
<span class="token comment"># 查看运行状态</span>
<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+h+'" alt="运行nginx" tabindex="0" loading="lazy"><figcaption>运行nginx</figcaption></figure><p>设置成功即可看到默认端口80访问状态</p><figure><img src="'+k+`" alt="nginx设置成功" tabindex="0" loading="lazy"><figcaption>nginx设置成功</figcaption></figure><h4 id="关闭nginx" tabindex="-1"><a class="header-anchor" href="#关闭nginx" aria-hidden="true">#</a> 关闭nginx</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 关闭nginx</span>
./nginx <span class="token parameter variable">-s</span> stop
<span class="token comment"># 查看运行状态</span>
<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+f+`" alt="nginx暂停" tabindex="0" loading="lazy"><figcaption>nginx暂停</figcaption></figure><h4 id="重启nginx" tabindex="-1"><a class="header-anchor" href="#重启nginx" aria-hidden="true">#</a> 重启nginx</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 重启nginx</span>
./nginx <span class="token parameter variable">-s</span> reload
<span class="token comment"># 查看运行状态</span>
<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+x+`" alt="nginx重启" tabindex="0" loading="lazy"><figcaption>nginx重启</figcaption></figure><h4 id="nginx配置目录" tabindex="-1"><a class="header-anchor" href="#nginx配置目录" aria-hidden="true">#</a> nginx配置目录</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 可以直接进入配置文件在线修改</span>
<span class="token function">vim</span> /usr/local/nginx/conf/nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>配置规则可参考上一台服务器已经配置好的规则。</p><p>主要反向代理规则如下；</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>
    root  /data/www/my_blog<span class="token punctuation">;</span>
    index index.html index.php<span class="token punctuation">;</span>

    location ^~ /perfect-admin <span class="token punctuation">{</span>
        <span class="token builtin class-name">alias</span> /data/www/perfect-admin<span class="token punctuation">;</span>
        try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /perfect-admin<span class="token punctuation">;</span> 
        index index.html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
            
    location ^~ /gallery <span class="token punctuation">{</span>
        <span class="token builtin class-name">alias</span> /data/www/perfect-server/public/file_cache<span class="token punctuation">;</span>
        try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /gallery<span class="token punctuation">;</span> 
    index index.html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment"># 接口反向代理</span>
    location ^~ /center-back-stage <span class="token punctuation">{</span>
        proxy_pass http://127.0.0.1:9000/center-back-stage<span class="token punctuation">;</span>
        proxy_set_header Host <span class="token variable">$host</span><span class="token builtin class-name">:</span><span class="token variable">$server_port</span><span class="token punctuation">;</span>
        proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
        proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
        proxy_set_header X-Forwarded-Proto <span class="token variable">$scheme</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    error_page  <span class="token number">404</span>              /404.html<span class="token punctuation">;</span>

    <span class="token comment"># redirect server error pages to the static page /50x.html</span>
    <span class="token comment">#</span>
    error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
    location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
        root   html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    location ~ .*<span class="token punctuation">\\</span>.<span class="token punctuation">(</span>gif<span class="token operator">|</span>jpg<span class="token operator">|</span>jpeg<span class="token operator">|</span>png<span class="token operator">|</span>bmp<span class="token operator">|</span>swf<span class="token punctuation">)</span>$
    <span class="token punctuation">{</span>
        expires      30d<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    location ~ .*<span class="token punctuation">\\</span>.<span class="token punctuation">(</span>js<span class="token operator">|</span>css<span class="token punctuation">)</span>?$
    <span class="token punctuation">{</span>
        expires      12h<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    location ~ /<span class="token punctuation">\\</span>.
    <span class="token punctuation">{</span>
        deny all<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># access_log  /www/wwwlogs/access.log;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查询、关闭nginx进程" tabindex="-1"><a class="header-anchor" href="#查询、关闭nginx进程" aria-hidden="true">#</a> 查询、关闭nginx进程</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查询nginx服务</span>
<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> nginx
<span class="token comment"># 或</span>
pgrep <span class="token parameter variable">-a</span> 服务名
<span class="token comment"># 或看端口</span>
<span class="token function">lsof</span> <span class="token parameter variable">-i</span> :端口号

<span class="token comment"># 杀死进程</span>
<span class="token function">kill</span> PID          <span class="token comment"># 正常结束（SIGTERM）</span>
<span class="token function">kill</span> <span class="token parameter variable">-9</span> PID       <span class="token comment"># 强制结束（SIGKILL）</span>
<span class="token function">killall</span> 进程名    <span class="token comment"># 按名字杀</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_05-配置nodejs项目" tabindex="-1"><a class="header-anchor" href="#_05-配置nodejs项目" aria-hidden="true">#</a> 05.配置NodeJs项目</h2><p>目前使用了一种最low的方式，在9000端口运行了一个NodeJs服务，并且为了简化部署流程，在项目路径下直接配置了git服务，需要每次重新拉取最新的代码，手动重启服务。</p><p>怎么说呢，虽然需要手动的部分确实是多了一点，但是其实后端服务更新的频率并不高，唯手熟尔。</p><h3 id="配置git环境" tabindex="-1"><a class="header-anchor" href="#配置git环境" aria-hidden="true">#</a> 配置git环境</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 先下载相关依赖</span>
yum <span class="token function">install</span> curl-devel expat-devel gettext-devel openssl-devel zlib-devel
<span class="token comment"># 下载git</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> git-core
<span class="token comment"># 验证git版本</span>
<span class="token function">git</span> <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="github配置ssh-key" tabindex="-1"><a class="header-anchor" href="#github配置ssh-key" aria-hidden="true">#</a> github配置ssh key</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 新增本地ssh key</span>
ssh-keygen <span class="token parameter variable">-t</span> ed25519 <span class="token parameter variable">-C</span> <span class="token string">&quot;email&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+y+`" alt="ssh初始化" tabindex="0" loading="lazy"><figcaption>ssh初始化</figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看ssh目录下所有文件</span>
<span class="token function">ls</span> <span class="token parameter variable">-al</span> ~/.ssh

<span class="token builtin class-name">cd</span> ~/.ssh

<span class="token comment"># 查看ssh key</span>
<span class="token function">cat</span> id_ed25519.pub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+_+'" alt="ssh查看" tabindex="0" loading="lazy"><figcaption>ssh查看</figcaption></figure><p>有了新增的ssh key，我们可以打开github的设置界面进行设置。</p><figure><img src="'+q+'" alt="ssh github 设置" tabindex="0" loading="lazy"><figcaption>ssh github 设置</figcaption></figure><figure><img src="'+w+`" alt="ssh gtihub 新增key" tabindex="0" loading="lazy"><figcaption>ssh gtihub 新增key</figcaption></figure><h3 id="本地运行服务" tabindex="-1"><a class="header-anchor" href="#本地运行服务" aria-hidden="true">#</a> 本地运行服务</h3><h4 id="安装nodejs" tabindex="-1"><a class="header-anchor" href="#安装nodejs" aria-hidden="true">#</a> 安装NodeJs</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 跟本地nodejs同步，安装了版本v18.18.2</span>
<span class="token function">wget</span> https://nodejs.org/dist/v18.18.2/node-v18.18.2-linux-x64.tar.xz
<span class="token comment"># 解压安装包</span>
<span class="token function">tar</span> xf node-v18.18.2-linux-x64.tar.xz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+z+`" alt="nodejs安装包解压" tabindex="0" loading="lazy"><figcaption>nodejs安装包解压</figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 新建nodejs包存放目录</span>
<span class="token function">mkdir</span> /usr/local/lib/node
<span class="token comment"># 移动解压包到指定目录 并文件夹名称</span>
<span class="token function">mv</span> node-v18.18.2-linux-x64 /usr/local/lib/node/nodejs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+j+`" alt="nodejs包转移" tabindex="0" loading="lazy"><figcaption>nodejs包转移</figcaption></figure><p><strong>设置环境NodeJs环境变量</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 访问设置文件</span>
<span class="token function">sudo</span> <span class="token function">vim</span> /etc/profile
<span class="token comment"># 在最底部加入环境变量</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">NODEJS_HOME</span><span class="token operator">=</span>/usr/local/lib/node/nodejs
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$NODEJS_HOME</span>/bin:<span class="token environment constant">$PATH</span>
<span class="token comment"># 刷新修改</span>
<span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+N+`" alt="nodejs设置环境变量" tabindex="0" loading="lazy"><figcaption>nodejs设置环境变量</figcaption></figure><p>安装完成，查看版本号</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># nodejs version</span>
<span class="token function">node</span> <span class="token parameter variable">-v</span>
<span class="token comment"># npm version</span>
<span class="token function">npm</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+S+`" alt="nodejs版本号" tabindex="0" loading="lazy"><figcaption>nodejs版本号</figcaption></figure><p>nodejs有一个运营利器<code>pm2</code>，可以保持NodeJs服务的运行。</p><h3 id="pm2安装和使用" tabindex="-1"><a class="header-anchor" href="#pm2安装和使用" aria-hidden="true">#</a> PM2安装和使用</h3><p>安装之前需要更改<code>npm</code>的镜像源，换成更快一些的淘宝源，并且可以安装一下<code>yarn</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置npm源</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com/
<span class="token comment"># 查看npm源</span>
<span class="token function">npm</span> config get registry
<span class="token comment"># 全局安装yarn</span>
<span class="token function">npm</span> i <span class="token function">yarn</span> <span class="token parameter variable">-g</span>
<span class="token comment"># 设置yarn源</span>
<span class="token function">yarn</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com/
<span class="token comment"># 查看yarn源</span>
<span class="token function">yarn</span> config get registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+D+`" alt="npm设置源" tabindex="0" loading="lazy"><figcaption>npm设置源</figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 利用npm全局安装pm2</span>
<span class="token function">npm</span> i pm2 <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,69)),s("p",null,[n[3]||(n[3]=a("具体的使用指南可以跳转",-1)),s("a",C,[n[2]||(n[2]=a("https://pm2.fenxianglu.cn/docs/start",-1)),l(i)])]),n[8]||(n[8]=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看pm2进程</span>
pm2 list
<span class="token comment"># 删除并停止某个进程</span>
pm2 delete <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+E+`" alt="PM2安装" tabindex="0" loading="lazy"><figcaption>PM2安装</figcaption></figure><h2 id="_06-配置mysql数据库" tabindex="-1"><a class="header-anchor" href="#_06-配置mysql数据库" aria-hidden="true">#</a> 06.配置Mysql数据库</h2><p>不知道是版本问题还是安装步骤某个环节缺失，搜了N个帖子之后，重装系统了N次之后，总算是成功的安装好了Mysql。</p><p>为了方式下次安装还会有这样的问题，详细记录在此。</p><h3 id="卸载自带的mariadb数据库" tabindex="-1"><a class="header-anchor" href="#卸载自带的mariadb数据库" aria-hidden="true">#</a> 卸载自带的mariadb数据库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查询</span>
<span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> mari
<span class="token comment"># 关于maria都要删除</span>
<span class="token function">rpm</span> <span class="token parameter variable">-e</span> <span class="token parameter variable">--nodeps</span> mariadb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="下载mysql" tabindex="-1"><a class="header-anchor" href="#下载mysql" aria-hidden="true">#</a> 下载Mysql</h3>`,8)),s("p",null,[n[5]||(n[5]=a("官方包下载地址",-1)),s("a",I,[n[4]||(n[4]=a("https://downloads.mysql.com/archives/community/",-1)),l(i)])]),n[9]||(n[9]=e('<figure><img src="'+M+`" alt="mysql版本" tabindex="0" loading="lazy"><figcaption>mysql版本</figcaption></figure><p>这次选择的是版本<code>5.7.30</code>，按图下载压缩包之后，将压缩包直接传到服务器上</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 例如新建一个存放下载文件的目录</span>
<span class="token function">mkdir</span> /data/download
<span class="token comment"># 进入目录</span>
<span class="token builtin class-name">cd</span> /data/download
<span class="token comment"># 解压到当前目录下</span>
<span class="token function">tar</span> <span class="token parameter variable">-xvf</span> mysql-5.7.30-linux-glibc2.12-x86_64.tar
<span class="token comment"># 移动解压包到指定目录 并重命名</span>
<span class="token function">mv</span> mysql-5.7.30-linux-glibc2.12-x86_64 /usr/local/mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="建立用户组" tabindex="-1"><a class="header-anchor" href="#建立用户组" aria-hidden="true">#</a> 建立用户组</h3><p>先查看一下，当前的Linux中是否存在mysql的用户和组</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">grep</span> mysql
<span class="token function">cat</span> /etc/group  <span class="token operator">|</span> <span class="token function">grep</span> mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>添加用户和组</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">groupadd</span> mysql
<span class="token function">useradd</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">-g</span> mysql mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建目录并修改权限" tabindex="-1"><a class="header-anchor" href="#创建目录并修改权限" aria-hidden="true">#</a> 创建目录并修改权限</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /data/mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看一下 /data/mysql 以及刚刚解压缩的 /usr/local/mysql 的权限，发现其所属用户和组均为root</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token parameter variable">-dl</span> /usr/local/mysql/
<span class="token function">ls</span> <span class="token parameter variable">-dl</span> /data/mysql/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>将所有者和组均改为mysql</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chown</span> <span class="token parameter variable">-R</span> mysql.mysql /usr/local/mysql
<span class="token function">chown</span> <span class="token parameter variable">-R</span> mysql.mysql /data/mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="初始化mysql" tabindex="-1"><a class="header-anchor" href="#初始化mysql" aria-hidden="true">#</a> 初始化mysql</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/usr/local/mysql/bin/mysqld <span class="token parameter variable">--user</span><span class="token operator">=</span>mysql <span class="token parameter variable">--basedir</span><span class="token operator">=</span>/usr/local/mysql/ <span class="token parameter variable">--datadir</span><span class="token operator">=</span>/data/mysql <span class="token parameter variable">--initialize</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>会生成一个默认密码，记住等会需要使用。</p><figure><img src="`+P+`" alt="mysql初始化" tabindex="0" loading="lazy"><figcaption>mysql初始化</figcaption></figure><h3 id="配置my-cnf配置文件" tabindex="-1"><a class="header-anchor" href="#配置my-cnf配置文件" aria-hidden="true">#</a> 配置my.cnf配置文件</h3><p>因为我们是那个压缩包安装，即离线安装，所以这个my.cnf是需要自己手动配置的</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/my.cnf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将下面的内容，输入到 /etc/my.cnf中，这里要注意，坑来了，直接指定socket的目录，不用什么软连接。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
<span class="token assign-left variable">datadir</span><span class="token operator">=</span>/data/mysql
<span class="token assign-left variable">basedir</span><span class="token operator">=</span>/usr/local/mysql
<span class="token assign-left variable">socket</span><span class="token operator">=</span>/var/lib/mysql/mysql.sock
<span class="token assign-left variable">user</span><span class="token operator">=</span>mysql
<span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token number">3306</span>
character-set-server<span class="token operator">=</span>utf8
<span class="token comment"># 取消密码验证</span>
<span class="token comment"># skip-grant-tables</span>
<span class="token comment"># # Disabling symbolic-links is recommended to prevent assorted security risks</span>
symbolic-links<span class="token operator">=</span><span class="token number">0</span>
<span class="token punctuation">[</span>mysqld_safe<span class="token punctuation">]</span>
log-error<span class="token operator">=</span>/var/log/mysqld.log
pid-file<span class="token operator">=</span>/var/run/mysqld/mysqld.pid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动服务" tabindex="-1"><a class="header-anchor" href="#启动服务" aria-hidden="true">#</a> 启动服务</h3><p>这里的话，需要将mysqld服务找到，然后复制到 /etc/init.d/mysqld（因为默认的离线安装，它是不识别这个mysqld的）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> / <span class="token parameter variable">-name</span> mysql-server  <span class="token comment"># 查找mysql服务</span>
<span class="token comment"># 如果不存在 /etc/init.d 那么就自己 mkdir /etc/init.d 再进行拷贝</span>
<span class="token comment"># 存在直接拷贝</span>
<span class="token function">cp</span> /usr/local/mysql/support-files/mysql.server /etc/init.d/mysqld <span class="token comment"># 复制</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后需要安装一下mariadb-server的服务，因为mysql.service依赖于此</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> mariadb-server <span class="token comment"># 1. 安装服务</span>
systemctl start mariadb.service <span class="token comment"># 2.启动服务</span>
systemctl <span class="token builtin class-name">enable</span> mariadb.service <span class="token comment"># 3.设置为开机自启</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动mysql服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">service</span> mysqld start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="修改mysql初始密码" tabindex="-1"><a class="header-anchor" href="#修改mysql初始密码" aria-hidden="true">#</a> 修改mysql初始密码</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span> <span class="token comment"># 进入mysql</span>
<span class="token comment"># 输入临时密码  例如我的：qGlt6e&lt;yeDa=</span>
<span class="token comment"># 设置密码一次</span>
SET PASSWORD <span class="token operator">=</span> PASSWORD<span class="token punctuation">(</span><span class="token string">&#39;123456&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment"># 设置密码二次 这里很关键，以防只有一步时报错。</span>
ALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> IDENTIFIED BY <span class="token string">&#39;123456&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置root账户远程权限" tabindex="-1"><a class="header-anchor" href="#设置root账户远程权限" aria-hidden="true">#</a> 设置root账户远程权限</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>use mysql<span class="token punctuation">;</span>
update user <span class="token builtin class-name">set</span> <span class="token function">host</span> <span class="token operator">=</span><span class="token string">&#39;%&#39;</span> where user <span class="token operator">=</span><span class="token string">&#39;root&#39;</span> and <span class="token function">host</span> <span class="token operator">=</span><span class="token string">&#39;localhost&#39;</span><span class="token punctuation">;</span> <span class="token comment"># root@localhost 实际访问名称</span>
<span class="token comment"># 刷新</span>
flush privileges<span class="token punctuation">;</span>
<span class="token builtin class-name">exit</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置新的远程账号" tabindex="-1"><a class="header-anchor" href="#设置新的远程账号" aria-hidden="true">#</a> 设置新的远程账号</h3><p>安全问题，可以另外建设一个新的账号，专用于远程操作。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置一个新账号</span>
create user <span class="token builtin class-name">test</span> identified by <span class="token string">&#39;123456&#39;</span><span class="token punctuation">;</span>
<span class="token comment"># 给不限制来处的用户test分配可对数据库databasesName所有表进行所有操作的权限，并设定口令为123。</span>
grant all privileges on databasesName.* to <span class="token string">&#39;test&#39;</span>@<span class="token string">&#39;%&#39;</span> identified by <span class="token string">&#39;123&#39;</span> with grant option<span class="token punctuation">;</span>
<span class="token comment"># 刷新</span>
flush privileges<span class="token punctuation">;</span>
<span class="token comment"># 查询用户信息</span>
<span class="token keyword">select</span> host,user from user<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+$+'" alt="mysql远程账户权限" tabindex="0" loading="lazy"><figcaption>mysql远程账户权限</figcaption></figure><p>这样就可以使用新建的账号进行远程登录操作。</p>',39))])}const H=t(B,[["render",X],["__file","如何从零开始部署一台服务器【02】.html.vue"]]);export{H as default};
