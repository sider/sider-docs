---
id: ktlint
title: ktlint
sidebar_label: ktlint
hide_title: true
---

# ktlint

> This is **BETA**. The behavior of this tool might change.

| Supported Version | Language             | Website                  |
| ----------------- | -------------------- | ------------------------ |
| 0.34.2 [¹]        | Kotlin (Java 12.0.1) | https://ktlint.github.io |

¹ You can use Gradle or Maven to install any version of ktlint, but note that the version may not compatible with Sider.

**ktlint** is a linter with built-in formatter for [Kotlin](https://kotlinlang.org) programming language.

## Getting Started

To start using ktlint, enable it in [Repository Settings](../../getting-started/repository-settings.md), and put a configuration in `sider.yml`.

### Using ktlint CLI

You can use ktlint CLI without any configuration, but we recommend to make a configuration.

Put the `cli` key in `sider.yml` to customize the execution of ktlint CLI.

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
      reporter: checkstyle
```

Sider runs `./gradlew` in the repository with the specified `task`, and use the output as ktlint result.
Essentially, it executes the following command.

```shell
$ ./gradlew <task>
```

The `reporter` option tells Sider which reporter is used by the Gradle task.
Sider supports the default `checkstyle`, `json`, and `plain` reporters.

The option is available also with the Maven integration below.

### Using Maven integration

If you have set up the Maven integration for ktlint, you can use it.

```yaml
linter:
  ktlint:
    maven:
      goal: "antrun:run@ktlint"
      reporter: checkstyle
      output: target/ktlint.xml
```

Sider runs `mvn` in the repository with the specified `goal`, and use the output.
Essentially, it executes the following command.

```shell
$ mvn <goal>
```

## Configuration

You can customize your ktlint analysis using `sider.yml`.
The configuration for ktlint accepts one of the `cli`, `gradle`, and `maven` keys.

| Name                                       | Type                                | Default      | Description                                                                                  |
| ------------------------------------------ | ----------------------------------- | ------------ | -------------------------------------------------------------------------------------------- |
| [`cli`](#cli)                              | `map`                               | -            | Settings for CLI execution.                                                                  |
| [`cli.patterns`](#clipatterns)             | `string`, `array<string>`           | `[]`         | File patterns to analyze.                                                                    |
| [`cli.ruleset`](#cliruleset)               | `string`, `array<string>`           | `[]`         | Ruleset URLs.                                                                                |
| [`cli.disabled_rules`](#clidisabled_rules) | `string`, `array<string>`           | `[]`         | Whether disable rules or not.                                                                |
| [`cli.experimental`](#cliexperimental)     | `boolean`                           | `false`      | [`--experimental`](https://github.com/pinterest/ktlint#experimental-rules) option of ktlint. |
| [`gradle`](#gradle)                        | `map`                               | -            | Settings for Gradle execution.                                                               |
| [`gradle.task`](#gradletask)               | `string`                            | _(required)_ | Task name of Gradle.                                                                         |
| [`gradle.reporter`](#gradlereporter)       | `"checkstyle"`, `"json"`, `"plain"` | _(required)_ | Reporter name.                                                                               |
| [`gradle.output`](#gradleoutput)           | `string`                            | _-_          | Output file path.                                                                            |
| [`maven`](#maven)                          | `map`                               | -            | Settings for Maven execution.                                                                |
| [`maven.goal`](#mavengoal)                 | `string`                            | _(required)_ | Goal name of Maven.                                                                          |
| [`maven.reporter`](#mavenreporter)         | `"checkstyle"`, `"json"`, `"plain"` | _(required)_ | Reporter name. Same as [`gradle.reporter`](#gradlereporter).                                 |
| [`maven.output`](#mavenoutput)             | `string`                            | _(required)_ | Output file path.                                                                            |

### `cli`

For example:

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

Pattern(s) to specify the files to be analyzed by ktlint.
If you omit the option, Sider analyzes all Kotlin files in your repository.

### `cli.ruleset`

URL(s) to ktlint ruleset(s).

### `cli.disabled_rules`

Name(s) of rule(s) which you want to disable.

### `cli.experimental`

Whether enable the `--experimental` option or not.

### `gradle`

```yaml
linter:
  ktlint:
    gradle:
      task: ktlint
      reporter: checkstyle
      output: build/reports/ktlint/ktlintMainSourceSetCheck.xml
```

For more details about the Gradle settings, see the [official documentation](https://ktlint.github.io/#gradle).

### `gradle.task`

A name of the Gradle task to execute ktlint.

### `gradle.reporter`

A reporter name of the output from the `task`.

We recommend using the `json` or `checkstyle` reporter for Sider integration.
Because the `plain` reporter does not print any _rule ID_ which is used to identify issues in Sider.

### `gradle.output`

A path to a file which contains ktlint output.
If you omit the option, Sider reads the output from Gradle stdout.

### `maven`

For example:

```yaml
linter:
  ktlint:
    maven:
      goal: "antrun:run@ktlint"
      reporter: checkstyle
      output: target/ktlint.xml
```

For more details about the Maven settings, see the [official documentation](https://ktlint.github.io/#maven).

### `maven.goal`

A name of the Maven goal to execute ktlint.

### `maven.reporter`

A reporter name of the output from the `goal`. For details, see [`gradle.reporter`](#gradlereporter).

### `maven.output`

A path to a file which contains ktlint output.
