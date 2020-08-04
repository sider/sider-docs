---
id: custom-configuration
title: Custom Analysis Configuration
sidebar_label: Custom Analysis Configuration
hide_title: true
---

# Custom Analysis Configuration

You don't need to do any special configuration for Sider to start analyzing your code. However, Sider also offers advanced settings for special cases via the `sider.yml` file.

> `sideci.yml` is still supported for the backward compatibility, but Sider recognizes `sider.yml` if both exist.

## Configuration file

Add a file named `sider.yml` in your project's root directory. Here is an example:

```yaml
linter:
  rubocop:
    config: "lint_yml/.myrubocop.yml"

  eslint:
    root_dir: "frontend"
    npm_install: false
    config: "frontend/.eslintrc"
    ext: "js,jsx"

  stylelint:
    root_dir: "app/assets/stylesheets"
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

_Type:_ `string`

This is a common option available to all analyzers. This option specifies a directory in your repository from which Sider should run the analyzer in. For example, if you have all your JavaScript files in the `./frontend` directory, you could configure `sider.yml` like this:

```yaml
linter:
  eslint:
    root_dir: "frontend"
```

Sider will run ESLint analysis in `./frontend` directory.

## `linter.<analyzer_id>.gems`

_Type:_ `string[]`, `hash[]`

Some analyzers written in Ruby can be customized with third-party [gems](https://rubygems.org/). With Sider, you can use [Bundler](https://bundler.io/) to install any gem. The following is an example of installing RuboCop plugins or configuration gems:

```yaml
linter:
  rubocop:
    gems:
      - name: "meowcop"
        version: "1.17.0"
```

You can also set the version of the analyzer you want to use. However, the version must meet Sider's constraints. Please refer to each analyzer page.

```yaml
linter:
  rubocop:
    gems:
      - name: "rubocop"
        version: "0.66.0"
```

### Understanding the analyzer version

Sider decides the analyzer version in the following order:

1. `gems` option in `sider.yml`
2. `Gemfile.lock`
3. The default version

However, if the version written in `Gemfile.lock` does not satisfy our constraints, that version is skipped.

### Install gems from `Gemfile.lock`

If you want to additionally install a specific gem written in `Gemfile.lock`, you can omit the `version` as follows:

```yaml
linter:
  rubocop:
    gems:
      - "rubocop-rspec"
```

If the gem is not found in `Gemfile.lock`, the latest version is installed.

### Install gems from third-party RubyGems repository

You can select an alternate RubyGems repository as a gem source via the source option:

```yaml
linter:
  rubocop:
    gems:
      - name: "rubocop-mycompany"
        version: "0.63.0"
        source: "https://gems.mycompany.com"
```

### Install gems from Git repository

You can also install a gem in a git repository. Please note that the git option cannot be specified with version or source.

```yaml
linter:
  rubocop:
    gems:
      - name: "rubocop-mycompany-standard"
        git:
          repo: "https://github.com/mycompany/rubocop-mycompany-standard.git"
          branch: "master"
      - name: "rubocop-mycompany-extensions"
        git:
          repo: "git@github.com/mycomapny/rubocop-mycompany-extensions.git"
          tag: "v0.63.0"
```

`git` option has options below:

| Name     | Type     | Description                                                                        |
| -------- | -------- | ---------------------------------------------------------------------------------- |
| `repo`   | `string` | Git repository location. The repository can be accessed via HTTP(S)/SSH protocols. |
| `branch` | `string` | Branch name.                                                                       |
| `tag`    | `string` | Tag name.                                                                          |
| `ref`    | `string` | Ref name.                                                                          |

If you would like to install a gem located in a private git repository, see [private dependencies guide](../advanced-settings/private-dependencies.md) and configure SSH key.

## `linter.<analyzer_id>.npm_install`

_Type:_ `boolean`, `string`

For npm-published analyzers such as [ESLint](../tools/javascript/eslint.md) or [stylelint](../tools/css/stylelint.md), you can use the `npm_install` option to configure the behavior of npm dependencies installation. This option has the following values:

| Value            | Description                                                                             |
| ---------------- | --------------------------------------------------------------------------------------- |
| `true` (default) | Install dependencies via [npm](https://docs.npmjs.com/) or [Yarn](https://yarnpkg.com). |
| `false`          | Do not install any dependencies.                                                        |
| `"production"`   | Install only dependencies for production.                                               |
| `"development"`  | Install only dependencies for development.                                              |
| Others           | Fail analysis.                                                                          |

For example:

```yaml
linter:
  eslint:
    npm_install: "development"
  stylelint:
    npm_install: false
```

When the `npm_install` option is not `false`, Sider will try as follows:

1. Check if `package.json` exists. If not present, Sider uses the default version of the analyzers.
2. If `package.json` and `yarn.lock` exist, Sider runs the [`yarn install`](https://yarnpkg.com/lang/en/docs/cli/install/) command.
3. If `package.json` and `package-lock.json` exist, Sider runs the [`npm ci`](https://docs.npmjs.com/cli/ci) command.
4. If `package.json` exists but none of `yarn.lock` and `package-lock.json` exist, Sider runs the [`npm install`](https://docs.npmjs.com/cli/install) command.
5. Checks if the analyzer is installed in the `node_modules` directory.
6. If installed, Sider uses the installed version.
7. If not installed (for any reason), Sider uses the pre-installed default version.
   - In this case, Sider shows warnings.

When the option is `false`, Sider will skip these installation steps and analyze with the pre-installed default version.
You might want to set the option to `false` if you don't configure analyzer and don't want to see warnings.

## `linter.<analyzer_id>.jvm_deps`

_Type:_ `string[]`

For JVM tools such as Checkstyle or ktlint, this option allows you to load third-party rules or plugins. For example:

```yaml
linter:
  checkstyle:
    jvm_deps:
      - [com.github.sevntu-checkstyle, sevntu-checks, 1.37.1]
```

Each element of a `jvm_deps` array must have 3 properties: `[group, name, version]`.
These 3 properties follows the Maven repository style, and you can install dependencies registered in Maven repositories:

The currently supported repositories are:

- Maven Central Repository
- JCenter Maven Repository
- Google's Maven Repository

## `linter.<analyzer_id>.apt`

_Type:_ `string`, `string[]`

Development packages provided by the OS environment may be necessary, particularly for projects written in C/C++. Sider lets you install packages with `APT`, which is a package manager for `Debian` based Linux distributions.

The `apt` option allows you to specify a list of development packages your project depends on.
The packages must satisfy the conditions below:

- Packages must be compatible with [our Docker image](https://github.com/sider/devon_rex/blob/master/base/Dockerfile).
- Package names must be suffixed with "-dev".
- Each package name must be formatted as `<name>` or `<name>=<version>`.

Below is an example of how you install the latest version of `libgdbm-dev` and the specific version (0.99.8-2) of `libfastjson-dev`.

```yaml
linter:
  clang_tidy:
    apt:
      - libgdbm-dev
      - libfastjson-dev=0.99.8-2
```

## `linter.<analyzer_id>.include-path`

_Type:_ `string`, `string[]`

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

_Type:_ `string[]`

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

_Type:_ `string[]`

This option allows you to exclude branches from the analysis. If there are branches that are unnecessary for your team to analyze, use the `branches` option.
When setting this option, Sider will not analyze the branch specified in this option.

In order to use this option, add it as a top-level in `sider.yml` like this:

```yaml
branches:
  exclude:
    - master
    - development
    - another_branch
```

With the above setting, Sider will ignore `master`, `development` and `another_branch` branches when these branches(pull requests) are updated or opened. That is, even if these branches have any changes, Sider will not send commit status and not review them.

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
