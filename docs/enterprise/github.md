---
id: github
title: Sider Enterprise GitHub Setup
sidebar_label: GitHub Setup
hide_title: true
---

# Sider Enterprise GitHub Setup

Sider Enterprise is integrated with GitHub. It requires two GitHub integrations, an OAuth app and a GitHub app. You need to register the two apps on your GitHub Enterprise.

The OAuth app is used to authenticate end uses. When you sign in to Sider Enterprise, the OAuth app is used. The GitHub app is used to access your GitHub repositories; checking out the source code, getting notified about pull requests, and sending commit statuses.

Register the two apps on GitHub Enterprise, and let your Sider Enterprise know the credentials of the two apps to be integrated with GitHub Enterprise.

Note that we assume your Sider Enterprise is running on `https://sider.example.com` in this guide, and you should replace the hostname with the actual name.

## Registering an OAuth app

Create a new OAuth app on your GitHub Enterprise. Read the [Creating an OAuth App](https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/) guide for details.

The new OAuth app should have the following properties.

- Application name: `Sider`
- Homepage URL: `https://sider.example.com`
- Application description: (optional)
- Authorization callback URL: `https://sider.example.com/users/auth/github`

After the registration, configure your Sider Enterprise with `Client ID` and `Client Secret`. You should put the values in `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` environment variables for `sideci`.

## Registering a GitHub app

Create a new GitHub app on your GitHub Enterprise. Read the [Creating a GitHub App](https://developer.github.com/apps/building-github-apps/creating-a-github-app/) for details.

The new GitHub app should have the following properties.

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
- `GITHUB_APP_NAME`: `sider` (look for the URL of the generated GitHub app.)
- `GITHUB_APP_PRIVATE_KEY`: Base64 encoded private key content.
  - `$ base64 /path/to/PEM` on macOS
  - `$ base64 -w0 /path/to/PEM` on Linux
- `GITHUB_APP_OAUTH2_CLIENT_ID`: The client ID.
- `GITHUB_APP_OAUTH2_CLIENT_SECRET`: The client secret.
- `GITHUB_APP_WEBHOOK_SECRET`: (optional, when you specify a webhook secret during the registration.)
