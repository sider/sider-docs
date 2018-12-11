# Update Guide

This section explains how to update Sider with docker-compose typically.

## Download Application Images
The latest tag of Sider application will be published when brand-new version is released. So, pull it on the EC2 instance you have used for Sider.

```
$ docker pull quay.io/actcat/sideci:${NEW_VERSION}
$ docker pull quay.io/actcat/catpost:${NEW_VERSION}
$ docker pull quay.io/actcat/setaria:${NEW_VERSION}
```

## Stop Applications
Stop applications before applying updates to prevent from raising unexpected errors because a latest version of Sider possibly include changes for database. Following command will stop Sider.

```
docker-compose down
```

## Update `docker-compose.yml`
Replace older tag names with latest ones as `docker-compose.yml` has tag names of images to run.

## Apply Database Updates
Apply changes for database with docker-compose's commands.

```
$ docker-compose run sideci_web bundle exec rake db:migrate db:seed_fu
$ docker-compose run catpost_web bundle exec rake db:migrate
$ docker-compose run setaria_web bundle exec rake db:migrate
```

## Running Up Applications
Run up Sider applications with docker-compose.

```
$ docker-compose up
```
