---
id: amazon-s3
title: Amazon S3
sidebar_label: Amazon S3
hide_title: true
---

# Amazon S3

This describes how to set up Amazon S3 for Sider Enterprise. If you provision Sider Enterprise on AWS, you can use [Amazon S3](https://aws.amazon.com/s3/) instead of Minio.

## Requirements

Sider Enterprise services must have `s3:GetObject` and `s3:PutObject` permissions to the bucket specified with [`RUNNERS_TRACES_S3_BUCKET_NAME`](./config.md).

## Integration with Sider Enterprise

The parameters within [`DOCKER_RUNNERS_CONFIG`](./config.md) of Sider Enterprise is associated with Amazon S3.

- `s3_endpoint` **MUST** be `null` or excluded from the JSON
- `aws_access_key_id` can be `null` or excluded if you use AWS IAM Roles for the services
- `aws_secret_access_key` can be `null` or excluded if you use AWS IAM Roles for the services

Also, [`AWS_REGION_FOR_SIDER`](./config.md) must be set with your Amazon S3 region.
