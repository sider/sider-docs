# Quick Start Guides
This guide has explained about setting up Sider application on an Amazon EC2 instance.
It has assumed that you are using following services:

* Amazon EC2
  * Run it for Docker containers.
* Elastic Load Balancing(ELB)
  * Use it for TLS termination.
* Amazon ElastiCache
  * Run it for Redis.
* Amazon RDS
  * Run it for MySQL.
* Amazon S3
  * Use it for transferring archived source code within Sider.

If you setup Sider with a different conposition from above, you would need to check each application guide and setup Sider in order to meet the requirement.

## Setup and Operational Guide
* [Setup Guide](./setup.md)
* [Update Guide](./update.md)
