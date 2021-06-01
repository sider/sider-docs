---
id: single-node-with-docker-compose
title: Single Node with Docker Compose
sidebar_label: Single Node with Docker Compose
hide_title: true
---

# Single Node with Docker Compose

This is an example configuration of Sider Enterprise. It fits for testing Sider Enterprise in your environment, and we strongly recommend **NOT** using it for production.

![Single Node with Docker Compose](https://app.lucidchart.com/publicSegments/view/463f20c8-59dd-4443-893f-95343411b572/image.png)

## Prerequisites

This configuration assumes you've already [installed Docker Compose](https://docs.docker.com/compose/install/) on your node, and it supposes your environment is described the following items:

- The host name of your node is resolved with `sider.example.com`
- Your GitHub Enterprise Server is accessible via `https://ghe.example.com`
- Your environment does not have HTTP proxy servers

## Step-by-step to configure the Single Node with Docker Compose

Let's set up your Sider Enterprise for a single node with these steps:

1. [Get a Docker image](../installation.md#get-docker-image)
2. [Create your GitHub App](../github.md#registering-a-github-app)
3. Create the environment variables file (See [below](#creating-environment-variables-files))
4. Create your [docker-compose.yml](#creating-docker-composeyml)
5. [Run services](#run-services)

## Creating Environment Variables Files

Create `/etc/sider/env` with content like this, and change the file permission accessible only to be specific users. Be careful to make sure your GitHub App configurations satisfy the settings on GitHub Enterprise Server.

```sh
RAILS_ENV=onprem
SECRET_KEY_BASE={your_credential}
DATABASE_URL=mysql2://mysql:3306/sideci
BASE_URL=https://sider.example.com
REDIS_URL=redis://redis:6379/0
GITHUB_APP_ID=1
GITHUB_APP_NAME=sider
GITHUB_APP_PRIVATE_KEY={your_credential}
GITHUB_APP_OAUTH2_CLIENT_ID={your_credential}
GITHUB_APP_OAUTH2_CLIENT_SECRET={your_credential}
GITHUB_APP_WEBHOOK_SECRET={your_credential}
GITHUB_API_ENDPOINT=https://ghe.example.com/api/v3/
GITHUB_ENDPOINT=https://ghe.example.com/
ENCRYPTION_SERVICE_KEY={your_credential}
ENCRYPTION_SERVICE_SALT={your_credential}
RUNNERS_TRACES_S3_BUCKET_NAME=runner-traces
DOCKER_RUNNERS_CONFIG='{
"docker_host_url": "unix:///var/run/docker.sock",
"s3_endpoint": "http://minio:9000",
"aws_access_key_id": "{your_credential}",
"aws_secret_access_key": "{your_credential}",
"network_mode": "bridge"
}'
```

## Creating docker-compose.yml

Configure `/etc/sider/docker-compose.yml` like this:

```yaml
version: "3"
services:
  sideci_web:
    image: "{aws_account_id}.dkr.ecr.{region}.amazonaws.com/sideci_onprem:release-202106.0"
    env_file:
      - "/etc/sider/env"
    command: ["bundle", "exec", "puma"]
    restart: always
    ports:
      - "80:3000"
    depends_on:
      - mysql
      - redis
      - minio
  sideci_worker:
    image: "{aws_account_id}.dkr.ecr.{region}.amazonaws.com/sideci_onprem:release-202106.0"
    env_file:
      - "/etc/sider/env"
    command: ["bundle", "exec", "sidekiq"]
    restart: always
    volumes:
      - "/var/run/docker.sock:/var/run/docker.sock:ro"
    depends_on:
      - mysql
      - redis
      - minio
  mysql:
    image: "mysql:5.7"
    restart: always
    environment:
      MYSQL_ALLOW_EMPTY_PASSWORD: "true"
    volumes:
      - "mysql_data:/var/lib/mysql"
  redis:
    image: "redis:5"
    command: ["redis-server", "--bind", "0.0.0.0", "--appendonly", "yes"]
    restart: always
    volumes:
      - "redis_data:/data"
  minio:
    image: "minio/minio"
    command: ["server", "/data"]
    restart: always
    environment:
      MINIO_ACCESS_KEY: access-key
      MINIO_SECRET_KEY: secret-key
    volumes:
      - "minio_data:/data"

volumes:
  mysql_data:
  redis_data:
  minio_data:
```

## Run Services

Before running the services, the database migration is necessary:

```console
docker-compose --file /etc/sider/docker-compose.yml up --detach mysql
docker-compose --file /etc/sider/docker-compose.yml run sideci_worker bundle exec rails db:setup
```

After that, the services should be up and running with the command:

```console
docker-compose --file /etc/sider/docker-compose.yml up --detach --scale sideci_worker=2
```

## What's next

- [Sider Enterprise Configuration](../config.md)
- [Operation](../operation.md)
- [Update](../updating.md)
