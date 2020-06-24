---
id: clustering
title: Clustering
sidebar_label: Clustering
hide_title: true
---

# Clustering

This document describes what you should do when you want to put your Sider Enterprise services across your server nodes.

As long as you set up your load balancer, requests from clients will be load balanced between Sider Enterprise services. Besides, periodic and one-time background job processes will be also distributed among **sideci-worker** and Runners. All you should consider is how to put them on separate nodes.

## Using Two or More Nodes

If you can prepare two or more nodes in your environment, we recommend separating **sideci-web** and **sideci-worker** from Runners.

![Four Nodes Architecture](https://app.lucidchart.com/publicSegments/view/ccdfc0c8-8786-4b76-ab4f-ab09777b923b/image.png)

The processes of Runners will so enormously consume CPU and memory resources that they could affect the performance of **sideci-web** and **sideci-worker**, even though Runners finish in at most 30 minutes. That's why we recommend extracting Runners from other services. Note you have to configure `docker_host_url` in `DOCKER_RUNNERS_CONFIG` to specify the endpoint of Runners' node. If the Docker daemon on Runners' node is listening on `2375`, and its IP address is `192.168.59.106`, the parameter should be `tcp://192.168.59.106:2375`. In addition, don't forget to run `dockerd` with `-H 0.0.0.0:2375` to be able to receive requests remotely. Learn more [`dockerd`](https://docs.docker.com/engine/reference/commandline/dockerd/) for its options.

In addition to extracting Runners, you should consider the number of containers on **sideci**'s nodes. It depends on the number of analyses, but at least, **sideci-web** should run on `2` containers, and **sideci-worker** should run on `6` containers. You can start such numbers of containers just executing [commands](./operation.md#how-to-start-services) at the same count. If you use [Docker Compose](https://docs.docker.com/compose/), you can use `docker-compose up --scale`.

> Each **sideci-web** container must bind to the different host port because of the constraint of your operating system. So, you should configure the backends for each port number on your load balancer. For example, your load balancer should forward requests to the containers run with `docker run -p 192.168.0.13:3000:3000 IMAGE` and `docker run -p 192.168.0.13:3001:3000 IMAGE` via `192.168.0.13:3000` and `192.168.0.13:3001`.

## Scaling

After setting up your cluster, you can start services on a new node the same way the other nodes got built.

Of course, if you can upgrade your server machine, this will help Sider Enterprise improve its performance. This might be the easiest way to improve the performance.
