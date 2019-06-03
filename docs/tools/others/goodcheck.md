---
id: goodcheck
title: Goodcheck
sidebar_label: Goodcheck
hide_title: true
---

# Goodcheck

| Version Constraints | Language | Web Site |
| ----------------- | -------- | -------- |
| >= 1.0.0, < 2.0 (default to 1.7.1) | Others(Regexp) | [https://github.com/sider/goodcheck](https://github.com/sider/goodcheck) |

## Getting Started

To start using Goodcheck, put config file `goodcheck.yml` in your repository.

Visit [its project page](https://github.com/sider/goodcheck#goodcheckyml) for more information about writing rules.

<div class="video">
  <iframe src="https://www.youtube.com/embed/8Zpm2gguE1M" frameborder="0" allowfullscreen></iframe>
</div>

## Configuration via `sideci.yml`

Here are example settings for Goodcheck under `goodcheck`:

```yaml
linter:
  goodcheck:
    config: lib/goodcheck.yml
    target:
      - lib
      - app
```

### Options

| Name | Type | Description |
| ---- | ---- | ----------- |
| [`root_dir`](../../getting-started/custom-configuration.md#root_dir-option) | `string` | Directory in which the analyzer runs. |
| [`gems`](../../getting-started/custom-configuration.md#gems-option) | `array<string, object>` | Definition of gems to be installed. |
| `config` | `string` | A file path passed as `--config` option. |
| `target` | `string`<br />`array<string>` | Files or directories which are analyzed. |
