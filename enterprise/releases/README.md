# Release Notes

## Latest Release Tags

| Application Name | Tag                |
| ---------------- | ------------------ |
| sideci           | release-2018121001 |
| catpost          | release-2018121001 |
| setaria          | release-2018121001 |

## release-2018121001

### Features

* [Analysis Tools Updates](https://blog.sideci.com/announcement-20181122-fac5ba645901)
* [New Add Repository Flow](https://blog.sideci.com/announcement-20181114-a6314d4c015c)

### Fixes

* Validations of environment variables
    - Previously, sideci would start even if required environment variables were missing, which can lead to runtime
      errors. The server will now raise an error at startup if any required environment variables are missing.

### Update Procedure

See [Update Guide](../../enterprise/quick-start/update.md).

## release-2018111201

### Features

* [Analysis Tools Updates](https://blog.sideci.com/announcement-20181016-1cab5c2cca70)
* [New Repository Page](https://blog.sideci.com/announcement-20181105-6f2b2b66164)

### Fixes

* [GitHub OAuth2 Authorization Scopes Change](https://blog.sideci.com/github-authorization-scopes-update-8225a2d90cdf)
* Fix Invalidation process for browser sessions

### Update Procedure

See [Update Guide](../../enterprise/quick-start/update.md).

And you MUST run this command:

```
$ docker-compose run --rm sideci_web bundle exec rails r script/migrate/20181105_remove_unused_tools.rb
```

## release-2018101201

### Features
* Add [Phinder](../../tools/php/phinder.md) - A new analyzer for PHP
* [New analysis page](https://blog.sideci.com/announcing-new-analysis-page-d7ce2f39df7f)

### Fixes

* Bug fixes
* Use HTTPS for Pusher
    - Although using HTTP, the data leakage has not occurred because we have not included secure data in Pusher payload.
      We just use it for triggering dispatch in browsers

### Update Procedure

See [Update Guide](../../enterprise/quick-start/update.md).

## release-2018091101

### Features
* Send emails when the inline comments fail

### Fixes

* Fixed several UI issues
* Bug fixes

### Update Procedure

See [Update Guide](../../enterprise/quick-start/update.md).

## release-2018081501
Main changes are as follows.

### Fixes
* Fix failure to delete users on admin page

## release-2018072001
Main changes are as follows.

### Fixes
* Fix failure to rendering analysis results page and newsfeed pages when pull requests which had been opened since several month ago remained on Sider.

### Update Procedure
For updating, see also [Update Guide](../../enterprise/quick-start/update.md).

1. Download the application image of `sideci`.
2. Stop applications.
3. Refresh release tag on `docker-compose.yml`.
    * For `sideci_web` and `sideci_worker`, replace older release tags with `release-2018072001`.
4. Start applications.

## release-2018071701
Main changes are as follows.

### Features
* Enable to change language(English/Japanese) on account page.

### Update Procedure
This update has required to apply changes to database.

1. Download application images.
2. Stop applications.
3. Refresh release tags on `docker-compose.yml`.
    * Replace older release tags with `release-2018071701`.
4. Run migration process(as follows commands).
5. Start applications.

Commands:

```
$ docker-compose run --rm sideci_web bundle exec rake db:migrate VERSION=20180621063716
$ docker-compose run --rm sideci_web bundle exec rails r 'User.where(locale: nil).find_each { |user| user.update!(locale: :ja) }'
$ docker-compose run --rm sideci_web bundle exec rake db:migrate
$ docker-compose run --rm catpost_web bundle exec rake db:migrate
$ docker-compose run --rm setaria_web bundle exec rake db:migrate
```

You can use `:en` instead of `:ja`. When you set `:ja` in the command, you will use Sider pages in Japanese. On the other hand, when you set `:en`, you will do it in English.

Although, in those commands, you have to set the same languages, `:ja` or `:en`, to execute migration scripts, any users can change language on their account pages. This [article](https://blog.sideci.com/setting-language-preferences-in-your-account-bb3ee6b42a07) has explained about the feature.

## release-2018061501
Main changes are as follows.

### Changes
* Change context name of commit status to `Sider` from `ci/sideci` on pull request pages.

If you have enabled `Required` for `ci/sideci` as "Require status checks" on repository settings, you have to disable it before update. After applying changes, require status check with `Sider`.

![Commit Status Context](../../.gitbook/assets/commit-status-context.png)

### Update Procedure
For updating, see also [Update Guide](../../enterprise/quick-start/update.md).

1. Download application images.
2. Stop applications.
3. Refresh release tag on `docker-compose.yml`.
    * Replace older release tags with `release-2018061501`.
4. Start applications.

## release-2018051401
### Update Procedure
Apply the update with following steps.

1. Download application images.
2. Stop applications.
3. Refresh release tags on `docker-compose.yml`.
    * Replace older release tags with `release-2018051401`.
4. Run migration process(as follows commands).
5. Start applications.

Commands:

```
$ docker-compose run --rm sideci_web bundle exec rake db:migrate VERSION=20180423083742
$ docker-compose run --rm sideci_web bundle exec rails r 'Services::ApiCacheRefreshService.refresh_all!'
$ docker-compose run --rm sideci_web bundle exec rake db:migrate
$ docker-compose run --rm catpost_web bundle exec rake db:migrate
$ docker-compose run --rm setaria_web bundle exec rake db:migrate
```

## release-2018041601
### Update Procedure
Apply the update with following steps.

1. Download application images.
2. Stop applications.
3. Refresh release tags on `docker-compose.yml`.
    * Replace older release tags with `release-2018041601`.
4. Run migration process(as follows commands).
5. Start applications.

Commands:

```
$ docker-compose run --rm sideci_web bundle exec rake db:migrate VERSION=20180326070805
$ docker-compose run --rm sideci_web bundle exec rails r script/migrate/20180402_set_display_name_from_name_in_organizations.rb
$ docker-compose run --rm sideci_web bundle exec rake db:migrate
$ docker-compose run --rm catpost_web bundle exec rake db:migrate
$ docker-compose run --rm setaria_web bundle exec rake db:migrate
```

## release-2018030701
We highly recommend to stop all services when applying this update.

You can stop all services with command:

```sh
$ docker-compose down
```

### Update Procedure
Apply the update with following steps.

1. Download application images.
2. Stop applications.
3. Refresh release tags on `docker-compose.yml`.
    * Replace older release tags with `release-2018030701`.
4. Run migration process(as follows commands).
5. Start applications.

In addition to the steps, you have to do other 2 steps:

### Replace a Value on `docker-compose.yml`
This version has fixed that pull request status had been the same as SaaS side. To apply the fix, replace `command` of `sideci_worker` with below:

```
bundle exec sidekiq -C ./config/sidekiq.yml
```

### Update Database
With following commands, update database:

```
$ docker-compose run --rm sideci_web bundle exec rails r script/migrate/20180220_ghrepo_null2false.rb
$ docker-compose run --rm sideci_web bundle exec rails r script/migrate/20180123_migrate_trial_subscriptions.rb
$ docker-compose run --rm sideci_web bundle exec rails r script/migrate/20180302_update_last_analyzed_at_of_pull_requests.rb
```

These commands will

* apply database update by SideCI refactoring.
* fix failure to render old analysis on pull requests page.

## release-2018010801

Iniaial release🎉
