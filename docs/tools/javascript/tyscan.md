---
id: tyscan
title: TyScan
sidebar_label: TyScan
hide_title: true
---

# TyScan

| Supported Version         | Language   | Runtime         | Website                         |
| ------------------------- | ---------- | --------------- | ------------------------------- |
| 0.2.1+ (default to 0.3.1) | TypeScript | Node.js 12.13.0 | https://github.com/sider/tyscan |

## Getting Started

To start using TyScan in Sider, declare it as a dependency in your `package.json`.

```shell
$ npm install tyscan --save-dev
```

## Configuration via `sider.yml`

```yaml
linter:
  tyscan:
    config: "lint_yml/tyscan.yml"
    tsconfig: "some/tsconfig.json"
    paths:
      - frontend
```

You can use the following options to make analysis fitter for your project.

| Name                                                                              | Type                | Default         | Description                        |
| --------------------------------------------------------------------------------- | ------------------- | --------------- | ---------------------------------- |
| [`root_dir`](../../getting-started/custom-configuration.md#root_dir-option)       | `string`            | -               | A root directory.                  |
| [`npm_install`](../../getting-started/custom-configuration.md#npm_install-option) | `boolean`, `string` | -               | A behavior of npm installation.    |
| [`config`](#config)                                                               | `string`            | `tyscan.yml`    | Set configuration file for TyScan. |
| [`tsconfig`](#tsconfig)                                                           | `string`            | `tsconfig.json` | Set your TypeScript project file.  |
| [`paths`](#paths)                                                                 | `string[]`          | -               | Specify paths to analyze.          |

### `config`

This option allows you to specify the file or directory where your TyScan ruleset is located.

```yaml
linter:
  tyscan:
    config: rules.yml # TyScan will use `rules.yml` instead of `tyscan.yml` as the ruleset.
```

### `tsconfig`

This option allows you to set the TypeScript project file.

### `paths`

This option allows you to specify the file paths to analyze with TyScan.
