---
id: containers
title: Sider Enterprise Containers Guide
sidebar_label: Containers Guide
---

Sider Enterprise is distributed as a set of the following Docker images.

- `480130971618.dkr.ecr.us-east-1.amazonaws.com/sideci_onprem`
- `480130971618.dkr.ecr.us-east-1.amazonaws.com/catpost_onprem`

In this guide, we explain how you can start containers using the images.

We use `docker` command in this guide and drop any unnecessary options to shorten the command line. You may need to customize the exact command line depending on the setup of Sider Enterprise and the actual container managers, like Docker Compose or Kubernates, you are using. Typical extra command line options are `-p` to configure port mappings, `-e` or `--env-file` to pass environment variables, `--rm` to delete containers after stopping them, and `--network` to configure network access between containers.

## Releases and update

The images have tags to specify the release of Sider Enterprise. The tag looks like `201902.1`, year, month, and release number. The latest release is found at [the releases page](./releases/index.md).

We strongly recommend using the latest versions of the images. Sider Enterprise team releases new versions monthly, usually in the middle of the month. Please find the new release notification, and follow the update instructions.

## Pulling images

The Docker images are private so that only the Sider Enterprise customers and the developer team can download the images. We provide the credentials, AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY. Run the following command to pull images.

```shell-session
$ docker run --rm \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -e AWS_ACCESS_KEY_ID=AWS_ACCESS_KEY_ID \
    -e AWS_SECRET_ACCESS_KEY=AWS_SECRET_ACCESS_KEY \
    sider/ecr-image-puller IMAGE_NAME
```

`IMAGE_NAME` is like `480130971618.dkr.ecr.us-east-1.amazonaws.com/sideci_onprem:release-201911.5`.

## Running `sideci_onprem`

`sideci_onprem` image is used to run two containers, `sideci_web` and `sideci_worker`.

### Running the web server

The `sideci_web` runs with `puma` command. Use the following command to run `sideci_web`.

```
$ docker run 480130971618.dkr.ecr.us-east-1.amazonaws.com/sideci_onprem:TAG bundle exec puma
```

`sideci_web` listens TCP port 3000 to receive HTTP requests from end-users.

### Running the job worker

The `sideci_worker` runs with `sidekiq` command. Use the following command to run `sideci_worker`.

```
$ docker run 480130971618.dkr.ecr.us-east-1.amazonaws.com/sideci_onprem:TAG bundle exec sidekiq -C ./config/sidekiq.yml
```

`sideci_worker` does not listen on any port, and the process does not receive any HTTP request.

### Running batch jobs

`sideci_onprem` has daily batch jobs, which runs with `rake` command. Use the following command to run daily batch jobs.

```
$ docker run 480130971618.dkr.ecr.us-east-1.amazonaws.com/sideci_onprem:TAG bundle exec rake onprem:batch:daily
```

Set up `cron` job or anything else to run the batch job every day. We recommend running the batch job during after hours, when no one is actively using Sider for performance reasons.

## Running `catpost_onprem`

`catpost_onprem` image is used to run two containers, `catpost_web`, `catpost_worker` and `catpost_scheduler`.

### Running the web server

The `catpost_web` runs with `puma` command. Use the following command to run `catpost_web`.

```
$ docker run 480130971618.dkr.ecr.us-east-1.amazonaws.com/catpost_onprem:TAG bundle exec puma
```

`catpost_web` listens on TCP port 3000 to receive HTTP requests from `sideci` containers.

### Running the job worker

The `catpost_worker` runs with `rake` command. Use the following command to run `catpost_worker`.

```
$ docker run 480130971618.dkr.ecr.us-east-1.amazonaws.com/catpost_onprem:TAG bundle exec rake environment resque:work
```

`catpost_worker` does not listen on any port.

### Running the job scheduler

This scheduler container does not require much processor power.
You need only one scheduler in the whole system of Sider Enterprise, but you can run multiple scheduler containers for redundancy.

The `catpost_scheduler` runes with `rake` command. Use the following command to run `catpost_scheduler`.

```
$ docker run 480130971618.dkr.ecr.us-east-1.amazonaws.com/catpost_onprem:TAG bundle exec rake environment resque:scheduler
```

`catpost_scheduler` does not listen on any port.

### Running batch jobs

`catpost_onprem` has daily batch jobs, which runs with `rake` command. Use the following command to run daily batch jobs.

```
$ docker run 480130971618.dkr.ecr.us-east-1.amazonaws.com/catpost_onprem:TAG bundle exec rake onprem:batch:daily
```

Set up `cron` job or anything else to run the batch job every day. We recommend running the batch job during after hours, when no one is actively using Sider for performance reasons.

## Runners - invoked by `sideci_worker`

`sideci_worker` creates containers that perform analyses, we call them **Runners**.
Runners are important for Sider because they are responsible for analyzing your source code.
Performance issues would be caused by runners because they heavily use computer resources,
so consider [Scaling](./scaling.md) if such problems happen.
