---
id: private-dependencies
title: Private Dependencies
sidebar_label: Private Dependencies
hide_title: true
---

# Private Dependencies

Analyzing a private project sometimes needs access to other private libraries or packages hosted on private repositories.
Your team might be using a Git repository to distribute such private libraries.
Such a kind of dependencies is supported by some package managers like Bundler or npm.

We support accessing to private repositories via SSH during an analysis session.
Let’s check the following steps out.

> **Tip**: Do analysis tools (e.g., ESLint or RuboCop) require your private dependencies?
> If not, please consider using the [`dependencies` option](../getting-started/custom-configuration.md#linteranalyzer_iddependencies) of `sider.yml` instead.

## Generate SSH key pair

First, you need to generate an SSH key pair on your repository settings on Sider.

Visit **Settings** on your repository, and then click **Keys**.

![Generate SSH private key](../assets/ssh-key-generate-key.png)

When you click **Generate Key**, Sider automatically generates a 4096-bit RSA key pair used for the private dependency resolution.

> **NOTE**: We **don’t recommend** adding secret keys to public repositories.
> Their analysis results are publicly accessible, and your secret keys might get exposed.

## Add SSH public key to GitHub

![Download SSH public key](../assets/ssh-key-download-key.png)

After generating a key pair, click **Download Public Key**. You can download the SSH public key.

Next, you need to add the downloaded public key to GitHub.
You can add it via the following 2 ways:

- as a [deploy key](#deploy-key)
- as an [SSH key of a machine user](#ssh-key-of-machine-user)

### Deploy key

If you have just one private dependency, using a deploy key is simple.

Suppose that you have the following private npm package and private repository hosting it:

- Package name: `awesome`
- Repository URL: `https://github.com/foo-company/awesome`

Your `package.json` should look like this:

```json
{
  "dependencies": {
    "awesome": "git+ssh://git@github.com:foo-company/awesome.git#v1.2.3"
  }
}
```

To install this package during an analysis session, you need to add the downloaded public key as a deploy key to the `foo-company/awesome` repository on GitHub.
The steps are as follows:

1. Visit `https://github.com/foo-company/awesome`
2. Click **Settings**
3. Click **Deploy keys**
4. Click **Add deploy key**
5. Enter the public key and save it

For details, check out the [GitHub documentation](https://docs.github.com/en/free-pro-team@latest/developers/overview/managing-deploy-keys#deploy-keys).

When you add the deploy key and start a new analysis, installing the private package should succeed.

### SSH key of machine user

If you have multiple private dependencies, adding a deploy key does not work
because we cannot add the same deploy key to multiple repositories on GitHub.

In such a case, you need to prepare a [machine user](https://docs.github.com/en/free-pro-team@latest/developers/overview/managing-deploy-keys#machine-users) account
and attach the public key to the account.
Note that the machine user must have _read_ access to your private repositories.

Suppose that you have a machine user account named _foobot_ and the following `package.json`:

```json
{
  "dependencies": {
    "awesome": "git+ssh://git@github.com:foo-company/awesome.git#v1.2.3",
    "marvelous": "git+ssh://git@github.com:foo-company/marvelous.git#v0.9.0"
  }
}
```

To install these packages, _foobot_ need to have access to the `foo-company/awesome` and `foo-company/marvelous` repositories.
When you attach the public SSH key to _foobot_, _foobot_ can access these repositories.
The steps are as follows:

1. Sign in to GitHub as the machine user
2. Visit **Settings** of the machine user
3. Click **SSH and GPG keys**
4. Click **New SSH key**
5. Enter the public key and save it
6. Give the machine user access to the private repositories (_read_ access at least)

For details, check out the following documentation on GitHub:

- About [adding a new SSH key](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)
- About [managing access to a repository](https://docs.github.com/en/free-pro-team@latest/github/administering-a-repository/managing-teams-and-people-with-access-to-your-repository)

## Supported package managers

We support the following package managers that can install packages from Git repositories:

- [Bundler](https://bundler.io) (Ruby)
- [npm](https://www.npmjs.com) (JavaScript)

If you want to install private dependencies via Bundler, note that you need to configure your [`sider.yml`](../getting-started/custom-configuration.md).
For example:

```yaml
linter:
  rubocop:
    dependencies:
      - name: rubocop-foo-company
        git:
          repo: git@github.com:foo-company/rubocop-foo-company.git
          tag: v1.2.3
```

See the [`dependencies`](../getting-started/custom-configuration.md#for-bundler) option for details.
