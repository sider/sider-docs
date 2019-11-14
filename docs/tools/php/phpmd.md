---
id: phpmd
title: PHPMD
sidebar_label: PHPMD
hide_title: true
---

# PHPMD

| Supported Version | Language   | Website           |
| ----------------- | ---------- | ----------------- |
| 2.7.0             | PHP 7.3.11 | https://phpmd.org |

## Getting Started

To start using PHPMD, enable it in [Repository Settings](../../getting-started/repository-settings.md).

You can use `sider.yml` to configure PHPMD.

## Using Your Configuration File

If you have your own `ruleset.xml` for your project, you can add it under the `rule` option in `sider.yml`.

```yaml
linter:
  phpmd:
    rule: ruleset.xml
```

## Performance Issues

PHPMD does not run fast, and sometimes analysis sessions time out.

To mitigate this, Sider deletes files that are not changed in the pull request. This is done automatically done, and cannot be disabled.

If it still times out, you can limit the target of PHPMD analysis by using the `target` option:

```yaml
linter:
  phpmd:
    target:
      - index.php
      - wp-content
```

## Default Configuration

If you leave the `rule` option undefined in `sider.yml`, Sider runs PHPMD with the following configuration to default:

```xml
<?xml version="1.0"?>
<ruleset name="Sider Recommended ruleset"
         xmlns="http://pmd.sf.net/ruleset/1.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://pmd.sf.net/ruleset/1.0.0 http://pmd.sf.net/ruleset_xml_schema.xsd"
         xsi:noNamespaceSchemaLocation="http://pmd.sf.net/ruleset_xml_schema.xsd">
  <description>
    This ruleset is recommended by Sider.
    It contains only generic rules in all projects.
  </description>

  <rule ref="rulesets/codesize.xml">
    <exclude name="NPathComplexity" />
  </rule>
  <rule ref="rulesets/controversial.xml">
    <exclude name="CamelCaseClassName" />
    <exclude name="CamelCasePropertyName" />
    <exclude name="CamelCaseMethodName" />
    <exclude name="CamelCaseParameterName" />
    <exclude name="CamelCaseVariableName" />
  </rule>
  <rule ref="rulesets/design.xml" />
  <rule ref="rulesets/unusedcode.xml">
    <exclude name="UnusedFormalParameter" />
  </rule>
</ruleset>
```

## Configuration via `sider.yml`

Here is are some example settings for PHPMD in `sider.yml`:

```yaml
linter:
  phpmd:
    target:
      - index.php
      - wp-content
    rule: codesize,unusedcode
    minimumpriority: 3
    suffixes: php,phtml
    exclude: app/Vendor/
    strict: true
    custom_rule_path:
      - Custom_PHPMD_Rule.php
      - custom/phpmd/rules/**/*.php
```

You can use several options to fine-tune PHPMD to your project:

| Name                                    | Type                      | Default | Description                                             |
| --------------------------------------- | ------------------------- | ------- | ------------------------------------------------------- |
| [`target`](#target)                     | `string`, `array<string>` | `.`     | Set target files or directories to analyze.             |
| [`rule`](#rule)                         | `string`                  | -       | Specify coding rules or your own rule set file.         |
| [`minimumpriority`](#minimumpriority)   | `integer`                 | -       | Set the priority threshold which PHPMD ignores.         |
| [`suffixes`](#suffixes)                 | `string`                  | `php`   | Set extensions of filenames for analysis.               |
| [`exclude`](#exclude)                   | `string`                  | -       | Set files or directories to exclude from analysis.      |
| [`strict`](#strict)                     | `boolean`                 | `false` | If `true`, PHPMD will report `@SuppressWarnings` nodes. |
| [`custom_rule_path`](#custom_rule_path) | `array<string>`           | `[]`    | File path(s) writing your custom rule(s).               |

### `target`

This option controls target paths to inspect. This is an optional setting that you do not need to specify if you don't have any performance issues.

### `rule`

This option controls `--rule` command line option that is passed to `phpmd`. You can specify a comma-separated list of rule names, or an array of rule names.

The valid rule names are:

- `cleancode`
- `codesize`
- `controversial`
- `design`
- `naming`
- `unusedcode`

You can also specify a rule set file name:

```yaml
linter:
  phpmd:
    rule: ruleset.xml
```

For more information about PHPMD rulesets, see the [PHPMD rule documentation](https://phpmd.org/rules/index.html).

### `minimumpriority`

This option controls the rule priority threshold. Rules below the priority you declare will be ignored.

### `suffixes`

This option controls valid filename extensions.
Use a comma-separated list to inspect multiple file extensions, e.g. `php,phtml`.

### `exclude`

This option controls directories to exclude from analysis objects.
Use a comma-separated list to ignore multiple directories, e.g. `app/logs/,web/bundles/`.

### `strict`

This option controls whether to report nodes that have the `@SuppressWarnings` annotation.
To learn more about `@SuppressWarnings`, see the [PHPMD documentation](https://phpmd.org/documentation/suppress-warnings.html).

### `custom_rule_path`

This option controls file path(s) where you write your own custom rule(s). You can use also _glob_ format.
You will need to use it along with the [`rule`](#rule) option. For example:

Your `sider.yml`:

```yaml
linter:
  phpmd:
    rule: custom_ruleset.xml
    custom_rule_path:
      - Custom_PHPMD_Rule.php
      - custom/phpmd/rules/**/*.php
```

Your `custom_ruleset.xml`:

```xml
<?xml version="1.0" encoding="utf-8"?>
<ruleset name="Your Custom Ruleset">
  <rule name="SomeYourCustomRule"
        message="Please do not this."
        class="Custom_PHPMD_Rule"
        externalInfoUrl="https://example.com/phpmd/rules/custom-rule">
    <priority>1</priority>
  </rule>
</ruleset>
```

To learn about writing a custom rule, see the [PHPMD documentation](https://phpmd.org/documentation/writing-a-phpmd-rule.html).
