import{_ as l,r as a,o as d,c as r,e as i,a as n,b as t,d as u}from"./app-BBKO0RFJ.js";const v="/my_blog/assets/sql-join-DCUIyt5i.png",o={},c={href:"https://www.runoob.com/sql/sql-tutorial.html",target:"_blank",rel:"noopener noreferrer"};function m(b,e){const s=a("ExternalLinkIcon");return d(),r("div",null,[e[1]||(e[1]=i(`<h2 id="本地数据库" tabindex="-1"><a class="header-anchor" href="#本地数据库" aria-hidden="true">#</a> 本地数据库</h2><p>作为一个专业的前(mo)端(yu)选手，在没有可视化工具的情况下，我想查个库，怎么整。<br> (总是有那么些些奇奇怪怪的场景需要一些些奇奇怪怪的操作)</p><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>mysql

# 显示所有的数据库
mysql&gt; show databases;(注意:最后有个 s)

# 创建数据库
mysql&gt; create database test;

# 连接数据库
mysql&gt; use test;

# 查看当前使用的数据库
mysql&gt; select database();

# 当前数据库包含的表信息
mysql&gt; show tables; (注意:最后有个 s)

# 删除数据库
mysql&gt; drop database test;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用的sql语句" tabindex="-1"><a class="header-anchor" href="#常用的sql语句" aria-hidden="true">#</a> 常用的SQL语句</h2><h3 id="sql-连接-join" tabindex="-1"><a class="header-anchor" href="#sql-连接-join" aria-hidden="true">#</a> SQL 连接(JOIN)</h3>`,5)),n("blockquote",null,[n("p",null,[n("a",c,[e[0]||(e[0]=t("SQL 菜鸟驿站",-1)),u(s)])])]),e[2]||(e[2]=i('<p>SQL join 用于把来自两个或多个表的行结合起来。</p><p>下图展示了 LEFT JOIN、RIGHT JOIN、INNER JOIN、OUTER JOIN 相关的 7 种用法。<br><img src="'+v+`" alt="images" loading="lazy"></p><p>多张表之间存在相同的字段时，判断是否相等，可以进行联表查询。<br> 查询出需要的数据之后，再进行过滤。</p><h4 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h4><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>SELECT t_user.uid, t_user.username, t_user.name, t_role.role_name, t_role.mark 
from t_user 
JOIN t_user_role on t_user.uid = t_user_role.uid 
JOIN t_role on t_user_role.role_id = t_role.role_id 
WHERE t_user.username = &#39;123&#39; AND t_user.password = &#39;123&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="批量插入数据-insert-into" tabindex="-1"><a class="header-anchor" href="#批量插入数据-insert-into" aria-hidden="true">#</a> 批量插入数据(INSERT INTO)</h3><p>批量插入大的语句和单个插入相似</p><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code># 单个插入
insert into t_user_role (uid, role_id) values (1,2)

# 批量插入
insert into t_user_role 
(uid, role_id) 
values 
(1,2),
(2,3),
(3,4),
(4,5),

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8))])}const h=l(o,[["render",m],["__file","Mysql.html.vue"]]);export{h as default};
