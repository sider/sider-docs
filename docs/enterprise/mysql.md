---
id: mysql
title: MySQL
sidebar_label: MySQL
hide_title: true
---

# MySQL

This document explains how to set up MySQL for Sider Enterprise.

## Requirements

Sider Enterprise requires MySQL 5.7. You cannot use MySQL 5.6 or older. MySQL 8.0 may work, but we do not support the use of this version. Also, the MySQL server should run on a machine that has sufficient storage size and memory space. It depends on the use of customers, but we recommend preparing 8 GiB RAM and 100 GiB storage or higher for the dedicated MySQL server.

## Recommended Parameters

You should configure these parameters to handle any requests from Sider Enterprise.

- [`max_allowed_packet`](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_max_allowed_packet) - The parameter should be set with `134217728` or higher since Sider Enterprise often handles large data.

- [`tmp_table_size`](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_tmp_table_size) and [`max_heap_table_size`](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_max_heap_table_size) - We recommend configuring these parameters with `268435456` or higher together. Note they depend on the memory of your MySQL server. You can increase the value more if the memory space is large.

- [`innodb_temp_data_file_path`](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_temp_data_file_path) - The recommended value is `ibtmp1:12M:autoextend:max:5G`. Fine-tune the trailing parameter `5G` to fit your environment. This size is the maximum size of the temporary tablespace data.

  The queries called by Sider Enterprise consume an in-memory temporary table, and it will be converted to an on-disk temporary table after the size exceeds the smaller of `tmp_table_size` and `max_heap_table_size`. The temporary table file size will be extended with `innodb_temp_data_file_path`, but the default value is `ibtmp1:12M:autoextend`, which means the file will grow without limitation. Eventually, this would cause out of disk.

## Integration with Sider Enterprise

The [`DATABASE_URL`](./config.md#mysql) of Sider Enterprise is configured as follows:

```
mysql2://{USER}:{PASSWORD}@{HOST}:{PORT}/{DATABASE_NAME}?{OPTION1}={VALUE1}&{OPTION2}={VALUE2}
```

- `USER` - The user name to use when connecting to the MySQL server
- `PASSWORD` - The password to use when connecting to the MySQL server
- `HOST` - The host name of the MySQL server
- `PORT` - The port number of the MySQL server
- `DATABASE_NAME` - The database name for Sider Enterprise
- `OPTION1=VALUE1`, `OPTION2=VALUE2`, ... - The query parameters to configure the connection

When setting up your MySQL server, you will create `USER` and its `PASSWORD` first. Sider Enterprise will try to create the specified `DATABASE_NAME` unless it does not exist, so the `USER` should have strong privileges. If you don't want to pass such powerful permissions to the `USER`, create the `DATABASE_NAME` on your own, and allow the `USER` to do ALL operations only for the `DATABASE_NAME`.

Also, confirm Sider Enterprise services can access to the MySQL server via the specified `HOST` and `PORT`.
