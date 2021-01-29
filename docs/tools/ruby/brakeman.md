---
id: brakeman
title: Brakeman
sidebar_label: Brakeman
hide_title: true
---

# Brakeman

| Supported Version        | Language | Website                     |
| ------------------------ | -------- | --------------------------- |
| 4.0.0+ (default: 4.10.0) | Ruby     | https://brakemanscanner.org |

**Brakeman** is a static analysis tool to detect security issues in Ruby on Rails applications.

## Getting Started

To start using Brakeman, enable it in your [repository settings](../../getting-started/repository-settings.md).

## Configuration

Here is an example configuration via `sider.yml`:

```yaml
linter:
  brakeman:
    gems:
      - name: "brakeman"
        version: "4.3.0"
```

| Name                                                                                  | Type                 | Default |
| ------------------------------------------------------------------------------------- | -------------------- | ------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir) | `string`             | -       |
| [`gems`](../../getting-started/custom-configuration.md#linteranalyzer_idgems)         | `string[]`, `hash[]` | -       |

No analyzer-specific options.
