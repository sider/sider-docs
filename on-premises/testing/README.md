# Testing for Sider running

Sider has equipped tools to check connections with services needed to run.

```
$ docker pull quay.io/actcat/exotic-shorthair:master
```

## Connection with MySQL
You can check connection and configuration by specifying `DATABASE_URL`.

```
$ docker run --rm -t quay.io/actcat/exotic-shorthair:master mysql [DATABASE_URL]
```

### Check Items
`mysql` command checks:

* whether there is a connection with MySQL.
* whether the MySQL version is higher than `5.7`.
* whether there is a large enough size reserved for `max_allowed_packet`.

### Specify URL on Command Line
Specify database from the command line when you are setting database server.

```
$ docker run --rm -t quay.io/actcat/exotic-shorthair:master mysql mysql2://root:password@host.name.com:3000/foo?sslca=config/rds-combined-ca-bundle.pem
```

### Specify URL from the Environment Variable
Check connection with the value of environment variable, `DATABSE_URL`, if you don't specify the URL from the command line. When you have the `.env` files for Sider, it's better to check connections this way.

```
$ docker run --rm -t --env-file sideci.env quay.io/actcat/exotic-shorthair:master mysql
```

### Certificates
For simplification, Sider has bundled the certificate for AWS RDS as `config/rds-combined-ca-bundle.pem` in Docker images. If you need other certificates, use the Volume feature when running Docker containers.

## Connection with Redis
You can check the connection by specifying `REDIS_URL`.

```
$ docker run --rm -t quay.io/actcat/exotic-shorthair:master redis [REDIS_URL]
```

### Specify the URL on the Command Line
Specify the database on the command line when you are setting up the Redis server.

```
$ docker run --rm -t quay.io/actcat/exotic-shorthair:master redis redis://some_host:3000/1
```

### Specify the URL from Environment Variable
Check connection with the value of environment variable, `DATABSE_URL`, if you don't specify a URL on the command line. When you have `.env` files for Sider, it will be better for you to check connection in this way.

```
$ docker run --rm -t --env-file sideci.env quay.io/actcat/exotic-shorthair:master redis
```

## Check Email Sending
You can send test emails.

```
$ docker run --rm -t --env-file [ENV_FILE] quay.io/actcat/exotic-shorthair:master mailer [TO ADDRESS]
```

SMTP settings refers to each environment variable specified by Sider.

## S3 Testing
You can check access to S3 Buckets for Catpost and Setaria.

```
$ docker run --rm -t quay.io/actcat/exotic-shorthair:master s3 [REGION] [BUCKET]
```

### Check Items
`s3` command checks:

* whether objects are correctly uploaded to Bucket (for Catpost).
* whether the objects uploaded to Bucket are confirmed (for Catpost).
* whether to download the objects from Bucket via HTTP (for Setaria).

In this testing process, objects are uploaded but aren't deleted, hence you have to delete them according to your necessity. And, the objects will be uploaded into `/test` on Bucket. Objects' names will be random characters.

### Specify Region and Bucket on the Command Line
Specify the Region and Bucket on the command line when you are setting S3.

```
$ docker run --rm -t quay.io/actcat/exotic-shorthair:master s3 us-east-1 sider-bucket
```

### Specify Region and Bucket from Environment Variable
Check S3 with the values of environment variables, `S3_BUCKET_NAME` and `S3_REGION_NAME`, if you don't specify them on the command line. When you have a `.env` file for Catpost, you can perform checks with the file.

```
$ docker run --rm -t --env-file catpost.env quay.io/actcat/exotic-shorthair:master s3
```

## Check Pusher
You can check the Pusher connection.

```
$ docker run --rm -t quay.io/actcat/exotic-shorthair:master pusher [API_ID] [KEY] [SECRET] [CLUSTER]
```

### Test Items
In this test, you will send test messages practically as Pusher connected. You can confirm whether messages were sent by using the administration console on `pusher.com`.

### Specify Pusher Parameters from Environment Variables
Check the Pusher connection with the values of environment variables, `PUSHER_API_ID`, `PUSHER_API_KEY`, `PUSHER_API_SECRET` and `PUSHER_CLUSTER`.

```
$ docker run --rm -t --env-file sideci.env quay.io/actcat/exotic-shorthair:master pusher
```

## Check Load Balancer
You can start a web server to check the load balancer.

```
$ docker run --rm -it -p 3000:3000 quay.io/actcat/exotic-shorthair:master web
```

After starting the server, access Sider on your web browser. This way you can check whether the load balancer was set correctly.
