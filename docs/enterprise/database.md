---
id: database
title: Sider Enterprise Database Guide
sidebar_label: Database Guide
hide_title: true
---

# Sider Enterprise Database Guide

This document explains how to configure Sider database connections. Sider requires MySQL as a database server. You have to set up two databases because each of Sider’s components, `sideci` and `catpost` needs a dedicated database.

## Requirements

Sider requires MySQL 5.7. You cannot use MySQL 5.6 or older. MySQL 8.0 may work, but we do not support the use of this version.

## Assumptions

Sider components assume the following.

- The user account which is used to connect to the database can create a database.
- `max_allowed_packet` is big enough for performance. (We recommend setting the value larger than 128 MB.)

## Database Load

The database load of Sider is not that heavy but consumes a fair amount of storage. We provide Sider SaaS on two AWS RDS instances with:

- sideci: 8 GB of RAM, 100 GB of storage
- catpost: 4 GB of RAM, 100 GB of storage

In most cases, starting with two databases on a computer with 16 GB of RAM and 200 GB of storage or less is enough.

## Configuration

The database configurations are given through `DATABASE_URL` environment variable. The URL should have `mysql2` schema, and usually contains _username_ and _password_. The _path_ component of the URL is the name of the database.

The following URL is an example.

```
DATABASE_URL=mysql2://dbuser:topsecret@mysql.local/sideci
```

It contains a _username_ and _password_ as `dbuser` and `topsecret`. The hostname of the database is `mysql.local`. If the port number is omitted, the default `3306` will be used. The name of the database is `sideci`.

Any database name can be used, but usually, you don't have to change the names from `sideci` and `catpost`.

You can optionally specify parameters as _query parameters_. One of the most commonly used one for Sider is `sslca`.

```
DATABASE_URL=mysql2://dbuser:topsecret@some.rds.amazonaws.com/sideci?sslca=config/rds-combined-ca-bundle.pem
```

The Sider Docker images ship with a `.pem` file for SSL connection to AWS RDS databases at `config/rds-combined-ca-bundle.pem`. If you need another `.pem` file or option to configure SSL for your MySQL server, use a _volume mount_ to make the file accessible from the container and specify the path to the file.

The `DATABASE_URL` is interpreted by ActiveRecord and mysql2 libraries. You can consult with the documentation of the two libraries.

- ActiveRecord https://github.com/rails/rails/tree/master/activerecord
- mysql2 https://github.com/brianmario/mysql2

## Example Configuration

### For sideci

```
# When you are using your own MySQL server
DATABASE_URL=mysql2://user:password@mysql.local/sideci
```

```
# When you are using AWS RDS MySQL server
DATABASE_URL=mysql2://user:password@some.rds.amazonaws.com/sideci?sslca=config/rds-combined-ca-bundle.pem
```

### For catpost

```
# When you are using your own MySQL server
DATABASE_URL=mysql2://user:password@mysql.local/catpost
```

```
# When you are using AWS RDS MySQL server
DATABASE_URL=mysql2://user:password@some.rds.amazonaws.com/catpost?sslca=config/rds-combined-ca-bundle.pem
```
