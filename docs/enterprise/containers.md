---
id: containers
title: Sider Enterprise Containers Guide
sidebar_label: Containers Guide
---

Sider Enterprise is distributed as a set of the following Docker images.

* `quay.io/actcat/sideci`
* `quay.io/actcat/catpost`
* `quay.io/actcat/setaria`

In this guide, we explain how you can start containers using the images.

We use `docker` command in this guide and drop any unnecessary options to shorten the command line. You may need to customize the exact command line depending on the setup of Sider Enterprise and the actual container managers, like Docker Compose or Kubernates, you are using. Typical extra command line options are `-p` to configure port mappings, `-e` or `--env-file` to pass environment variables, `--rm` to delete containers after stopping them, and `--network` to configure network access between containers.

## Releases and update

The images have tags to specify the release of Sider Enterprise. The tag looks like `201902.1`, year, month, and release number. The latest release is found at [the releases page](./releases/changelog.md).

We strongly recommend using the latest versions of the images. Sider Enterprise team releases new versions monthly, usually in the middle of the month. Please find the new release notification, and follow the update instructions.

## Authentication

The Docker images are private so that only the Sider Enterprise customers and the developer team can download the images. We provide the credentials, account name and password. Use `docker login` command to set up authentication.

```
$ docker login -u=$account -p=$password quay.io
```

## Running `sideci`

`sideci` image is used to run two containers, `sideci_web` and `sideci_worker`.

### Running the web server

The `sideci_web` runs with `puma` command. Use the following command to run `sideci_web`.

```
$ docker run sideci:TAG bundle exec puma
```

`sideci_web` listens TCP port 3000 to receive HTTP requests from end-users.

### Running the job worker

The `sideci_worker` runs with `sidekiq` command. Use the following command to run `sideci_worker`.

```
$ docker run sideci:TAG bundle exec sidekiq -C ./config/sidekiq.yml
```

`sideci_worker` does not listen on any port, and the process does not receive any HTTP request.

### Running batch jobs

`sideci` has daily batch jobs, which runs with `rake` command. Use the following command to run daily batch jobs.

```
$ docker run sideci:TAG bundle exec rake onprem:batch:daily
```

Set up `cron` job or anything else to run the batch job every day. We recommend running the batch job during after hours, when no one is actively using Sider for performance reasons.

## Running `catpost`

`catpost` image is used to run two containers, `catpost_web` and `catpost_worker`.

### Running the web server

The `catpost_web` runs with `puma` command. Use the following command to run `sideci_web`.

```
$ docker run catpost:TAG bundle exec puma
```

`catpost_web` listens on TCP port 3000 to receive HTTP requests from `sideci` containers.

### Running the job worker

The `catpost_worker` runs with `rake` command. Use the following command to run `catpost_worker`.

```
$ docker run catpost:TAG bundle exec rake environment resque:work
```

`catpost_worker` does not listen on any port.

### Running batch jobs

`catpost` has daily batch jobs, which runs with `rake` command. Use the following command to run daily batch jobs.

```
$ docker run catpost:TAG bundle exec rake onprem:batch:daily
```

Set up `cron` job or anything else to run the batch job every day. We recommend running the batch job during after hours, when no one is actively using Sider for performance reasons.

## Running `setaria`

`setaria` image is used to run two containers, `setaria_web` and `setaria_worker`.

The extra configuration required for `setaria` is to allow the containers to access the docker daemon which is used to run the container. `setaria` is the process used to run the analysis session and it uses `docker run` command (equivalent API calls exactly) for that.

### Running the web server

The `setaria_web` runs with `puma` command. Use the following command to run `setaria_web`.

```
$ docker run -v /var/run/docker.sock:/var/run/docker.sock:ro \ 
             setaria:TAG \
             bundle exec puma
```

`setaria_web` listens on TCP port 3000 to receive HTTP requests from `sideci` containers.

### Running the job worker

The `setaria_worker` runs with `resque` command. Use the following command to run `setaria_worker`.

```
$ docker run -v /var/run/docker.sock:/var/run/docker.sock:ro \ 
             setaria:TAG \
             bundle exec rake resque:work
```

`setaria_worker` does not listen on any port.

### Running batch jobs

`setaria` has daily batch jobs, which runs with `rake` command. Use the following command to run daily batch jobs.

```
$ docker run -v /var/run/docker.sock:/var/run/docker.sock:ro \
             setaria:TAG \
             bundle exec rake onprem:batch:daily
```

Set up `cron` job or anything else to run the batch job every day. We recommend running the batch job during after hours, when no one is actively using Sider for performance reasons.

