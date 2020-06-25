---
id: load-balancer
title: Load Balancer
sidebar_label: Load Balancer
hide_title: true
---

# Load Balancer

This page describes how to set up a load balancer.

**sideci-web**, which is a part of Sider Enterprise, handles any HTTP requests. However, it does not fit for heavy workloads, so you should put a load balancer or another HTTP server whatever you want. You can provide Sider Enterprise services via HTTPS if you configure TLS settings on your frontend server.

It's also lucrative for you to provision a load balancer when it comes to clustering. You can serve multiple **sideci-web** containers with a load balancer, which distributes traffic across the containers.

## TLS Configuration

**sideci-web** does not handle HTTPS requests. The load balancer should terminate TLS and forward the terminated HTTP requests to **sideci-web** containers via the published port, which would be specified at running **sideci-web** (See [Operation](./operation.md)).

## Ports

The load balancer should listen on 80 and 443 ports and forward all requests to **sideci-web**. If you want to make end-users always access via HTTPS, set `true` to `FORCE_SSL`. Learn more [Sider Enterprise Configuration](./config.md) for `FORCE_SSL`.

## HTTP Headers

Make sure your load balancer sets the `X-Forwarded-For` HTTP header. **sideci-web** will be able to identify the originating IP address of a client connecting to **sideci-web** through the load balancer.

## Readiness Check

**sideci-web** provides the `/api/health_check` endpoint for health checks. Since it always returns a `200` response, you can test if the services are up.
