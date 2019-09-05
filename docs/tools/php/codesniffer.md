---
id: codesniffer
title: PHP_CodeSniffer
sidebar_label: PHP_CodeSniffer
hide_title: true
---

# PHP_CodeSniffer

| Supported Version | Language | Website |
| ----------------- | -------- | -------- |
| 3.4.2 | PHP 7.3.8 | [https://pear.php.net/package/PHP\_CodeSniffer](https://pear.php.net/package/PHP_CodeSniffer) |

## Getting Started

To start using PHP\_CodeSniffer, enable it in [Repository Settings](../../getting-started/repository-settings.md). To configure the coding standard you want to follow, add `sider.yml` in your repository and set the `standard` option:

```yaml
linter:
  code_sniffer:
    dir: app/
    options:
      standard: CakePHP
```

## Default Configuration

If you don't specify anything, Sider tries to detect the standard and target directory for your project automatically. If it cannot find an appropriate standard, it assumes PSR2 as its standard and analyzes all PHP files in your repository.

### Standard and Analysis Target

Sider tries to detect the most suitable standard and target directory for your project, based on the framework your project is using.

The following standards are detected automatically:

* `CakePHP`
* `Symfony`

Autodetection is based on file names and directory structure. If autodetection fails, you can specify a standard in `sider.yml`.

## Configuration via `sider.yml`

Example setting for PHP\_CodeSniffer under `code_sniffer`:

```yaml
linter:
  code_sniffer:
    dir: app/
    standard: phpcs.xml
    extensions: php,inc,lib
    encoding: utf-8
    ignore: app/Vendor
```

### Options

You can use several options to fine-tune PHP\_CodeSniffer to your project:

| Name | Type | Description |
| ---- | ---- | ----------- |
| [`version`](#version) | `string`,<br />`integer` | Declare PHP\_CodeSniffer version explicitly. |
| [`dir`](#dir) | `string` | Set targets to analyze. |
| [`standard`](#standard) | `string` | Set coding standard or your config file when analyzing. |
| [`extensions`](#extensions) | `string` | Set extensions to analyze. |
| [`encoding`](#encoding) | `string` | Set file encoding. |
| [`ignore`](#ignore) | `string` | Excludes files or directories from analysis. |

#### `version`

This option controls which major version of PHP\_CodeSniffer is used. The default value is `3`.
Sider has stopped supporting v2 of PHP\_CodeSniffer. Therfore, if you set `2` in this option, Sider will execute v3.

#### `dir`

This option controls directories Sider inspects. The default value is dependent on the frameworks PHP\_CodeSniffer supports. If you are not using any frameworks or are using a framework PHP\_CodeSniffer does not support, `./` is used.

If you would like to exclude specific directories, you can specify them in a custom ruleset file.

#### `standard`

This option controls coding standard of your project. If you leave this value empty, Sider tries to detect the standard automatically.

`PSR2` is used when auto detection fails.

You can use any standards the PHP\_CodeSniffer supports:

```bash
$ phpcs3 -i
The installed coding standards are MySource, PEAR, PSR1, PSR2, Squiz, Zend, Symfony, CakePHP, WordPress-Docs, WordPress-Core, WordPress, WordPress-Extra and WordPress-VIP
```

You can also define your own standard, and enter the path to the config file here.

#### `extensions`

This option controls extensions of files Sider inspects. The default value is `php`.

#### `encoding`

This option controls file encoding.

#### `ignore`

A comma-separated list of patterns to ignore files and directories by.
