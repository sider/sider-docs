# Custom Analysis Configuration

You don't need to do any special configuration in order for Sider to start analyzing your code. However, Sider also offers advanced settings for special cases via the sideci.yml file.

## Configuration via `sideci.yml`

First, add a file named `sideci.yml` in your project's root directory.

```yaml:sideci.yml
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

The options you can specify in `sideci.yml` are grouped into two categories:

1. Analyzer specific options
2. Common options available to all analyzers

Currently, `root_dir` is the only common option.

## Analysis tool specific configuration

You need to put settings on `sideci.yml` if you cannot configure in your settings file of the tool. It usually means command line interface of each tool. In addition, you can use an option to make execution environment of analyzers such as npm install. See [documentations](../tools/README.md) for each tool for the available option of the tool. **TODO: I can't really understand this - need clarification**

## `root_dir` option

This is a common option available to all analyzers. This option specifies a directory in your repository from which Sider should run the analyzer in. For example, if you have all your JavaScript files in the `./frontend` directory, you could configure `sideci.yml` like this:

```yaml:sideci.yml
linter:
  eslint:
    root_dir: 'frontend'
```

Sider will run ESLint analysis in `./frontend directory`. This allows you to omit some configurations in `sideci.yml`. **TODO: Not sure what this last sentence means?**

## `ignore` option

This option allows you to ignore specific files. It helps to improve the analysis execution time and the analysis stability.

In order to use this option, add it to `sideci.yml` like this:

```yaml:sideci.yml
linter:
  eslint:
    npm_install: true
ignore:
  - ".pdf"
  - ".mp4"
  - "images/**"
```

