# Quick Start Guides
This guide explains how to setup Sider on an Amazon EC2 instance.
It assumes that you are using the following services:

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

If you setup Sider with a different setup from the above, you would need to check each application's guide and setup Sider in order to meet the requirement.

## Setup and Operational Guide
* [Setup Guide](./setup.md)
* [Update Guide](./update.md)
