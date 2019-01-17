# Update Guide

This section explains how to do a regular update of Sider with docker-compose.

## Download Application Images
The latest tag of the Sider application will be published when a brand-new version is released. So, pull it on the EC2 instance you have used for Sider.

```
$ docker pull quay.io/actcat/sideci:${NEW_VERSION}
$ docker pull quay.io/actcat/catpost:${NEW_VERSION}
$ docker pull quay.io/actcat/setaria:${NEW_VERSION}
```

## Stop Applications
Stop applications before applying updates to prevent raising unexpected errors because the latest version of Sider may include changes for the database. The following command will stop Sider.

```
docker-compose down
```

## Update `docker-compose.yml`
Replace older tag names with the latest ones as `docker-compose.yml` has tag names of images to run.

## Apply Database Updates
Apply changes for databases with docker-compose's commands.

```
$ docker-compose run sideci_web bundle exec rake db:migrate db:seed_fu
$ docker-compose run catpost_web bundle exec rake db:migrate
$ docker-compose run setaria_web bundle exec rake db:migrate
```

## Build Up Applications
Build up Sider applications with docker-compose.

```
$ docker-compose up
```
