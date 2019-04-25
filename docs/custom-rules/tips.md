---
id: tips
title: Custom Rules Tips & Tricks
sidebar_label: Tips & Tricks
---

## Sharing Your Rules among Repositories

### Sharing Goodcheck rules

Goodcheck has a feature to load rule definitions from a URL. You can put the GitHub `Raw` URL in the `goodcheck.yml` to share your rules.

1. Make a repository to share your rules.
2. Check in a *rules* file in the repository.
3. Copy the `Raw` content URL.
4. Put the URL in the `goodcheck.yml`

In `goodcheck.yml`, you can include an `import` section.

```yml
import:
  - "https://raw.githubusercontent.com/acmecorp/rules/master/goodcheck.yml"
```

You can put a *personal access token* in the URL to share your private content. Let the URL have a username and password (the GitHub username and a personal access token.) The URL itself will be a credential. Make sure to keep the rule file secret in this case.

### Sharing Querly rules

When you are using Querly, you can publish your rules as a RubyGem.

- https://github.com/soutaro/querly#requiring-rules

We are working to improve Querly to make it possible to share rules without making a gem.


## Custom Rule Patterns

As we continue to test our tools, we found several patterns to define the rules. Most of our rules follow one of the four templates.

1. Operation manual pattern: _Do something_ `when you` _do something_.
2. Replacement pattern: _Use something_ `instead of` _something_.
3. Warning pattern: `Make sure` _something_ when you do _something_.
4. Tips pattern: `Do you know` _this_?

Generally, Sider helps your teammates find out what they don't know exists. They don't know if they need special steps to apply database migration. They don't know the project already has a good utility method to do something. They don't know about a service issue that occurred seven months before they joined the team. Sider can be used to inform your teammates of these issues when defined as a custom rule.

### Operation manual pattern

You often see this pattern of rules. It's easy to find the examples.

- Read the maintenance operation manual *when you* want scheduled maintenance for database migration.
- Change the `DEFAULT_ARTICLES_ROWS` value in frontend code *when you* change `DEFAULT_ARTICLES_COUNT` value in backend code.

You may already have good documentation for these frequent operations. Sider helps you tell your teammate when they should read them. Do you remember how many times you’ve explained the same thing to new members?

These rules can make your team more robust by sharing knowledge about operations.

### Replacement pattern

You sometimes find an improvement in the way to do something. You define a new API, you add a new option to an existing API, or you define a new Sass mixin. The problem is how to share your improvement with your teammates. If they don't find your improvement, they write in the same old method, not the new improved method.

This problem can be solved using Sider. Add a rule to tell developers your improvement.

- Use `@ellipsis` Sass mixin *instead of* directly defining `text-overflow: ellipsis;`.
- Try using `#with_octokit` helper method *instead of* `User#octokit`.
- Fix `DeleteAccountService` implementation *instead of* defining an association on `Account` model with `dependent: :delete_all`.

These rules can make your code base more consistent at API usage levels.

### Warning pattern

Warning patterns are the linter-like notification. If you find a piece of code would cause a problem, you can warn the developers and ask them to fix it.

- `Make sure` the return value is not `nil` when you call ActiveRecord's `#find_by` method.
- `Make sure` there is no XSS vulnerability when you use `dangerouslySetInnerHTML`.

These rules can make your application more stable.

### Tips pattern

You can also have some tips on the rules. When you find a good practice at a conference or on a blog article, you would want to share it with your team.

- `Do you know` you don't have to `require 'pp'` since Ruby 2.5?
- `Do you know` the `Intl` API in JavaScript?

Sider automatically shows the tips when related API is used. One drawback of this pattern is, as people already experienced in many other apps, having too many tips is annoying.
