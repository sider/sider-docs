---
id: updating
title: Sider Enterprise Updating Guide
sidebar_label: Updating Guide
hide_title: true
---

# Sider Enterprise Updating Guide

Sider Enterprise releases new versions every three months. We strongly recommend keeping your Sider Enterprise installation up to date.

## New release announcements

We announce the releases of new versions of Sider Enterprise online. We also show the release related documentation on this site, so that you can read the changes included in the update and guide to updating.

- [Release Notes](./releases/index.md)

The release notes may explain the extra steps included in each release. You may need to run some update scripts during the updating steps.

## Updating operations

You have to do the following operations to update Sider Enterprise.

1. Download a new version of images.
2. Fix configuration file.
3. Stop your Sider Enterprise.
4. Run DB migration and extra update scripts.
5. Restart Sider Enterprise.

During step #3 to #5, Sider Enterprise stops and your users cannot access Sider Enterprise.

Downloading a new version of images is easy;
just change the tag of the images and follow [this](./containers.md#pulling-images) instruction.

You may have to edit the configuration files. The release notes include a guide to explain how to change the configuration files. Read the guide carefully and change the configuration files. We also recommend making a backup of the configuration files for the case you need to rollback to the old version.

You have to stop Sider Enterprise during the update. Running an older version of Sider Enterprise during updates may cause an inconsistent DB status or simply result in errors. We also recommend making a backup of the database for the case you need to rollback to the old version.

We provide DB migrations and update scripts. You need to run the scripts to modify your database. Most Sider Enterprise releases require DB migrations which you can apply using the following commands.

```
$ docker run 480130971618.dkr.ecr.us-east-1.amazonaws.com/sideci_onprem:NEW_TAG bundle exec rake db:migrate
$ docker run 480130971618.dkr.ecr.us-east-1.amazonaws.com/catpost_onprem:NEW_TAG bundle exec rake db:migrate
```

If you use Docker Compose, run the commands below; the service names `sideci_worker` and `catpost_worker` are from the [quickstart](./quickstart.md).

```
$ docker-compose run sideci_worker bundle exec rails db:migrate
$ docker-compose run catpost_worker bundle exec rails db:migrate
```

The release may contain extra update scripts. Read the release note and run the scripts.

After updating the databases, you can start the new version of Sider Enterprise containers.
