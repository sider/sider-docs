---
id: reek
title: Reek
sidebar_label: Reek
hide_title: true
---

# Reek

| Supported Version         | Language   | Website                           |
| ------------------------- | ---------- | --------------------------------- |
| 4.4.0+ (default to 5.6.0) | Ruby 2.6.5 | https://github.com/troessner/reek |

**Reek** is a tool to detect any "Code Smells" in Ruby classes, modules and methods.
See the [document](https://github.com/troessner/reek#readme) for more details.

## Configuration via `sider.yml`

Here is an example configuration for Reek via `sider.yml`:

```yaml
linter:
  reek:
    gems:
      - name: "reek"
        version: "5.2.0"
    target:
      - lib/
      - test/
    config: config/.reek.yml
```

You can use the following options to make analysis fitter for your project.

| Name                                                                        | Type                 | Default | Description                      |
| --------------------------------------------------------------------------- | -------------------- | ------- | -------------------------------- |
| [`root_dir`](../../getting-started/custom-configuration.md#root_dir-option) | `string`             | -       | A root directory.                |
| [`gems`](../../getting-started/custom-configuration.md#gems-option)         | `string[]`, `hash[]` | -       | Gems to install.                 |
| [`target`](#target)                                                         | `string`, `string[]` | `.`     | Files or directories to analyze. |
| [`config`](#config)                                                         | `string`             | -       | `--config` option of Reek.       |

### `target`

This option allows you to specify files or directories to analyze.

### `config`

This option allows you to specify your configuration file.
If omitted, Reek tries to automatically find a configuration file in your repository.

## Default Configuration

When there are no configuration files in your repository, Sider uses the following configuration by default:

- [For the Reek v4](https://github.com/sider/runners/blob/master/images/reek/v4.reek.yml)
- [For the Reek v5](https://github.com/sider/runners/blob/master/images/reek/v5.reek.yml)
