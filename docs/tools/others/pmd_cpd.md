---
id: pmd_cpd
title: PMD CPD
sidebar_label: PMD CPD
hide_title: true
---

# PMD CPD

| Supported Version | Language    | Website               |
| ----------------- | ----------- | --------------------- |
| TBD               | TBD         | https://pmd.github.io |

**PMD CPD** is TBD

## Getting Started

To start using PMD CPD, enable it in your [repository settings](../../getting-started/repository-settings.md).

## Configuration

You can customize the analysis via `sider.yml`:

```yaml
linter:
  pmd_cpd:
    TBD: TBD
```

| Name                                                                                  | Type                 | Default         |
| ------------------------------------------------------------------------------------- | -------------------- | --------------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir) | `string`             | -               |
| [`encoding`](#encoding)                                                               | `string`             | (PMD's default) |

### `encoding`

This option allows you to specify an encoding of your source code.
