---
id: golangci-lint
title: GolangCI-Lint
sidebar_label: GolangCI-Lint
hide_title: true
---

# GolangCI-Lint

| Supported Version | Language  | Website                   |
| ----------------- | --------- | ------------------------- |
| 1.31.0            | Go 1.15.2 | https://golangci-lint.run |

**GolangCI-Lint** is a linter to aggregate multiple linters and a successor to [Go Meta Linter](gometalinter.md) which is deprecated.

## Getting Started

To start using GolangCI-Lint, enable it in your [repository settings](../../getting-started/repository-settings.md).

If you want to customize it, put a [configuration file](https://golangci-lint.run/usage/configuration/#config-file) (e.g. `.golangci.yml`) in your repository.

## Default Configuration for GolangCI-Lint

In addition to [enabled by default linters](https://golangci-lint.run/usage/linters/#enabled-by-default-linters), Sider enables some useful linters
if you have no configuration file like `.golangci.yml`.
See the [default configuration file](https://github.com/sider/runners/blob/master/images/golangci_lint/sider_golangci.yml) for details.

### Migration from Govet and Golint

Sider has deprecated [Govet](./govet.md) and [Golint](./golint.md) and instead recommended GolangCI-Lint.
If you want to continue using them, all you have to do is enable GolangCI-Lint. They are enabled by default.

If you want to run only Govet or Golint as before, edit your configuration file as follows:

```yaml
# .golangci.yml
linters:
  disable-all: true
  enable:
    - govet # or golint
```

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

| Name                                                                                  | Type                 | Default |
| ------------------------------------------------------------------------------------- | -------------------- | ------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir) | `string`             | -       |
| [`target`](#target)                                                                   | `string`, `string[]` | `./...` |
| [`config`](#config)                                                                   | `string`             | -       |
| [`no-config`](#no-config)                                                             | `boolean`            | `false` |
| [`disable`](#disable)                                                                 | `string`, `string[]` | -       |
| [`disable-all`](#disable-all)                                                         | `boolean`            | `false` |
| [`enable`](#enable)                                                                   | `string`             | -       |
| [`fast`](#fast)                                                                       | `string`, `string[]` | -       |
| [`presets`](#presets)                                                                 | `string`, `string[]` | -       |
| [`skip-dirs`](#skip-dirs)                                                             | `string`, `string[]` | -       |
| [`skip-dirs-use-default`](#skip-dirs-use-default)                                     | `boolean`            | `true`  |
| [`skip-files`](#skip-files)                                                           | `string`, `string[]` | -       |
| [`tests`](#tests)                                                                     | `boolean`            | `true`  |
| [`uniq-by-line`](#uniq-by-line)                                                       | `boolean`            | `true`  |

See also the [official document](https://golangci-lint.run/usage/configuration/#command-line-options) about the command-line options.

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

### `no-config`

This option allows you not to read config file.

### `disable`

This option allows you to disable defaultly enabled linters. Set linters as a list in this option.

### `disable-all`

This option allows you to decide whether to disable all linters.
Note that the option cannot be used with the [`disable`](#disable) option.

### `enable`

This option allows you to enable linters which are not defaultly enabled. Set linters as a list in this option.
To specify `disable` and `enable` to the same linter is prohibited.

### `fast`

This option allows you to select whether to run only the fast linters.

### `presets`

This option allows you to enable presets of the linters.

### `skip-dirs`

This option allows you to specify the directories to skip.

### `skip-dirs-use-default`

This option allows you to use or not use default excluded directories.

### `skip-files`

This option allows you to specify the files to skip.

### `tests`

This option allows you to select whether to analyze test files. If you would like to include test files, set `true` in this option.

### `uniq-by-line`

This option allows you to show multiple linters per line. If you would like to show multiple linters per line, set `false` in this option.
