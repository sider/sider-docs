---
id: brakeman
title: Brakeman
sidebar_label: Brakeman
hide_title: true
---

# Brakeman

| Supported Version                    | Language   | Website                     |
| ------------------------------------ | ---------- | --------------------------- |
| >= 4.0.0, < 4.4.0 (default to 4.3.1) | Ruby 2.6.5 | https://brakemanscanner.org |

## Configuration via `sider.yml`

Here are some example settings for Brakeman in `sider.yml`, under `brakeman`:

```yaml
linter:
  brakeman:
    gems:
      - name: "brakeman"
        version: "4.3.0"
```

## Options

| Name                                                                | Type                 | Description                         |
| ------------------------------------------------------------------- | -------------------- | ----------------------------------- |
| [`gems`](../../getting-started/custom-configuration.md#gems-option) | `string[]`, `hash[]` | Definition of gems to be installed. |
