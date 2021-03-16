---
id: code-sniffer
title: PHP_CodeSniffer
sidebar_label: PHP_CodeSniffer
hide_title: true
---

# PHP_CodeSniffer

| Supported Version | Language | Website                                      |
| ----------------- | -------- | -------------------------------------------- |
| 3.5.8             | PHP      | https://pear.php.net/package/PHP_CodeSniffer |

**PHP_CodeSniffer** is a style checker to enforce a defined set of PHP coding standards.

## Getting Started

To start using PHP_CodeSniffer, enable it in your [repository settings](../../getting-started/repository-settings.md).
To configure the coding standard you want to follow, add `sider.yml` in your repository and set the `standard` option:

```yaml
linter:
  code_sniffer:
    dir: app/
    standard: CakePHP
```

## Default Configuration

If you don't specify anything, Sider tries to detect the standard and target directory for your project automatically.
If it cannot find an appropriate standard, Sider analyzes all PHP files in your repository using our [recommended ruleset](https://github.com/sider/runners/blob/HEAD/images/code_sniffer/sider_recommended_code_sniffer.xml).
For more details, please visit [Recommended Ruleset](../../getting-started/recommended-rules.md).

### Standard and Analysis Target

Sider tries to detect the most suitable standard and target directory for your project,
based on the framework your project is using.

The following standards are detected automatically:

- `CakePHP`
- `Symfony`

The auto-detection is based on file names and directory structure in your repository.
If this auto-detection fails, you can specify a standard in `sider.yml`.

## Configuration

An example setting for PHP_CodeSniffer under `code_sniffer` in `sider.yml`:

```yaml
linter:
  code_sniffer:
    target: [app/, test/]
    standard: [phpcs.xml, PSR2]
    extensions: [php, inc, lib]
    encoding: utf-8
    ignore:
      - app/vendor
      - test/ignored.php
    parallel: true
```

You can use several options to fine-tune PHP_CodeSniffer to your project:

| Name                                                                                  | Type                 | Default       |
| ------------------------------------------------------------------------------------- | -------------------- | ------------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir) | `string`             | -             |
| [`target`](#target)                                                                   | `string`, `string[]` | `.`           |
| [`standard`](#standard)                                                               | `string`, `string[]` | _(see below)_ |
| [`extensions`](#extensions)                                                           | `string`, `string[]` | `php`         |
| [`encoding`](#encoding)                                                               | `string`             | -             |
| [`ignore`](#ignore)                                                                   | `string`, `string[]` | `[]`          |
| [`parallel`](#parallel)                                                               | `boolean`            | `false`       |

### `target`

This option allows you to specify paths to be analyzed. The default value is dependent on the frameworks PHP_CodeSniffer supports.
If you are not using any frameworks or are using a framework PHP_CodeSniffer does not support, `.` is used.

alias: `dir`

### `standard`

This option allows you to specify a coding standard of your project. If you leave this value empty, Sider tries to detect the standard automatically.
If this auto-detection fails, our [recommended ruleset](#default-configuration) will be used.

You can use the following third-party standards in addition to the standards which PHP_CodeSniffer supports natively:

- [Symfony](https://github.com/djoos/Symfony-coding-standard)
- [CakePHP](https://github.com/cakephp/cakephp-codesniffer)
- [WordPress](https://github.com/WordPress/WordPress-Coding-Standards)

If you want to see the actual standard lists, run the command [`phpcs -i`](https://github.com/squizlabs/PHP_CodeSniffer/wiki/Usage#printing-a-list-of-installed-coding-standards).
The following output is a standard list that we prepare.

```console
$ phpcs -i
The installed coding standards are Zend, PSR12, MySource, Squiz, PSR2, PSR1, PEAR, CakePHP, Symfony, WordPress, WordPress-Extra, WordPress-Docs and WordPress-Core
```

You can also specify your own standard file path: e.g. `standard: your-own-standard.xml`.

### `extensions`

This option allows you to specify a list of file extensions to be analyzed.

### `encoding`

This option allows you to specify an encoding of files to analyze.

### `ignore`

This option allows you to specify a list of path patterns to be ignored.

### `parallel`

This option allows you to control if an analysis runs in parallel mode.
