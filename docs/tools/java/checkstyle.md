---
id: checkstyle
title: Checkstyle
sidebar_label: Checkstyle
hide_title: true
---

# Checkstyle

| Supported Version | Language | Website                |
| ----------------- | -------- | ---------------------- |
| 8.44              | Java     | https://checkstyle.org |

**Checkstyle** is a style checker for Java code and aims to enforce a coding standard.

## Getting Started

To start using Checkstyle, enable it in your [repository settings](../../getting-started/repository-settings.md).

## Configuration

You can customize Checkstyle analysis using `sider.yml`. For example:

```yaml
linter:
  checkstyle:
    config: google
    target: src
    exclude:
      - vendor
      - pattern: foo
      - string: foo
    ignore:
      - warning
      - info
    properties: checkstyle.properties
```

| Name                                                                                          | Type                          | Default |
| --------------------------------------------------------------------------------------------- | ----------------------------- | ------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir)         | `string`                      | -       |
| [`dependencies`](../../getting-started/custom-configuration.md#linteranalyzer_iddependencies) | `string[]`, `map[]`           | -       |
| [`config`](#config)                                                                           | `string`                      | `sider` |
| [`target`](#target)                                                                           | `string`, `string[]`          | `.`     |
| [`exclude`](#exclude)                                                                         | `string`, `string[]`, `map[]` | -       |
| [`ignore`](#ignore)                                                                           | `string[]`                    | -       |
| [`properties`](#properties)                                                                   | `string`                      | -       |

### `config`

This option allows you to declare the coding standard you want to follow.

Supported values are:

- [`sider`](https://github.com/sider/runners/blob/HEAD/images/checkstyle/sider_recommended_checkstyle.xml)
  - our [recommended ruleset](../../getting-started/recommended-rules.md)
- [`google`](https://checkstyle.org/google_style)
  - alias for [`/google_checks.xml`](https://github.com/checkstyle/checkstyle/blob/HEAD/src/main/resources/google_checks.xml)
- [`sun`](https://checkstyle.org/sun_style)
  - alias for [`/sun_checks.xml`](https://github.com/checkstyle/checkstyle/blob/HEAD/src/main/resources/sun_checks.xml)
- A file path or _resource_ name to your [configuration file](https://checkstyle.org/config). For example:
  - `./config/my-checkstyle.xml`
  - `/com/example/checkstyle/custom-ruleset.xml`

See also the [`-c`](https://checkstyle.org/cmdline.html) CLI option of Checkstyle.

### `target`

This option allows you to specify directories to be analyzed.

_alias:_ `dir`

### `exclude`

This option allows you to specify `-e` and `-x` command line options passed to the `checkstyle` command.

- If `exclude` is a string, the `-e` option will be used.
- If including object(s) with a `string` key (e.g. `{ string: vendor }`), the `-e` option will be used.
- If including object(s) with a `pattern` key (e.g. `{ pattern: vendor }`), the `-x` option will be used.

By default, nothing will be excluded.

### `ignore`

This option allows you to ignore issues based on their severity. Write the list of severities you want to ignore.

By default, nothing will be ignored.

### `properties`

This option allows you to specify the properties file passed to `checkstyle`. The value will be passed to Checkstyle's `-p` option.

## Localization

Checkstyle supports the localization of output messages. You can see the details on [Checkstyle documentation](https://checkstyle.org/config_system_properties.html#Localisation_Support). Also, you can see the supported languages in [Checkstyle's GitHub](https://github.com/checkstyle/checkstyle/tree/432bafd49ed9d801f44a04ad710cc9372538e588/src/main/resources/com/puppycrawl/tools/checkstyle/checks/sizes).

If you want to use the localization on Sider, you need to do as follows.

1. Create your Checkstyle configuration file, e.g. `your_checkstyle_ruleset.xml`. (it is easy to base an existing file like `google_checks.xml`)
2. Add the [`localeCountry` and `localeLanguage` properties](https://checkstyle.sourceforge.io/config.html#Checker_Properties) to the configuration file like below:

   ```xml
   <module name="Checker">
     <property name="localeCountry" value="JP"/>
     <property name="localeLanguage" value="ja"/>
     <!-- ... -->
   </module>
   ```

3. Set the [`config`](#config) option in your `sider.yml` like below:

   ```yaml
   linter:
     checkstyle:
       config: your_checkstyle_ruleset.xml
   ```
