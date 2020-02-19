---
id: quickstart
title: Sider Enterprise Quickstart Guide
sidebar_label: Quickstart
hide_title: true
---

# Sider Enterprise Quickstart Guide

This page introduces how to quickly get started with Sider.
If you want to run Sider more robust way, please read [Sider Enterprise Outline](./outline.md).

## Creating a new GitHub App for Sider

Please follow the [guide](./github.md#registering-a-github-app) to create a new GitHub App for Sider.

## Install Docker and Docker Compose

Install Docker and Docker Compose on your machine.
The instruction of installation are here:

- [Docker](https://docs.docker.com/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Download Application Images

You have to fetch Docker images to run Sider.
After you receives your credential information, which are `YOUR_KEY`, `YOUR_SECRET` and `IMAGE_NAME`, run the following command:

```shell-session
$ docker run --rm \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -e AWS_ACCESS_KEY_ID=YOUR_KEY \
    -e AWS_SECRET_ACCESS_KEY=YOUR_SECRET \
    sider/ecr-image-puller IMAGE_NAME
```

Note that Sider consists of two Docker images, which are `480130971618.dkr.ecr.us-east-1.amazonaws.com/sideci_onprem` and `480130971618.dkr.ecr.us-east-1.amazonaws.com/catpost_onprem`.

### Prepare env files

All components of Sider require environment variables. This quick guide assumes that Sider run with Docker Compose, so `env_file`s are required.

```:sideci.env
RAILS_ENV=onprem
SECRET_KEY_BASE=fVhbRZOmMaTIKcioIZ4QMDDALCT8IqJg
DATABASE_URL=mysql2://mysql:3306/sideci?encoding=utf8mb4&connectTimeout=5000
BASE_URL=https://sider.example.com
CATPOST_BASE_URL=http://catpost_web:3000
CATPOST_SECRET=catpost_secret
REDIS_URL=redis://redis:6379/0
GITHUB_APP_ID={{FIXME}}
GITHUB_APP_NAME={{FIXME}}
GITHUB_APP_PRIVATE_KEY={{FIXME}}
GITHUB_APP_OAUTH2_CLIENT_ID={{FIXME}}
GITHUB_APP_OAUTH2_CLIENT_SECRET={{FIXME}}
GITHUB_APP_WEBHOOK_SECRET={{FIXME}}
GITHUB_API_ENDPOINT={{FIXME}}
GITHUB_ENDPOINT={{FIXME}}
ENCRYPTION_SERVICE_KEY=xYSuh7UoBzdFaE69zCsXAV7ZAfcGOiem
ENCRYPTION_SERVICE_SALT=ZYUfy34DCCHw67gQdOnDm393KeVyzUL8
RUNNERS_TRACES_S3_BUCKET_NAME=runner-traces
DOCKER_RUNNERS_CONFIG={"docker_host_url":"unix:///var/run/docker.sock","s3_endpoint":"http://minio:9000","aws_access_key_id":"access-key","aws_secret_access_key":"secret-key","network_mode":"PROJECT_default"}
```

Don't forget to replace **PROJECT** of `PROJECT_default` with the directory name in which the docker-compose.yml exists.
For example, `"network_mode":"sider-enterprise_default"` is a correct network_mode if docker-compose.yml is in the `/home/user/sider-enterprise` directory. You can confirm the network name with the command `docker network ls`.

```:catpost.env
RAILS_ENV=onprem
SECRET_KEY_BASE=GzGnUDWZaV3sXxJGkBGTuvaNXhm6JUcf
DATABASE_URL=mysql2://mysql:3306/catpost?encoding=utf8mb4&charset=utf8mb4
REDIS_URL=redis://redis:6379/1
S3_BUCKET_NAME=catpost
S3_REGION_NAME=us-east-1
S3_ENDPOINT=http://minio:9000
API_TOKEN=catpost_secret
ENCRYPTION_SERVICE_KEY=SxFoATRHe2inf2rLwZTXhBlaWIyl5OTR
ENCRYPTION_SERVICE_SALT=OqWOZkvi7iP3Ly1TUGODB7mgubqUjdt6
ARCHIVE_ENCRYPTION_KEY=Cvwunt7D0Sj9lD3rZ4sYHKGmDgphOjJY
ARCHIVE_NAME_SECRET=qkdQyyvwPpTWyVb2tXf9pa6OdTiqRH3E
GIT_REPOS_DIR=/var/git_repos
TERM_CHILD=1
QUEUE=*
VERBOSE=1

AWS_ACCESS_KEY=access-key
AWS_SECRET_ACCESS_KEY=secret-key
```

You have to replace `FIXME` with GitHub parameters above this page.
See [Sider Enterprise Configuration](./config.md) fore more details.

### Prepare docker-compose.yml

Create `docker-compose.yml` to run Sider applications. `sideci.env` and `catpost.env` are the files mentioned above.

```yaml:docker-compose.yml
version: "3"
services:
  sideci_web: &sideci_web
    image: 480130971618.dkr.ecr.us-east-1.amazonaws.com/sideci_onprem:release-201911.5
    env_file:
      - ./env/sideci
    command: ["bundle", "exec", "puma"]
    ports:
      - "80:3000"
    depends_on:
      - mysql
      - redis
      - minio
  sideci_worker:
    <<: *sideci_web
    command: ["bundle", "exec", "sidekiq", "-C", "./config/sidekiq.yml"]
    ports: []
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
  catpost_web: &catpost_web
    image: 480130971618.dkr.ecr.us-east-1.amazonaws.com/catpost_onprem:release-201911.5
    env_file:
      - ./env/catpost
    command: ["bundle", "exec", "puma"]
    ports:
      - "3000"
    volumes:
      - git_repos:/var/git_repos
    depends_on:
      - mysql
      - redis
      - minio
  catpost_worker:
    <<: *catpost_web
    command: ["bundle", "exec", "rake", "environment", "resque:work"]
  catpost_scheduler:
    <<: *catpost_web
    command: ["bundle", "exec", "rake", "environment", "resque:scheduler"]
  mysql:
    image: mysql:5.7
    environment:
      MYSQL_ALLOW_EMPTY_PASSWORD: "true"
  redis:
    image: redis:5
    command: ["redis-server", "--bind", "0.0.0.0"]
  minio:
    image: minio/minio:RELEASE.2019-10-12T01-39-57Z
    command: ["server", "/data"]
    environment:
      MINIO_ACCESS_KEY: access-key
      MINIO_SECRET_KEY: secret-key
    ports:
      - "9000"
    volumes:
      - minio_data:/data

volumes:
  git_repos:
  minio_data:
```

## Setup Database

Start containers and create a database and tables base with the `docker-compose.yml`.

```
$ docker-compose run sideci_web bundle exec rake db:setup
$ docker-compose run catpost_web bundle exec rake db:setup
```

## Starting Applications

Run the applications after completing the database setup.

```
$ docker-compose up
```

## Make the Sider host name to be resolved with DNS

The host name of Sider must be resolved with `BASE_URL` of **sideci** configuration.

## Check Behaviors of Applications

When all configurations are completed, you will see the Sider pages with the URL registered on DNS. Please do the checks below:

- Correctly redirect to GitHub Enterprise when signing up to Sider.
- The repositories you have on GitHub Enterprise show up in "Select a Repository" page.
- Pull requests that are added into Sider start getting analyzed.

The Sider build is complete if the check behaviors pass!

## Configuring batch tasks

Sider has tasks which should be executed to keep operations stable.
Set crontab to run the following commands every day.

```
$ docker-compose run sideci_web bundle exec rake onprem:batch:daily
$ docker-compose run catpost_web bundle exec rake onprem:batch:daily
```

We recommend executing these commands when there is less analysis because these commands update database records for all users and all repositories.

## Set Administrators

See [here](./administration.md#admin-users) to create admin users.
