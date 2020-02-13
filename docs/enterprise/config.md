---
id: config
title: Sider Enterprise Configuration Index
sidebar_label: Configuration Index
hide_title: true
---

# Sider Enterprise Configuration Index

## SMTP Configuration to send email from Sider

You can see the detail of the configuration at Sider GitHub page and Ruby net/http library documents.

- https://github.com/sider/configure
- https://docs.ruby-lang.org/en/trunk/Net/SMTP.html

Sider sends emails for operation and error reporting.
While you can skip email configuration, we strongly recommend to set up email for production environment.

### `ACTION_MAILER_SMTP_ADDRESS`

SMTP server address.

Example:

    ACTION_MAILER_SMTP_ADDRESS=smtp.example.com

### `ACTION_MAILER_DEFAULT_FROM_EMAIL`

From address of emails sent from Sider.

Example:

    ACTION_MAILER_DEFAULT_FROM_EMAIL=sider@example.com

### `ACTION_MAILER_SMTP_PORT` (Optional)

SMTP server port number.

### `ACTION_MAILER_SMTP_AUTHENTICATION` (Optional)

SMTP server authentication method (choose one from: plain, login, and cram_md5).

### `ACTION_MAILER_SMTP_USER_NAME` (Optional)

User name for SMTP authentication.

### `ACTION_MAILER_SMTP_USER_PASSWORD` (Optional)

User password for SMTP authentication.

### `ACTION_MAILER_SMTP_DOMAIN` (Optional)

Domain name for HELO command.

### `ACTION_MAILER_SMTP_ENABLE_STARTSSL_AUTO` (Optional)

Example:

    ACTION_MAILER_SMTP_ENABLE_STARTSSL_AUTO=no

## `sideci` Configuration

### `BASE_URL`

URL to allow end users to access Sider.

Example:

    BASE_URL=https://sider.example.com

### `EXCEPTION_NOTIFIER_RECIPIENT_EMAILS`

Comma-separated list of recipients for error reporting emails.

Example:

    EXCEPTION_NOTIFIER_RECIPIENT_EMAILS=foo@example.com,bar@example.com

### `SECRET_KEY_BASE`

Secret for encryption required by Rails.

### `RAILS_ENV`

The _environment_ for Rails framework.
You cannot change the value from `onprem`.

Example:

    RAILS_ENV=onprem

### `RESTRICT_SIGN_UP` (Optional)

| Introduced | Deprecated |
| ---------- | ---------- |
| 201902     | -          |

Set `true` to this to disable _self sign up_ to Sider.
If self sign up is disabled, administrator should register each user account.

Example:

    RESTRICT_SIGN_UP=true

### `SIDECI_TIMEZONE` (Optional)

| Introduced | Deprecated |
| ---------- | ---------- |
| 201903     | -          |

Set the timezone used for admin console.
This does not affect the time formats for Sider Enterprise end users.
It depends on `ActiveSupport::TimeZone` class.
See the reference manual for available options.

- https://api.rubyonrails.org/classes/ActiveSupport/TimeZone.html

Example:

    SIDECI_TIMEZONE=Asia/Tokyo

### `ENCRYPTION_SERVICE_KEY`

| Introduced | Deprecated |
| ---------- | ---------- |
| 201908     | -          |

Random string to encrypt secret data.
You cannot change this value once you set up.

Example:

    ENCRYPTION_SERVICE_KEY=aQ8NSFFTrDjdYydClJKFOrLKgR6UzjvL

### `ENCRYPTION_SERVICE_SALT`

| Introduced | Deprecated |
| ---------- | ---------- |
| 201908     | -          |

32 bytes of random string to use for ENCRYPTION_SERVICE_KEY as a salt.
You cannot change this value once you set up.

Example:

    ENCRYPTION_SERVICE_SALT=q1eRUq0DqBgdEbKDvAvSNFBih6qyNrT5

---

Database configuration of `sideci` is given through this environment variable.
Sider supports MySQL 5.7 and assumes `mysql2` driver.
It will look like `mysql2://sider:topsecret@mysql:3306/sideci`.

- The username and password must be given if your server requires authentication.
- You can choose arbitrary database name but the database should be dedicated for `sideci`.

Read the [database configuration guide](database.md) for the details.

### `DATABASE_URL`

URL to connect database.

Example:

    DATABASE_URL=mysql2://sider:topsecret@mysql:3306/sideci

---

Redis configuration of `sideci` is given through this environment variable.
It will look like `redis://redis:7372/0`.

- You should specify path (0 in the example above) which is dedicated to `sideci`.

Read the [IANA documentation](https://www.iana.org/assignments/uri-schemes/prov/redis) for the details.

### `REDIS_URL`

URL to connect Redis.

Example:

    REDIS_URL=redis://redis:7372/0

---

The following items are for `catpost`.

### `CATPOST_BASE_URL`

URL which points to `catpost` endpoint.

Example:

    CATPOST_BASE_URL=https://catpost.example.com:3000

### `CATPOST_SECRET`

Random string used to authorize requests to `catpost`.

## GitHub Enterprise Configuration

Configure access to your GitHub Enterprise.

Sider requires two GitHub integration; OAuth App and GitHub App.
Visit the GitHub Enterprise, register two applications, and fill the credentials.

### `GITHUB_ENDPOINT`

URL which points to GitHub Enterprise web page.

Example:

    GITHUB_ENDPOINT=https://github.example.com

### `GITHUB_API_ENDPOINT`

URL which points to GitHub Enterprise API endpoint.

Example:

    GITHUB_API_ENDPOINT=https://github.example.com/api/v3

### `GITHUB_APP_ID`

Application ID of the GitHub App.

### `GITHUB_APP_NAME`

Application name of the GitHub App.
You can find the name in the `Public link` of the GitHub App.
When the `Public link` is `https://github.example.com/apps/sider-enterprise`, the name is `sider-enterprise`.

Example:

    GITHUB_APP_NAME=sider-enterprise

### `GITHUB_APP_PRIVATE_KEY`

Base64 encoded private key of the GitHub App.
Generate and download the key from GitHub Enterprise and use `base64` command like:

    $ base64 downloaded-private-key.pem

### `GITHUB_APP_OAUTH2_CLIENT_ID`

Client ID of the GitHub App.

### `GITHUB_APP_OAUTH2_CLIENT_SECRET`

Client secret of the GitHub App.

### `GITHUB_APP_WEBHOOK_SECRET`

Webhook secret of the GitHub App.

## Live Update Configuration

Sider web app can detect events that happened in the server and updates its content automatically.
Users don't have to reload their browser to update their pages.
Sider uses two mechanisms to implement this: Pusher and polling.

The Pusher website: https://pusher.com

To configure Pusher, sign up to Pusher and set up the `PUSHER_*` variables.

If you leave the `PUSHER_*` variables empty, Pusher will be disabled, and Sider will work only with polling.
You can configure the polling interval with `FRONTEND_POLLING_INTERVAL`: fine tune the value for both UI responsiveness and the server load.

### `PUSHER_API_ID` (Optional)

Pusher API configuration.

### `PUSHER_API_KEY` (Optional)

Pusher API configuration.

### `PUSHER_API_SECRET` (Optional)

Pusher API configuration.

### `PUSHER_CLUSTER` (Optional)

Pusher API configuration.

### `FRONTEND_POLLING_INTERVAL` (Optional)

| Introduced | Deprecated |
| ---------- | ---------- |
| 201904     | -          |

Polling interval in seconds.
The default value is `30`, which means each browser calls Ajax requests every 30 seconds.

## Integration Configuration

You can optionally setup Loggly and Bugsnag integration.

### `LOGGLY_URL` (Optional)

Loggly URL for debugging.

### `BUGSNAG_API_KEY` (Optional)

Bugsnag API key.

### `BUGSNAG_ENDPOINT` (Optional)

| Introduced | Deprecated |
| ---------- | ---------- |
| 201902     | -          |

Bugsnag On-Premises endpoint.

### `BUGSNAG_SESSION_ENDPOINT` (Optional)

| Introduced | Deprecated |
| ---------- | ---------- |
| 201902     | -          |

Bugsnag On-Premises session endpoint.

## Runners Configuration

### `RUNNERS_TRACES_S3_BUCKET_NAME`

This environment variable is to be specified as a Minio bucket name.
**Runners** upload analysis results to the bucket on Minio.
If you use Minio or other S3 compatible storage services,
this bucket should be isolated from other buckets,
especially the bucket used by **catpost**.

| Introduced | Deprecated |
| :--------- | :--------- |
| 201911     | -          |

### `AWS_REGION_FOR_SIDER` (Optional, but required for AWS S3)

The traces generated by Runners is put on a Minio or an AWS S3 bucket.
If you want to use an AWS S3 bucket, you must specify this environment variable and set it the actual region name of the bucket.

Note: This is **NOT** relevant to `S3_REGION_NAME` parameter.

| Introduced | Deprecated |
| :--------- | :--------- |
| 202002     | -          |

### `DOCKER_RUNNERS_CONFIG`

Sider expects `DOCKER_RUNNERS_CONFIG` to be JSON string.
The structure of this must be like this:

```json
{
  "docker_host_url": "unix:///var/run/docker.sock",
  "s3_endpoint": "http://localhost:9000",
  "aws_access_key_id": "key",
  "aws_secret_access_key": "password"
}
```

| Introduced | Deprecated |
| :--------- | :--------- |
| 201911     | -          |

#### `docker_host_url`

`docker_host_url` specifies the Docker host endpoint.
If you set up with the remote Docker host,
use TCP endpoint like `tcp://docker.example.com:5422`.

#### `s3_endpoint` (Optional)

`s3_endpoint` is the URL of Minio. See [Storage Configuration](./storage.md) to configure Minio.

If you omit the `s3_endpoint` parameter, Sider assumes that the traces should be put on AWS S3 instead of Minio.

#### `aws_access_key_id` (Optional, but required for Minio)

`aws_access_key_id` is used by **runners** to access Minio server.
The value is assumed to be configured on [Storage Configuration](./storage.md)

If you set the `s3_endpoint` paraemter, this parameter is required.

#### `aws_secret_access_key` (Optional, but required for Minio)

`aws_secret_access_key` is used by **runners** to access Minio server.
The value is assumed to be configured on [Storage Configuration](./storage.md)

If you set the `s3_endpoint` paraemter, this parameter is required.

#### `network_mode`

`network_mode` is equivalent to the `--network` option of `docker run`.
See [Network settings](https://docs.docker.com/engine/reference/run/#network-settings) for more details.

#### `http_proxy`

If your Sider Enterprise is within a proxy environment, you need to set `https_proxy` for your proxy server.

#### `https_proxy`

If your Sider Enterprise is within a proxy environment, you need to set `https_proxy` for your proxy server.

#### `no_proxy`

If you set the `http_proxy` and `https_proxy` parameters above, the `no_proxy` parameter may also have to be set.
For example, `s3_endpoint` is set with `http://minio:9000`, then `no_proxy` should be set with `minio`
if Runners should access to Minio without a proxy server.

See [here](./http-proxy.md) for more details about a proxy environment.

## `catpost` Configuration

### `SECRET_KEY_BASE` (for `catpost`)

Secret for encryption required by Rails.

### `API_TOKEN`

Random string to authenticate API access.

### `GIT_REPOS_DIR`

Path to put git repository cache.

Example:

    GIT_REPOS_DIR=/repos

### `EXCEPTION_NOTIFIER_RECIPIENT_EMAILS` (for `catpost`)

Comma-separated list of recipients for error reporting emails.

Example:

    EXCEPTION_NOTIFIER_RECIPIENT_EMAILS=foo@example.com,bar@example.com

### `RAILS_ENV` (for `catpost`)

The _environment_ for Rails framework.
You cannot change the value from `onprem`.

Example:

    RAILS_ENV=onprem

### `TERM_CHILD`

An option for Resque.
You cannot change the value.

Example:

    TERM_CHILD=1

### `QUEUE`

An option for Resque.
You cannot change the value.

Example:

    QUEUE=*

### `ENCRYPTION_SERVICE_KEY` (for `catpost`)

| Introduced | Deprecated |
| ---------- | ---------- |
| 201908     | -          |

Random string to encrypt secret data.
You cannot change this value once you set up.

Example:

    ENCRYPTION_SERVICE_KEY=IppyCqZsWGu6Px1A2qQAoIdkr4J6h8S0

### `ENCRYPTION_SERVICE_SALT` (for `catpost`)

| Introduced | Deprecated |
| ---------- | ---------- |
| 201908     | -          |

32 bytes of random string to use for ENCRYPTION_SERVICE_KEY as a salt.
You cannot change this value once you set up.

Example:

    ENCRYPTION_SERVICE_SALT=EaDFh02Df7TzbfDUUBXn6bIdaISc5ou1

---

Database configuration of `catpost` is given through this environment variable.
Sider supports MySQL 5.7 and assumes `mysql2` driver.
It will look like `mysql2://sider:topsecret@mysql:3306/catpost`.

- The username and password must be given if your server requires authentication.
- You can choose arbitrary database name but the database should be dedicated for catpost.

Read the [database configuration guide](database.md) for the details.

### `DATABASE_URL` (for `catpost`)

URL to connect database.

Example:

    DATABASE_URL=mysql2://sider:topsecret@mysql:3306/catpost

---

Redis configuration of `catpost` is given through this environment variable.
It will look like `redis://redis:7372/1`.

- You should specify path (1 in the example above) which is dedicated to `catpost`.

### `REDIS_URL` (for `catpost`)

URL to connect Redis.

Example:

    REDIS_URL=redis://redis:7372/1

---

The following items are for encryption.

### `ARCHIVE_ENCRYPTION_KEY`

Random string to make archive encrypted.

### `ARCHIVE_NAME_SECRET`

Random string to make archive name more unpredictable.

---

Sider supports Minio and AWS S3 for object storage.
Setup the following variables for Minio.

If you want to use AWS S3, comment out `S3_ENDPOINT` configuration.
You may also comment out `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` when you use IAM role for authorization.

### `S3_ENDPOINT`

Minio endpoint, something like `http://object_storage:9000`.
Remove the configuration if you use AWS S3.

Example:

    S3_ENDPOINT=http://minio:9000

### `S3_BUCKET_NAME`

Object storage bucket name.
Sider automatically creates the bucket if it doesn't exist on Minio.
Specify the name of an existing bucket if you use AWS S3.

Example:

    S3_BUCKET_NAME=sider-example

### `S3_REGION_NAME`

Object storage region name.
If you are using Minio, you can use any region name.
Specify correct region name if you use AWS S3.

Example:

    S3_REGION_NAME=us-east-1

### `AWS_ACCESS_KEY_ID`

Authorization for object storage.
If you use AWS S3, you can authorize using IAM role and remove this configuration.

### `AWS_SECRET_ACCESS_KEY`

Authorization for object storage.
If you use AWS S3, you can authorize using IAM role and remove this configuration.

---

You can optionally setup Loggly and Bugsnag integration.

### `LOGGLY_URL` (Optional, for `catpost`)

Loggly URL for debugging.

### `BUGSNAG_API_KEY` (Optional, for `catpost`)

Bugsnag API key.

### `BUGSNAG_ENDPOINT` (Optional, for `catpost`)

| Introduced | Deprecated |
| ---------- | ---------- |
| 201902     | -          |

Bugsnag On-Premises endpoint.

### `BUGSNAG_SESSION_ENDPOINT` (Optional, for `catpost`)

| Introduced | Deprecated |
| ---------- | ---------- |
| 201902     | -          |

Bugsnag On-Premises session endpoint.
