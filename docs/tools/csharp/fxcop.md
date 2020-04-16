---
id: fxcop
title: FxCop
sidebar_label: FxCop
hide_title: true
---

# FxCop

| Supported Version | Language | Website                                                                    |
| :---------------- | :------- | :------------------------------------------------------------------------- |
| 2.9.8             | C#       | https://docs.microsoft.com/en-us/visualstudio/code-quality/fxcop-analyzers |

## Getting Started

To start using FxCop, enable it in [Repository Settings](../../getting-started/repository-settings.md).

## Configuration via `sider.yml`

Here are example settings for FxCop under `fxcop`:

```yaml
linter:
  fxcop:
    root_dir: src/
```

| Name                                                                        | Type     | Default | Description       |
| --------------------------------------------------------------------------- | -------- | ------- | ----------------- |
| [`root_dir`](../../getting-started/custom-configuration.md#root_dir-option) | `string` | -       | A root directory. |


## Limitations

### Only C# is supported

FxCop is a static analysis tool for [.NET platform](https://dotnet.microsoft.com/). It supports both of C# and Visual Basic .NET. However, Sider supports C# project only.

### Custom rule set file is not supported

Currently the rule set file (`*.ruleset`) is not supported. Sider uses the full set of analyzers available.
