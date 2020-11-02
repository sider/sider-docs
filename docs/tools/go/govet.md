---
id: govet
title: go vet
sidebar_label: go vet (deprecated)
hide_title: true
---

# go vet

> **DEPRECATED**: Sider dropped the support of go vet on **May 31, 2020**. We recommend [GolangCI-Lint](golangci-lint.md) instead.

| Language  | Website                    |
| --------- | -------------------------- |
| Go 1.14.3 | https://golang.org/cmd/vet |

## Getting Started

To start using go vet, enable it in your [repository settings](../../getting-started/repository-settings.md).

## Configuration

Here is a configuration example via [`sider.yml`](../../getting-started/custom-configuration.md):

```yaml
linter:
  go_vet:
    root_dir: src/
```

| Name                                                                                  | Type     | Default |
| ------------------------------------------------------------------------------------- | -------- | ------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir) | `string` | -       |
