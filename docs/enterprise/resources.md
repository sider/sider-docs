---
id: resources
title: Computer Resources
sidebar_label: Computer Resources
hide_title: true
---

# Computer Resources

The following is a table of the computer resources required to serve Sider based on the number of developers and analyses.

| # of developers | # of Analyses/day | Memory |
| --------------- | ----------------- | ------ |
| 0 (for testing) | -                 | 8GB    |
| ~50             | ~100              | 32GB   |
| ~250            | ~500              | 64GB   |
| ~1,000          | ~2,000            | 150GB  |

The number of analyses are based on the usage on our SaaS version.
Sider starts analysis when new commits are pushed to the GitHub pull request.
It is clear that the estimation is rough, and you should try with your own workload to make your estimation more accurate.

If many analyses are simultaneously invoked by `sideci`, the required memory would be extremely enormous.

## Estimating Required Resources

The following table explains the number to help estimate the amount of memory you need for each process.

The number of required containers depends on how active the development is.
It varies by the product and the team of course.
As an overall gauge, we use the number of processes of Sider SaaS to estimate them.

The sum of the memory is the required amount of memory.

| Process        | Memory/container | Developers/container |
| -------------- | ---------------- | -------------------- |
| sideci-web     | 1GB              | 100                  |
| sideci-worker  | 2GB              | 100                  |
| catpost-web    | 1GB              | 100                  |
| catpost-worker | 2GB              | 25                   |

## Example

The following table is an example of how many containers you need based on the number of developers.

| Process        | 50 developers | 250 developers | 1000 developers |
| -------------- | ------------- | -------------- | --------------- |
| sideci-web     | 1             | 2              | 6               |
| sideci-worker  | 1             | 3              | 8               |
| catpost-web    | 1             | 1              | 2               |
| catpost-worker | 2             | 3              | 8               |
