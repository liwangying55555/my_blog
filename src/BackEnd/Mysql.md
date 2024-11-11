---
order: 2
date: 2021-01-22 11:32:51
title: MySQL使用合集（完善中）
category:
  - Mysql
---


## 本地数据库

作为一个专业的前(mo)端(yu)选手，在没有可视化工具的情况下，我想查个库，怎么整。
(总是有那么些些奇奇怪怪的场景需要一些些奇奇怪怪的操作)

```linux
mysql

# 显示所有的数据库
mysql> show databases;(注意:最后有个 s)

# 创建数据库
mysql> create database test;

# 连接数据库
mysql> use test;

# 查看当前使用的数据库
mysql> select database();

# 当前数据库包含的表信息
mysql> show tables; (注意:最后有个 s)

# 删除数据库
mysql> drop database test;
```

## 常用的SQL语句

### SQL 连接(JOIN)

> [SQL 菜鸟驿站](https://www.runoob.com/sql/sql-tutorial.html)

SQL join 用于把来自两个或多个表的行结合起来。

下图展示了 LEFT JOIN、RIGHT JOIN、INNER JOIN、OUTER JOIN 相关的 7 种用法。
![images](./imgs/sql-join.png)

多张表之间存在相同的字段时，判断是否相等，可以进行联表查询。
查询出需要的数据之后，再进行过滤。

#### 示例

```linux
SELECT t_user.uid, t_user.username, t_user.name, t_role.role_name, t_role.mark 
from t_user 
JOIN t_user_role on t_user.uid = t_user_role.uid 
JOIN t_role on t_user_role.role_id = t_role.role_id 
WHERE t_user.username = '123' AND t_user.password = '123'
```

### 批量插入数据(INSERT INTO)

批量插入大的语句和单个插入相似

```linux
# 单个插入
insert into t_user_role (uid, role_id) values (1,2)

# 批量插入
insert into t_user_role 
(uid, role_id) 
values 
(1,2),
(2,3),
(3,4),
(4,5),

```
