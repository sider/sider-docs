---
id: golint
title: Golint
sidebar_label: Golint (deprecated)
hide_title: true
---

# Golint

> **DEPRECATED**: Sider dropped the support of Golint on **May 31, 2020**. We recommend [GolangCI-Lint](golangci-lint.md) instead.

| Language  | Website                        |
| --------- | ------------------------------ |
| Go 1.15.2 | https://github.com/golang/lint |

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
