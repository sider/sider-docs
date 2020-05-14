---
id: fxcop
title: FxCop
sidebar_label: FxCop (beta)
hide_title: true
---

# FxCop

> This is **BETA**. The behavior of this tool might change.

| Supported Version | Language | Website                                                                    |
| ----------------- | -------- | -------------------------------------------------------------------------- |
| 3.0.0             | C#       | https://docs.microsoft.com/en-us/visualstudio/code-quality/fxcop-analyzers |

**FxCop** is a static analysis tool for [.NET platform](https://dotnet.microsoft.com/). It supports both of C# and Visual Basic .NET. However, Sider supports C# project only now.

## Limitations for beta version

This is a beta release. We have several limitations for analysis.

- Currently the rule set file (`*.ruleset`) is not supported. Sider uses the full set of analyzers available.

## Getting Started

To start using FxCop, enable it in your [repository settings](../../getting-started/repository-settings.md).

## Configuration

Here is an example configuration via `sider.yml`:

```yaml
linter:
  fxcop:
    root_dir: src/
```

| Name                                                                                  | Type     | Default |
| ------------------------------------------------------------------------------------- | -------- | ------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir) | `string` | -       |
