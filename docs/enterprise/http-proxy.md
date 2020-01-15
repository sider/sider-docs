---
id: http-proxy
title: Configure Sider Enterprise to use a proxy server
sidebar_label: HTTP proxy configuration
---

If you have to provision Sider Enterprise within a proxy environment,
the HTTP proxy configurations are required for Sider Enterprise.
There are two settings to be configured:

- [Configure the Docker client](https://docs.docker.com/network/proxy/#configure-the-docker-client) if you run Sider on Docker
- Set `http_proxy`, `https_proxy`, and `no_proxy` in `DOCKER_RUNNERS_CONFIG`

## Configure the Docker client

If you are running Sider Enterprise with docker-compose, your `~/docker/config.json` file should be like this:

```json
{
  "proxies": {
    "default": {
      "httpProxy": "http://127.0.0.1:3001",
      "httpsProxy": "http://127.0.0.1:3001",
      "noProxy": "catpost_web"
    }
  }
}
```

Because catpost and sideci components are in a same network, sideci should directly access to catpost.
That's why the `noProxy` parameter is required.

## Set `http_proxy`, `https_proxy`, and `no_proxy` in `DOCKER_RUNNERS_CONFIG`

You must also set `http_proxy`, `https_proxy`, and `no_proxy` in `DOCKER_RUNNERS_CONFIG` because some Runners access to external resources (e.g., before analyzing, `sider/runner_eslint` installs npm packages).

In this case, your `DOCKER_RUNNERS_CONFIG` parameter should be the following:

```
DOCKER_RUNNERS_CONFIG={"docker_host_url":"unix:///var/run/docker.sock","s3_endpoint":"http://minio:9000","aws_access_key_id":"key","aws_secret_access_key":"password","network_mode":"env_default","http_proxy":"http://172.18.0.5:3128","https_proxy":"http://172.18.0.5:3128","no_proxy":"minio,catpost-minio"}
```

The key point is adding `no_proxy`. Without this, Runners cannot put their traces to Minio server.
