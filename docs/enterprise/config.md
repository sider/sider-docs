---
id: config
title: Sider Enterprise Configuration Index
sidebar_label: Configuration Index
hide_title: true
---

# Email Configuration

## SMTP Configuration to send email from Sider

You can see the detail of the configuration at Sider GitHub page and Ruby net/http library documents.

* https://github.com/sider/configure
* https://docs.ruby-lang.org/en/trunk/Net/SMTP.html

Sider sends emails for operation and error reporting.
While you can skip email configuration, we strongly recommend to set up email for production environment.

### `ACTION_MAILER_SMTP_ADDRESS` 

SMTP server address.

#### Example
    ACTION_MAILER_SMTP_ADDRESS=smtp.example.com

### `ACTION_MAILER_DEFAULT_FROM_EMAIL` 

From address of emails sent from Sider.

#### Example
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


#### Example
    ACTION_MAILER_SMTP_ENABLE_STARTSSL_AUTO=no



# sideci Configuration

## General Configuration

### `BASE_URL` 

URL to allow end users to access Sider.

#### Example
    BASE_URL=https://sider.example.com

### `DOCS_PAGE_URL` 

URL which points to document page.

#### Example
    DOCS_PAGE_URL=https://help.sider.review

### `EXCEPTION_NOTIFIER_RECIPIENT_EMAILS` 

Comma-separated list of recipients for error reporting emails.

#### Example
    EXCEPTION_NOTIFIER_RECIPIENT_EMAILS=foo@example.com,bar@example.com

### `GITHUB_OAUTH_HEAD_ENCRYPTION_KEY` 

Random string to encrypt GitHub credential.
Note that changing this value will make all organizations invalid.

### `STATUS_PAGE_URL` 

URL to share service status.

#### Example
    STATUS_PAGE_URL=https://status.sider.review

### `SECRET_KEY_BASE` 

Secret for encryption required by Rails.

### `RAILS_ENV` 

The *environment* for Rails framework.
You cannot change the value from `onprem`.

#### Example
    RAILS_ENV=onprem

### `RESTRICT_SIGN_UP` (Optional)

|Introduced|Deprecated|
|----------|----------|
|201902|-|

Set `true` to this to disable _self sign up_ to Sider.
If self sign up is disabled, administrator should register each user account.

#### Example
    RESTRICT_SIGN_UP=true


## Database Configuration

Database configuration of sideci is given through this environment variable.
Sider supports MySQL 5.7 and assumes `mysql2` driver.
It will look like `mysql2://sider:topsecret@mysql:3306/sideci`.

* The username and password must be given if your server requires authentication.
* You can choose arbitrary database name but the database should be dedicated for sideci.

Read the database configuration guide for the details.

* https://help.sider.review/onprem/database

### `DATABASE_URL` 

URL to connect database.

#### Example
    DATABASE_URL=mysql2://sider:topsecret@mysql:3306/sideci


## Redis Configuration

Redis configuration of sideci is given through this environment variable.
It will look like `redis://redis:7372/0`.

* You should specify path (0 in the example above) which is dedicated to sideci.

Read the IANA documentation for the details.

* http://www.iana.org/assignments/uri-schemes/prov/redis

### `REDIS_URL` 

URL to connect Redis.

#### Example
    REDIS_URL=redis://redis:7372/0


## Catpost Configuration

### `CATPOST_BASE_URL` 

URL which points to catpost endpoint.

#### Example
    CATPOST_BASE_URL=https://catpost.example.com:3000

### `CATPOST_SECRET` 

Random string used to authorize requests to catpost.


## Setaria Configuration

### `SETARIA_BASE_URL` 

URL which points to setaria endpoint.

#### Example
    SETARIA_BASE_URL=https://setaria.example.com:3000

### `SETARIA_SECRET` 

Random string used to authorize requests to setaria.


## GitHub Enterprise Configuration

Configure access to your GitHub Enterprise.

Sider requires two GitHub integration; OAuth App and GitHub App.
Visit the GitHub Enterprise, register two applications, and fill the credentials.

### `GITHUB_ENDPOINT` 

URL which points to GitHub Enterprise web page.
Example: https://github.example.com

#### Example
    GITHUB_ENDPOINT=https://github.example.com

### `GITHUB_API_ENDPOINT` 

URL which points to GitHub Enterprise API endpoint.
Example: https://github.example.com/api/v3/

#### Example
    GITHUB_API_ENDPOINT=https://github.example.com/api/v3

### `GITHUB_CLIENT_ID` 

Client ID of the OAuth App.

### `GITHUB_CLIENT_SECRET` 

Client secret of the OAuth App.

### `GITHUB_APP_ID` 

Application ID of the GitHub App.

### `GITHUB_APP_NAME` 

Application name of the GitHub App.
You can find the name in the `Public link` of the GitHub App.
When the `Public link` is `https://github.example.com/apps/sider-enterprise`, the name is `sider-enterprise`.

#### Example
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


## Integration Configuration

Sider uses Pusher to implement a push notification to web browser.
Put the PUSHER_* values obtained from Pusher web page.

You can optionally setup Loggly and Bugsnag integration.

### `PUSHER_API_ID` 

Pusher API configuration.

### `PUSHER_API_KEY` 

Pusher API configuration.

### `PUSHER_API_SECRET` 

Pusher API configuration.

### `PUSHER_CLUSTER` 

Pusher API configuration.

### `LOGGLY_URL` (Optional)

Loggly URL for debugging.

### `BUGSNAG_API_KEY` (Optional)

Bugsnag API key.

### `BUGSNAG_ENDPOINT` (Optional)

|Introduced|Deprecated|
|----------|----------|
|201902|-|

Bugsnag On-Premises endpoint.

### `BUGSNAG_SESSION_ENDPOINT` (Optional)

|Introduced|Deprecated|
|----------|----------|
|201902|-|

Bugsnag On-Premises session endpoint.



# catpost Configuration

## General Configuration

### `SECRET_KEY_BASE` 

Secret for encryption required by Rails.

### `API_TOKEN` 

Random string to authenticate API access.

### `GIT_REPOS_DIR` 

Path to put git repository cache.

#### Example
    GIT_REPOS_DIR=/repos

### `EXCEPTION_NOTIFIER_RECIPIENT_EMAILS` 

Comma-separated list of recipients for error reporting emails.

#### Example
    EXCEPTION_NOTIFIER_RECIPIENT_EMAILS=foo@example.com,bar@example.com

### `RAILS_ENV` 

The *environment* for Rails framework.
You cannot change the value from `onprem`.

#### Example
    RAILS_ENV=onprem

### `TERM_CHILD` 

An option for Resque.
You cannot change the value.

#### Example
    TERM_CHILD=1

### `QUEUE` 

An option for Resque.
You cannot change the value.

#### Example
    QUEUE=*


## Database Configuration

Database configuration of sideci is given through this environment variable.
Sider supports MySQL 5.7 and assumes `mysql2` driver.
It will look like `mysql2://sider:topsecret@mysql:3306/catpost`.

* The username and password must be given if your server requires authentication.
* You can choose arbitrary database name but the database should be dedicated for catpost.

Read the database configuration guide for the details.

* https://help.sider.review/onprem/database

### `DATABASE_URL` 

URL to connect database.

#### Example
    DATABASE_URL=mysql2://sider:topsecret@mysql:3306/catpost


## Redis Configuration

Redis configuration of sideci is given through this environment variable.
It will look like `redis://redis:7372/1`.

* You should specify path (1 in the example above) which is dedicated to catpost.

Read the IANA documentation for the details.

* http://www.iana.org/assignments/uri-schemes/prov/redis

### `REDIS_URL` 

URL to connect Redis.

#### Example
    REDIS_URL=redis://redis:7372/1


## Encryption Configuration

### `URL_ENCRYPTION_KEY` 

32 bytes of random string to encrypt URL pointing to repositories.
You cannot change this value once you set up.

### `ARCHIVE_ENCRYPTION_KEY` 

Random string to make archive encrypted.

### `ARCHIVE_NAME_SECRET` 

Random string to make archive name more unpredictable.


## Object Storage Configuration

Sider supports Minio and AWS S3 for object storage.
Setup the following variables for Minio.

If you want to use AWS S3, comment out S3_ENDPOINT configuration.
You may also comment out AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY when you use IAM role for authorization.

### `S3_ENDPOINT` 

Minio endpoint, something like `http://object_storage:9000`.
Remove the configuration if you use AWS S3.

#### Example
    S3_ENDPOINT=http://minio:9000

### `S3_BUCKET_NAME` 

Object storage bucket name.
Sider automatically creates the bucket if it doesn't exist on Minio.
Specify the name of an existing bucket if you use AWS S3.

#### Example
    S3_BUCKET_NAME=sider-example

### `S3_REGION_NAME` 

Object storage region name.
If you are using Minio, you can use any region name.
Specify correct region name if you use AWS S3.

#### Example
    S3_REGION_NAME=us-east-1

### `AWS_ACCESS_KEY_ID` 

Authorization for object storage.
If you use AWS S3, you can authorize using IAM role and remove this configuration.

### `AWS_SECRET_ACCESS_KEY` 

Authorization for object storage.
If you use AWS S3, you can authorize using IAM role and remove this configuration.


## Integration Configuration

You can optionally setup Loggly and Bugsnag integration.

### `LOGGLY_URL` (Optional)

Loggly URL for debugging.

### `BUGSNAG_API_KEY` (Optional)

Bugsnag API key.

### `BUGSNAG_ENDPOINT` (Optional)

|Introduced|Deprecated|
|----------|----------|
|201902|-|

Bugsnag On-Premises endpoint.

### `BUGSNAG_SESSION_ENDPOINT` (Optional)

|Introduced|Deprecated|
|----------|----------|
|201902|-|

Bugsnag On-Premises session endpoint.



# setaria Configuration

## General Configuration

### `SECRET_KEY_BASE` 

Secret for encryption required by Rails.

### `API_SECRET` 

Random string to authenticate API access from sideci.

### `SSH_KEY_ENCRYPTION_KEY` 

32 bytes of random string to encrypt SSH secret key associated to repositories.
You cannot change this value once you set up.

### `EXCEPTION_NOTIFIER_RECIPIENT_EMAILS` 

Comma-separated list of recipients for error reporting emails.

### `RAILS_ENV` 

The *environment* for Rails framework.
You cannot change the value from `onprem`.

#### Example
    RAILS_ENV=onprem

### `TERM_CHILD` 

An option for Resque.
You cannot change the value.

#### Example
    TERM_CHILD=1

### `QUEUE` 

An option for Resque.
You cannot change the value.

#### Example
    QUEUE=*

### `RUNNER_USE_DEFAULT_NETWORK` (Optional)

|Introduced|Deprecated|
|----------|----------|
|201902|-|

Specify any value if you want to run the analyzers in `default` network of Docker.

#### Example
    RUNNER_USE_DEFAULT_NETWORK=1


## Database Configuration

Database configuration of setaria is given through this environment variable.
Sider supports MySQL 5.7 and assumes `mysql2` driver.
It will look like `mysql2://sider:topsecret@mysql:3306/setaria`.

* The username and password must be given if your server requires authentication.
* You can choose arbitrary database name but the database should be dedicated for sideci.

Read the database configuration guide for the details.

* https://help.sider.review/onprem/database

### `DATABASE_URL` 

URL to connect database.

#### Example
    DATABASE_URL=mysql2://sider:topsecret@mysql:3306/setaria


## Redis Configuration

Redis configuration of sideci is given through this environment variable.
It will look like `redis://redis:7372/2`.

* You should specify path (2 in the example above) which is dedicated to setaria.

Read the IANA documentation for the details.

* http://www.iana.org/assignments/uri-schemes/prov/redis

### `REDIS_URL` 

URL to connect Redis.

#### Example
    REDIS_URL=redis://redis:7372/2


## Docker Configuration

setaria needs to authenticate to Quay docker image repository.
Sider provides the login name and password to access Quay repositories.

### `QUAY_ROBOT_NAME` 

Quay account name.

#### Example
    QUAY_ROBOT_NAME=actcat+example

### `QUAY_ROBOT_PASSWORD` 

Quay account password.


## Integration Configuration

You can optionally setup Loggly and Bugsnag integration.

### `LOGGLY_URL` (Optional)

Loggly URL for debugging.

### `BUGSNAG_API_KEY` (Optional)

Bugsnag API key.

### `BUGSNAG_ENDPOINT` (Optional)

|Introduced|Deprecated|
|----------|----------|
|201902|-|

Bugsnag On-Premises endpoint.

### `BUGSNAG_SESSION_ENDPOINT` (Optional)

|Introduced|Deprecated|
|----------|----------|
|201902|-|

Bugsnag On-Premises session endpoint.



