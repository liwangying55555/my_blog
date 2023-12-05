---
order: 2
index: number
category:
  - mysql
---

# MySQL使用合集（完善中）

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
