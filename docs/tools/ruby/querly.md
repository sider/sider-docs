---
id: querly
title: Querly
sidebar_label: Querly
hide_title: true
---

# Querly

| Version Constraints | Language | Web Site |
| ----------------- | -------- | -------- |
| >= 0.5.0 (default to 0.16.0) | Ruby 2.5.1 | [https://github.com/soutaro/querly](https://github.com/soutaro/querly) |

## Getting Started

To start using Querly, enable it in [Repository Settings](../../getting-started/repository-settings.md),
and put a `querly.yaml` config in your repository's root directory.

Visit the Querly project page for more information about writing rules:

* [Configuration](https://github.com/soutaro/querly/blob/master/manual/configuration.md)
* [Examples](https://github.com/soutaro/querly/blob/master/manual/examples.md)
* [Patterns](https://github.com/soutaro/querly/blob/master/manual/patterns.md)

<div class="Video">
 <iframe class="Video__iframe" src="https://www.youtube.com/embed/WtHmNuWJzPA" frameborder="0" allowfullscreen></iframe>
</div>

## Configuration via `sideci.yml`

Here are some example settings for Querly in `sideci.yml`, under `querly`:

```yaml
linter:
  querly:
    gems:
      - "slim"
```

## Options

| Name | Type | Description |
| ---- | ---- | ----------- |
| [`root_dir`](../../getting-started/custom-configuration.md#root_dir-option) | `string` | Directory in which the analyzer runs. |
| [`gems`](../../getting-started/custom-configuration.md#gems-option) | `array<string, object>` | Definition of gems to be installed. |

## Analyzing view templates

Querly has a mechanism called [preprocessor](https://github.com/soutaro/querly/blob/master/manual/configuration.md#preprocessor) for analyzing templates which contain Ruby code.
Sider finds the following gems in `Gemfile.lock` and installs them automatically for backward compatibility:

- [slim](https://github.com/slim-template/slim)
- [haml](https://github.com/haml/haml)

These gems are not installed automatically when the `gems` option is specified. We encourage you to explicitly specify gems in the [`gems` option](../../getting-started/custom-configuration.md#gems-option) in `sideci.yml`.
