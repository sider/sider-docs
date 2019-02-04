# Setup Guide

We have provided a guide whether applications have been set up correctly.
* [Testing for Sider setup](../testing/README.md)

## Setup

### Creating an OAuth App for Sider
First of all, create a new OAuth app on GitHub Enterprise; check "[Creating an OAuth App](https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/)" as necessary.
Put each field down below:

* **Application name**: `Sider`
* **Homepage URL**: `https://[your-web-service-domain]/` (e.g. `https://sider.review/`)
* **Application description**: (optional)
* **Authorization callback URL**: `https://[your-web-service-domain]/users/auth/github`


After succeeding the registration, store **Client ID** and **Client Secret** as environment variables below:

* **Client ID**: `GITHUB_CLIENT_ID`
* **Client Secret**: `GITHUB_CLIENT_SECRET`

### Creating a new GitHub App for Sider

Also, you must create a new GitHub App for Sider. Follow these steps:

1. Go to `https://[your-github-enterprise-domain]/organizations/[your-organization-name]/settings/apps/new`
    - `[your-organization-name]` is the arbirtrary organization name. You can see your organizations on
      `https://[your-github-enterprise-domain]/settings/organizations`

2. Fill out the **Register new GitHub App** form, specifying the following:
    - **GitHub App name**: `Sider`
        + Store the value in lowercase as an environment variable `GITHUB_APP_NAME`
    - **Homepage URL**: `https://[your-web-service-domain]/` (e.g. `https://sider.example.com/`)
    - **User authorization callback URL**: `https://[your-web-service-domain]/users/auth/github_app_oauth2/callback`
    - **Setup URL**: `https://[your-web-service-domain]/gh/setup`
    - **Webhook URL**: `https://[your-web-service-domain]/webhooks/github`
    - **Webhook secret**: Arbitrary secret characters
        + For example, you can get it by running `tr -dc '[:alnum:]' < /dev/urandom | head -c32` on your terminal.
        + Store the value as an environment variable `GITHUB_APP_WEBHOOK_SECRET`

![Register GitHub App](../../.gitbook/assets/GitHubApp-Register.png)

3. Set up the application's **Permissions** like the below:

| Permission name      | Access       |
| -------------------- | ------------ |
| Repository contents  | Read-only    |
| Repository metadata  | Read-only    |
| Pull requests        | Read & Write |
| Commit statuses      | Read & Write |
| Organization members | Read-only    |

![GitHub App Permissions](../../.gitbook/assets/GitHubApp-Permissions.png)

4. Enable the following events on **Subscribe to events**:

* **Member**
* **Organization**
* **Pull request**
* **Pull request review**
* **Pull request review comment**
* **Repository**

![GitHub App Events](../../.gitbook/assets/GitHubApp-SubscribeToEvents.png)

5. Choose **Any account** on **Where can this GitHub App be installed?**

![GitHub App Installable scope](../../.gitbook/assets/GitHubApp-WhereCanThisGitHubAppBeInstalled.png)

6. Click **Create GitHub App**
    - After the success of the registration, keep the parameters as environment variables:
        + **ID** as `GITHUB_APP_ID`
        + **Client ID** as `GITHUB_APP_OAUTH2_CLIENT_ID`
        + **Client secret** as `GITHUB_APP_OAUTH2_CLIENT_SECRET`

7. Click **Generate private key**
    - Then your browser downloads PEM file

8. Encode the PEM file with Base64 and keep the value as an environment variable `GITHUB_APP_PRIVATE_KEY`
    - Run `base64 /path/to/PEM` if your OS is macOS
    - Run `base64 -w0 /path/to/PEM` if your OS is Linux

### Create a Database Instance
Create a database instance on AWS; as you need, check "[Creating a DB Instance Running the MySQL Database Engine](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CreateInstance.html)". After create, select the engine version `5.7.x`. Then select a instance type and a strage size according as your team's scale. We have confirmed behaviors when we set `db.t2.medium` and `50GB` storage size, which is for an example.

In attention not to create initial database when creating an instance on RDS because it has problems against character code. And, `max_allowed_packet` should be set around `128MB` to store analysis results in the database properly.

### Create an ElastiCache cluster
Create an ElastiCache cluster; as you need, check "[What Is Amazon ElastiCache for Redis?](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/WhatIs.html)".
We have confirmed behaviors in our environment for test; which is using `cache.r3.large`.

In addition, set `timeout` around `60` with parameter group because Redis created in ElastiCache has no setting about timeout.

### Create a bucket
Create a bucket; as you need, check "[Create a Bucket](https://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html)". The bucket you created stores your encrypted source code. One of Sider applications downloads the souce code by using URL which S3 created when analyzing.

You need to set bucket policy like below to ensure permitting Sider operation and security:

```json
{
  "Id": "AllowVPCE",
  "Statement": [
    {
      "Action": "s3:GetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Resource": "arn:aws:s3:::your-bucket-name/*",
      "Sid": "AllowS3Download"
    }
  ],
  "Version": "2012-10-17"
}
```

The policy permits to access to objects via URL input directly although it doesn't permit to access to the index of objects. You can assure security because Sider uploads files with unpredictable object keys designated.

If you'd like to assure higher level of security, could you consider some methods; restricting accessibility from a specific VPC endpoints or restricting computers that can access via IP addresses?

* [Example Bucket Policies for VPC Endpoints for Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies-vpc-endpoint.html)

We have recommended to set rules to delete stored archives every week because the archives will be remained without deleting.

### Create an Amazon EC2 instance
Create a instance; as you need, check "[Getting Started with Amazon EC2 Linux Instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html)".
You can select EC2 instance type and storage size according as your team's scale. We have confirmed behaviors when we set `c4.2xlarge` and `50GB` as storage size, which is for an example.

The guide has assumed that you use `Amazon Linux AMI 2017.09`. However,  there are no requirements for AMI if you can run Docker.

An application that runs on an instance uploads your source code to S3. Thus, you need to set IAM roles that attaches IAM policy in order to permit API calls. Following policy is the example which restricts API requests to specific buckets.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Stmt151246256049",
      "Action": "s3:*",
      "Effect": "Allow",
      "Resource": [
        "arn:aws:s3:::your-bucket-name",
        "arn:aws:s3:::your-bucket-name/*"
      ]
    }
  ]
}
```

### Install Docker
Install Docker after connecting your EC2 instance via SSH; you can use following document, which is "[Get Docker CE for CentOS](https://docs.docker.com/install/linux/docker-ce/centos/)".
We have confirmed behavior when we used `Docker 17.06.2-ce` as a test.

### Install docker-compose
Install docker-compose; you can use following document, which is "[Install Compose](https://docs.docker.com/compose/install/#install-compose)".
We have confirmed behavior when we used docker-compose version `1.17.0` as a test.

#### Download Application Images
Sider consists of 3 applications which have provided as Docker images on Quay.io. So, pull the images with a robot account that can access Quay.io.
When you login with a robot account, the document, "[Robot Accounts](https://docs.quay.io/glossary/robot-accounts.html)", will help you.

```
$ docker pull quay.io/actcat/sideci:${VERSION}
$ docker pull quay.io/actcat/catpost:${VERSION}
$ docker pull quay.io/actcat/setaria:${VERSION}
```

We will introduce the details of the robot account and Docker images version separately.

#### Set Environment Variables
Set required environment variables for each application. You need to replace `{{...}}` with proper parameters.

##### ENV File for Sider
Create `sideci.env` as an env file for Sider.

{% hint style="info" %}
`EXCEPTION_NOTIFIER_EMAIL` and `EXCEPTION_NOTIFIER_BUGSNAG` will be optional variables in the future.
{% endhint %}

{% hint style="warning" %}
`BUGSNAG_API_KEY` is required even if you don't use Bugsnag. Please set something like "foo".
{% endhint %}

```:sideci.env
RAILS_ENV=onprem
SECRET_KEY_BASE={{FIXME: Secret for running the application}}
DATABASE_URL=mysql2://{{FIXME: RDS user name}}:{{FIXME: RDS user password}}@{{FIXME: RDS endpoint}}/sideci?encoding=utf8mb4&connectTimeout=5000&sslca=config/rds-combined-ca-bundle.pem
REDIS_URL=redis://{{FIXME: Redis endpoint}}/0
BUGSNAG_API_KEY={{FIXME: Bugsnag API key}}
EXCEPTION_NOTIFIER_RECIPIENT_EMAILS={{FIXME: Email address to receive exception notifications}}
ACTION_MAILER_SMTP_USER_NAME={{FIXME: SMTP user name}}
ACTION_MAILER_SMTP_USER_PASSWORD={{FIXME: SMTP user password}}
ACTION_MAILER_SMTP_DOMAIN={{FIXME: Domain name}}
ACTION_MAILER_SMTP_ADDRESS={{FIXME: SMTP server host}}
ACTION_MAILER_SMTP_PORT={{FIXME: SMTP server port number}}
ACTION_MAILER_SMTP_AUTHENTICATION={{FIXME: SMTP authentication method}}
ACTION_MAILER_SMTP_ENABLE_STARTSSL_AUTO=true
ACTION_MAILER_DEFAULT_FROM_EMAIL={{FIXME: Default FROM Email address}}
BASE_URL=https://{{FIXME: Your Sider domain name}}
PUSHER_API_ID={{FIXME: Your Pusher API ID}}
PUSHER_API_KEY={{FIXME: Your Pusher API Key}}
PUSHER_API_SECRET={{FIXME: Your Pusher API Secret}}
PUSHER_CLUSTER={{FIXME: Your Pusher cluster name}}
GITHUB_APP_ID={{FIXME: Your GitHub App ID}}
GITHUB_APP_NAME={{FIXME: Your GitHub App name}}
GITHUB_APP_PRIVATE_KEY={{FIXME: Your GitHub App Private Key encoded with Base64}}
GITHUB_APP_OAUTH2_CLIENT_ID={{FIXME: Your GitHub App OAuth2 Client ID}}
GITHUB_APP_OAUTH2_CLIENT_SECRET={{FIXME: Your GitHub App OAuth2 Client Secret}}
GITHUB_APP_WEBHOOK_SECRET={{FIXME: Your GitHub App Webhook Secret}}
GITHUB_CLIENT_ID={{FIXME: Your GitHub Enterprise OAuth2 client ID}}
GITHUB_CLIENT_SECRET={{FIXME: Your GitHub Enterprise OAuth2 client secret}}
GITHUB_OAUTH_HEAD_ENCRYPTION_KEY={{FIXME: Encryption key}}
GITHUB_API_ENDPOINT=https://{{FIXME: Your GitHub Enterprise host name}}/api/v3/
GITHUB_ENDPOINT=https://{{FIXME: Your GitHub Enterprise host name}}/
CATPOST_BASE_URL=http://catpost_web:3000
CATPOST_SECRET={{FIXME: Catpost secret}}
SETARIA_BASE_URL=http://setaria_web:3000
SETARIA_SECRET={{FIXME: Setaria secret}}
LOGGLY_URL=https://logs-01.loggly.com/inputs/{{FIXME: Loggly token}}/tag/sideci
```

##### ENV File for Catpost
Create `catpost.env` as an env file for Catpost.

{% hint style="info" %}
`EXCEPTION_NOTIFIER_EMAIL` and `EXCEPTION_NOTIFIER_BUGSNAG` will be optional variables and `API_TOKEN` will be replaced with `API_SECRET` in the future.
{% endhint %}

{% hint style="warning" %}
`BUGSNAG_API_KEY` is required even if you don't use Bugsnag. Please set something like "foo".
{% endhint %}

```:catpost.env
RAILS_ENV=onprem
SECRET_KEY_BASE={{FIXME: Secret for running the application}}
DATABASE_URL=mysql2://{{FIXME: RDS user name}}:{{FIXME: RDS user password}}@{{FIXME: RDS endpoint}}/catpost?encoding=utf8mb4&charset=utf8mb4&sslca=config/rds-combined-ca-bundle.pem
REDIS_URL=redis://{{FIXME: Redis endpoint}}/1
BUGSNAG_API_KEY={{FIXME: Bugsnag API key}}
EXCEPTION_NOTIFIER_RECIPIENT_EMAILS={{FIXME: Email address to receive exception notifications}}
ACTION_MAILER_SMTP_USER_NAME={{FIXME: SMTP user name}}
ACTION_MAILER_SMTP_USER_PASSWORD={{FIXME: SMTP user password}}
ACTION_MAILER_SMTP_DOMAIN={{FIXME: Domain name}}
ACTION_MAILER_SMTP_ADDRESS={{FIXME: SMTP server host}}
ACTION_MAILER_SMTP_PORT={{FIXME: SMTP server port number}}
ACTION_MAILER_SMTP_AUTHENTICATION={{FIXME: SMTP authentication method}}
ACTION_MAILER_SMTP_ENABLE_STARTSSL_AUTO=true
ACTION_MAILER_DEFAULT_FROM_EMAIL={{FIXME: Default FROM Email address}}
S3_BUCKET_NAME={{FIXME: Your S3 bucket name}}
S3_REGION_NAME={{FIXME: Your AWS region name}}
API_TOKEN={{FIXME: Catpost secret}}
URL_ENCRYPTION_KEY={{FIXME: URL Encryption key}}
ARCHIVE_ENCRYPTION_KEY={{FIXME: Archive Encryption key}}
ARCHIVE_NAME_SECRET={{FIXME: Archive name secret}}
GIT_REPOS_DIR=/var/git_repos
TERM_CHILD=1
QUEUE=*
VERBOSE=1
LOGGLY_URL=https://logs-01.loggly.com/inputs/{{FIXME: Loggly token}}/tag/catpost
```

##### ENV File for Setaria
Create `setaria.env` as an env file for Setaria.

{% hint style="info" %}
`EXCEPTION_NOTIFIER_EMAIL` and `EXCEPTION_NOTIFIER_BUGSNAG` will be optional variables in the future.
{% endhint %}

{% hint style="warning" %}
`BUGSNAG_API_KEY` is required even if you don't use Bugsnag. Please set something like "foo".
{% endhint %}

```:setaria.env
RAILS_ENV=onprem
SECRET_KEY_BASE={{FIXME: Secret for running the application}}
DATABASE_URL=mysql2://{{FIXME: RDS user name}}:{{FIXME: RDS user password}}@{{FIXME: RDS endpoint}}/setaria?encoding=utf8mb4&sslca=config/rds-combined-ca-bundle.pem
REDIS_URL=redis://{{FIXME: Redis endpoint}}/2
BUGSNAG_API_KEY={{FIXME: Bugsnag API key}}
EXCEPTION_NOTIFIER_RECIPIENT_EMAILS={{FIXME: Email address to receive exception notifications}}
ACTION_MAILER_SMTP_USER_NAME={{FIXME: SMTP user name}}
ACTION_MAILER_SMTP_USER_PASSWORD={{FIXME: SMTP user password}}
ACTION_MAILER_SMTP_DOMAIN={{FIXME: Domain name}}
ACTION_MAILER_SMTP_ADDRESS={{FIXME: SMTP server host}}
ACTION_MAILER_SMTP_PORT={{FIXME: SMTP server port number}}
ACTION_MAILER_SMTP_AUTHENTICATION={{FIXME: SMTP authentication method}}
ACTION_MAILER_SMTP_ENABLE_STARTSSL_AUTO=true
ACTION_MAILER_DEFAULT_FROM_EMAIL={{FIXME: Default FROM Email address}}
QUAY_ROBOT_NAME={{FIXME: Quay robot account name}}
QUAY_ROBOT_PASSWORD={{FIXME: Quay robot account password}}
API_SECRET={{FIXME: Setaria secret}}
SSH_KEY_ENCRYPTION_KEY={{FIXME: SSH Key Encryption key}}
TERM_CHILD=1
QUEUE=*
VERBOSE=1
LOGGLY_URL=https://logs-01.loggly.com/inputs/{{FIXME: Loggly token}}/tag/setaria
```

#### Details of Environment Variables

| Variable Name | Application | Description |
| :------------ | :---------- | :---------- |
| `RAILS_ENV` | ALL | Set `onprem`. You needn't change the value. | 
| `SECRET_KEY_BASE` | ALL | A value to create Cookie. You need to use the value which created by execute `rake secret` and MUST use different values from each application. |
| `DATABASE_URL` | ALL | The endpoint when you created a database instance. Although you should use parameters of `encoding`, `charset`, and `sslca` without revises, you should revise user name, password, domain and port number according as your team. |
| `REDIS_URL` | ALL | The endpoint when you create a ElastiCache cluster. Domain and port number should be revised according as your team. Set different IDs at the end of the parameters for each application not to share queues because we have supposed that 3 Sider applicaations use the same ElastiCache cluster. |
| `EXCEPTION_NOTIFIER_RECIPIENT_EMAILS` | ALL | An email address to notify the detail when application will raise unhandled exceptions. You can set multiple email addresses by comma separating. |
| `ACTION_MAILER_SMTP_USER_NAME` | ALL | The username to authenticate your mail server. See "[Action Mailer Configuration](https://guides.rubyonrails.org/action_mailer_basics.html#action-mailer-configuration)". |
| `ACTION_MAILER_SMTP_USER_PASSWORD` | ALL | The user password to authenticate your mail server. See "[Action Mailer Configuration](https://guides.rubyonrails.org/action_mailer_basics.html#action-mailer-configuration)". |
| `ACTION_MAILER_SMTP_DOMAIN` | ALL | A HELO domain to identify domain name. See "[Action Mailer Configuration](https://guides.rubyonrails.org/action_mailer_basics.html#action-mailer-configuration)". |
| `ACTION_MAILER_SMTP_ADDRESS` | ALL | The remote mail server to send emails from applications. See "[Action Mailer Configuration](https://guides.rubyonrails.org/action_mailer_basics.html#action-mailer-configuration)". |
| `ACTION_MAILER_SMTP_PORT` | ALL | The port number of your mail server. See "[Action Mailer Configuration](https://guides.rubyonrails.org/action_mailer_basics.html#action-mailer-configuration)". |
| `ACTION_MAILER_SMTP_AUTHENTICATION` | ALL | The authentication type. See "[Action Mailer Configuration](https://guides.rubyonrails.org/action_mailer_basics.html#action-mailer-configuration)". |
| `ACTION_MAILER_SMTP_ENABLE_STARTSSL_AUTO` | ALL | Detects if STARTTLS is enabled in your STTP server. The default value is `true`. See "[Action Mailer Configuration](https://guides.rubyonrails.org/action_mailer_basics.html#action-mailer-configuration)". |
| `ACTION_MAILER_DEFAULT_FROM_EMAIL` | ALL | Default FROM Email address which is included in Emails sent from Sider |
| `BASE_URL` | sideci | Homepage URL you got when registered an OAuth App. |
| `PUSHER_API_ID` | sideci | Value provided by Pusher. |
| `PUSHER_API_KEY` | sideci | Value provided by Pusher. |
| `PUSHER_API_SECRET` | sideci | Value provided by Pusher. |
| `PUSHER_CLUSTER` | sideci | Value provided by Pusher. |
| `GITHUB_APP_ID` | sideci | GitHub App ID. See "[Creating a new GitHub App for Sider](#creating-a-new-github-app-for-sider)". |
| `GITHUB_APP_NAME` | sideci | GitHub App name. We recommend you to set the value `sider`. See "[Creating a new GitHub App for Sider](#creating-a-new-github-app-for-sider)". |
| `GITHUB_APP_PRIVATE_KEY` | sideci | GitHub App private key encoded with Base64. See "[Creating a new GitHub App for Sider](#creating-a-new-github-app-for-sider)". |
| `GITHUB_APP_OAUTH2_CLIENT_ID` | sideci | GitHub App OAuth2 client ID. See "[Creating a new GitHub App for Sider](#creating-a-new-github-app-for-sider)". |
| `GITHUB_APP_OAUTH2_CLIENT_SECRET` | sideci | GitHub App OAuth2 client secret. See "[Creating a new GitHub App for Sider](#creating-a-new-github-app-for-sider)". |
| `GITHUB_APP_WEBHOOK_SECRET` | sideci | GitHub App Webhook secret. See "[Creating a new GitHub App for Sider](#creating-a-new-github-app-for-sider)". |
| `GITHUB_CLIENT_ID` | sideci | Client ID you got when registered an OAuth App. |
| `GITHUB_CLIENT_SECRET` | sideci | Client Secret you got when registered an OAuth App. |
| `GITHUB_OAUTH_HEAD_ENCRYPTION_KEY` | sideci | Key that is used to encrypt OAuth token for each user generated in GitHub. Set characters; you can get it with `tr -dc '[:alnum:]' < /dev/urandom \| head -c32`. DO NOT CHANGE the value after you set once because Sider fails to decrypt stored OAuth tokens. |
| `GITHUB_API_ENDPOINT` | sideci | API endpoint that Sider uses to connect GitHub Enterprise; which is `https://[your-github-enterprise-host]/api/v3/`. |
| `CATPOST_BASE_URL` | sideci | Set `http://catpost_web:3000`. If you would like to change service name or port number on `docker-compose`, replace the URL with the name/number you set. |
| `CATPOST_SECRET` | sideci | Set the same value of `API_TOKEN`. |
| `SETARIA_BASE_URL` | sideci | Set `http://setaria_web:3000`. If you would like to change service name or port number on `docker-compose`, replace the URL with the name/number you set. |
| `SETARIA_SECRET` | sideci | Set the same value of `API_SECRET`. |
| `API_TOKEN` | catpost | The token that is used authentication for API connections. We have recommended you to set adequate length of characters, which you can generate them with `rake secret`. |
| `API_SECRET` | setaria | The token that is used authentication for API connections. We have recommended you to set adequate length of characters, which you can generate them with `rake secret`. |
| `BUGSNAG_API_KEY` | ALL | API key provided by Bugsnag. Bugsnag is used for investigating problems. |
| `LOGGLY_URL` | ALL | URL provided by Loggly. Loggly is used for investigating problems. |
| `S3_BUCKET_NAME` | catpost | The bucket name you get when created a bucket. |
| `S3_REGION_NAME` | catpost | The region name you get when created a bucket. |
| `URL_ENCRYPTION_KEY` | catpost | The key that is used to encrypt URL that includes OAuth token. Set characters; you can get it with `tr -dc '[:alnum:]' < /dev/urandom \| head -c32`. |
| `ARCHIVE_ENCRYPTION_KEY` | catpost | The key that is used to encrypt source code before analyzing. Set characters; you can get it with `tr -dc '[:alnum:]' < /dev/urandom \| head -c32`. |
| `ARCHIVE_NAME_SECRET` | catpost | The random data that to hash archived name of encrypted source code. Set characters; you can get it with `tr -dc '[:alnum:]' < /dev/urandom \| head -c32`. |
| `GIT_REPOS_DIR` | catpost | Directory name that Catpost stores cache to a local storage. Specify the file path on the container which is mounted on running up. |
| `SSH_KEY_ENCRYPTION_KEY` | setaria | The encryption key to enctypt SSH private key. It is resolves private dependencies. Set characters; you can get it with `tr -dc '[:alnum:]' < /dev/urandom \| head -c32`. DO NOT CHANGE the value after you set once because Setaria fails to dectypt stored OAuth tokens and source code. |
| `QUAY_ROBOT_NAME` | setaria | The robot name provided by Quay.io; it is used to pull Docker images of analyzers. |
| `QUAY_ROBOT_PASSWORD` | setaria | The robot password provided by Quay.io; it is used to pull Docker images of analyzers. |

#### Settings for docker-compose
Create `docker-compose.yml` to run up Sider applications. `sideci.env`, `catpost.env` and `setaria.env` are the file mentioned above.
You need to replace `{{RELEASE_TAG}}` with an actual tag name.

```yaml:docker-compose.yml
version: '3'
services:
  sideci_web:
    image: quay.io/actcat/sideci:{{RELEASE_TAG}}
    env_file:
      - ./sideci.env
    command: bundle exec puma
    ports:
      - "3000:3000"
  sideci_worker:
    image: quay.io/actcat/sideci:{{RELEASE_TAG}}
    env_file:
      - ./sideci.env
    command: bundle exec sidekiq -C ./config/sidekiq.yml
  catpost_web:
    image: quay.io/actcat/catpost:{{RELEASE_TAG}}
    env_file:
      - ./catpost.env
    command: bundle exec puma
    ports:
      - "3000"
    volumes:
      - git_repos:/var/git_repos
  catpost_worker:
    image: quay.io/actcat/catpost:{{RELEASE_TAG}}
    env_file:
      - ./catpost.env
    command: bundle exec rake environment resque:work
    volumes:
      - git_repos:/var/git_repos
  catpost_scheduler:
    image: quay.io/actcat/catpost:{{RELEASE_TAG}}
    env_file:
      - ./catpost.env
    command: bundle exec rake environment resque:scheduler
    volumes:
      - git_repos:/var/git_repos
  setaria_web:
    image: quay.io/actcat/setaria:{{RELEASE_TAG}}
    env_file:
      - ./setaria.env
    command: bundle exec puma
    ports:
      - "3000"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
  setaria_worker:
    image: quay.io/actcat/setaria:{{RELEASE_TAG}}
    env_file:
      - ./setaria.env
    command: bundle exec rake environment resque:work
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
volumes:
  git_repos:
```

### Setup Database
Start containers and create database and tables based with the `docker-compose.yml`.

```
$ docker-compose run sideci_web bundle exec rake db:setup db:seed_fu
$ docker-compose run catpost_web bundle exec rake db:setup
$ docker-compose run setaria_web bundle exec rake db:setup
```

### Starting Applications
Run up the applications after completion of database setup.

```
$ docker-compose up
```

### Create Elastic Load Balancing(ELB)
Create a load balancer to receive requests from the exterior through port 443 because you can send HTTP requests to the applications on port 3000 of the EC2 instance. To create Application Load Balancer, you need to route HTTPS requests for port 3000 of the instance. This document, "[Create an Application Load Balancer](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-application-load-balancer.html)", will tell you about the load balancer creation on AWS.

* Recommend to permit only HTTPS requests when introducing Sider duly.
  * Of cource, you can examine Sider with HTTP.
* Designate `/api/health_check` as the path for health check.
* DO NOT use Classic Load Balancer because we have confirmed that problems had occurred when had connected to sideci.

Lastly, register CNAME record which can resolve `BASE_URL` with ELB endpoint on DNS.

### Check Behaviors of Applications
All configurations completed, you will see the Sider pages with URL registered on DNS. Check below:

* Redirect to GitHub Enterprise correctly when signing up to Sider.
* Show your repositories you have on GitHub Enterprise in "Select a Repository" page.
* Start analyze pull requests that the repository have had after adding it to Sider.

Sider building is completed if you check behaviors above!

### Settings for Batch Tasks
Sider has tasks which should be executed to keep operations stabiled. Therefore, set crontab to run following commands everyday.

```
$ docker-compose run sideci_web bundle exec rake onprem:batch:daily
$ docker-compose run catpost_web bundle exec rake onprem:batch:daily
$ docker-compose run setaria_web bundle exec rake onprem:batch:daily
```

Recommend to execute these command on the time when there is fewer analysis because these commands update database records for all users and all repositories.

### Prune Docker Images
As you use Sider, disk usage will be increasing because unused images increases. This is why:

* Older version images of Sider won't use after you update it.
* Older version images of analyzers won't use after you update them.

It will cause unexpected errors as unused iamges occupy disk. Thus we recommend you to prune the images on a regular basis.

```
$ docker image prune
$ docker image prune --all     # To prune ALL unused images of containers.
```

If you run these processes in running Sider, the application images, which are sideci, catpost and setaria, won't be deleted. On the other hand, idled analyzer images will be deleted. In the case, analyzers images will be downloaded automatically when Sider requires to analyze.

### Set Administrators
You can assign administrators who are able to access administration console. The page provides registered users information, analysis information and so on with the administrators.

```
$ docker-compose run sideci_web bundle exec rake admin:promote[{{FIXME: github nickname}}]
```

Replace `{{FIXME: github nickname}}` with your GitHub username and execute the comamnd. Only GitHub users assigned administrator can access to the console. You can see the GitHub usernames if you see the user page of GitHub Enterprise; for example, if the page URL is `https://github.com/sider_user`, the user name is `sider_user`.

As a user is assigned administrator by the command above, signin Sider with GitHub Enterprise account and access to `/admin` in Sider.
