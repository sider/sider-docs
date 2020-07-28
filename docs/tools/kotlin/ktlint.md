---
id: ktlint
title: ktlint
sidebar_label: ktlint (beta)
hide_title: true
---

# ktlint

> This is **BETA**. The behavior of this tool might change.

| Supported Version | Language             | Website                  |
| ----------------- | -------------------- | ------------------------ |
| 0.37.2 ¹          | Kotlin (Java 14.0.2) | https://ktlint.github.io |

**ktlint** is a linter with built-in formatter for [Kotlin](https://kotlinlang.org) programming language.

¹ _You can use Gradle or Maven to install any version of ktlint, but note that the version may not compatible with Sider._

## Getting Started

To start using ktlint, enable it in your [repository settings](../../getting-started/repository-settings.md),
and put and configure your `sider.yml` to select one way from the followings:

- [CLI](#using-cli)
- [Gradle](#using-gradle-integration)
- [Maven](#using-maven-integration)

### Using CLI

You can use the ktlint CLI without any configuration, but we recommend making a configuration.

For example:

```yaml
linter:
  ktlint:
    cli:
      patterns:
        - "src/**/*.kt"
```

### Using Gradle Integration

If you have set up the Gradle integration for ktlint, you can use it as follows:

```yaml
linter:
  ktlint:
    gradle:
      task: ktlint
      reporter: checkstyle
```

Sider runs `./gradlew` in the repository with the specified `task` and uses the output result.
Essentially, it is equivalent to run the following command:

```console
$ ./gradlew <task>
```

The `reporter` option tells Sider which reporter is used by the Gradle task.
Sider supports the default `checkstyle`, `json`, and `plain` reporters.

The option is available also with the Maven integration below.

### Using Maven Integration

If you have set up the Maven integration for ktlint, you can use it.

```yaml
linter:
  ktlint:
    maven:
      goal: "antrun:run@ktlint"
      reporter: checkstyle
      output: target/ktlint.xml
```

Sider runs `mvn` in the repository with the specified `goal` and uses the output result.
Essentially, it is equivalent to run the following command:

```console
$ mvn <goal>
```

## Configuration

You can customize your ktlint analysis using `sider.yml`.
The configuration for ktlint accepts one of the `cli`, `gradle`, and `maven` keys.

| Name                                                                                  | Type                                | Default      |
| ------------------------------------------------------------------------------------- | ----------------------------------- | ------------ |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir) | `string`                            | -            |
| [`cli`](#cli)                                                                         | `hash`                              | -            |
| [`cli.patterns`](#clipatterns)                                                        | `string`, `string[]`                | `[]`         |
| [`cli.ruleset`](#cliruleset)                                                          | `string`, `string[]`                | `[]`         |
| [`cli.disabled_rules`](#clidisabled_rules)                                            | `string`, `string[]`                | `[]`         |
| [`cli.experimental`](#cliexperimental)                                                | `boolean`                           | `false`      |
| [`gradle`](#gradle)                                                                   | `hash`                              | -            |
| [`gradle.task`](#gradletask)                                                          | `string`                            | _(required)_ |
| [`gradle.reporter`](#gradlereporter)                                                  | `"checkstyle"`, `"json"`, `"plain"` | _(required)_ |
| [`gradle.output`](#gradleoutput)                                                      | `string`                            | -            |
| [`maven`](#maven)                                                                     | `hash`                              | -            |
| [`maven.goal`](#mavengoal)                                                            | `string`                            | _(required)_ |
| [`maven.reporter`](#mavenreporter)                                                    | `"checkstyle"`, `"json"`, `"plain"` | _(required)_ |
| [`maven.output`](#mavenoutput)                                                        | `string`                            | _(required)_ |

### `cli`

This option allows you to configure the CLI execution. For example:

```yaml
linter:
  ktlint:
    cli:
      patterns:
        - "src/**/*.kt"
        - "!src/**/*Test.kt"
      ruleset:
        - "https://example.com/custom/ruleset.jar"
      disabled_rules:
        - "no-wildcard-imports"
      experimental: true
```

### `cli.patterns`

This option allows you to specify glob patterns of files to analyze.
If omitted, Sider analyzes all Kotlin files in your repository.

### `cli.ruleset`

This option allows you to specify URLs to rulesets you want to enable.

### `cli.disabled_rules`

This option allows you to specify rule names you want to disable.

### `cli.experimental`

This option allows you to specify whether enabling [experimental rules](https://github.com/pinterest/ktlint#experimental-rules) or not.

### `gradle`

This option allows you to configure the [Gradle integration](https://github.com/pinterest/ktlint#-with-gradle). For example:

```yaml
linter:
  ktlint:
    gradle:
      task: ktlint
      reporter: checkstyle
      output: build/reports/ktlint/ktlintMainSourceSetCheck.xml
```

### `gradle.task`

This option allows you to specify a Gradle task to execute ktlint.

### `gradle.reporter`

This option allows you to specify a reporter of the output from the [`task`](#gradletask).

We recommend using the `json` or `checkstyle` reporter for Sider integration.
Because the `plain` reporter does not print any _rule ID_ which is used to identify issues in Sider.

### `gradle.output`

This option allows you to specify a file path that contains the output.
If omitted, Sider reads the output from STDOUT.

### `maven`

This option allows you to configure the [Maven integration](https://github.com/pinterest/ktlint#-with-maven). For example:

```yaml
linter:
  ktlint:
    maven:
      goal: "antrun:run@ktlint"
      reporter: checkstyle
      output: target/ktlint.xml
```

### `maven.goal`

This option allows you to specify a Maven goal to execute ktlint.

### `maven.reporter`

This option allows you to specify a reporter of the output from the [`goal`](#mavengoal).
It has the same limitation as [`gradle.reporter`](#gradlereporter).

### `maven.output`

This option allows you to specify a file path that contains the output.
