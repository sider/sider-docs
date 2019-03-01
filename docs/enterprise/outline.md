---
id: outline
title: Sider Enterprise Outline
sidebar_label: Outline
---

Sider Enterprise allows you to run Sider on your infrastructure. This allows Sider Enterprise to satisfy higher security and performance requirements than the SaaS version of Sider.

* You can keep your source code in your network. While SaaS version of Sider offers a high-security environment, keeping your source code in your network can enable even higher security.
* You can upgrade the hardware for better analysis performance as you need it.

On the other hand, using Sider Enterprise means you have to take care of running the application. You have to set up the hardware and software required to run it and upgrade the programs.

If you are using GitHub Enterprise, Sider Enterprise is the only way to use Sider on your projects.

## Components

Sider consists of the following three components:

1. sideci
2. catpost
3. setaria

This section explains what each of the components does, and software requirements for each.

Sider requires the following services:

1. MySQL
2. Redis
3. Docker
4. Minio

> If your server is running on AWS, using Amazon S3 instead of Minio is an option, since Sider SaaS uses S3. We support both Minio and S3. Technically, you can also try setting up Sider with other S3 compatible object storage servers, but we only support S3 and Minio.

### sideci

`sideci` is the Sider frontend. Users access the application via their web browser. This component handles integration to GitHub Enterprise, authentication, and issue and pull request management.

`sideci` also sends requests to catpost and setaria to analyze your source code.

#### Required software

* MySQL 5.7.x (MySQL8 may work, but is not tested)
* Redis (We are using 5.0)

### catpost

`catpost` is a Git repository proxy. It checks out the source code, manages the cache of the repository, and calculates diffs between revisions.

#### Required software

* MySQL 5.7.x (MySQL8 may work, but is not tested)
* Redis (We are using 5.0)

### setaria

`setaria` is the analysis server. It runs analysis tools within Docker containers. It requires access to a Docker service to run analysis tools.

#### Required software

* MySQL 5.7.x (MySQL8 may work, but is not tested)
* Redis (We are using 5.0)
* Docker (We are using 18.09)

### Minio

[Minio](https://www.minio.io) is used to share your source code archive between `catpost` and `setaria`.

You can run Minio as a Docker container. It is only used to pass the source code from `catpost` to `setaria`, and the object lifetime is short - usually only minutes. The storage can be volatile:

1. You can restart Minio without persisting objects already uploaded when no analysis is running.
2. You can restart Minio even during analysis if you can tolerate the analysis failing. The analysis failure can be recovered if users click the *retry* button from the web UI.

## Computer Resources

Sider requires at least 8 GB of memory, and typically you need more than 32 GB, depending on the number of developers.

Read the [Computer Resources](./resources.md) for the details.

## Docker Images

Sider Enterprise provides three docker images, one for each component. You can `docker pull` the images to run them. We recommend using Docker Compose for the easiest setup, but it’s up to you.

Note that:

* `catpost` caches Git repositories in storage.
* `setaria` requires access to a Docker service.

You have to start seven kinds of processes to run Sider.

* `sideci_web` and `sideci_worker` using `sideci` image
* `catpost_web`, `catpost_worker`, and `catpost_scheduler` using `catpost` image
* `setaria_web` and `setaria_worker` using `setaria` image

### License and Authorization

To access the Docker images for Sider Enterprise components, you must use the credentials which the Sider team provides you. This is the only authentication required to access the Sider Enterprise images.

Use `docker login` to set up authorization.

	$ docker login -u=$account -p=$password quay.io

## Pusher Account

Sider Enterprise uses [Pusher](https://pusher.com) to notify from the server to users' web browser.
You have to sign up to Pusher to set up Sider Enterprise.
You may also be required to configure your network to allow access from `sideci` to Pusher.

* Pusher offers a free plan and you can start with the free plan.
* Depending on the number of Sider Enterprise users, you may need to upgrade to a paid plan.

## Quickstart

Read the [quickstart guide](./quickstart.md) to start setting up Sider Enterprise.

## Configuration

Read the [configuration index](./config.md) to review the list of the configurations available.

## Setup Outline

The configuration of Sider is done through environment variables. The outline of the Sider Enterprise setup is:

1. Authenticate and download the Docker images.
2. [Set up GitHub Enterprise integration](./github.md).
2. [Configure databases](./database.md) and [object storage](./storage.md).
3. [Write configuration files](./config.md) to pass the environment variables to the Docker containers.
4. [Start the Docker containers](./containers.md).
5. Set up HTTP access so that users can access `sideci`.
6. [Prepare for scaling](./scaling.md).
