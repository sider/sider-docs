---
id: phinder
title: Phinder
sidebar_label: Phinder
---

| Supported Version | Language | Web Site |
| ----------------- | -------- | -------- |
| 0.6.1 | PHP 7.3.0 | [https://github.com/sider/phinder](https://github.com/sider/phinder) |

## Getting Started

To start using Phinder, enable it in [Repository Settings](../../getting-started/repository-settings.md) and put a `phinder.yml` config file in your repository. Visit the project page on GitHub to see a sample `phinder.yml`:

* [Phinder sample](https://github.com/tomokinakamaru/phinder/tree/master/sample)

## Sample Configuration

Here's a sample Phinder configuration in `sideci.yml`:

```yaml:sideci.yml
linter:
  phinder:
    rule: myphinder.yml
    php: src
```

## Options

| Name | Type | Description |
| ---- | ---- | ----------- |
| [`rule`](#rule) | `string` | Specify your configuration file or directory name for Phinder. |
| [`php`](#php) | `string` | Specify file name or directory name to analyze. |

### `rule`

This option allows you to specify file or directory name where your Phinder ruleset is located.
If you set file name, Phinder will use the file for analysis instead of `phinder.yml`. If this is a directory name, Phinder will analyze your project with all `yml` files under the directory.

```yaml:sideci.yml
linter:
  phinder:
    rule: rules # Phinder will use './rules/*.yml' when analyzing.
```

### `php`

This option allows you to specify the path of your project to analyze. If this is a file name, Phinder will analyze merely the file. If it's a directory, Phinder will analyze all `.php` files under the directory.

```yaml:sideci.yml
linter:
  phinder:
    php: src # Phinder will analyze '.php' files in '/src' directory.
 ```
