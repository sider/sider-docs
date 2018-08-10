# Sider Analysis Custom Configuration

Your pull requests will be analyzed by Sider as soon as you register your project without specific configuration. Sider provides you analysis results even if you do not configure any settings. However, in some cases, it may not provide you analysis results you expected. For example, this includes situations such as when you would use your own config files: `.myrubocop.yml` and so on.

Using `sideci.yml` can help you to resolve that.

## Configuration via `sideci.yml`

You need to add `sideci.yml` in your project's root directory to control Sider analysis.

```yaml
linter:
  rubocop:
    config: 'lint_yml/.myrubocop.yml'

  eslint:
    root_dir: 'frontend'
    npm_install: true
    options:
      config: 'frontend/.eslintrc'
      ext: 'js,jsx'

  stylelint:
    root_dir: 'app/assets/stylesheets'
    options:
      glob: '**/*.{css,scss}'
```

The options you can specify through `sideci.yml` are grouped into two categories.

1. Analyzer specific options
2. Common options available to all analyzers

Currently, `root_dir` is the only one common option.

## Analysis tool specific configuration

You need to put settings on `sideci.yml` if you cannot configure in your settings file of the tool. It usually means command line interface of each tool. In addition, you can use an option to make execution environment of analyzers such as npm install. See [documentations](../tools/README.md) for each tool for the available option of the tool.

## `root_dir` option

This is the common option for analyzers. The option is to specify the directory in your repository where Sider runs the analyzer in. For example, when you put all JavaScript files in frontend directory, you would have a `sideci.yml` like below:

```yaml
linter:
  eslint:
    root_dir: 'frontend'
```

Sider runs ESLint analysis in `frontend` directory. This allows to omit some configurations in `sideci.yml`.

## `ignore` option

This option allows you to ignore specific files. It helps to improve the analysis execution time and the analysis stability.

In order to use the option, add settings below to `sideci.yml`.

```yaml
linter:
  eslint:
    npm_install: true
ignore:
  - ".pdf"
  - ".mp4"
  - "images/**"
```

