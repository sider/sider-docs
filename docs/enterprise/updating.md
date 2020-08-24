---
id: updating
title: Update
sidebar_label: Update
hide_title: true
---

# Update

We release Sider Enterprise's new versions continuously. It is recommended that you keep your Sider Enterprise up to date.

A release note may include the extra steps you should do to update your Sider Enterprise, so please be careful to read the [release notes](./releases/index.md) before updating it. If you have any questions, don't hesitate to ask us for our help.

> Caveat: You **MUST** update Sider Enterprise versions one by one. Specifically, you cannot update it from `release-202005.0` to `release-202007.0`. You have to update from `release-202005.0` to `release-202006.0` and update from `release-202006.0` to `release-202007.0`.

## Update steps

You have to do the following operations to update Sider Enterprise.

1. Download a new Docker image. See [Get Docker Image](./installation.md#get-docker-image)
2. Update configurations if the new release note requires
3. Stop your Sider Enterprise
4. Run the update command below
5. Restart Sider Enterprise

On step #4, you must always run the following command:

```console
docker run 480130971618.dkr.ecr.us-east-1.amazonaws.com/sideci_onprem:NEW_TAG bundle exec bin/update_sider
```

If you try to update to the `release-202007.0` or earlier, run the following command. Also, you might have to run extra update scripts in addition.

```console
docker run 480130971618.dkr.ecr.us-east-1.amazonaws.com/sideci_onprem:NEW_TAG bundle exec rails db:migrate
```

> During step #3 to #5, Sider Enterprise stops and your users cannot access Sider Enterprise. This is necessary because Running an older version of Sider Enterprise during updates may cause an inconsistent DB status or simply result in errors. We also recommend making a backup of the database for the case you need to rollback to the old version.
