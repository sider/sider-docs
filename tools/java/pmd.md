# PMD

| Supported Version | Language | Web Site |
| ----------------- | -------- | -------- |
| 6.8.0 | Java 8 | [https://pmd.github.io](https://pmd.github.io) |

## Getting Started

To start using PMD, enable it in [Repository Settings](../../getting-started/repository-settings.md).

## Configuration

You can customize PMD analysis by using `sideci.yml`:

```yaml:sideci.yml
linter:
  pmd_java:
    dir: src
    rulesets:
      - category/java/errorprone.xml
      - foo.xml
    encoding: Shift_JIS
    min_priority: 3
```

### `dir`

This option allows you to specify the directory to analyze. The default value is `.`.

### `rulesets`

This option allows you to enable and disable rulesets. The value will be passed to PMD's `-rulesets` option. The value should be a sequence of strings.

The default value contains the 4 rulesets:

* category/java/bestpractices.xml
* category/java/errorprone.xml
* category/java/multithreading.xml
* category/java/performance.xml

You can also specify the rulesets file in your repository.

### `encoding`

This option allows you to specify the encoding of the Java source code. The value will be passed to PMD's `-encoding` option of PMD. The default is `UTF-8`.

### `min_priority`

This option specifies PMD's `-minimumpriority` option. There is no default value.

