---
id: fxcop
title: FxCop
sidebar_label: FxCop
hide_title: true
---

# FxCop

> This is **not published yet**.

| Supported Version | Language             | Website                  |
| :---------------- | :------------------- | :----------------------- |
| 2.9.8             | C#                   | [dotnet/roslyn-analyzers](https://github.com/dotnet/roslyn-analyzers#microsoftcodeanalysisfxcopanalyzers) |

**FxCop** is a static analysis tool for [.NET  platform](https://dotnet.microsoft.com/). It supports both of C# and Visual Basic .NET. However, Sider supports C# project only now.

## Limitations for beta version
This is a beta release. We have several limitation for analysis.
* We only support for projects with .NET Core.
  * No support for mono, Unity, .NET Framework, and so on.
* We only support projects using [MSBuild](https://docs.microsoft.com/en-us/visualstudio/msbuild/msbuild) as its build management system.
  * When you use Visual Studio to develop, it's ok in almost case.
  * No suport for other build system.(e.g. [Cake](https://cakebuild.net/), [Nuke](https://nuke.build/), GNU Make, etc..) 
* We ignore custom ruleset (*.ruleset) file.

## Getting Started

To start using FxCop, enable it in [Repository Settings](../../getting-started/repository-settings.md).

If you put your project configration file (*.csproj) not in project root dir, you have to set `root_dir` parameter in `sider.yml` file.

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

