---
id: GolangCI-Lint
title: GolangCI-Lint
sidebar_label: GolangCI-Lint
hide_title: true
---

# GolangCI-Lint

| Supported Version | Language  | Website                                    |
| ----------------- | --------- | ------------------------------------------ |
| 1.23.1            | Go 1.13.5 | https://github.com/golangci/golangci-lint  |

## Getting Started

To start using GolangCI-Lint, enable it in repository setting.

To customize GolangCI-Lint, write your configuration, put it in your repository, and set up `sider.yml`.

## Default Configuration

In addition to [enabled by default linters](https://github.com/golangci/golangci-lint/tree/v1.23.1#enabled-by-default-linter), Sider enables some linters as follows:

```list
  - gocyclo
  - bodyclose
```

## Configuration

Here is a configuration example via [`sider.yml`](../../getting-started/custom-configuration.md):

```yaml
linter:
  golangci-lint:
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

| Name                                                                        | Type                 | Default      | Description                                        |
| --------------------------------------------------------------------------- | -------------------- | ------------ | ---------------------------------------------------|
| [`root_dir`](../../getting-started/custom-configuration.md#root_dir-option) | `string`             |      -       | A root directory.                                  |
| [`target`](#target)                                                         | `string`, `string[]` |   `./...`    | Paths to analyze.                                  |
| [`config`](#config)                                                         | `string`             |      -       | File paths for config file.                        |
| [`disable`](#disable)                                                       | `string`, `string[]` |      -       | `--disable` option of GolangCI-Lint.               |
| [`disable-all`](#disable-all)                                               | `boolean`            |    false     | `--disable-all` option of GolangCI-Lint.           |
| [`enable`](#enable)                                                         | `string`             |      -       | `--enable` option of GolangCI-Lint.                |
| [`fast`](#fast)                                                             | `string`, `string[]` |      -       | `--fast` option of GolangCI-Lint.                  |
| [`no-config`](#no-config)                                                   | `boolean`            |    false     | `--no-config` option of GolangCI-Lint.             |
| [`presets`](#presets)                                                       | `string`, `string[]` |      -       | `--presets` option of GolangCI-Lint.               |
| [`skip-dirs`](#skip-dirs)                                                   | `string`, `string[]` |      -       | `--skip-dirs` option of GolangCI-Lint.             |
| [`skip-dirs-use-default`](#skip-dirs-use-default)                           | `boolean`            |     true     | `--skip-dirs-use-default` option of GolangCI-Lint. |
| [`skip-files`](#skip-files)                                                 | `string` ,`string[]` |      -       | `--skip-files` option of GolangCI-Lint.            |
| [`tests`](#tests)                                                           | `boolean`            |     true     | `--tests` option of GolangCI-Lint.                 |
| [`uniq-by-line`](#uniq-by-line)                                             | `boolean`            |     true     | `--uniq-by-line` option of GolangCI-Lint.          |

### `target`

This option allows you to specify files or directories to analyze. If you specify some targets, configure as follow:

```Yaml
linter:
  golangci-lint:
    target:
      - "dir1"
      - "dir2/..."
```

### `config`

This option allows you to control a configuration file. If you have settings file for GolangCI-Lint, put it in this option.

#### `disable`

This option allows you to disable already enabled linters. Set linters as a list in this option.

#### `disable-all`

This option allows you to decide whether to disable all linters.

#### `enable`

This option allows you to enable linters which are not defaultly enabled. Set linters as a list in this option.

#### `fast`
This option allows you to manage whether to run only fast linters. If you declare true in this option, the following faster linters will run:

- deadcode
- errcheck
- gosimple
- govet
- ineffassign
- staticcheck
- structcheck
- typecheck
- varcheck
- bodyclose
- depguard
- dogsled
- dupl
- funlen
- gochecknoglobals
- gochecknoinits
- gocognit
- goconst
- gocritic
- gocyclo
- godox
- gofmt
- goimports
- golint
- gomnd
- goprintffuncname
- gosec
- interfacer
- lll
- maligned
- misspell
- nakedret
- prealloc
- rowserrcheck
- scopelint
- stylecheck
- unconvert
- unparam
- whitespace
- wsl

#### `no-config`
This option allows you not to read config file.

#### `presets`
This option allows yout to enable presets (bugs|complexity|format|performance|style|unused) of linters. This option implies option --disable-all

#### `skip-dirs`
This option allows you to specify the directories to skip.

#### `skip-dirs-use-default`
This option allows you to use or not use default excluded directories.
- (^|/)vendor($|/)
- (^|/)third_party($|/)
- (^|/)testdata($|/)
- (^|/)examples($|/)
- (^|/)Godeps($|/)
- (^|/)builtin($|/)

#### `skip-files`
This option allows you to specify the files to skip.

#### `tests`
This option allows you to decide whether to analyze test files. If you would like to include test files, set `true` in this option.

#### `uniq-by-line`
This option allows you to show multiple linters per line. If you would like to show multiple linters per line, set `false` in this option.
