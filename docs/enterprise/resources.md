---
id: resources
title: Computer Resources
sidebar_label: Computer Resources
---

The following is a table of the computer resources required to serve Sider based on the number of developers.

| # of developers | Memory |
|-----------------|--------|
| 0 (for testing) | 8GB    |
| ~50             | 32GB   |
| ~250            | 64GB   |
| ~1000           | 150GB  |

## Estimating Required Resources

The following table explains the number to help estimate the amount of memory you need for each process.

The number of required containers depends on how active the development is.
It varies by the product and the team of course.
As an overall gauge, we use the number of processes of Sider SaaS to estimate them.

The sum of the memory is the required amount of memory.

| Process | Memory/container | Developers/container |
|---|---|---|
| sideci-web | 1GB | 100 |
| sideci-worker | 2GB | 100 |
| catpost-web | 1GB | 100 |
| catpost-worker | 2GB | 25 |
| setaria-web | 1GB | 100 |
| setaria-worker | 2GB | 10 |

Generally *worker* processes are more important for analysis performance.
The most important process is `setaria-worker`.
To improve analysis performance, consider running more `setaria-worker` containers.

## Example

The following table is an example of how many containers you need based on the number of developers.

| Process | 50 developers | 250 developers | 1000 developers |
|--|--|--|--|
| sideci-web | 1 | 2 | 6 |
| sideci-worker | 1 | 3 | 8 |
| catpost-web | 1 | 1 | 2 |
| catpost-worker | 2 | 3 | 8 |
| setaria-web | 1 | 2 | 2 |
| setaria-worker | 10 | 20 | 50 |

