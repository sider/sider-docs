---
id: gometalinter
title: Go Meta Linter
sidebar_label: Go Meta Linter
hide_title: true
---

# Go Meta Linter

| Supported Version | Language  | Website                                    |
| ----------------- | --------- | ------------------------------------------ |
| 2.0.11            | Go 1.13.5 | https://github.com/alecthomas/gometalinter |

> **DEPRECATED**: Sider will no longer support Go Meta Linter because Go Meta Linter has been archived since April 7, 2019.
> For more details, see the [readme](https://github.com/alecthomas/gometalinter#readme).

## Getting Started

To start using Go Meta Linter, enable it in repository setting.

To customize Go Meta Linter, write your configuration, put it in your repository, and set up `sider.yml`.

## Dependencies

Sider tries to download dependencies if your project contains `glide.yaml`. This will be done with `glide install` command before analysis.

If `glide.yaml` contains a dependency to a library in a private repository, please add the SSH key necessary to clone it.

- [Use other private repositories for analysis](../../advanced-settings/private-dependencies.md)

> Note that need to set `import_path` option in `sider.yml` when you would like to run `glide install` on analysis.
> See [here](#import_path) for details.

## Default Configuration

If your `sider.yml` does not contain the [`config`](#config) option, Sider will use the default configuration as follows:

```json
{
  "Linters": {
    "gosec": "gosec -fmt=csv -exclude=G103,G104,G201,G202,G204,G301,G302 {path}/*.go:^(?P<path>.*?\\.go),(?P<line>\\d+),(?P<message>[^,]+,[^,]+,[^,]+)"
  },
  "Disable": [
    "aligncheck",
    "structcheck",
    "varcheck",
    "dupl",
    "errcheck",
    "goimports",
    "golint",
    "gotype",
    "lll",
    "misspell",
    "vetshadow"
  ],
  "Cyclo": 15
}
```

## Configuration via `sider.yml`

Put your Go Meta Linter configuration under `gometalinter`:

```yaml
linter:
  gometalinter:
    import_path: github.com/your-org-name/your-repo-name
    options:
      config: config/settings.json
      exclude: "REGEXP"
      include: "REGEXP"
      skip: vendor/github.com/
      cyclo-over: 10
      min-confidence: .80
      dupl-threshold: 50
      severity: "error"
      vendor: true
      tests: true
      errors: true
      fast: true
      disable-all: true
      enable:
        - gofmt
        - test
      disable:
        - vet
```

### `import_path`

Specify the name that will be given to `import` when importing the source code in the repository. This setting will be required to analyze most of non-trivial go programs.

In order to analyze programs that contain `import`, Sider will first copy the source code in your repository to the directory whose name was specified in `import_path` under `$GOPATH/src`. Then, it will start an analysis.

### `options`

This option allows you to control command line options that are given to `gometalinter`.

#### `config`

This option allows you to control a configuration file. If you have settings file for Go Meta Linter, put it in this option.

#### `exclude`

This option allows you to manage messages to exclude by matching regular expressions you set.

#### `include`

This option allows you to manage messages to include by matching regular expressions you set.

#### `skip`

This option allows you to control skipping directories when running Go Meta Linter.

#### `cyclo-over`

This option allows you to control threshold of cyclomatic complexity to report. Go Meta Linter reports functions that have the complexity more than the number you set.

#### `dupl-threshold`

This option allows you to control minimum token sequence as a clone for duplication.

#### `severity`

This option allows you to control the map of linter severities. You can set `warning` or `error`.

#### `vendor`

This option allows you to decide whether to support vendoring.

#### `tests`

This option allows you to decide whether to analyze test files. If you would like to include test files, set `true` in this option.

#### `errors`

This option allows you to manage whether to show only errors.

#### `fast`

This option allows you to manage whether to run only fast linters. If you declare true in this option, the following faster linters willl run:

- dupl
- gosec
- goconst
- gocyclo
- gofmt
- goimports
- golint
- gotype
- ineffassign
- lll
- misspell
- vet
- vetshadow

#### `disable-all`

This option allows you to decide whether to disable all linters.

#### `enable`

This option allows you to enable linters previously disabled. Set linters as a list in this option.

#### `disable`

This option allows you to disable linters previously enabled. Set linters as a lint in this option.
