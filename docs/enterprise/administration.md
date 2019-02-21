---
id: administration
title: Sider Enterprise Administration Guide
sidebar_label: Administration Guide
---

This guide explains some of the administrative operations of Sider Enterprise.

## Admin users

Sider Enterprise has `admin` flag on users. With the flag, the user account is treated as an _administrator_ of the Sider Enterprise installation.

The _admin_ users have a privilege to access the `/admin` page. The `admin` page allows to do the following operations.

* To review all of the users, repositories, organization, and analyses.
* To make another user _admin_.
* To upload the license file and review the license.

### Managing admin users from the command line

Sider Enterprise provides a command to make a user an _admin_. The command is used to make a user the first _admin_.

To make a user with `sider_admin` GitHub login, run the following command.

```
$ docker run quay.io/actcat/sideci bundle exec rake admin:promote[sider_admin]
```

Note that the `sider_admin` user should have an account on the Sider Enterprise beforehand.

## Managing license files

Sider team provides a license file to your team to manage the license. You can upload the license file from the `/admin` page. You can also review the current license from the page.

