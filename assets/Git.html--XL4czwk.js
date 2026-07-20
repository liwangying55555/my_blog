import{_ as t,r as c,o as m,c as d,e as i,a as s,b as a,d as l}from"./app-BBKO0RFJ.js";const o={},p={href:"https://segmentfault.com/a/1190000039147662",target:"_blank",rel:"noopener noreferrer"},r={href:"https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular",target:"_blank",rel:"noopener noreferrer"};function u(b,n){const e=c("ExternalLinkIcon");return m(),d("div",null,[n[6]||(n[6]=i(`<h1 id="git使用合集-完善中" tabindex="-1"><a class="header-anchor" href="#git使用合集-完善中" aria-hidden="true">#</a> GIT使用合集（完善中）</h1><p>作为一个专业的前(mo)端(yu)选手，总有些奇怪的操作是<strong>sourcetree</strong>无法满足需求的，特此记录。</p><h2 id="论如何修改commit的信息" tabindex="-1"><a class="header-anchor" href="#论如何修改commit的信息" aria-hidden="true">#</a> 论如何修改commit的信息</h2><h3 id="_1-按需修改" tabindex="-1"><a class="header-anchor" href="#_1-按需修改" aria-hidden="true">#</a> 1.按需修改</h3><blockquote><p><a href="&#39;https://www.jianshu.com/p/93bb4d049955&#39;">参考直达</a></p></blockquote><p>傻瓜式操作，按图索骥。<br><br> 优点：按需修改，想改哪里就改哪里<br><br> 缺点：全量修改比较麻烦</p><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code><span class="token comment"># 第一步，（n）代表提交次数</span>
<span class="token command">$ git rebase<span class="token parameter"> -i</span> HEAD~n</span>
<span class="token comment"># 第二步</span>
然后按\`i\`编辑，把\`pick\` 改成 \`edit\`，按<span class="token string">&#39;Esc&#39;</span>退出编辑，按\`:wq\`保存退出
<span class="token comment"># 第三步</span>
<span class="token command">$ git commit<span class="token parameter"> --amend</span><span class="token parameter"> --author</span>=</span><span class="token string">&quot;作者 &lt;邮箱@xxxx.com&gt;&quot;</span> --no-edit
<span class="token comment"># 第四步</span>
<span class="token command">$ git rebase<span class="token parameter"> --continue</span></span>
<span class="token comment"># 第五步</span>
<span class="token command">$ git push<span class="token parameter"> --force</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-局部区域修改" tabindex="-1"><a class="header-anchor" href="#_2-局部区域修改" aria-hidden="true">#</a> 2.局部区域修改</h3><blockquote><p><a href="&#39;https://blog.csdn.net/con_knife/article/details/80543969&#39;">参考直达</a></p></blockquote><p>上班摸鱼利器，公司提交邮箱和github提交邮箱两不耽误<br><br> 优点：在正确的时间做想做的任何事情，没有缺点<br><br> 缺点：见优点</p><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code><span class="token comment"># 查看局部</span>
<span class="token command">$ git config user.name</span>
<span class="token command">$ git config user.email</span>
<span class="token comment"># 修改局部</span>
<span class="token command">$ git config user.name </span><span class="token string">&quot;name&quot;</span>
<span class="token command">$ git config user.email </span><span class="token string">&quot;email&quot;</span>
<span class="token comment"># 查看全局</span>
<span class="token command">$ git config<span class="token parameter"> --global</span> user.name</span>
<span class="token command">$ git config<span class="token parameter"> --global</span> user.email</span>
<span class="token comment"># 修改全局</span>
<span class="token command">$ git config<span class="token parameter"> --global</span> user.name </span><span class="token string">&quot;name&quot;</span>
<span class="token command">$ git config<span class="token parameter"> --global</span> user.email </span><span class="token string">&quot;email&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-仅修改上次提交" tabindex="-1"><a class="header-anchor" href="#_3-仅修改上次提交" aria-hidden="true">#</a> 3.仅修改上次提交</h3><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code><span class="token comment"># 修改上次提交的commit信息</span>
<span class="token command">$ git commit<span class="token parameter"> --amend</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="论如何回退log" tabindex="-1"><a class="header-anchor" href="#论如何回退log" aria-hidden="true">#</a> 论如何回退log</h2><p>见鬼的需求变更，导致了代码回退的需要</p><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code><span class="token comment"># 回退上一个版本</span>
<span class="token command">$ git reset<span class="token parameter"> -soft</span> HEAD^</span>
<span class="token comment"># 回退到指定版本</span>
<span class="token command">$ git reset<span class="token parameter"> --soft</span> XXXX</span>

<span class="token comment"># --soft 保留文件</span>
<span class="token comment"># --hard 直接回退 不保留文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用的提交命令-最全版本" tabindex="-1"><a class="header-anchor" href="#常用的提交命令-最全版本" aria-hidden="true">#</a> 常用的提交命令(最全版本)</h2>`,17)),s("blockquote",null,[s("p",null,[s("a",p,[n[0]||(n[0]=a("参考直达",-1)),l(e)])])]),n[7]||(n[7]=i(`<h4 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h4><p>Git的设置文件为.gitconfig，它可以在用户主目录下(全局配置)，也可以在项目目录下(项目配置)</p><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code><span class="token comment"># 显示当前的Git配置</span>
<span class="token command">$ git config<span class="token parameter"> --list</span></span>
<span class="token comment"># 编辑Git配置文件</span>
<span class="token command">$ git config<span class="token parameter"> -e</span> [--global]</span>
<span class="token comment"># 设置提交代码时的用户信息</span>
<span class="token command">$ git config [--global] user.name </span><span class="token string">&quot;[name]&quot;</span>
<span class="token command">$ git config [--global] user.email </span><span class="token string">&quot;[email address]&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="增加-删除文件" tabindex="-1"><a class="header-anchor" href="#增加-删除文件" aria-hidden="true">#</a> 增加/删除文件</h4><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code><span class="token comment"># 添加指定文件到暂存区</span>
<span class="token command">$ git add [file1] [file2] ...</span>
<span class="token comment"># 添加指定目录到暂存区，包括子目录</span>
<span class="token command">$ git add [dir]</span>
<span class="token comment"># 添加当前目录的所有文件到暂存区</span>
<span class="token command">$ git add .</span>
<span class="token comment"># 添加每个变化前，都会要求确认</span>
<span class="token comment"># 对于同一个文件的多处变化，可以实现分次提交</span>
<span class="token command">$ git add<span class="token parameter"> -p</span></span>
<span class="token comment"># 删除工作区文件，并且将这次删除放入暂存区</span>
<span class="token command">$ git rm [file1] [file2] ...</span>
<span class="token comment"># 停止追踪指定文件，但该文件会保留在工作区</span>
<span class="token command">$ git rm<span class="token parameter"> --cached</span> [file]</span>
<span class="token comment"># 改名文件，并且将这个改名放入暂存区</span>
<span class="token command">$ git mv [file-original] [file-renamed]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="分支操作" tabindex="-1"><a class="header-anchor" href="#分支操作" aria-hidden="true">#</a> 分支操作</h4><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code><span class="token comment"># 列出所有本地分支</span>
<span class="token command">$ git branch</span>
<span class="token comment"># 列出所有远程分支</span>
<span class="token command">$ git branch<span class="token parameter"> -r</span></span>
<span class="token comment"># 列出所有本地分支和远程分支</span>
<span class="token command">$ git branch<span class="token parameter"> -a</span></span>
<span class="token comment"># 新建一个分支，但依然停留在当前分支</span>
<span class="token command">$ git branch [branch-name]</span>
<span class="token comment"># 新建一个分支，并切换到该分支</span>
<span class="token command">$ git checkout<span class="token parameter"> -b</span> [branch]</span>
<span class="token comment"># 新建一个分支，指向指定commit</span>
<span class="token command">$ git branch [branch] [commit]</span>
<span class="token comment"># 新建一个分支，与指定的远程分支建立追踪关系</span>
<span class="token command">$ git branch<span class="token parameter"> --track</span> [branch] [remote-branch]</span>
<span class="token comment"># 切换到指定分支，并更新工作区</span>
<span class="token command">$ git checkout [branch-name]</span>
<span class="token comment"># 切换到上一个分支</span>
<span class="token command">$ git checkout -</span>
<span class="token comment"># 建立追踪关系，在现有分支与指定的远程分支之间</span>
<span class="token command">$ git branch<span class="token parameter"> --set</span>-upstream [branch] [remote-branch]</span>
<span class="token comment"># 合并指定分支到当前分支</span>
<span class="token command">$ git merge [branch]</span>
<span class="token comment"># 选择一个commit，合并进当前分支</span>
<span class="token command">$ git cherry-pick [commit]</span>
<span class="token comment"># 删除分支</span>
<span class="token command">$ git branch<span class="token parameter"> -d</span> [branch-name]</span>
<span class="token comment"># 删除远程分支</span>
<span class="token command">$ git push origin<span class="token parameter"> --delete</span> [branch-name]</span>
<span class="token command">$ git branch<span class="token parameter"> -dr</span> [remote/branch]</span>
<span class="token comment"># 检出版本v2.0</span>
<span class="token command">$ git checkout v2.0</span>
<span class="token comment"># 从远程分支develop创建新本地分支devel并检出</span>
<span class="token command">$ git checkout<span class="token parameter"> -b</span> devel origin/develop</span>
<span class="token comment"># 检出head版本的README文件（可用于修改错误回退）</span>
<span class="token command">$ git checkout -- README </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="标签" tabindex="-1"><a class="header-anchor" href="#标签" aria-hidden="true">#</a> 标签</h4><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code><span class="token comment"># 列出所有tag</span>
<span class="token command">$ git tag</span>
<span class="token comment"># 新建一个tag在当前commit</span>
<span class="token command">$ git tag [tag]</span>
<span class="token comment"># 新建一个tag在指定commit</span>
<span class="token command">$ git tag [tag] [commit]</span>
<span class="token comment"># 删除本地tag</span>
<span class="token command">$ git tag<span class="token parameter"> -d</span> [tag]</span>
<span class="token comment"># 删除远程tag</span>
<span class="token command">$ git push origin :refs/tag/[tagName]</span>
<span class="token comment"># 查看tag信息</span>
<span class="token command">$ git show [tag]</span>
<span class="token comment"># 提交指定tag</span>
<span class="token command">$ git push [remote] [tag]</span>
<span class="token comment"># 提交所有tag</span>
<span class="token command">$ git push [remote]<span class="token parameter"> --tag</span></span>
<span class="token comment"># 新建一个分支，指向某个tag</span>
<span class="token command">$ git checkout<span class="token parameter"> -b</span> [branch] [tag]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查看信息" tabindex="-1"><a class="header-anchor" href="#查看信息" aria-hidden="true">#</a> 查看信息</h4><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code><span class="token comment"># 显示有变更的文件</span>
<span class="token command">$ git status</span>
<span class="token comment"># 显示当前分支的版本历史</span>
<span class="token command">$ git log</span>
<span class="token comment"># 显示commit历史，以及每次commit发生变更的文件</span>
<span class="token command">$ git log<span class="token parameter"> --stat</span></span>
<span class="token comment"># 搜索提交历史，根据关键词</span>
<span class="token command">$ git log<span class="token parameter"> -S</span> [keyword]</span>
<span class="token comment"># 显示某个commit之后的所有变动，每个commit占据一行</span>
<span class="token command">$ git log [tag] HEAD<span class="token parameter"> --pretty</span>=format:%s</span>
<span class="token comment"># 显示某个commit之后的所有变动，其&quot;提交说明&quot;必须符合搜索条件</span>
<span class="token command">$ git log [tag] HEAD<span class="token parameter"> --grep</span> feature</span>
<span class="token comment"># 显示某个文件的版本历史，包括文件改名</span>
<span class="token command">$ git log<span class="token parameter"> --follow</span> [file]</span>
<span class="token command">$ git whatchanged [file]</span>
<span class="token comment"># 显示指定文件相关的每一次diff</span>
<span class="token command">$ git log<span class="token parameter"> -p</span> [file]</span>
<span class="token comment"># 显示过去5次提交</span>
<span class="token command">$ git log<span class="token parameter"> -5</span><span class="token parameter"> --pretty</span><span class="token parameter"> --oneline</span></span>
<span class="token comment"># 显示所有提交过的用户，按提交次数排序</span>
<span class="token command">$ git shortlog<span class="token parameter"> -sn</span></span>
<span class="token comment"># 显示指定文件是什么人在什么时间修改过</span>
<span class="token command">$ git blame [file]</span>
<span class="token comment"># 显示暂存区和工作区的差异</span>
<span class="token command">$ git diff</span>
<span class="token comment"># 显示暂存区和上一个commit的差异</span>
<span class="token command">$ git diff<span class="token parameter"> --cached</span> [file]</span>
<span class="token comment"># 显示工作区与当前分支最新commit之间的差异</span>
<span class="token command">$ git diff HEAD</span>
<span class="token comment"># 显示两次提交之间的差异</span>
<span class="token command">$ git diff [first-branch]...[second-branch]</span>
<span class="token comment"># 显示今天你写了多少行代码</span>
<span class="token command">$ git diff<span class="token parameter"> --shortstat</span> </span><span class="token string">&quot;@{0 day ago}&quot;</span>
<span class="token comment"># 显示某次提交的元数据和内容变化</span>
<span class="token command">$ git show [commit]</span>
<span class="token comment"># 显示某次提交发生变化的文件</span>
<span class="token command">$ git show<span class="token parameter"> --name</span>-only [commit]</span>
<span class="token comment"># 显示某次提交时，某个文件的内容</span>
<span class="token command">$ git show [commit]:[filename]</span>
<span class="token comment"># 显示当前分支的最近几次提交</span>
<span class="token command">$ git reflog</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="远程同步" tabindex="-1"><a class="header-anchor" href="#远程同步" aria-hidden="true">#</a> 远程同步</h4><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code><span class="token comment"># 下载远程仓库的所有变动</span>
<span class="token command">$ git fetch [remote]</span>
<span class="token comment"># 显示所有远程仓库</span>
<span class="token command">$ git remote<span class="token parameter"> -v</span></span>
<span class="token comment"># 显示某个远程仓库的信息</span>
<span class="token command">$ git remote show [remote]</span>
<span class="token comment"># 增加一个新的远程仓库，并命名</span>
<span class="token command">$ git remote add [shortname] [url]</span>
<span class="token comment"># 取回远程仓库的变化，并与本地分支合并</span>
<span class="token command">$ git pull [remote] [branch]</span>
<span class="token comment"># 上传本地指定分支到远程仓库</span>
<span class="token command">$ git push [remote] [branch]</span>
<span class="token comment"># 强行推送当前分支到远程仓库，即使有冲突</span>
<span class="token command">$ git push [remote]<span class="token parameter"> --force</span></span>
<span class="token comment"># 推送所有分支到远程仓库</span>
<span class="token command">$ git push [remote]<span class="token parameter"> --all</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="暂存区相关" tabindex="-1"><a class="header-anchor" href="#暂存区相关" aria-hidden="true">#</a> 暂存区相关</h4><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code><span class="token comment"># 恢复暂存区的指定文件到工作区</span>
<span class="token command">$ git checkout [file]</span>
<span class="token comment"># 恢复某个commit的指定文件到暂存区和工作区</span>
<span class="token command">$ git checkout [commit] [file]</span>
<span class="token comment"># 恢复暂存区的所有文件到工作区</span>
<span class="token command">$ git checkout .</span>
<span class="token comment"># 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变</span>
<span class="token command">$ git reset [file]</span>
<span class="token comment"># 重置暂存区与工作区，与上一次commit保持一致</span>
<span class="token command">$ git reset<span class="token parameter"> --hard</span></span>
<span class="token comment"># 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变</span>
<span class="token command">$ git reset [commit]</span>
<span class="token comment"># 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致</span>
<span class="token command">$ git reset<span class="token parameter"> --hard</span> [commit]</span>
<span class="token comment"># 重置当前HEAD为指定commit，但保持暂存区和工作区不变</span>
<span class="token command">$ git reset<span class="token parameter"> --keep</span> [commit]</span>
<span class="token comment"># 新建一个commit，用来撤销指定commit</span>
<span class="token comment"># 后者的所有变化都将被前者抵消，并且应用到当前分支</span>
<span class="token command">$ git revert [commit]</span>
<span class="token comment"># 暂时将未提交的变化移除，稍后再移入</span>
<span class="token command">$ git stash</span>
<span class="token command">$ git stash pop</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-commit-提交规范列表" tabindex="-1"><a class="header-anchor" href="#git-commit-提交规范列表" aria-hidden="true">#</a> git commit 提交规范列表</h2>`,16)),s("blockquote",null,[s("p",null,[n[3]||(n[3]=a("参考 ",-1)),s("a",r,[n[1]||(n[1]=a("vue",-1)),l(e)]),n[4]||(n[4]=a(" 规范 (",-1)),s("a",v,[n[2]||(n[2]=a("Angular",-1)),l(e)]),n[5]||(n[5]=a(")",-1))])]),n[8]||(n[8]=i(`<h3 id="_1-提交格式" tabindex="-1"><a class="header-anchor" href="#_1-提交格式" aria-hidden="true">#</a> 1.提交格式</h3><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git commit -m &lt;type&gt;[optional scope]: &lt;description&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-常用的-type-类型" tabindex="-1"><a class="header-anchor" href="#_2-常用的-type-类型" aria-hidden="true">#</a> 2.常用的 type 类型</h3><p>type ：用于表明我们这次提交的改动类型，是新增了功能？还是修改了测试代码？又或者是更新了文档？总结以下 13 种类型：</p><ul><li>build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交</li><li>ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle 等)的提交</li><li>docs：文档更新</li><li>feat：新增功能</li><li>fix：bug 修复</li><li>perf：性能优化</li><li>refactor：重构代码(既没有新增功能，也没有修复 bug)</li><li>style：不影响程序逻辑的代码修改(修改空白字符，补全缺失的分号等)</li><li>test：新增测试用例或是更新现有测试</li><li>revert：回滚某个更早之前的提交</li><li>chore：不属于以上类型的其他类型(日常事务)</li><li>types: 类型定义文件更改</li><li>wip: 开发中，未完成功能</li></ul><p>optional scope：一个可选的修改范围。用于标识此次提交主要涉及到代码中哪个模块。</p><p>description：一句话描述此次提交的主要内容，做到言简意赅。</p><h3 id="_3-commit-提交示例" tabindex="-1"><a class="header-anchor" href="#_3-commit-提交示例" aria-hidden="true">#</a> 3.commit 提交示例</h3><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git commit -m <span class="token string">&#39;feat: 增加 xxx 功能&#39;</span>
git commit -m <span class="token string">&#39;fix: 修复 xxx 功能&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,9))])}const k=t(o,[["render",u],["__file","Git.html.vue"]]);export{k as default};
