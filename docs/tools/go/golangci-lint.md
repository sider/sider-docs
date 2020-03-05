---
id: golangci-lint
title: GolangCI-Lint
sidebar_label: GolangCI-Lint (beta)
hide_title: true
---

# GolangCI-Lint

> This is **BETA**. The behavior of this tool might change.

| Supported Version | Language  | Website                                   |
| ----------------- | --------- | ----------------------------------------- |
| 1.23.6            | Go 1.13.7 | https://github.com/golangci/golangci-lint |

**GolangCI-Lint** is a linter to aggregate multiple linters and a successor to [Go Meta Linter](gometalinter.md) which is deprecated.

## Getting Started

To start using GolangCI-Lint, enable it in your [repository settings](../../getting-started/repository-settings.md).

## Default Configuration

In addition to [enabled by default linters](https://github.com/golangci/golangci-lint#enabled-by-default-linters), Sider enables some useful linters.
See the [default configuration file](https://github.com/sider/runners/blob/master/images/golangci_lint/sider_golangci.yml) for details.

## Configuration

Here is a configuration example via [`sider.yml`](../../getting-started/custom-configuration.md):

```yaml
linter:
  golangci_lint:
    target: dir/...
    config: golangci.yml
    disable:
      - govet
      - unused
    disable-all: false
    enable:
      - golint
      - gosec
    fast: true
    no-config: false
    presets: complexity
    skip-dirs:
      - src/external_libs
    skip-dirs-use-default: true
    skip-files:
      - ".*\\.my\\.go$"
      - lib/bad.go
    tests: false
    uniq-by-line: true
```

You can use the following options to fine-tune GolangCI-Lint to your project.

| Name                                                                        | Type                 | Default | Description                                        |
| --------------------------------------------------------------------------- | -------------------- | ------- | -------------------------------------------------- |
| [`root_dir`](../../getting-started/custom-configuration.md#root_dir-option) | `string`             | -       | A root directory.                                  |
| [`target`](#target)                                                         | `string`, `string[]` | `./...` | Paths to analyze.                                  |
| [`config`](#config)                                                         | `string`             | -       | File paths for config file.                        |
| [`disable`](#disable)                                                       | `string`, `string[]` | -       | `--disable` option of GolangCI-Lint.               |
| [`disable-all`](#disable-all)                                               | `boolean`            | `false` | `--disable-all` option of GolangCI-Lint.           |
| [`enable`](#enable)                                                         | `string`             | -       | `--enable` option of GolangCI-Lint.                |
| [`fast`](#fast)                                                             | `string`, `string[]` | -       | `--fast` option of GolangCI-Lint.                  |
| [`no-config`](#no-config)                                                   | `boolean`            | `false` | `--no-config` option of GolangCI-Lint.             |
| [`presets`](#presets)                                                       | `string`, `string[]` | -       | `--presets` option of GolangCI-Lint.               |
| [`skip-dirs`](#skip-dirs)                                                   | `string`, `string[]` | -       | `--skip-dirs` option of GolangCI-Lint.             |
| [`skip-dirs-use-default`](#skip-dirs-use-default)                           | `boolean`            | `true`  | `--skip-dirs-use-default` option of GolangCI-Lint. |
| [`skip-files`](#skip-files)                                                 | `string` ,`string[]` | -       | `--skip-files` option of GolangCI-Lint.            |
| [`tests`](#tests)                                                           | `boolean`            | `true`  | `--tests` option of GolangCI-Lint.                 |
| [`uniq-by-line`](#uniq-by-line)                                             | `boolean`            | `true`  | `--uniq-by-line` option of GolangCI-Lint.          |

### `target`

This option allows you to specify files or directories to analyze. If you specify some targets, configure as follow:

```Yaml
linter:
  golangci_lint:
    target:
      - "dir1"
      - "dir2/..."
```

### `config`

This option allows you to control a configuration file. If you have settings file for GolangCI-Lint, put the path of that in this option.

### `disable`

This option allows you to disable defaultly enabled linters. Set linters as a list in this option.

### `disable-all`

This option allows you to decide whether to disable all linters. This option cannot be used with `disable` option.

### `enable`

This option allows you to enable linters which are not defaultly enabled. Set linters as a list in this option.
To specify `disable` and `enable` to the same linter is prohibited.

### `fast`

This option allows you to manage whether to run only fast linters. If you declare `true` in this option, the faster linters will run. (see the official document about fast linters)

### `no-config`

This option allows you not to read config file.

### `presets`

This option allows you to enable presets (bugs|complexity|format|performance|style|unused) of linters. This option implies option `--disable-all`

### `skip-dirs`

This option allows you to specify the directories to skip.

### `skip-dirs-use-default`

This option allows you to use or not use default excluded directories.

### `skip-files`

This option allows you to specify the files to skip.

### `tests`

This option allows you to decide whether to analyze test files. If you would like to include test files, set `true` in this option.

### `uniq-by-line`

This option allows you to show multiple linters per line. If you would like to show multiple linters per line, set `false` in this option.
