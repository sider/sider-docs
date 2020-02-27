---
id: detekt
title: detekt
sidebar_label: detekt
hide_title: true
---

# detekt

> This is **BETA**. The behavior of this tool might change.

| Supported Version | Language             | Website                              |
| :---------------- | :------------------- | :----------------------------------- |
| 1.6.0 [¹]         | Kotlin (Java 12.0.2) | https://github.com/arturbosch/detekt |

¹ You can use Gradle or Maven to install any version of detekt, but note that the version may not compatible with Sider.

**detekt** is a linter which code smell analysis for your [Kotlin](https://kotlinlang.org) projects. 

## Getting Started

To start using detekt, enable it in [Repository Settings](../../getting-started/repository-settings.md), and put a configuration in `sider.yml`.

### Using detekt CLI

You can use detekt CLI without any configuration, but we recommend to make a configuration.

Put the `cli` key in `sider.yml` to customize the execution of detekt CLI.

```yaml
linter:
  detekt:
    cli:
      baseline: "baseline.xml"
      config: 
        - "path/to/detekt-config.yml"
        - "path/to/another/detekt-config.yml"
      config-resource: []
      disable-default-rulesets: false
      excludes: 
        - "**/excludes_dir/**"
        - "**/another/excludes_dir/**"
      includes: []
      input: 
        - "src/"
```

### Using Gradle integration

If you have set up the Gradle integration for detekt, you can use it.

```yaml
linter:
  detekt:
    gradle:
      task: detekt
      report_id: xml
      report_path: build/reports/detekt.xml
```

Sider runs `./gradlew` in the repository with the specified `task`, and use the output as detekt result.
Essentially, it executes the following command.

```shell
$ ./gradlew <task>
```

The `report_id` option tells Sider which reporter is used by the Gradle task.
Sider supports the default `xml` and `txt` reporters.

### Using Maven integration

If you have set up the Maven integration for detekt, you can use it.

```yaml
linter:
  detekt:
    maven: 
      goal: "antrun:run@detekt"
      report_id: xml
      report_path: reports/detekt.xml
```

Sider runs `mvn` in the repository with the specified `goal`, and use the output.
Essentially, it executes the following command.

```shell
$ mvn <goal>
```

## Configuration

You can customize your detekt analysis using `sider.yml`.
The configuration for detekt accepts one of the `cli`, `gradle`, and `maven` keys.

| Name                                                                        | Type                 | Default                   | Description                                                                                    |
| --------------------------------------------------------------------------- | -------------------- | ------------------------- | ---------------------------------------------------------------------------------------------- |
| [`root_dir`](../../getting-started/custom-configuration.md#root_dir-option) | `string`             | -                         | A root directory.                                                                              |
| [`cli`](#cli)                                                               | `hash`               | -                         | Settings for CLI execution.                                                                    |
| [`cli.baseline`](#clibaseline)                                              | `string`             | -                         | Baseline file path.                                                                            |
| [`cli.config`](#cliconfig)                                                  | `string`, `string[]` | `[]`                      | Config file paths.                                                                             |
| [`cli.config-resource`](#cliconfig-resource)                                | `string`, `string[]` | `[]`                      | Config resource paths.                                                                         |
| [`cli.disable-default-rulesets`](#clidisable-default-rulesets)              | `boolean`            | `false`                   | [`--disable-default-rulesets`](https://arturbosch.github.io/detekt/cli.html) option of detekt. |
| [`cli.excludes`](#cliexcludes)                                              | `string`, `string[]` | `[]`                      | Exclude paths. (Globing patterns)                                                              |
| [`cli.includes`](#cliincludes)                                              | `string`, `string[]` | `[]`                      | Include paths. (Globing patterns)                                                              |
| [`cli.input`](#cliinput)                                                    | `string`, `string[]` | current working directory | Input paths.                                                                                   |
| [`gradle`](#gradle)                                                         | `hash`               | -                         | Settings for Gradle execution.                                                                 |
| [`gradle.task`](#gradletask)                                                | `string`             | _(required)_              | Task name of Gradle.                                                                           |
| [`gradle.report_id`](#gradlereport_id)                                      | `"xml"`, `"txt"`     | _(required)_              | Report id.                                                                                     |
| [`gradle.report_path`](#gradlereport_path)                                  | `string`             | _(required)_              | Report file path.                                                                              |
| [`maven`](#maven)                                                           | `hash`               | -                         | Settings for Maven execution.                                                                  |
| [`maven.goal`](#mavengoal)                                                  | `string`             | _(required)_              | Goal name of Maven.                                                                            |
| [`maven.report_id`](#mavenreport_id)                                        | `"xml"`, `"txt"`     | _(required)_              | Report id. Same as [`gradle.report_id`](#gradlereport_id).                                     |
| [`maven.report_path`](#mavenreport_path)                                    | `string`             | _(required)_              | Report file path.                                                                              |

### `cli`

For example:

```yaml
linter:
  detekt:
    cli:
      baseline: "baseline.xml"
      config: 
        - "path/to/detekt-config.yml"
        - "path/to/another/detekt-config.yml"
      config-resource: []
      disable-default-rulesets: false
      excludes: 
        - "**/excludes_dir/**"
        - "**/another/excludes_dir/**"
      includes: []
      input: 
        - "src/"
```

For more details about the CLI options, see the [official documentation](https://arturbosch.github.io/detekt/cli.html).

### `cli.baseline`

If a baseline xml file is passed in, only new code smells not in the baseline are printed in the console.

### `cli.config`

Path to the config file (path/to/config.yml).

### `cli.config-resource`

Path to the config resource.

### `cli.disable-default-rulesets`

Whether enable the `--disable-default-rulesets` option or not.

### `cli.excludes`

Globing patterns describing paths to exclude from the analysis.

### `cli.includes`

Globing patterns describing paths to include in the analysis.

### `cli.input`

Input paths to analyze.

### `gradle`

```yaml
linter:
  detekt:
    gradle:
      task: detekt
      report_id: xml
      report_path: build/reports/detekt.xml
```

For more details about the Gradle settings, see the [official documentation](https://arturbosch.github.io/detekt/groovydsl.html).

### `gradle.task`

A name of the Gradle task to execute detekt.

### `gradle.report_id`

A reporter name of the output from the `task`.

We recommend using the `xml` reporter for Sider integration.
Because you can receive clearer messages than the `txt`.

### `gradle.report_path`

A path to a file which contains detekt output.

### `maven`

For example:

```yaml
linter:
  detekt:
    maven: 
      goal: "antrun:run@detekt"
      report_id: xml
      report_path: reports/detekt.xml
```

For more details about the Maven settings, see the [official documentation](https://arturbosch.github.io/detekt/mavenanttask.html).

### `maven.goal`

A name of the Maven goal to execute detekt.

### `maven.report_id`

A reporter name of the output from the `goal`. Same as [`gradle.report_id`](#gradlereport_id).

### `maven.report_path`

A path to a file which contains detekt output.
