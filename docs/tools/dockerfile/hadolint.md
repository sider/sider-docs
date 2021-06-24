---
id: hadolint
title: hadolint
sidebar_label: hadolint
hide_title: true
---

# hadolint

| Supported Version | Language   | Website                             |
| ----------------- | ---------- | ----------------------------------- |
| 2.5.0             | Dockerfile | https://hadolint.github.io/hadolint |

**hadolint** is a [Dockerfile](https://docs.docker.com/engine/reference/builder) linter that helps you build [best practice](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/) Docker images.

## Getting Started

To start using hadolint, enable it in your [repository settings](../../getting-started/repository-settings.md).

If you want to customize your hadolint analysis, create a file named [`.hadolint.yaml`](https://github.com/hadolint/hadolint#configure) and put it into your repository.

## Configuration

Here is a configuration example via [`sider.yml`](../../getting-started/custom-configuration.md):

```yaml
linter:
  hadolint:
    target: "src/Dockerfile"
    ignore: "DL3003"
    trusted-registry: "my-company.com:500"
    config: custom-hadolint.yml
```

You can use the following options to fine-tune hadolint to your project.

| Name                                                                                  | Type                 | Default              |
| ------------------------------------------------------------------------------------- | -------------------- | -------------------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir) | `string`             | -                    |
| [`target`](#target)                                                                   | `string`, `string[]` | `**/Dockerfile{,.*}` |
| [`ignore`](#ignore)                                                                   | `string`, `string[]` | -                    |
| [`trusted-registry`](#trusted-registry)                                               | `string`, `string[]` | -                    |
| [`config`](#config)                                                                   | `string`             | -                    |

### `target`

This option allows you to specify files or directories to analyze. If you specify some targets, configure as follows:

```Yaml
linter:
  hadolint:
    target:
      - "backend/Dockerfile"
      - "images/**/Dockerfile"
```

### `ignore`

This option allows you to ignore some rules from result of analysis. You can specify [rules](https://github.com/hadolint/hadolint#rules) as follows:

```yaml
linter:
  hadolint:
    ignore:
      - "DL3002"
      - "DL3003"
```

See also the `--ignore` option.

### `trusted-registry`

This option can warn you when images from untrusted repositories are being used in Dockerfiles. If you specify some trusted repositories, configure as follows:

```yaml
linter:
  hadolint:
    trusted-registry:
      - "my-company.com:500"
```

See also the `--trusted-registry` option.

### `config`

This option allow you to specify configuration file in yaml format like this [example](https://github.com/hadolint/hadolint#configure). If you specify path to configuration file, configure as follows:

```yaml
linter:
  hadolint:
    config: custom-hadolint.yml
```

See also the `--config` option.
