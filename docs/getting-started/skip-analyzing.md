---
id: skip-analyzing
title: Skip Analyzing
sidebar_label: Skip Analyzing
hide_title: true
---

# Skip Analyzing

## Via a commit message

If you do not want to run Sider analysis for a particular commit, you can tell Sider to skip analyzing this commit by adding `[skip sider]` or `[sider skip]` in the commit message.

(This feature is similar to the one which some CI services provide.)

For example, you can specify this _magic_ command to your commit title:

    commit c0ea7632bd701c530c91222cd000c9496043573e
    Author: Masafumi Koba

        Fix some emergency UI bugs [skip sider]

Also, you can specify it to your commit description:

    commit 34f11c1ecf87d59b9213a64be06245a5e60eda82
    Author: Masafumi Koba

        Fix trivial typos in README

        [skip sider]

When Sider detects such a commit message, Sider skips analyzing for the commit and does **not** send a commit status.
