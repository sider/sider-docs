---
id: brakeman
title: Brakeman
sidebar_label: Brakeman
hide_title: true
---

# Brakeman

| Version Constraints | Language | Web Site |
| ----------------- | -------- | -------- |
| >= 4.0.0, < 4.4.0 (default to 4.3.1) | Ruby 2.5.1 | [https://brakemanscanner.org/](https://brakemanscanner.org/) |

## Configuration via `sider.yml`

Here are some example settings for Brakeman in `sider.yml`, under `brakeman`:

```yaml
linter:
  querly:
    gems:
      - name: "brakeman"
      - version: "4.3.0"
```

## Options

| Name | Type | Description |
| ---- | ---- | ----------- |
| [`root_dir`](../../getting-started/custom-configuration.md#root_dir-option) | `string` | Directory in which the analyzer runs. |
| [`gems`](../../getting-started/custom-configuration.md#gems-option) | `array<string, object>` | Definition of gems to be installed. |
