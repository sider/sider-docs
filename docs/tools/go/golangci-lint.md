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
| 1.24.0            | Go 1.14.1 | https://github.com/golangci/golangci-lint |

**GolangCI-Lint** is a linter to aggregate multiple linters and a successor to [Go Meta Linter](gometalinter.md) which is deprecated.

## Getting Started

To start using GolangCI-Lint, enable it in your [repository settings](../../getting-started/repository-settings.md).

## Default Configuration

In addition to [enabled by default linters](https://github.com/golangci/golangci-lint#enabled-by-default-linters), Sider enables some useful linters.
See the [default configuration file](https://github.com/sider/runners/blob/master/images/golangci_lint/sider_golangci.yml) for details.

### Migration from Govet and Golint

Sider has deprecated [Govet](./govet.md) and [Golint](./golint.md) and instead recommended GolangCI-Lint.
If you want to continue using them, all you have to do is enable GolangCI-Lint. They are enabled by default.

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

| Name                                                                        | Type                 | Default |
| --------------------------------------------------------------------------- | -------------------- | ------- |
| [`root_dir`](../../getting-started/custom-configuration.md#root_dir-option) | `string`             | -       |
| [`target`](#target)                                                         | `string`, `string[]` | `./...` |
| [`config`](#config)                                                         | `string`             | -       |
| [`no-config`](#no-config)                                                   | `boolean`            | `false` |
| [`disable`](#disable)                                                       | `string`, `string[]` | -       |
| [`disable-all`](#disable-all)                                               | `boolean`            | `false` |
| [`enable`](#enable)                                                         | `string`             | -       |
| [`fast`](#fast)                                                             | `string`, `string[]` | -       |
| [`presets`](#presets)                                                       | `string`, `string[]` | -       |
| [`skip-dirs`](#skip-dirs)                                                   | `string`, `string[]` | -       |
| [`skip-dirs-use-default`](#skip-dirs-use-default)                           | `boolean`            | `true`  |
| [`skip-files`](#skip-files)                                                 | `string`, `string[]` | -       |
| [`tests`](#tests)                                                           | `boolean`            | `true`  |
| [`uniq-by-line`](#uniq-by-line)                                             | `boolean`            | `true`  |

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
See also the [`--config`](https://github.com/golangci/golangci-lint#command-line-options) option.

### `no-config`

This option allows you not to read config file.
See also the [`--no-config`](https://github.com/golangci/golangci-lint#command-line-options) option.

### `disable`

This option allows you to disable defaultly enabled linters. Set linters as a list in this option.
See also the [`--disable`](https://github.com/golangci/golangci-lint#command-line-options) option.

### `disable-all`

This option allows you to decide whether to disable all linters.
Note that the option cannot be used with the [`disable`](#disable) option.
See also the [`--disable-all`](https://github.com/golangci/golangci-lint#command-line-options) option.

### `enable`

This option allows you to enable linters which are not defaultly enabled. Set linters as a list in this option.
To specify `disable` and `enable` to the same linter is prohibited.
See also the [`--enable`](https://github.com/golangci/golangci-lint#command-line-options) option.

### `fast`

This option allows you to manage whether to run only [fast linters](https://github.com/golangci/golangci-lint#quick-start).
See also the [`--fast`](https://github.com/golangci/golangci-lint#command-line-options) option.

### `presets`

This option allows you to enable presets of linters.
See also the [`--presets`](https://github.com/golangci/golangci-lint#command-line-options) option.

### `skip-dirs`

This option allows you to specify the directories to skip.
See also the [`--skip-dirs`](https://github.com/golangci/golangci-lint#command-line-options) option.

### `skip-dirs-use-default`

This option allows you to use or not use default excluded directories.
See also the [`--skip-dirs-use-default`](https://github.com/golangci/golangci-lint#command-line-options) option.

### `skip-files`

This option allows you to specify the files to skip.
See also the [`--skip-files`](https://github.com/golangci/golangci-lint#command-line-options) option.

### `tests`

This option allows you to decide whether to analyze test files. If you would like to include test files, set `true` in this option.
See also the [`--tests`](https://github.com/golangci/golangci-lint#command-line-options) option.

### `uniq-by-line`

This option allows you to show multiple linters per line. If you would like to show multiple linters per line, set `false` in this option.
See also the [`--uniq-by-line`](https://github.com/golangci/golangci-lint#command-line-options) option.
