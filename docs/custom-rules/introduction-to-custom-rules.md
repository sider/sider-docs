---
id: introduction-to-custom-rules
title: Introduction to Custom Rules
sidebar_label: Intro to Custom Rules
hide_title: true
---

# Introduction to Custom Rules

## What are Custom Rules?

Custom rules are sets of code patterns and messages used by Sider’s supported static code analyzers. You write custom rules to enforce your projects guidelines and share code-base knowledge. If the rules match a pattern in the code, they report a message. 

## Why it matters?

Sharing code-base knowledge has many benefits to help improve projects, but sharing this information can be tedious and impractical. Creating custom rules provides a practical solution to embed project knowledge into your workflow, alerting your team of issues when they need it.

## What are the tools?

Sider currently supports 3 tools to analyze against custom rules. 

- [Goodcheck](#goodcheck) for general text source code.
- [Querly](#querly) for Ruby.
- [Phinder](#phinder) for PHP.

### Goodcheck

Goodcheck is a tool that takes custom rules and matches the pattern with code. The rule’s patterns are defined with regular expressions which allow it to work across all or specific text source code. 
 
In this example, we look at maintaining consistent wording. When a user sees both “Sign in” and “Log in” within your web application, it may cause confusion or detract from the user experience.

```yaml
rules:
  - id: review.sider.wording.signin
    pattern:
      - token: Log in
        case_sensitive: false
      - token: Log out
        case_sensitive: false
    glob: 
      - "**/*.html.erb"
      - "**/*.yml"
    message: |
      Please use “sign in”/“sign out”.

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

In this example, Goodcheck will analyze files with `.html`, `.erb` and `.yml` extensions for the pattern “Log in” or “Log out”. If the pattern is found, it would display the message “Please use “sign in”/”sign out".”

### Querly

Querly is a tool that understands Ruby syntax. It can take more complex patterns and find them in Ruby code.

In this example, assume there is an `oauth_token` method in your codebase. It is a credential and should not be leaked to logs. A developer adds a new option filtered. When filtered is true, the method returns an obfuscated token instead of a raw token so that you can write the obfuscated token on logs. Note that the behavior of `oauth_token` cannot be changed because the method is already used in the codebase.

```yaml
rules:
  - id: sider.auth_token
    pattern: "_.oauth_token(!filtered: true)"
    message: |
      OAuth tokens are credential! Make sure they are filtered in logs.
    justification:
      - When you need an authentication for API calls
    examples:
      - before: "user.oauth_token[0...8] + '...'"
        after: "user.oauth_token(filtered: true)"
```

With this rule, Querly would analyze Ruby source code files for any Ruby expression that includes the `oauth_token` method and checks if there is `filtered: true` as an argument. If there isn’t, then a message will notify developers of the `filtered` option. 


### Phinder

Phinder is a tool that understands PHP syntax. It can take complex PHP patterns and match them with PHP code.

Assume your service had an outage because of a `PostCategory::import_records(associations)` call. The method implements bulk insertion of given rows into a table. It is faster than inserting the rows one by one but may result in a deadlock, which is what caused the service outage. You can put links to the issue reports to help the developer to understand what they have to do to make the function call safe.

```yaml
- id: com.example.app.article 
  pattern: "_::import_records(_)" 
  message: | 
    `import_records(associations)` may block DB access 

    Read the following reports and double check the method call does not block DB access. 

    - https://github.com/example/server/issue/1234 
    - https://github.com/example/server/issue/1551
```

In this example, Phinder will match any PHP expression with a `import_records` class method. If there is a match, the message directs developers to the proper steps needed to make the function call safe.

## Explainer Video

<div class="Video">
 <iframe class="Video__iframe" src="https://www.youtube.com/embed/jU4xQ1R0MIU" frameborder="0" allowfullscreen></iframe>
</div>