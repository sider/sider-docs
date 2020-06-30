---
id: config
title: Sider Enterprise Configuration
sidebar_label: Configuration
hide_title: true
---

# Sider Enterprise Configuration

Sider Enterprise depends on other services, such as MySQL, so its configuration is important to ensure working well. This document describes the details about Sider Enterprise configurations.

> `TAG` on this page is a Docker image tag for Sider Enterprise. Please replace it with the actual value.

## Core parameters

These parameters are not related to other services, like MySQL.

- `RAILS_ENV` - (Required) The environment for Ruby on Rails framework. You **must** set `onprem` to the parameter.

- `SECRET_KEY_BASE` - (Required) The secret for encryption required by Ruby on Rails. You can get the value running the following command:

  ```console
  python -c 'import secrets; print(secrets.token_hex(64))'
  ```

  Or, you can get the value via Ruby:

  ```console
  ruby -r securerandom -e 'puts(SecureRandom.hex(64))'
  ```

- `BASE_URL` - (Required) The URL to allow end-users to access Sider. e.g., `https://sider.example.com`.

- `ENCRYPTION_SERVICE_KEY` - (Required) The random string to encrypt secret data, which can be given by running the following command. Note you cannot change this value once you set up.

  ```console
  tr -dc '[:alnum:]' < /dev/urandom | head -c 32
  ```

- `ENCRYPTION_SERVICE_SALT` - (Required) 32 bytes random string to use for `ENCRYPTION_SERVICE_KEY` as a salt, which can be given by running the following command. Note you cannot change this value once you set up.

  ```console
  tr -dc '[:alnum:]' < /dev/urandom | head -c 32
  ```

- `RESTRICT_SIGN_UP` - (Optional) The boolean to control if users can sign up by themselves. If the parameter is `true`, the administrators of Sider Enterprise will have to register users. See [Operation](./operation.md) for registering users.

- `SIDECI_TIMEZONE` - (Optional) The timezone used for admin console. This does not affect the time formats for Sider Enterprise end-users. See [`ActiveSupport::TimeZone`](https://api.rubyonrails.org/classes/ActiveSupport/TimeZone.html) for more details. e.g., `Asia/Tokyo`.

- `FORCE_SSL` - (Optional) The boolean to control if **sideci-web** should make end-users always access via HTTPS. The default value is `false`.

## MySQL

Sider Enterprise completely depends on MySQL. You should carefully set up the parameters to accord with the actual MySQL configuration. Read [MySQL](./mysql.md) for how to configure a MySQL server.

- `DATABASE_URL` - (Required) The URL to connect the MySQL server. The format of this parameter must be `mysql2://USER:PASSWORD@MYSQL_HOST:MYSQL_PORT/DATABASE_NAME?encoding=utf8mb4&connectTimeout=5000`. Note the query parameters `encoding=utf8mb4` and `connectTimeout=5000` should be placed as they are. e.g., `mysql2://sider:topsecret@mysql.example.com:3306/sideci?encoding=utf8mb4&connectTimeout=5000`.

## Redis

Sider Enterprise uses Redis for page caching and storing background job data, so the parameters in this section are important. See [Redis](./redis.md) to get to know how you should set up a Redis server.

- `REDIS_URL` - (Required) The URL to connect the Redis server. The format of this parameter must be `redis[s]://USER:PASSWORD@REDIS_HOST:REDIS_PORT/DB_NUMBER`. e.g., `redis://redis.example.com:7372/0`.

## GitHub Enterprise Server

You have to configure these parameters to integrate with GitHub Enterprise Server. After setting up your GitHub App, prepare these parameters carefully.

- `GITHUB_ENDPOINT` - (Required) The URL which points to the GitHub Enterprise web page. e.g., `https://github.example.com`.

- `GITHUB_API_ENDPOINT` - (Required) The URL which points to the GitHub Enterprise API endpoint. Basically, the suffix of this URL must be `/api/v3`. See [Endpoint URLs](https://developer.github.com/enterprise/v3/enterprise-admin/) to learn more about the GitHub Enterprise endpoints. e.g., `https://github.example.com/api/v3`.

- `GITHUB_APP_ID` - (Required) The application ID of the GitHub App. This will be given after setting up your GitHub App. See [GitHub Enterprise Server](./github.md) for registering a GitHub App.

- `GITHUB_APP_NAME` - (Required) The application name of the GitHub App. You can find the name in the **Public link** of the GitHub App. For example, when the **Public link** is `https://github.example.com/apps/sider-enterprise`, this parameter should be `sider-enterprise`.

- `GITHUB_APP_PRIVATE_KEY` - (Required) The base64 encoded private key of the GitHub App. You can download the private key file from your GitHub App. Note Sider Enterprise requires you to pass the Base64 encoded key; you can get the value running base64(1) like this:

  ```console
  base64 -w0 downloaded-private-key.pem
  ```

- `GITHUB_APP_OAUTH2_CLIENT_ID` - (Required) The client ID of the GitHub App. This will be given after setting up your GitHub App.

- `GITHUB_APP_OAUTH2_CLIENT_SECRET` - (Required) The client secret of the GitHub App. This will be given after setting up your GitHub App.

- `GITHUB_APP_WEBHOOK_SECRET` - (Required) The webhook secret of the GitHub App. You must set the same value with the webhook secret of your GitHub App. If you forget the value, you must regenerate and set the value on your GitHub App settings. Note this secret is supposed to be generated by you. For example, you can get the value executing the command:

  ```console
  tr -dc '[:alnum:]' < /dev/urandom | head -c 32
  ```

## Runners and MinIO

The core component **sideci** will invoke Runners to perform analyses. The parameters in this section control how Sider should invoke Runners, and how the traces generated by Runners should be stored. See [MinIO](./minio.md) for the set up of MinIO.

- `RUNNERS_TRACES_S3_BUCKET_NAME` - (Required) The bucket name for Runners traces. **Runners** upload analysis traces to the bucket on MinIO.

- `AWS_REGION_FOR_SIDER` - (Optional, but required for Amazon S3) AWS region name, such as "us-east-1." If you want to use an Amazon S3 bucket for Runners traces, you **MUST** specify this environment variable. The default value is `us-east-1`.

- `DOCKER_RUNNERS_CONFIG` - (Required) The JSON string to specify how to access to Runners and MinIO. The structure of this must be like this:

  ```json
  {
    "docker_host_url": "unix:///var/run/docker.sock",
    "s3_endpoint": "http://minio.example.com:9000",
    "aws_access_key_id": "key",
    "aws_secret_access_key": "password",
    "network_mode": "bridge"
  }
  ```

  - `docker_host_url` - (Required) The Docker host endpoint. **sideci** will invoke Runners via this URL. e.g., `unix:///var/run/docker.sock`, `tcp://docker.example.com:5422`.

  - `s3_endpoint` - (Optional) The URL of MinIO. **sideci** and Runners will access to the specified endpoint. If you omit the parameter, Sider Enterprise assumes that the traces should be put on Amazon S3 instead of MinIO. e.g., `http://minio.example.com:9000`.

  - `aws_access_key_id` - (Required) AWS Access Key ID. This is used by Runners to access MinIO or Amazon S3.

  - `aws_secret_access_key` - (Required) AWS Secret Access Key. This is used by Runners to access MinIO or Amazon S3.

  - `network_mode` - (Required) This is equivalent to the `--network` option of `docker run`. If you provision MinIO server on the instance outside of Runners, you should set `bridge` to the parameter. However, you must set the container name or the network name of Docker to make sure Runners can access to MinIO within the same network. Learn more [Network settings](https://docs.docker.com/engine/reference/run/#network-settings) for Docker networking.

  - `http_proxy` - (Optional) The proxy server domain. You need to set the parameter if your Sider Enterprise is within a proxy environment.

  - `https_proxy` - (Optional) The proxy server domain. You need to set the parameter if your Sider Enterprise is within a proxy environment.

  - `no_proxy` - (Optional) The list of domains that should be excluded from the proxy targets. If you set the `http_proxy` and `https_proxy` parameters above, the `no_proxy` parameter may also have to be set. For example, `s3_endpoint` is set with `http://minio:9000`, then `no_proxy` should be set with `minio` if Runners should access to MinIO without a proxy server.

## SMTP - Make Sider Enterprise send emails

Sider Enterprise supports sending emails. You can get error notifications via Emails with these configurations.

- `ACTION_MAILER_SMTP_ADDRESS` - (Optional) The SMTP server address. e.g., `smtp.example.com`.

- `ACTION_MAILER_DEFAULT_FROM_EMAIL` - (Optional) The FROM address of emails sent from Sider. e.g., `sider@example.com`.

- `ACTION_MAILER_SMTP_PORT` - (Optional) The SMTP server port number. The default value is `25`. e.g., `125`.

- `ACTION_MAILER_SMTP_AUTHENTICATION` - (Optional) The SMTP server authentication method. The valid value is `plain`, `login`, or `cram_md5`.

- `ACTION_MAILER_SMTP_USER_NAME` - (Optional) The user name for SMTP authentication.

- `ACTION_MAILER_SMTP_USER_PASSWORD` - (Optional) The user password for SMTP authentication.

- `ACTION_MAILER_SMTP_DOMAIN` - (Optional) The domain name for HELO command.

- `ACTION_MAILER_SMTP_ENABLE_STARTSSL_AUTO` - (Optional) The boolean to control if Sider Enterprise uses STARTTLS. The default value is `true`.

- `EXCEPTION_NOTIFIER_RECIPIENT_EMAILS` - (Optional) The comma-separated list of recipients for error reporting emails. e.g., `foo@example.com,bar@example.com`.

## Auto-Refresh Pages

Sider Enterprise can detect events that happened in the server and updates its content automatically. End-users don't have to reload their browser to update their pages. Sider Enterprise uses two mechanisms to implement this: [Pusher](https://pusher.com) and polling.

If you want to use Pusher, sign up to Pusher and set up the PUSHER\_\* variables below.

If you leave the PUSHER\_\* variables empty, Pusher will be disabled, and Sider Enterprise will work only with polling. You can configure the polling interval with `FRONTEND_POLLING_INTERVAL`: fine-tune the value for both UI responsiveness and the server load.

- `PUSHER_API_ID` - (Optional) The Pusher API ID.

- `PUSHER_API_KEY` - (Optional) The Pusher API Key.

- `PUSHER_API_SECRET` - (Optional) The Pusher API Secret.

- `PUSHER_CLUSTER` - (Optional) The Pusher cluster.

- `FRONTEND_POLLING_INTERVAL` - (Optional) The polling interval in seconds. The default value is `30`, which means each browser calls Ajax requests every 30 seconds. e.g., `60`.

## Configuring cron jobs

Sider Enterprise relies on GitHub Enterprise Server, so you should configure a cron job to synchronize data between them. Also, it is recommended to clean up Docker containers since Runners containers won't be deleted. That's why Sider Enterprise provides a [Rake](https://github.com/ruby/rake) task for the periodic job. For example, you can set this command on each host node.

```
docker run \
  --rm \
  --env-file=ENV_FILE \
  --volume=/var/run/docker.sock:/var/run/docker.sock \
  480130971618.dkr.ecr.us-east-1.amazonaws.com/sideci_onprem:TAG \
  bundle exec rails onprem:batch:daily
```

## HTTP Proxy

If you have to provision Sider Enterprise within a proxy environment, the HTTP proxy configurations are required. There are two settings to be configured:

- [Configure the Docker client](https://docs.docker.com/network/proxy/#configure-the-docker-client) if you run Sider on Docker
- Set `http_proxy`, `https_proxy`, and `no_proxy` in `DOCKER_RUNNERS_CONFIG` (See the above configuration for more details)

This is an example of `~/docker/config.json` file.

```json
{
  "proxies": {
    "default": {
      "httpProxy": "http://127.0.0.1:3001",
      "httpsProxy": "http://127.0.0.1:3001",
      "noProxy": "minio.example.com"
    }
  }
}
```
