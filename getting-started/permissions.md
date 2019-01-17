# Permissions

Users are required to have specific permissions to perform certain actions with Sider. Because Sider is integrated into GitHub, names of permission levels are the same as those set on GitHub.
If you need more information about permission levels, read the GitHub documentations: "[Permission levels for an organization](https://help.github.com/articles/permission-levels-for-an-organization/)" and "[Repository permission levels for an organization](https://help.github.com/articles/repository-permission-levels-for-an-organization/)".

For the organization settings, Sider checks for permissions in an organization. For the repository settings, appropriate permissions to a repository is needed.

## Permissions requirement for an organization

| Action | Billing Manager | Members | Owners |
| ------ | :-------------: | :-----: | :----: |
| Install Sider | | | X |
| See repository adding page | | X | X |
| Add repositories | | X¹| X |
| See repositories | | X² | X |
| Enable repositories | | | X |
| Delete repositories | | | X |
| Register credit cards | | | X |
| Upgrade plan | | | X |
| Cancel plan | | | X |
| Assign seats | | | X |
| Add Billing Manager | | | X |
| Edit Billing Manager | | | X |
| Delete Billing Manager | | | X |
| Show invoices | X | X | X |
| Add supplementary information to a invoice | | | X |

¹ Admin permission to a repository is required.

² Only repositories you can access will be displayed.

## Permissions requirement for a repository

| Action | Read permissions | Write permissions | Admin permissions |
| ------ | :--------------: | :---------------: | :---------------: |
| Add repositories | | | X³ |
| See analyzing/analyzed pull requests | X | X | X |
| See analysis results | X | X | X |
| Comment to issues | X | X | X |
| Comment and close issues | | X | X |
| Close issues | | X | X |
| Close all issues simultaneously | | X | X |
| Reopen issues | | X | X |
| Retry analyses | | X | X |
| See analysis logs | X | X | X |
| See repository settings | | X | X |
| Enable inline comments | | X | X |
| Sync repositories with GitHub | | X | X |
| Register SSH Key | | X | X |
| Delete SSH Key | | X | X |
| Add Slack integration | | X | X |
| Edit Slack integration | | X | X |
| Delete Slack integration | | X | X |
| Enable test mode | | X | X |
| Edit analysis tools | | X | X |

³ You must have Member or Owner permission to your organization.
