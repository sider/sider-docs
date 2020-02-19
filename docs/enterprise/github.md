---
id: github
title: Sider Enterprise GitHub Setup
sidebar_label: GitHub Setup
hide_title: true
---

# Sider Enterprise GitHub Setup

Sider Enterprise is integrated with GitHub. It requires a GitHub App integration, and you need to register it on your GitHub Enterprise.

The GitHub App is used to authenticate end-users and to access your GitHub repositories;
checking out the source code, getting notified about pull requests, and sending commit statuses.

Register the GitHub App on your GitHub Enterprise, and let your Sider Enterprise know the credentials of the app to be integrated with GitHub Enterprise.

Note that we assume your Sider Enterprise is running on `https://sider.example.com` in this guide, and you should replace the hostname with the actual name.

> **NOTE** Sider Enterprise is only compatible with the supported versions of GitHub Enterprise.
> Visit [this](https://help.github.com/en/enterprise/) page and see the link to the article of your GitHub Enterprise version.
> You can find out your version is still supported or not.

## Registering a GitHub App

Create a new GitHub App on your GitHub Enterprise. Read the [Creating a GitHub App](https://developer.github.com/apps/building-github-apps/creating-a-github-app/) for details.

The new GitHub App should have the following properties.

- GitHub App name: `Sider`
- Homepage URL: `https://sider.example.com`
- User authorization callback URL: `https://sider.example.com/users/auth/github_app_oauth2/callback`
- Setup URL: `https://sider.example.com/gh/setup`
- Webhook URL: `https://sider.example.com/webhooks/github`
- Webhook secret: (optional)
- Permissions: Setup the permissions as the following.
  - Repository contents: `Read-only`
  - Repository metadata: `Read-only`
  - Pull requests: `Read & Write`
  - Commit statuses: `Read & Write`
  - Organization members: `Read-only`
- User permissions: Setup the permissions as the following.
  - Emails: `Read-only`
- Subscribe to events: Check the following events to subscribe them.
  - `Member`
  - `Organization`
  - `Pull request`
  - `Pull request review`
  - `Pull request review comment`
  - `Repository`
- Where can this GitHub App be installed?: `Any account`

Note that you don't have to set other permissions on "Permissions" and "User permissions" sections.
In other words, you can leave them `No access`.

Generate a private key, and download the PEM file. Sider Enterprise requires a base64 encoded PEM file content.

After the registration, configure your Sider Enterprise as the following:

- `GITHUB_APP_ID`: The ID.
- `GITHUB_APP_NAME`: `sider` (look for the URL of the generated GitHub App.)
- `GITHUB_APP_PRIVATE_KEY`: Base64 encoded private key content.
  - `$ base64 /path/to/PEM` on macOS
  - `$ base64 -w0 /path/to/PEM` on Linux
- `GITHUB_APP_OAUTH2_CLIENT_ID`: The client ID.
- `GITHUB_APP_OAUTH2_CLIENT_SECRET`: The client secret.
- `GITHUB_APP_WEBHOOK_SECRET`: (optional, when you specify a webhook secret during the registration.)
