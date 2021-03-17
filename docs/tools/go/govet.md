---
id: govet
title: go vet
sidebar_label: go vet (removed)
hide_title: true
---

# go vet

> **REMOVED**: Sider has removed the support of go vet on **May 31, 2020**. Please use [GolangCI-Lint](golangci-lint.md) instead.

| Language | Website                    |
| -------- | -------------------------- |
| Go       | https://golang.org/cmd/vet |

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
