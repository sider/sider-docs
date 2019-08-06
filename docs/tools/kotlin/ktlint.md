---
id: ktlint
title: ktlint
sidebar_label: ktlint
hide_title: true
---

# ktlint

| Supported Version | Language | Web Site |
| ----------------- | -------- | -------- |
| 0.34.2 [1][2] | Kotlin | [https://github.com/pinterest/ktlint](https://github.com/pinterest/ktlint) |

- [1] You can use Gradle to install any version of ktlint, but the version may not compatible with Sider.
- [2] You can use Maven to install any version of ktlint, but the version may not compatible with Sider.

## Getting Started

To start using ktlint, enable it in [Repository Settings](../../getting-started/repository-settings.md), and put a configuration in `sider.yml`.

### Using ktlint CLI

You can use ktlint CLI without any configuration, but we recommend to make a configuration.

Put `cli` key in `sider.yml` to customize the execution of ktlint CLI.

```yaml
linter:
  ktlint:
    cli:
      patterns:
        - "src/**/*.kt"
```

### Using Gradle integration

If you have set up the Gradle integration for ktlint, you can use it.

```yaml
linter:
  ktlint:
    gradle:
      task: ktlint
      format: checkstyle
```

Sider runs `./gradlew` in the repository with specified _task_, and use the output as ktlint result.
Essentially, it executes the following command.

```
$ ./gradlew -q [task]
```

The `format` option tells Sider which format is generated from the gradle task.
Sider supports the default `checkstyle`, `json`, and `plain` formats.

### Using Maven integration

If you have set up the Maven integration for ktlint, you can use it.

```yaml
linter:
  ktlint:
    maven:
      goal: verify
      format: checkstyle
      output: target/ktlint.xml
```

Sider runs `mvn` in the repository with specified _goal_, and use the output.
Essentially, it executes the following command.

```
$ mvn [goal]
```

The `format` option tells Sider which format is generated from the gradle task.
Sider supports the default `checkstyle`, `json`, and `plain` formats.

## Configuration

You can customize JavaSee analysis using `sider.yml`.

The configuration for ktlint accepts one of `cli` and `gradle` keys.

### `cli`

```yaml
linter:
  ktlint:
    cli:
      patterns:
        - "src/**/*.kt"
        - "!src/**/*Test.kt"
      ruleset:
        - https://example.com/rule.jar
      disabled_rules:
        - no-wildcard-imports
      experimental: true
```

### `cli.patterns`

Patterns to specify the files to be analyzed by ktlint.
A string or a sequence of strings.

If you don't specify `patterns`, ktlint analyzes all of the kotlin files in the repository.

### `cli.ruleset`

URL to ktlint ruleset.
A string or a sequence of strings, defaults to empty.

### `cli.disabled_rules`

List of the name of the rules you want to disable.
A string or a sequence of strings, defaults to empty.

### `cli.experimental`

`true` or `false` to specify whether enable the `--experimental` option or not.
Defaults to `false`.

### `gradle`

```yaml
linter:
  ktlint:
    gradle:
      task: ktlint
      format: checkstyle
      output: build/reports/ktlint/ktlintMainSourceSetCheck.xml
```

### `gradle.task` (required)

Name of the task to execute ktlint.

### `gradle.format` (required)

The format of the output from the _task_.
One of the `plain`, `json`, and `checkstyle`

We recommend using `json` or `checkstyle` for Sider integration.
The `plain` format does not print _rule id_ which is used to identify issues in Sider.

### `gradle.output`

The path to the file which contains ktlint output.
A string, defaults to empty which tells sider to read the output from Gradle stdout.

### `maven`

```yaml
linter:
  ktlint:
    maven:
      goal: verify
      format: checkstyle
      output: target/ktlint.xml
```

### `maven.task` (required)

Name of the goal for ktlint execution.

### `maven.format` (required)

The format of the output from the _task_.
One of the `plain`, `json`, and `checkstyle`

We recommend using `json` or `checkstyle` for Sider integration.
The `plain` format does not print _rule id_ which is used to identify issues in Sider.

### `maven.output` (required)

The path to the file which contains ktlint output.
Should be a string.
