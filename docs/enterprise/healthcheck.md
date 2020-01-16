---
id: healthcheck
title: Sider Enterprise Health Check Guide
sidebar_label: Health Check Guide
hide_title: true
---

# Sider Enterprise Health Check Guide

When you want to use load balancers for Sider Enterprise, you may need to configure _health checks_. Sider components provide health check endpoints to make sure the web containers are running normally.

Note that your load balancer must set the `X-Forwarded-For` HTTP header for Sider components.

## Health checking sideci

`sideci_web` container provides `/api/health_check` endpoint for health checks. It always returns a `200` response, so that you can test if the component is up and receiving HTTP requests.

## Health checking catpost

`catpost_web` container provides `/health_check` endpoint for health checks. It always returns a `200` response, so that you can test if the component is up and receiving HTTP requests.
