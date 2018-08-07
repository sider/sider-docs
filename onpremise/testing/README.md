# Testing for Sider running

Sider has equipped tools to check connections with services needed to run.

```sh
$ docker pull quay.io/actcat/exotic-shorthair:master
```

## Connection with MySQL
You can check connection and configuration by specifying `DATABASE_URL`.

```sh
$ docker run --rm -t quay.io/actcat/exotic-shorthair:master mysql [DATABASE_URL]
```

### Check Items
`mysql` command checks:

* whether be able to connect with MySQL.
* whether MySQL version is higher `5.7`.
* whether enough size reserved for `max_allowed_packet`.

### Specify URL on Command Line
Specify database on command line when you are setting database server.

```sh
$ docker run --rm -t quay.io/actcat/exotic-shorthair:master mysql mysql2://root:password@host.name.com:3000/foo?sslca=config/rds-combined-ca-bundle.pem
```

### Specify URL from Environment Variable
Check connection with the value of environment variable, `DATABSE_URL`, if you wouldn't specify URL on command line. When you have had `.env` files for Sider, it will be better for you to check connection in this way.

```sh
$ docker run --rm -t --env-file sideci.env quay.io/actcat/exotic-shorthair:master mysql
```

### Certificates
For simplification, Sider have bundled the certificate for AWS RDS as `config/rds-combined-ca-bundle.pem` in Docker images. If you need other certificates, use Volume feature when running up Docker containers.

## Connection with Redis
You can check connection by specifying `REDIS_URL`.

```sh
$ docker run --rm -t quay.io/actcat/exotic-shorthair:master redis [REDIS_URL]
```

### Specify URL on Command Line
Specify database on command line when you are setting Redis server.

```sh
$ docker run --rm -t quay.io/actcat/exotic-shorthair:master redis redis://some_host:3000/1
```

### Specify URL from Environment Variable
Check connection with the value of environment variable, `DATABSE_URL`, if you wouldn't specify URL on the command line. When you have had `.env` files for Sider, it will be better for you to check connection in this way.

```sh
$ docker run --rm -t --env-file sideci.env quay.io/actcat/exotic-shorthair:master redis
```

## Check Email Sending
You can send test emails.

```sh
$ docker run --rm -t --env-file [ENV_FILE] quay.io/actcat/exotic-shorthair:master mailer [TO ADDRESS]
```

SMTP settings refers to each environment variable specified by Sider.

## S3 Testing
You can check access to S3 backets for Catpost and Setaria.

```sh
$ docker run --rm -t quay.io/actcat/exotic-shorthair:master s3 [REGION] [BUCKET]
```

### Check Items
`s3` command checks:

* whether to upload objects to Bucket correctly (for Catpost).
* whether to confirm the objects uploaded to Bucket (for Catpost).
* whether to download the objects from Bucket via HTTP (for Setaria).

In this testing process, objects are uploaded but aren't deleted, hence you have to delete them according to your necessity. And, the objects will be uploaded into `/test` on Bucket, which objects' names will be random characters.

### Specify Region and Bucket on Command Line
Specify Region and Bucket on command line when you are setting S3.

```sh
$ docker run --rm -t quay.io/actcat/exotic-shorthair:master s3 us-east-1 sider-bucket
```

### Specify Region and Bucket from Environment Variable
Check S3 with the values of environment variables, `S3_BUCKET_NAME` and `S3_REGION_NAME`, if you wouldn't speicfy them on command line. When you have had `.env` file for Catpost, you can check with the file.

```sh
$ docker run --rm -t --env-file catpost.env quay.io/actcat/exotic-shorthair:master s3
```

## Check Pusher
You can check Pusher connection.

```sh
$ docker run --rm -t quay.io/actcat/exotic-shorthair:master pusher [API_ID] [KEY] [SECRET] [CLUSTER]
```

### Test Items
In this test, you will send test messages practically as Pusher connected. You can confirm whether to send the messages on management pages of `pusher.com`.

### Specify Pusher Parameters from Environment Variables
Check Pusher connection with the values of environment variables, `PUSHER_API_ID`, `PUSHER_API_KEY`, `PUSHER_API_SECRET` and `PUSHER_CLUSTER`.

```sh
$ docker run --rm -t --env-file sideci.env quay.io/actcat/exotic-shorthair:master pusher
```

### Check Load Balancer
You can start a web server to check load balancer.

```sh
$ docker run --rm -it -p 3000:3000 quay.io/actcat/exotic-shorthair:master web
```

After start the server, access Sider on your web browser. In this way, you will check whether to have set the load balancer correctly.
