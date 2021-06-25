---
id: minio
title: MinIO
sidebar_label: MinIO
hide_title: true
---

# MinIO

You can get to know hot to set up [MinIO](https://min.io/) for Sider Enterprise.

## Requirements

The version of MinIO must be [`RELEASE.2019-08-14T20-37-41Z`](https://github.com/minio/minio/releases/tag/RELEASE.2019-08-14T20-37-41Z) or higher. Also, Sider Enterprise largely uploads objects on MinIO, so you should prepare enough storage space for MinIO. At least, 100 GiB storage would be required.

Before integrating MinIO with Sider Enterprise, you first have to create a bucket with the name specified with [`RUNNERS_TRACES_S3_BUCKET_NAME`](./config.md).

## Integration with Sider Enterprise

The parameters within [`DOCKER_RUNNERS_CONFIG`](./config.md) of Sider Enterprise is associated with the MinIO server. The relationships are the followings:

- `s3_endpoint` and url - The endpoint of the MinIO server
- `aws_access_key_id` and `MINIO_ACCESS_KEY` - AWS Access Key ID
- `aws_secret_access_key` and `MINIO_SECRET_KEY` - AWS Secret Access Key

For example, if you run the MinIO server on the host `minio.example.com` like this:

```sh
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

As stated above, objects on MinIO will grow and hugely consumes disk space. If you allow the deletion of old traces, you can configure the MinIO server to automatically delete old objects. After installing Sider Enterprise and configuring environment variables, run the following command. In this case, objects on MinIO older than 180 days will be deleted.

```sh
docker run \
  --rm \
  --env-file={env_file} \
  docker.sider.review/sideci_onprem:{tag} \
  bundle exec rails onprem:s3:configure_bucket_lifecycle'[180]'
```

It's sufficient to execute the above command once. If you want to reconfigure the parameter from `180` days to `90` days, then run the command with `90` again.
