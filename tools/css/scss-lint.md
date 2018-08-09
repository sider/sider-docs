# SCSS-Lint

| Supported Version | Language | Web Site |
| ----------------- | -------- | -------- |
| 0.57.0 | SCSS 3.5.6 / Ruby 2.5.1|| 0.57.0 | [https://github.com/brigade/scss-lint](https://github.com/brigade/scss-lint) |

## Getting Started

To start using SCSS-Lint, you do not need to prepare particular settings or files.

## Configuration via `sideci.yml`

Here are example settings for SCSS-Lint.

```yaml:sideci.yml
linter:
  scss_lint:
    options:
      config: lint_yml/.scss-lint.yml
```

### `config`

This option allows you to control configuration file. If you have `.scss-lint.yml`, put it in this option. You can use SCSS-Lint without this option because it is optional.

