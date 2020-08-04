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

To start using ktlint, enable it in your [repository settings](../../getting-started/repository-settings.md).

## Configuration

You can customize your ktlint analysis using `sider.yml` as follows:

```yaml
linter:
  ktlint:
    target:
      - "src/**/*.kt"
      - "!src/**/*Test.kt"
      - "test/"
    ruleset:
      - custom_ruleset.jar
    disabled_rules:
      - "no-wildcard-imports"
      - "indent"
    experimental: true
```

| Name                                                                                  | Type                 | Default |
| ------------------------------------------------------------------------------------- | -------------------- | ------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir) | `string`             | -       |
| [`jvm_deps`](../../getting-started/custom-configuration.md#linteranalyzer_idjvm_deps) | `string[][]`         | `[]`    |
| [`target`](#target)                                                                   | `string`, `string[]` | `[]`    |
| [`ruleset`](#ruleset)                                                                 | `string`, `string[]` | `[]`    |
| [`disabled_rules`](#disabled_rules)                                                   | `string`, `string[]` | `[]`    |
| [`experimental`](#experimental)                                                       | `boolean`            | `false` |

### `target`

This option allows you to specify glob patterns of files to analyze.
If omitted, Sider analyzes all Kotlin files in your repository.

### `ruleset`

This option allows you to specify URLs to rulesets you want to enable.

### `disabled_rules`

This option allows you to specify rule names to disable.

### `experimental`

This option allows you to use the [experimental rules](https://github.com/pinterest/ktlint#experimental-rules).

---

### `cli`

> This option was **removed**.

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

> This option was **removed**.

This option allows you to specify glob patterns or directories to analyze.
If omitted, Sider analyzes all Kotlin files in your repository.

### `cli.ruleset`

> This option was **removed**.

This option allows you to specify URLs to rulesets you want to enable.

### `cli.disabled_rules`

> This option was **removed**.

This option allows you to specify rule names you want to disable.

### `cli.experimental`

> This option was **removed**.

This option allows you to specify whether enabling [experimental rules](https://github.com/pinterest/ktlint#experimental-rules) or not.

### `gradle`

> This option was **removed**.

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

> This option was **removed**.

This option allows you to specify a Gradle task to execute ktlint.

### `gradle.reporter`

> This option was **removed**.

This option allows you to specify a reporter of the output from the [`task`](#gradletask).

We recommend using the `json` or `checkstyle` reporter for Sider integration.
Because the `plain` reporter does not print any _rule ID_ which is used to identify issues in Sider.

### `gradle.output`

> This option was **removed**.

This option allows you to specify a file path that contains the output.
If omitted, Sider reads the output from STDOUT.

### `maven`

> This option was **removed**.

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

> This option was **removed**.

This option allows you to specify a Maven goal to execute ktlint.

### `maven.reporter`

> This option was **removed**.

This option allows you to specify a reporter of the output from the [`goal`](#mavengoal).
It has the same limitation as [`gradle.reporter`](#gradlereporter).

### `maven.output`

> This option was **removed**.

This option allows you to specify a file path that contains the output.
