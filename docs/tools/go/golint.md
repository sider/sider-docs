---
id: golint
title: Golint
sidebar_label: Golint (removed)
hide_title: true
---

# Golint

> **REMOVED**: Sider has removed the support of Golint on **May 31, 2020**. Please use [GolangCI-Lint](golangci-lint.md) instead.

| Language | Website                        |
| -------- | ------------------------------ |
| Go       | https://github.com/golang/lint |

## Getting Started

To start using Golint, enable it in your [repository settings](../../getting-started/repository-settings.md).

## Configuration

Here is a configuration example via [`sider.yml`](../../getting-started/custom-configuration.md):

```yaml
linter:
  golint:
    root_dir: src/
```

| Name                                                                                  | Type     | Default |
| ------------------------------------------------------------------------------------- | -------- | ------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir) | `string` | -       |
