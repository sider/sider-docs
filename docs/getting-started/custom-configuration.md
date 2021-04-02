---
id: custom-configuration
title: Custom Analysis Configuration
sidebar_label: Custom Analysis Configuration
hide_title: true
---

# Custom Analysis Configuration

Usually, you don't need to do any special configuration for Sider to start analyzing your code.
However, Sider also offers advanced settings for special cases via the configuration file named `sider.yml` (learn more about [YAML](https://yaml.org/)).

> `sideci.yml` is still supported for the backward compatibility, but it will be unsupported in the future. Please rename it to `sider.yml` as possible.

## Configuration file

Add a file named `sider.yml` in your project's root directory. Here is an example:

```yaml
# This is a YAML file. See <https://yaml.org>.
linter:
  rubocop:
    config: "lint_yml/.myrubocop.yml"

  eslint:
    root_dir: "frontend/"
    npm_install: false
    config: "frontend/.eslintrc"

  stylelint:
    root_dir: "app/assets/stylesheets/"
    glob: "**/*.{css,scss}"

ignore:
  - "images/**"
```

The options you can specify in `sider.yml` are grouped into the following categories:

1. Analyzer-specific options (under `linter`)
   - [`linter.brakeman`](../tools/ruby/brakeman.md)
   - [`linter.checkstyle`](../tools/java/checkstyle.md)
   - [`linter.clang_tidy`](../tools/cplusplus/clang-tidy.md)
   - [`linter.code_sniffer`](../tools/php/code-sniffer.md)
   - [`linter.coffeelint`](../tools/javascript/coffeelint.md)
   - [`linter.cppcheck`](../tools/cplusplus/cppcheck.md)
   - [`linter.cpplint`](../tools/cplusplus/cpplint.md)
   - [`linter.detekt`](../tools/kotlin/detekt.md)
   - [`linter.eslint`](../tools/javascript/eslint.md)
   - [`linter.flake8`](../tools/python/flake8.md)
   - [`linter.fxcop`](../tools/csharp/fxcop.md)
   - [`linter.golangci_lint`](../tools/go/golangci-lint.md)
   - [`linter.goodcheck`](../tools/others/goodcheck.md)
   - [`linter.hadolint`](../tools/dockerfile/hadolint.md)
   - [`linter.haml_lint`](../tools/ruby/haml-lint.md)
   - [`linter.javasee`](../tools/java/javasee.md)
   - [`linter.jshint`](../tools/javascript/jshint.md)
   - [`linter.ktlint`](../tools/kotlin/ktlint.md)
   - [`linter.languagetool`](../tools/others/languagetool.md)
   - [`linter.misspell`](../tools/others/misspell.md)
   - [`linter.phinder`](../tools/php/phinder.md)
   - [`linter.phpmd`](../tools/php/phpmd.md)
   - [`linter.pmd_cpd`](../tools/others/pmd-cpd.md)
   - [`linter.pmd_java`](../tools/java/pmd.md)
   - [`linter.pylint`](../tools/python/pylint.md)
   - [`linter.querly`](../tools/ruby/querly.md)
   - [`linter.rails_best_practices`](../tools/ruby/rails-best-practices.md)
   - [`linter.reek`](../tools/ruby/reek.md)
   - [`linter.remark_lint`](../tools/markdown/remark-lint.md)
   - [`linter.rubocop`](../tools/ruby/rubocop.md)
   - [`linter.scss_lint`](../tools/css/scss-lint.md)
   - [`linter.shellcheck`](../tools/shellscript/shellcheck.md)
   - [`linter.stylelint`](../tools/css/stylelint.md)
   - [`linter.swiftlint`](../tools/swift/swiftlint.md)
   - [`linter.tslint`](../tools/javascript/tslint.md)
   - [`linter.tyscan`](../tools/javascript/tyscan.md)
2. Non analyzer-specific options
   - [`ignore`](#ignore)
   - [`branches.exclude`](#branchesexclude)

### Analyzer-specific options

You can use `sider.yml` to configure each analyzer's vendor-supplied settings.
Sider also provides extra options for some analyzers that configure how Sider runs the analyzer (for example, some tools might need to run `npm install` before beginning analysis).
See each analyzer's documentation for more details about available options.

---

The following sections describe the available options.

## `linter.<analyzer_id>.root_dir`

_type:_ `string`

This is a common option available to all analyzers. This option specifies a directory in your repository from which Sider should run the analyzer in. For example, if you would like to analyze only files in the `frontend/` directory, you could configure `sider.yml` like this:

```yaml
linter:
  eslint:
    root_dir: "frontend/"
```

In the configuration above, Sider will run ESLint at the `frontend/` directory (perhaps will load files such as `frontend/.eslintrc.js` or `frontend/package.json`).

If you omit this option, Sider will use your repository root directory (sufficient in most cases).

## `linter.<analyzer_id>.dependencies`

_type:_ `string[]`, `map[]`

This common option allows you to install dependencies required by analyzers.
The option may be useful when you do not want to manage dependencies by yourself (such dependencies are often needless at runtime) or avoid some dependency problems.

We support the following package managers:

- [Bundler](#for-bundler) (for Ruby)
- [npm](#for-npm) (for JavaScript)
- [Gradle](#for-gradle) (for Java)
- [APT](#for-apt) (for C/C++)

There are some ways to use this option, for example:

```yaml
linter:
  rubocop: # via Bundler
    dependencies:
      - "rubocop-rails"
      - { name: "rubocop-rails", version: "2.9.0" }
      - { name: "rubocop-rails", version: "2.9.0", source: "..." }
      - { name: "rubocop-rails", git: { ... } }

  eslint: # via npm
    dependencies:
      - "eslint-plugin-react"
      - "eslint-plugin-react@7.23.1"
      - { name: "eslint-plugin-react", version: "7.23.1" }

  checkstyle: # via Gradle
    dependencies:
      - "io.spring.javaformat:spring-javaformat-checkstyle:0.0.27"
      - { name: "io.spring.javaformat:spring-javaformat-checkstyle", version: "1.37.1" }
```

See also each package manager's section below.

### For Bundler

Sider uses [Bundler](https://bundler.io) to install Ruby dependencies (called _gems_).
If gems for an analyzer are in your `Gemfile.lock`, Sider will install the gems with no configuration.
Also, if `Gemfile.lock` is not found, Sider will use our default version instead of installing gems.
This means that you _basically_ have to do nothing about installation.

Sider decides a Ruby analyzer version in the following order:

1. by the `dependencies` option in your `sider.yml` file
2. in your `Gemfile.lock` file
3. our default version

If a gem version is omitted in the `dependencies` option, the version installed will depend on your `Gemfile.lock` content.
For example, when `Gemfile.lock` includes `rubocop-rails (2.9.0)` and does not include `rubocop-rspec`:

```yaml
linter:
  rubocop:
    dependencies:
      - "rubocop-rails" # install the version 2.9.0 (present in `Gemfile.lock`)
      - "rubocop-rspec" # install the latest version (absent in `Gemfile.lock`)
```

#### Install gems from third-party RubyGems repository

You can also use an alternate RubyGems repository via the `source` option:

```yaml
linter:
  rubocop:
    dependencies:
      - name: "rubocop-mycompany"
        version: "0.63.0"
        source: "https://gems.mycompany.com"
```

#### Install gems from Git repository

You can also install gems from a Git repository via the `git` option. Please note that the `git` option cannot be specified with `version` or `source`.

```yaml
linter:
  rubocop:
    dependencies:
      - name: "rubocop-mycompany-standard"
        git:
          repo: "https://github.com/mycompany/rubocop-mycompany-standard.git"
          branch: "main"
      - name: "rubocop-mycompany-extensions"
        git:
          repo: "git@github.com/mycomapny/rubocop-mycompany-extensions.git"
          tag: "v0.63.0"
```

The `git` option accepts the following options:

| Name     | Type     | Description                                                     |
| -------- | -------- | --------------------------------------------------------------- |
| `repo`   | `string` | Git repository location accessible via HTTP(S) or SSH protocols |
| `branch` | `string` | Branch name                                                     |
| `tag`    | `string` | Tag name                                                        |
| `ref`    | `string` | Ref name                                                        |

If you would like to install a gem located in a private Git repository, see [Private Dependencies](../advanced-settings/private-dependencies.md).

### For npm

Sider uses [npm](https://docs.npmjs.com) to install JavaScript dependencies. There are the following ways:

- Specify a dependency name without a version. This will install the latest version.
- Specify a dependency name and version with the [`npm install`](https://docs.npmjs.com/cli/v7/commands/npm-install) format `<name>@<version>`.
- Specify a dependency name and version with a _map_ including `name` and `version`.

For example:

```yaml
linter:
  eslint:
    dependencies:
      - "eslint-plugin-react"
      - "eslint-plugin-react@7.23.1"
      - { name: "eslint-plugin-react", version: "7.23.1" }
```

If you specify this option, [`linter.<analyzer_id>.npm_install`](#linteranalyzer_idnpm_install) will be ignored.

### For Gradle

Sider uses [Gradle](https://gradle.org) to install Java dependencies. There are the following ways:

- Specify a dependency name and version with the [Gradle format](https://docs.gradle.org/current/dsl/org.gradle.api.artifacts.dsl.DependencyHandler.html) `<group>:<name>:<version>`.
- Specify a dependency name and version with a _map_ including `name` and `version`.

```yaml
linter:
  checkstyle:
    dependencies:
      - "io.spring.javaformat:spring-javaformat-checkstyle:0.0.27"
      - { name: "io.spring.javaformat:spring-javaformat-checkstyle", version: "1.37.1" }
```

### For APT

Sider uses [APT](https://salsa.debian.org/apt-team/apt), which is a package manager for Debian-based Linux distributions, to install C/C++ dependencies.
Development packages provided by the OS environment may be necessary, particularly for projects written in C/C++.

There are the following ways:

- Specify a dependency name without a version. This will install the latest version.
- Specify a dependency name and version with the format `<name>=<version>`.
- Specify a dependency name and versiont with a _map_ including `name` and `version`.

```yaml
linter:
  clang_tidy:
    dependencies:
      - "libfastjson-dev"
      - "libfastjson-dev=0.99.8-2"
      - { name: "libfastjson-dev", version: "0.99.8-2" }
```

The dependencies must satisfy the following requirements:

- Packages must be compatible with our [Docker image](https://github.com/sider/devon_rex/blob/HEAD/base/Dockerfile).
- Package names must have the suffix `-dev`.

## `linter.<analyzer_id>.npm_install`

_type:_ `boolean`, `string`

For npm-published analyzers such as [ESLint](../tools/javascript/eslint.md) or [stylelint](../tools/css/stylelint.md), you can use the `npm_install` option to configure the behavior of npm dependencies installation. This option accepts one of the following values:

| Value               | Description                                            |
| ------------------- | ------------------------------------------------------ |
| `true` (default)    | Install dependencies via [npm](https://docs.npmjs.com) |
| `false`             | Do nothing                                             |
| `"production"`      | Install only _production_ dependencies                 |
| ~~`"development"`~~ | **Deprecated**. This will be removed                   |

For example:

```yaml
linter:
  eslint:
    npm_install: "production"
  stylelint:
    npm_install: false
```

When the `npm_install` option is not `false`, Sider will try installing dependencies in `package.json`, `package-lock.json`, or `yarn.lock`
via the [`npm install`](https://docs.npmjs.com/cli/v7/commands/npm-install) or [`npm ci`](https://docs.npmjs.com/cli/v7/commands/npm-ci) command.

If the installation fails for some reason or this option is set to `false`, Sider will use our default pre-installed version.

## `linter.<analyzer_id>.gems`

This is an alias of [`linter.<analyzer_id>.dependencies`](#linteranalyzer_iddependencies).
Please use `dependencies` instead of `gems` because it will be **deprecated**.

## `linter.<analyzer_id>.jvm_deps`

> **DEPRECATED**: This option is deprecated. Use the [`linter.<analyzer_id>.dependencies`](#for-gradle) option instead.

## `linter.<analyzer_id>.apt`

> **DEPRECATED**: This option is deprecated. Use the [`linter.<analyzer_id>.dependencies`](#for-apt) option instead.

## `linter.<analyzer_id>.include-path`

_type:_ `string`, `string[]`

Some C/C++ analyzers can handle include paths like C/C++ preprocessors can. With Sider, the `include-path` option allows you to add directories to include search paths.

For example:

```yaml
linter:
  clang_tidy:
    include-path:
      - myinclude
      - foo/include
      - /usr/include/libfastjson
```

Sider treats this option as a compilation option `-I` and passes it as command-line arguments internally. For example, Sider executes [Clang-Tidy](../tools/cplusplus/clang-tidy.md) like this:

```console
$ clang-tidy test.cpp -- -Imyinclude -Ifoo/include -I/usr/include/libfastjson
```

If you omit this option, Sider searches for header files that are part of your project and applies the directories of found files to the include search path.

## `ignore`

_type:_ `string[]`

This option allows you to ignore specific files. It helps to improve the analysis execution time and the analysis stability.
The format of each `ignore` item follows [gitignore(5)](https://git-scm.com/docs/gitignore).

In order to use this option, add it as a top-level in `sider.yml` like this:

```yaml
ignore:
  - "*.pdf"
  - "*.mp4"
  - "*.min.*"
  - "images/**"
```

## `branches.exclude`

_type:_ `string[]`

This option allows you to exclude branches from the analysis. If there are branches that are unnecessary for your team to analyze, use the `branches` option.
When setting this option, Sider will not analyze the branch specified in this option.

In order to use this option, add it as a top-level in `sider.yml` like this:

```yaml
branches:
  exclude:
    - main
    - development
    - another_branch
```

With the above setting, Sider will ignore `main`, `development` and `another_branch` branches when these branches (pull requests) are updated or opened. That is, even if these branches have any changes, Sider will not send commit status and not review them.

> If Sider is enabled to make status checks required on GitHub, you cannot merge a branch because Sider will not send the commit status to GitHub.
> In this case, you need to disable the check status setting on your GitHub repository page.

> If you want to know more details about this GitHub setting, read the GitHub documentation; [About required status checks](https://help.github.com/articles/about-required-status-checks/) and [Enabling required status check](https://help.github.com/articles/enabling-required-status-checks/).

You can also use regular expressions as the `exclude` pattern:

```yaml
branches:
  exclude:
    - /^release-.*$/
    - /^dependabot/
```

In the above example, all branches such as `release-20190304` or `dependabot/bundler/aws-partitions-1.202.0` are ignored.
