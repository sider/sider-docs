---
id: phinder
title: Phinder
sidebar_label: Phinder
hide_title: true
---

# Phinder

| Supported Version | Language   | Website                          |
| ----------------- | ---------- | -------------------------------- |
| 0.9.2             | PHP 7.3.10 | https://github.com/sider/phinder |

## Getting Started

To start using Phinder, enable it in [Repository Settings](../../getting-started/repository-settings.md) and put a `phinder.yml` config file in your repository.
Visit the project page on GitHub to see a [sample `phinder.yml`](https://github.com/sider/phinder/blob/master/sample/phinder.yml):

<div class="Video">
  <iframe class="Video__iframe" src="https://www.youtube.com/embed/ErHtinxR3ns" frameborder="0" allowfullscreen></iframe>
</div>

## Configuration

Here's a sample Phinder configuration in `sider.yml`:

```yaml
linter:
  phinder:
    rule: config/phinder.yml
    php: src
```

| Name            | Type     | Description                                                    |
| --------------- | -------- | -------------------------------------------------------------- |
| [`rule`](#rule) | `string` | Specify your configuration file or directory name for Phinder. |
| [`php`](#php)   | `string` | Specify file name or directory name to analyze.                |

### `rule`

This option allows you to specify file or directory name where your Phinder ruleset is located.
If you set file name, Phinder will use the file for analysis instead of `phinder.yml`. If this is a directory name, Phinder will analyze your project with all `yml` files under the directory.

```yaml
linter:
  phinder:
    rule: rules # Phinder will use './rules/*.yml' when analyzing.
```

### `php`

This option allows you to specify the path of your project to analyze. If this is a file name, Phinder will analyze merely the file. If it's a directory, Phinder will analyze all `.php` files under the directory.

```yaml
linter:
  phinder:
    php: src # Phinder will analyze '.php' files in '/src' directory.
```
