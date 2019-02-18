---
id: storage
title: Sider Enterprise Object Storage Guide
sidebar_label: Object Storage Guide
---

Sider Enterprise requires setting up an _object storage_. The repository manager (`catpost`) uploads your source code archive, and the analysis runner (`setaria`) downloads the archive.

The object storage should support the following operations:

1. Uploading source archives from `catpost`.
2. Generating URLs to download the archives.
3. Downloading the source archives via given URL from `setaria`.

We support Minio and Amazon S3 as the object storage for Sider Enterprise. Minio is recommended because of the complicated configuration of Amazon S3.

* [Minio](https://www.minio.io/)
* [Amazon S3](https://aws.amazon.com/s3/)

## Security

We know the source code of your product is one of the most important things in your company, and we implement two layers of security.

* Access control to the object storage
* Encryption of your source archive

In this guide, we explain how you can implement the access control to the object storage.

In addition to the access control, we encrypt the source archives before uploading them to the object storage. This is another layer for safety which prevents an unauthorized person from accessing your source code even if the access control didn't work.

## Minio Guide

Uploading source archives to Minio is authorized with a pair of keys, _access key_ and _secret key_. Sider Enterprise uses _presigned URLs_ to let `setaria` download the source archives.

It is essential for security to ensure that unauthorized computer cannot access the Minio server. There is no authorization to prevent downloading the archive from presigned URLs.

The presigned URLs expire in three hours after the generation by default.

### Starting and configuring Minio

The standalone single-drive setup of Minio is simple and works fine for Sider Enterprise. Sider Enterprise uses Minio to pass the source code archive from `catpost` to `setaria`. The lifetime required of the uploaded archives is short, and no persistency is needed. 

The easiest setup is to use Docker.

```
$ docker run --rm -p 9000:9000 \
             -e MINIO_ACCESS_KEY=access-key \
             -e MINIO_SECRET_KEY=secret-key \
             minio/minio server /data
```

You can specify _access key_ and _secret key_ through `MINIO_ACCESS_KEY` and `MINIO_SECRET_KEY` environment variables.

### Configuring Sider Enterprise

You need to configure five environment variables of `catpost` to configure Sider Enterprise for Minio.

* `S3_ENDPOINT` URL which points to Minio server. (http://localhost:9000)
* `S3_BUCKET_NAME` Minio bucket name. (sider-bucket)
* `S3_REGION_NAME` Any non-empty string is OK for Minio. (sider-region)
* `AWS_ACCESS_KEY_ID` Access key for the Minio server.
* `AWS_SECRET_ACCESS_KEY` Secret key for the Minio server.

Sider Enterprise automatically creates a bucket on Minio. You can specify any valid bucket name for `S3_BUCKET_NAME`.

We also provide one optional environment variable.

* `S3_PRESIGNED_URL_EXPIRES_IN` Seconds to expire presigned URLs. (the default value is `10800`.)

### Deleting old archives

Sider Enterprise does not delete the source archives, even after analysis finished. Running the servers for a long time will cause an issue by disk-full.

Technically, you can delete the old archives to free your disk spaces. You can do that using `mc` command.

* [mc](https://github.com/minio/mc)

However, configuring `mc` command is not trivial. We recommend just restarting the Minio server periodically and keep your archives non-persistent. You can easily implement this by:

* Running the Minio server as a Docker container.
* Don't use data volume nor any other data persisting method.

When you restart the Minio container, the source archives uploaded to Minio disappear. Note that Docker may not free the storage automatically even when containers disappear depending on the storage driver you are using. For example, if you are using `devicemapper` driver, you need to run `fstrim` to free the storage.

## Amazon S3 Guide

When you are using Amazon AWS to run the infrastructure for Sider Enterprise, you can use Amazon S3 as the object storage.

`catpost` uploads encrypted source archives with _unpredictable random_ names. `setaria` downloads the source archives through their _public URLs_.

Your S3 bucket configuration should allow:

1. Downloading any objects through their public URLs from `setaria`.
2. Any S3 operation (`s3:*`) to any objects in the bucket from `catpost`.

Because `setaria` downloads source archives through their public URLs (1), you should configure the bucket policy and Amazon account carefully. Your Amazon account should not enable _Block Public Access_ option, which is recently added to block unexpected public access to objects in S3.

The _public access_ required for Sider is only from `setaria`. You can configure the bucket policy to restrict unauthorized `s3:GetObject` operation from other than `setaria`. It is strongly recommended to configure the bucket policy to prohibit any other S3 operations.

`catpost` uploads source archives to the specified S3 bucket, and your configuration should allow any operation to any objects in the bucket to `catpost`.

### Configuring `catpost`

You can authorize S3 access from `catpost` by one of the following.

1. Assigning an IAM role to the EC2 instance.
2. Assigning `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` environment variables.

Because we can assume you are running Sider Enterprise in Amazon AWS environment, using an IAM role is recommended.

You also need to configure `catpost` through the following environment variables.

* `S3_REGION_NAME` Name of the region
* `S3_BUCKET_NAME` Name of the bucket

Make sure the bucket specified exists when you run Sider Enterprise.

### Bucket policy example

This is an example of S3 bucket policy.

```
{
    "Version": "2012-10-17",
    "Id": "SiderBucketPolicy",
    "Statement": [
        {
            "Sid": "AllowSetariaDownload",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::sider-bucket/*",
            "Condition": {
                "StringEquals": {
                    "aws:sourceVpce": "vpce-123456"
                }
            }
        }
    ]
}

```

This policy allows `s3:GetObject` operation on any objects in `sider-bucket` if the request is from a VPC endpoint `vpce-123456`. Using this policy, you can allow downloading the source archives from `setaria`, and prohibit any other access from computers outside of the VPC.

### IAM policy example

This is an example of IAM policy for `catpost` instances. Attach the policy to the IAM role for EC2 instances which runs `catpost`.

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Stmt1234567890",
      "Action": "s3:*",
      "Effect": "Allow",
      "Resource": "arn:aws:s3:::sider-bucket/*"
    }
  ]
}
```

This policy allows any S3 operation on any objects in `sider-bucket` from the instance.

