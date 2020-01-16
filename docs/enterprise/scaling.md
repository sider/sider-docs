---
id: scaling
title: Sider Enterprise Scaling Guide
sidebar_label: Scaling Guide
hide_title: true
---

# Sider Enterprise Scaling Guide

As your development team grows, the number of analysis increases.
You will eventually have a performance issue on Sider Enterprise.

In this guide, we explain five strategies to scale your Sider Enterprise.

1. Running more containers.
2. Scaling up with more performant computers.
3. Scaling out Sider Enterprise instances.
4. Scaling out Sider Enterprise components.
5. Improving concurrency within containers.

## Choosing the strategies

No matter how you are running your Sider Enterprise, running more containers (strategy #1) should be the first option. Analysis performance mainly depends on the number of containers for analyses.

When you cannot run more containers on your computer, upgrading the hardware can be the next option if your budget allows (#2).

If you are already using the most performant computer available, scaling out to computer instances is the only option. You have two choices here, #3 and #4: running another Sider Enterprise instance or scaling out each Sider Enterprise component.

Scaling out Sider Enterprise instances is easier. You set up another computer to run Sider Enterprise and a load balancer. The advantage of this strategy is its simplicity. The disadvantage is its ineffectiveness.

Scaling out Sider Enterprise components is more flexible and effective. If you detect that the analyses are the bottleneck, scale up the Docker host to run more runners. This is more effective because 100% of the added computer resource is used to perform analyses.

We also provide some options to improve concurrency within containers (#5).

## Running more containers

Running more containers will improve the concurrency. Having more _worker_ containers is usually more effective and easier.

When you are using Docker Compose, just give a `--scale` option.

```
$ docker-compose up--scale sideci_worker=3 --scale catpost_worker=2
```

If you want to run more _web_ containers with Docker Compose, their port mappings may cause an issue. You might have to set up a reverse proxy to distribute incoming connections to the containers. In this case, improving concurrency within _web_ containers (#5) should be the best option.

On the other hand, running more _worker_ containers is fairly simple because the containers do not listen to any port but they fetch requests from Redis. Run as many _worker_ containers as you need.

## Scaling up with more performant computers

When you use a faster processor, each analysis runs faster. When you have more memory, you can run more containers to improve concurrency.

## Scaling out Sider Enterprise instances

This strategy is the easiest setup to scale out Sider Enterprise. It works when:

1. You are running all of the Sider Enterprise components on one computer.
2. Your storages (MySQL, Redis, and Minio) is running on another computer.
3. You have a load balancer to manage the HTTP access to `sideci_web`.

Under the assumptions, you can set up another computer to run Sider Enterprise components.

```
    +-------+   +-------+  +-------+  +-------------------+
    | MySQL |   | Redis |  | Minio |  | GitHub Enterprise |
    +-------+   +-------+  +-------+  +-------------------+
      ^   ^       ^   ^      ^   ^      ^  ^          |
      |   |       |   |      |   |      |  |          |
      +-----------+----------+----------+  |          | (webhook)
      |   |           |          |         |          |
      |   +-----------+---+------+------+--+          |
      |                   |                           v
    +-- Computer1 ---+    |                   +---------------+
    | sideci_web  <--|---------------------+--| Load balancer |
    | sideci_worker  |    |                |  +---------------+
    | catpost_web    |    |                |          ^
    | catpost_worker |    |                |          |
    | runners        |    |                |      Developers
    +----------------+    |                |
                          |                |
           +-- Computer2 ---+              |
           | sideci_web  <--|--------------+
           | sideci_worker  |
           | catpost_web    |
           | catpost_worker |
           | runners        |
           +----------------+
```

End-user access and webhooks from GitHub Enterprise come to the load balancer and will be transferred to `sideci_web` of an instance. The instances should share the storages; MySQL, Redis, and Minio.

## Scaling out Sider Enterprise components

This is the most complex and sophisticated strategy. Sider SaaS is running on this setup.

In this context, you should manage three web applications for Sider Enterprise; `sideci` and `catpost`.
Each of the web applications should have its own endpoint, load balancer, database.

If you want to try this setup, please contact the technical support and product development team at Sider.

## Improving concurrency within containers

We provide two options to control concurrency within containers.

`WEB_CONCURRENCY` is the number of processes of the web servers. The default is `2`, and you can increase the number to make the web server more concurrent. This option is available for _web_ containers.

`RAILS_MAX_THREADS` is the number of threads of the web and worker processes. The default is `5`. This option is available for _web_ and `sideci_worker` containers.

| -              | WEB_CONCURRENCY | RAILS_MAX_THREADS | Default Concurrency in Container |
| :------------- | :-------------- | :---------------- | :------------------------------- |
| sideci_web     | 2               | 5                 | 10                               |
| sideci_worker  | Unsupported     | 5                 | 5                                |
| catpost_web    | 2               | 5                 | 10                               |
| catpost_worker | Unsupported     | Unsupported       | 1 (non-configurable)             |

You can adjust the values of `WEB_CONCURRENCY` and `RAILS_MAX_THREADS` for _web_ containers. For _worker_ containers, running more containers is easier and more effective.
