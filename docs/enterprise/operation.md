---
id: operation
title: Operation
sidebar_label: Operation
hide_title: true
---

# Operation

## Start, Stop, and Restart Sider Enterprise

### How to start services

Sider Enterprise services run as Docker containers, so you can start the services on any platforms which support Docker. Sider Enterprise consists of two types of daemon containers and one type of batch container. The former includes **sideci-web** and **sideci-worker**, and the latter is Runners.

**sideci-web** is a web application service. You should pass these parameters to your Docker runtime.

- COMMAND: `bundle exec puma`
- Published port: `80:3000` (You can change the value `80` to an arbitrary port number)
- Environment variables: See [Sider Enterprise Configuration](./config.md)

This is an example of how to start **sideci-web**.

```console
docker run \
  --detach \
  --restart=always \
  --env-file=ENV_FILE \
  --publish=80:3000 \
  480130971618.dkr.ecr.us-east-1.amazonaws.com/sideci_onprem:TAG \
  bundle exec puma
```

**sideci-worker** is responsible for processing background jobs. You should pass these parameters to your Docker runtime.

- COMMAND: `bundle exec sidekiq`
- Environment variables: See [Sider Enterprise Configuration](./config.md)

This is an example of how to start **sideci-worker**.

```console
docker run \
  --detach \
  --restart=always \
  --env-file=ENV_FILE \
  --volume=/var/run/docker.sock:/var/run/docker.sock:ro \
  480130971618.dkr.ecr.us-east-1.amazonaws.com/sideci_onprem:TAG \
  bundle exec sidekiq
```

The containers of Runners will be created by **sideci-web** or **sideci-worker**, so you don't have to care about running Runners. However, these containers will consume CPU, memory, and the disk storage space, so it's recommended to watch these metrics.

### How to stop and restart services

All Sider Enterprise services do not store persistent data within their containers, so you can stop the containers by deleting them. If you want to restart the services, all you need it just recreate them.

## Make users administrator

Sider Enterprise administrators can do the followings on the `/admin` page:

- To review all the users, repositories, organizations, and analyses
- To make other users administrators

In order to make users administrators, run the following command:

```console
docker run --env-file=ENV_FILE 480130971618.dkr.ecr.us-east-1.amazonaws.com/sideci_onprem:TAG bundle exec rails admin:promote[USERNAME]
```

Replace `USERNAME` with a GitHub login name.

> The specified `USERNAME` must exist on the Sider database. Make sure the user sign up on Sider in advance.

## Collect debug logs

Sider Enterprise services write debug logs to the standard output. You can collect the logs via [Docker logging drivers](https://docs.docker.com/config/containers/logging/configure/).

## Monitor Sider Enterprise

We recommend you should watch these metrics to notice performance issues and unexpected errors.

- Disk storage space
- CPU utilization
- Memory utilization
- The number of analyses on the `/admin/stats` page
- The periodic requests to `/api/health_check` should respond with HTTP status 200

In addition, these metrics for other services should be also monitored because Sider Enterprise heavily uses them.

- Disk storage space on MySQL
- Disk storage space on MinIO

## Remove old Docker images

You might want to remove old Docker images related to Sider Enterprise because they consume disk space. This is an example command to do that (replace `RUNNER_VERSION` with the latest Runner version. You can see the version on our [release page](./releases/index.md)):

```console
docker image ls --format '{{.Repository}}:{{.Tag}}' \
  | grep  sider/runner_ \
  | grep -v RUNNER_VERSION \
  | xargs docker rmi --force
```

Also, `docker image prune` will help you to remove dangling images. Learn more [Prune unused Docker objects](https://docs.docker.com/config/pruning/) for pruning images.
