---
id: outline
title: Sider Enterprise Outline
sidebar_label: Outline
---

Sider Enterprise allows you to run Sider on your infrastructure. This allows Sider Enterprise to satisfy higher security and performance requirements than the SaaS version of Sider.

- You can keep your source code in your network. While SaaS version of Sider offers a high-security environment, keeping your source code in your network can enable even higher security.
- You can upgrade the hardware for better analysis performance as you need it.

On the other hand, using Sider Enterprise means you have to take care of running the application. You have to set up the hardware and software required to run it and upgrade the programs.

If you are using GitHub Enterprise, Sider Enterprise is the only way to use Sider on your projects.

## Components

Sider consists of the following three components:

1. sideci
2. catpost

This section explains what each of the components does, and software requirements for each.

Sider requires the following services:

1. MySQL
2. Redis
3. Docker
4. Minio

> If your server is running on AWS, using Amazon S3 instead of Minio is an option, since Sider SaaS uses S3. We support both Minio and S3. Technically, you can also try setting up Sider with other S3 compatible object storage servers, but we only support S3 and Minio.

### sideci

`sideci` is the Sider frontend. Users access the application via their web browser. This component handles integration to GitHub Enterprise, authentication, and issue and pull request management.

`sideci` also sends requests to catpost to checkout to your source code.

#### Required software

- MySQL 5.7.x (MySQL8 may work, but is not tested)
- Redis (We are using 5.0)
- Docker (We tested with 18.09.9-ce)

### catpost

`catpost` is a Git repository proxy. It checks out the source code, manages the cache of the repository, and calculates diffs between revisions.

#### Required software

- MySQL 5.7.x (MySQL8 may work, but is not tested)
- Redis (We are using 5.0)

## Computer Resources

Sider requires at least 8 GB of memory, and typically you need more than 32 GB, depending on the number of developers.

Read the [Computer Resources](./resources.md) for the details.

## License and Authorization

To access the Docker images for Sider Enterprise components, you must use the credentials which the Sider team provides you. This is the only authentication required to access the Sider Enterprise images.

See [Pulling images](./containers.md#pulling-images) to get how to pull Docker images.

## Pusher Account

Sider Enterprise uses [Pusher](https://pusher.com) to notify from the server to users' web browser.
You have to sign up to Pusher to set up Sider Enterprise.
You may also be required to configure your network to allow access from `sideci` to Pusher.

- Pusher offers a free plan and you can start with the free plan.
- Depending on the number of Sider Enterprise users, you may need to upgrade to a paid plan.

## Quickstart

Read the [quickstart guide](./quickstart.md) to start setting up Sider Enterprise.

## Configuration

Read the [configuration index](./config.md) to review the list of the configurations available.

## Setup Outline

The configuration of Sider is done through environment variables. The outline of the Sider Enterprise setup is:

1. Authenticate and download the Docker images.
2. [Set up GitHub Enterprise integration](./github.md).
3. [Configure databases](./database.md) and [object storage](./storage.md).
4. [Write configuration files](./config.md) to pass the environment variables to the Docker containers.
5. [Start the Docker containers](./containers.md).
6. Set up HTTP access so that users can access `sideci`.
7. [Prepare for scaling](./scaling.md).
