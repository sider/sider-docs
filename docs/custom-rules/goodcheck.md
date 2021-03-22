---
id: goodcheck
title: Goodcheck
sidebar_label: Goodcheck
hide_title: true
---

# Goodcheck

Goodcheck is a cross-language linter which allows you to create custom rules. Rules are created by defining pairs of patterns with messages.

## Rules & Examples

Example rules can be copied and pasted into your `goodcheck.yml` file.
For more information on setting up Goodcheck, please see [basic instructions](#basic-instructions).

The rule map contains the following **required** keys.

- `id`: a string to identify rules.
- `pattern`: a _pattern_ or a sequence of *pattern*s.
- `message`: a string to tell writers why the code piece should be revised.
  - We recommend writing the message in Markdown (CommonMark) so that it is shown correctly on Sider and GitHub. E.g. wrapping an HTML tag with backticks.

The rule map contains the following _optional_ keys.

- `justification`: a sequence of strings to tell writers of exceptions to the rule.
- `glob`: a _glob_ or a sequence of *glob*s.
- `pass`: a string, or a sequence of strings. A test that should not match the given pattern.
- `fail`: a string, or a sequence of strings. A test that should match the given pattern.

### Rule: `target=_blank` Security Issue

When `target=_blank` is used, the opened page can access the original window object and potentially redirect the original page to a malicious URL. In this example, the rule will look for patterns of `"_blank"` and suggest to use `rel="noopener"` to prevent the opened page from having access.

```yaml
rules:
  - id: security.link
    pattern:
      - token: 'target="_blank"'
      - token: 'target: "_blank"'
    message: |
      Specify rel="noopener" for security reasons.

      Opening new tab without rel="noopener" may cause a security issue.
      It allows modifying original tab URLs from opened tabs.
    justification:
      - When opening a URL in our service
    glob:
      - "**/*.html"
      - "**/*.html.erb"
    fail:
      - '<a href="https://github.com" target="_blank">GitHub</a>'
    pass:
      - '<a href="/signup">Signup</a>'
```

### Rule: Sign in

> Warning: This rule needs customization.

Keep wording consistent to provide a clear experience for users. In this example, the use of Log in or Log out would prompt the use of sign in / sign out instead.

```yaml
rules:
  - id: wording.signin
    pattern:
      - token: Log in
        case_sensitive: false
      - token: Log out
        case_sensitive: false
    glob:
      - "**/*.html.erb"
      - "**/*.yml"
    message: |
      Please use “sign in”/“sign out”

      We use “sign in” instead of “log in” and “sign out” instead of “log out”.
      See the wording policy for details.

      https://docs.example.com/1840
    fail:
      - "Log in"
      - "Log out"
    pass:
      - "Sign in"
      - "Sign out"
```

### Rule: mixin

> Warning: This rule needs customization.

A mixin lets you make groups of CSS declarations that you want to reuse throughout your site. In this example, it creates a warning when the color pattern is used and suggests using a mixin instead.

```yaml
rules:
  - id: use-mixin
    message: Use mixin.
    pattern: "color: #038cf4;"
    pass:
      - "@include some-mixin;"
    fail:
      - "color: #038cf4;"
```

## Basic instructions

1. Enable goodcheck in your Sider repository. (Skip this step if Goodcheck is already activated)
2. Create a `goodcheck.yml` file in the root directory of your repository.
3. Write your own rule or copy rule(s) into the goodcheck.yml file.
   (`rules:` is only needed as the first line of the `goodcheck.yml` file.)
4. Sider will check open pull requests against the `goodcheck.yml` file.

## Goodcheck video tutorial

<div class="Video">
 <iframe class="Video__iframe" src="https://www.youtube.com/embed/8Zpm2gguE1M" frameborder="0" allowfullscreen></iframe>
</div>

## Links

- Goodcheck [Documentation](https://github.com/sider/goodcheck)
- Sample [goodcheck.yml](https://github.com/sider/goodcheck/blob/HEAD/sample.yml) file
- Bugs, issues, suggestions or contributions? Please [post them here](https://github.com/sider/goodcheck/issues)
