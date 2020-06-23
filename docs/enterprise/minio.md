---
id: minio
title: Minio Guide
sidebar_label: Minio Guide
hide_title: true
---

# Minio Guide

You can get to know hot to set up [Minio](https://min.io/) for Sider Enterprise.

## Requirements

The version of Minio must be [`RELEASE.2019-08-14T20-37-41Z`](https://github.com/minio/minio/releases/tag/RELEASE.2019-08-14T20-37-41Z) or higher. Also, Sider Enterprise largely uploads objects on Minio, so you should prepare enough storage space for Minio. At least, 100 GiB storage would be required.

Before integrating Minio with Sider Enterprise, you first have to create a bucket with the name specified with [`RUNNERS_TRACES_S3_BUCKET_NAME`](./config.md).

## Integration with Sider Enterprise

The parameters within [`DOCKER_RUNNERS_CONFIG`](./config.md) of Sider Enterprise is associated with the Minio server. The relationships are the followings:

- `s3_endpoint` and url - The endpoint of the Minio server
- `aws_access_key_id` and MINIO_ACCESS_KEY - AWS Access Key ID
- `aws_secret_access_key` and MINIO_SECRET_KEY - AWS Secret Access Key

For example, if you run the Minio server on the host `minio.example.com` like this:

```console
export MINIO_ACCESS_KEY=minio
export MINIO_SECRET_KEY=miniosecret
minio server --address :9001 /data
```

`DOCKER_RUNNERS_CONFIG` should form like this:

```json
{
  "s3_endpoint": "http://minio.example.com:9001",
  "aws_access_key_id": "minio",
  "aws_secret_access_key": "miniosecret"
}
```

## Automatically Delete Old Traces

As stated above, objects on Minio will grow and hugely consumes disk space. if you allow the deletion of old traces, you can configure the Minio server to automatically delete old objects. After installing Sider Enterprise and configuring environment variables, run the following command. In this case, objects on Minio older than 180 days will be deleted.

```console
docker run \
  --rm \
  --env-file=ENV_FILE \
  480130971618.dkr.ecr.us-east-1.amazonaws.com/sideci_onprem:TAG \
  bundle exec rails 'onprem:s3:configure_bucket_lifecycle[180]'
```

It's sufficient to execute the above command once. If you want to reconfigure the parameter from `180` days to `90` days, then run the command with `90` again.
