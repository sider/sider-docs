---
id: tyscan
title: TyScan
sidebar_label: TyScan
hide_title: true
---

# TyScan

| Supported Version           | Language   | Runtime        | Website                         |
| --------------------------- | ---------- | -------------- | ------------------------------- |
| Optional (default to 0.2.1) | TypeScript | Node.js 12.10.0 | https://github.com/sider/tyscan |

## Getting Started

To start using TyScan in Sider, declare it as a dependency in your `package.json`.

```bash
$ npm install tyscan -D
```

Sider executes `npm install` automatically when running TyScan, therefore, if you do not need `npm install`, you should write `sider.yml` explicitly:

```yaml
linter:
  tyscan:
    npm_install: false
```

## Configuration via `sider.yml`

```yaml
linter:
  tyscan:
    config: 'lint_yml/tyscan.yml'
    tsconfig: 'tsconfig.json'
    paths:
      - frontend
```

### Options

You can use several options to make analysis filters for your project.

| Name | Type | Description |
| :--- | :--- | :---------- |
| [`config`](#config) | `string` | Set configuration file for TyScan, which defaults to `tyscan.yml`. |
| [`tsconfig`](#tsconfig) | `string` | Set your TypeScript project file, which defaults to `tsconfig.json`. |
| [`paths`](#paths) | `array<string>` | Specify paths analyze. |

#### `config`

This option allows you to specify the file or directory name where your TyScan ruleset is located.
By default, TyScan uses `tyscan.yml` in the root directory of your repository. If you set another filename with this option, then TyScan will use the file for analysis instead of `tyscan.yml`.

```yaml
linter:
  tyscan:
    config: rules.yml  # TyScan will use `rules.yml` instead of `tyscan.yml` as the ruleset.
```

#### `tsconfig`

This option allows you to set the TypeScript project file. If you have `tsconfig.json`, you can declare it with this option.

#### `paths`

This option allows you to specify the file paths to analyze with TyScan.
