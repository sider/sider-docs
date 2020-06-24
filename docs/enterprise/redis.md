---
id: redis
title: Redis
sidebar_label: Redis
hide_title: true
---

# Redis

This document describes how to set up Redis for Sider Enterprise.

## Requirements

Redis 5.0 is required for Sider Enterprise. Our dependant library may be compatible with Redis 6.0, but we have not tested with it, so we cannot provide efficient supports for this version.

## Recommended Parameters

We are using Redis as a persistent store for background jobs as well as a cache. So, you should configure your Redis server to store data persistently. See [Redis Persistence](https://redis.io/topics/persistence) for more details.

## Integration with Sider Enterprise

The parameter [`REDIS_URL`](./config.md) of Sider Enterprise sees these items:

- USER - Redis user name to be used when connecting to the server
- PASSWORD - The password to use when connecting to the server
- REDIS_HOST - The host name of the Redis server
- REDIS_PORT - The port number of the Redis server
- DB_NUMBER - The database number for Sider Enterprise

Sider Enterprise services will access to the Redis server via the specified REDIS_HOST and REDIS_PORT, so make sure the connections are available between them.
