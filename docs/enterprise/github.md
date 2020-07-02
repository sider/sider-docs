---
id: github
title: GitHub Enterprise Server
sidebar_label: GitHub Enterprise Server
hide_title: true
---

# GitHub Enterprise Server

This document describes what you should configure on your GitHub Enterprise Server to integrate with Sider Enterprise.

> Note that we assume your Sider Enterprise is running on `https://sider.example.com` on this page, and you should replace the hostname with the actual name.

## Requirements

Sider Enterprise is compatible with the supported versions of GitHub Enterprise Server. Choose your GitHub Enterprise Server version on [this](https://help.github.com/en/enterprise) page, and you can get to know if it is supported or not.

In addition, you must synchronize Time between GitHub Enterprise Server and Sider Enterprise.

## Registering a GitHub App

Create a new GitHub App on your GitHub Enterprise Server. Read the [Creating a GitHub App](https://docs.github.com/en/enterprise/2.21/user/developers/apps/creating-a-github-app) for details.

The new GitHub App should have the following properties.

- GitHub App name: `Sider`
- Homepage URL: `https://sider.example.com`
- User authorization callback URL: `https://sider.example.com/users/auth/github_app_oauth2/callback`
- Setup URL: `https://sider.example.com/gh/setup`
- Redirect on update: `false` (Keep the checkbox unchecked)
- Webhook URL: `https://sider.example.com/webhooks/github`
- Webhook secret: (optional)
- Permissions: Setup the permissions as the following.
  - Repository permissions:
    - Contents: `Read-only`
    - Metadata: `Read-only`
    - Pull requests: `Read & Write`
    - Commit statuses: `Read & Write`
  - Organization permissions:
    - Members: `Read-only`
  - User permissions:
    - Emails: `Read-only`
- Subscribe to events: Check the following events to subscribe them.
  - `Member`
  - `Organization`
  - `Pull request`
  - `Pull request review`
  - `Pull request review comment`
  - `Repository`
- Where can this GitHub App be installed?: `Any account`

Note that you don't have to set other permissions on "Permissions" and "User permissions" sections. In other words, you can leave them `No access`.

After the GitHub App created, generate a private key, and download the PEM file. Now, you are ready to configure your Sider Enterprise as the following:

- `GITHUB_APP_ID`: The ID.
- `GITHUB_APP_NAME`: `sider` (Be careful that all characters are lowercase.)
- `GITHUB_APP_PRIVATE_KEY`: Base64 encoded private key content.
- `GITHUB_APP_OAUTH2_CLIENT_ID`: The client ID.
- `GITHUB_APP_OAUTH2_CLIENT_SECRET`: The client secret.
- `GITHUB_APP_WEBHOOK_SECRET`: The webhook secret

See [Sider Enterprise Configuration](./config.md) for more details.
