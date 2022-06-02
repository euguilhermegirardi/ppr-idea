import { MemoryRouter } from 'react-router-dom';
import { render, RenderResult, screen } from '@testing-library/react';
import Repository from '../repository';

const mockRepository: any = {
    "id": 261547952,
    "node_id": "MDEwOlJlcG9zaXRvcnkyNjE1NDc5NTI=",
    "name": "Aircnc-Backend",
    "full_name": "euguilhermegirardi/Aircnc-Backend",
    "private": false,
    "owner": {
        "login": "euguilhermegirardi",
        "id": 48716406,
        "node_id": "MDQ6VXNlcjQ4NzE2NDA2",
        "avatar_url": "https://avatars.githubusercontent.com/u/48716406?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/euguilhermegirardi",
        "html_url": "https://github.com/euguilhermegirardi",
        "followers_url": "https://api.github.com/users/euguilhermegirardi/followers",
        "following_url": "https://api.github.com/users/euguilhermegirardi/following{/other_user}",
        "gists_url": "https://api.github.com/users/euguilhermegirardi/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/euguilhermegirardi/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/euguilhermegirardi/subscriptions",
        "organizations_url": "https://api.github.com/users/euguilhermegirardi/orgs",
        "repos_url": "https://api.github.com/users/euguilhermegirardi/repos",
        "events_url": "https://api.github.com/users/euguilhermegirardi/events{/privacy}",
        "received_events_url": "https://api.github.com/users/euguilhermegirardi/received_events",
        "type": "User",
        "site_admin": false
    },
    "html_url": "https://github.com/euguilhermegirardi/Aircnc-Backend",
    "description": null,
    "fork": false,
    "url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Backend",
    "forks_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Backend/forks",
    "keys_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Backend/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Backend/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Backend/teams",
    "hooks_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Backend/hooks",
    "issue_events_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Backend/issues/events{/number}",
    "events_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Backend/events",
    "assignees_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Backend/assignees{/user}",
    "branches_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Backend/branches{/branch}",
    "tags_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Backend/tags",
    "blobs_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Backend/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Backend/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Backend/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Backend/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Backend/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Backend/languages",
    "stargazers_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Backend/stargazers",
    "contributors_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Backend/contributors",
    "subscribers_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Backend/subscribers",
    "subscription_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Backend/subscription",
    "commits_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Backend/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Backend/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Backend/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Backend/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Backend/contents/{+path}",
    "compare_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Backend/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Backend/merges",
    "archive_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Backend/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Backend/downloads",
    "issues_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Backend/issues{/number}",
    "pulls_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Backend/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Backend/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Backend/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Backend/labels{/name}",
    "releases_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Backend/releases{/id}",
    "deployments_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Backend/deployments",
    "created_at": "2020-05-05T18:08:44Z",
    "updated_at": "2021-03-17T23:28:11Z",
    "pushed_at": "2020-06-27T15:14:02Z",
    "git_url": "git://github.com/euguilhermegirardi/Aircnc-Backend.git",
    "ssh_url": "git@github.com:euguilhermegirardi/Aircnc-Backend.git",
    "clone_url": "https://github.com/euguilhermegirardi/Aircnc-Backend.git",
    "svn_url": "https://github.com/euguilhermegirardi/Aircnc-Backend",
    "homepage": null,
    "size": 7645,
    "stargazers_count": 1,
    "watchers_count": 1,
    "language": "JavaScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 0,
    "license": {
        "key": "mit",
        "name": "MIT License",
        "spdx_id": "MIT",
        "url": "https://api.github.com/licenses/mit",
        "node_id": "MDc6TGljZW5zZTEz"
    },
    "allow_forking": true,
    "is_template": false,
    "topics": [],
    "visibility": "public",
    "forks": 0,
    "open_issues": 0,
    "watchers": 1,
    "default_branch": "master",
    "temp_clone_token": null,
    "network_count": 0,
    "subscribers_count": 2
};

const mockIssues: any = [
    {
        "url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Frontend/issues/21",
        "repository_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Frontend",
        "labels_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Frontend/issues/21/labels{/name}",
        "comments_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Frontend/issues/21/comments",
        "events_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Frontend/issues/21/events",
        "html_url": "https://github.com/euguilhermegirardi/Aircnc-Frontend/pull/21",
        "id": 1256349519,
        "node_id": "PR_kwDOD55Pz8444GZ-",
        "number": 21,
        "title": "Bump eventsource from 1.0.7 to 1.1.1",
        "user": {
            "login": "dependabot[bot]",
            "id": 49699333,
            "node_id": "MDM6Qm90NDk2OTkzMzM=",
            "avatar_url": "https://avatars.githubusercontent.com/in/29110?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/dependabot%5Bbot%5D",
            "html_url": "https://github.com/apps/dependabot",
            "followers_url": "https://api.github.com/users/dependabot%5Bbot%5D/followers",
            "following_url": "https://api.github.com/users/dependabot%5Bbot%5D/following{/other_user}",
            "gists_url": "https://api.github.com/users/dependabot%5Bbot%5D/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/dependabot%5Bbot%5D/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/dependabot%5Bbot%5D/subscriptions",
            "organizations_url": "https://api.github.com/users/dependabot%5Bbot%5D/orgs",
            "repos_url": "https://api.github.com/users/dependabot%5Bbot%5D/repos",
            "events_url": "https://api.github.com/users/dependabot%5Bbot%5D/events{/privacy}",
            "received_events_url": "https://api.github.com/users/dependabot%5Bbot%5D/received_events",
            "type": "Bot",
            "site_admin": false
        },
        "labels": [
            {
                "id": 2121047852,
                "node_id": "MDU6TGFiZWwyMTIxMDQ3ODUy",
                "url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Frontend/labels/dependencies",
                "name": "dependencies",
                "color": "0366d6",
                "default": false,
                "description": "Pull requests that update a dependency file"
            }
        ],
        "state": "open",
        "locked": false,
        "assignee": null,
        "assignees": [],
        "milestone": null,
        "comments": 0,
        "created_at": "2022-06-01T15:54:00Z",
        "updated_at": "2022-06-01T15:54:02Z",
        "closed_at": null,
        "author_association": "NONE",
        "active_lock_reason": null,
        "draft": false,
        "pull_request": {
            "url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Frontend/pulls/21",
            "html_url": "https://github.com/euguilhermegirardi/Aircnc-Frontend/pull/21",
            "diff_url": "https://github.com/euguilhermegirardi/Aircnc-Frontend/pull/21.diff",
            "patch_url": "https://github.com/euguilhermegirardi/Aircnc-Frontend/pull/21.patch",
            "merged_at": null
        },
        "body": "Bumps [eventsource](https://github.com/EventSource/eventsource) from 1.0.7 to 1.1.1.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a href=\"https://github.com/EventSource/eventsource/blob/master/HISTORY.md\">eventsource's changelog</a>.</em></p>\n<blockquote>\n<h1><a href=\"https://github.com/EventSource/eventsource/compare/v1.1.0...v1.1.1\">1.1.1</a></h1>\n<ul>\n<li>Do not include authorization and cookie headers on redirect to different origin (<a href=\"https://github-redirect.dependabot.com/EventSource/eventsource/pull/273\">#273</a> Espen Hovlandsdal)</li>\n</ul>\n<h1><a href=\"https://github.com/EventSource/eventsource/compare/v1.0.7...v1.1.0\">1.1.0</a></h1>\n<ul>\n<li>Improve performance for large messages across many chunks (<a href=\"https://github-redirect.dependabot.com/EventSource/eventsource/pull/130\">#130</a> Trent Willis)</li>\n<li>Add <code>createConnection</code> option for http or https requests (<a href=\"https://github-redirect.dependabot.com/EventSource/eventsource/pull/120\">#120</a> Vasily Lavrov)</li>\n<li>Support HTTP 302 redirects (<a href=\"https://github-redirect.dependabot.com/EventSource/eventsource/pull/116\">#116</a> Ryan Bonte)</li>\n<li>Prevent sequential errors from attempting multiple reconnections (<a href=\"https://github-redirect.dependabot.com/EventSource/eventsource/pull/125\">#125</a> David Patty)</li>\n<li>Add <code>new</code> to correct test (<a href=\"https://github-redirect.dependabot.com/EventSource/eventsource/pull/101\">#111</a> Stéphane Alnet)</li>\n<li>Fix reconnections attempts now happen more than once (<a href=\"https://github-redirect.dependabot.com/EventSource/eventsource/pull/136\">#136</a> Icy Fish)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a href=\"https://github.com/EventSource/eventsource/commit/aa7a40843a978f42c0babdec125bf9e0a83bf515\"><code>aa7a408</code></a> 1.1.1</li>\n<li><a href=\"https://github.com/EventSource/eventsource/commit/56d489ef853a891deca121bbd463c732fee94dce\"><code>56d489e</code></a> chore: rebuild polyfill</li>\n<li><a href=\"https://github.com/EventSource/eventsource/commit/4a951e58b04118c9c4d3da3d27d454972a1b4b8d\"><code>4a951e5</code></a> docs: update history for 1.1.1</li>\n<li><a href=\"https://github.com/EventSource/eventsource/commit/f9f6416567bff62c1af2f4314be51d9870e94bc2\"><code>f9f6416</code></a> fix: strip sensitive headers on redirect to different origin</li>\n<li><a href=\"https://github.com/EventSource/eventsource/commit/9dd06876ab43af37c3313c679fbdc7f722293a0d\"><code>9dd0687</code></a> 1.1.0</li>\n<li><a href=\"https://github.com/EventSource/eventsource/commit/49497ba7107a7a94d7dbc73b6e5cc0117f8606e8\"><code>49497ba</code></a> Update history for 1.1.0 (<a href=\"https://github-redirect.dependabot.com/EventSource/eventsource/issues/146\">#146</a>)</li>\n<li><a href=\"https://github.com/EventSource/eventsource/commit/3a3853793f63eb5dab9d863504817a9d37b992e6\"><code>3a38537</code></a> Update history for <a href=\"https://github-redirect.dependabot.com/EventSource/eventsource/issues/136\">#136</a></li>\n<li><a href=\"https://github.com/EventSource/eventsource/commit/46fe04e03e54f4129a28bf75b3a1e5f4ab68b52a\"><code>46fe04e</code></a> Merge pull request <a href=\"https://github-redirect.dependabot.com/EventSource/eventsource/issues/136\">#136</a> from icy-fish/master</li>\n<li><a href=\"https://github.com/EventSource/eventsource/commit/9a4190f65e761ee672d786a6d01c60392950064b\"><code>9a4190f</code></a> Fix issue: reconnection only happends for 1 time after connection drops</li>\n<li><a href=\"https://github.com/EventSource/eventsource/commit/61e1b19c8616aa151835a4ae599b299afb574ebf\"><code>61e1b19</code></a> test: destroy both proxied request and response on close</li>\n<li>Additional commits viewable in <a href=\"https://github.com/EventSource/eventsource/compare/v1.0.7...v1.1.1\">compare view</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility score](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=eventsource&package-manager=npm_and_yarn&previous-version=1.0.7&new-version=1.1.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't alter it yourself. You can also trigger a rebase manually by commenting `@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits that have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after your CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge and block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating it. You can achieve the same result by closing it manually\n- `@dependabot ignore this major version` will close this PR and stop Dependabot creating any more for this major version (unless you reopen the PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop Dependabot creating any more for this minor version (unless you reopen the PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop Dependabot creating any more for this dependency (unless you reopen the PR or upgrade to it yourself)\n- `@dependabot use these labels` will set the current labels as the default for future PRs for this repo and language\n- `@dependabot use these reviewers` will set the current reviewers as the default for future PRs for this repo and language\n- `@dependabot use these assignees` will set the current assignees as the default for future PRs for this repo and language\n- `@dependabot use this milestone` will set the current milestone as the default for future PRs for this repo and language\n\nYou can disable automated security fix PRs for this repo from the [Security Alerts page](https://github.com/euguilhermegirardi/Aircnc-Frontend/network/alerts).\n\n</details>",
        "reactions": {
            "url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Frontend/issues/21/reactions",
            "total_count": 0,
            "+1": 0,
            "-1": 0,
            "laugh": 0,
            "hooray": 0,
            "confused": 0,
            "heart": 0,
            "rocket": 0,
            "eyes": 0
        },
        "timeline_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Frontend/issues/21/timeline",
        "performed_via_github_app": null,
        "state_reason": null
    },
    {
        "url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Frontend/issues/20",
        "repository_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Frontend",
        "labels_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Frontend/issues/20/labels{/name}",
        "comments_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Frontend/issues/20/comments",
        "events_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Frontend/issues/20/events",
        "html_url": "https://github.com/euguilhermegirardi/Aircnc-Frontend/pull/20",
        "id": 1220401109,
        "node_id": "PR_kwDOD55Pz843CdtR",
        "number": 20,
        "title": "Bump async from 2.6.3 to 2.6.4",
        "user": {
            "login": "dependabot[bot]",
            "id": 49699333,
            "node_id": "MDM6Qm90NDk2OTkzMzM=",
            "avatar_url": "https://avatars.githubusercontent.com/in/29110?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/dependabot%5Bbot%5D",
            "html_url": "https://github.com/apps/dependabot",
            "followers_url": "https://api.github.com/users/dependabot%5Bbot%5D/followers",
            "following_url": "https://api.github.com/users/dependabot%5Bbot%5D/following{/other_user}",
            "gists_url": "https://api.github.com/users/dependabot%5Bbot%5D/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/dependabot%5Bbot%5D/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/dependabot%5Bbot%5D/subscriptions",
            "organizations_url": "https://api.github.com/users/dependabot%5Bbot%5D/orgs",
            "repos_url": "https://api.github.com/users/dependabot%5Bbot%5D/repos",
            "events_url": "https://api.github.com/users/dependabot%5Bbot%5D/events{/privacy}",
            "received_events_url": "https://api.github.com/users/dependabot%5Bbot%5D/received_events",
            "type": "Bot",
            "site_admin": false
        },
        "labels": [
            {
                "id": 2121047852,
                "node_id": "MDU6TGFiZWwyMTIxMDQ3ODUy",
                "url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Frontend/labels/dependencies",
                "name": "dependencies",
                "color": "0366d6",
                "default": false,
                "description": "Pull requests that update a dependency file"
            }
        ],
        "state": "open",
        "locked": false,
        "assignee": null,
        "assignees": [],
        "milestone": null,
        "comments": 0,
        "created_at": "2022-04-29T09:57:22Z",
        "updated_at": "2022-04-29T09:57:23Z",
        "closed_at": null,
        "author_association": "NONE",
        "active_lock_reason": null,
        "draft": false,
        "pull_request": {
            "url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Frontend/pulls/20",
            "html_url": "https://github.com/euguilhermegirardi/Aircnc-Frontend/pull/20",
            "diff_url": "https://github.com/euguilhermegirardi/Aircnc-Frontend/pull/20.diff",
            "patch_url": "https://github.com/euguilhermegirardi/Aircnc-Frontend/pull/20.patch",
            "merged_at": null
        },
        "body": "Bumps [async](https://github.com/caolan/async) from 2.6.3 to 2.6.4.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a href=\"https://github.com/caolan/async/blob/v2.6.4/CHANGELOG.md\">async's changelog</a>.</em></p>\n<blockquote>\n<h1>v2.6.4</h1>\n<ul>\n<li>Fix potential prototype pollution exploit (<a href=\"https://github-redirect.dependabot.com/caolan/async/issues/1828\">#1828</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a href=\"https://github.com/caolan/async/commit/c6bdaca4f9175c14fc655d3783c6af6a883e6514\"><code>c6bdaca</code></a> Version 2.6.4</li>\n<li><a href=\"https://github.com/caolan/async/commit/8870da9d5022bab310413041b4079e10db3980b7\"><code>8870da9</code></a> Update built files</li>\n<li><a href=\"https://github.com/caolan/async/commit/4df6754ef4e96a742956df8782fee27242a2ea12\"><code>4df6754</code></a> update changelog</li>\n<li><a href=\"https://github.com/caolan/async/commit/8f7f90342a6571ba1c197d747ebed30c368096d2\"><code>8f7f903</code></a> Fix prototype pollution vulnerability (<a href=\"https://github-redirect.dependabot.com/caolan/async/issues/1828\">#1828</a>)</li>\n<li>See full diff in <a href=\"https://github.com/caolan/async/compare/v2.6.3...v2.6.4\">compare view</a></li>\n</ul>\n</details>\n<details>\n<summary>Maintainer changes</summary>\n<p>This version was pushed to npm by <a href=\"https://www.npmjs.com/~hargasinski\">hargasinski</a>, a new releaser for async since your current version.</p>\n</details>\n<br />\n\n\n[![Dependabot compatibility score](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=async&package-manager=npm_and_yarn&previous-version=2.6.3&new-version=2.6.4)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't alter it yourself. You can also trigger a rebase manually by commenting `@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits that have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after your CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge and block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating it. You can achieve the same result by closing it manually\n- `@dependabot ignore this major version` will close this PR and stop Dependabot creating any more for this major version (unless you reopen the PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop Dependabot creating any more for this minor version (unless you reopen the PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop Dependabot creating any more for this dependency (unless you reopen the PR or upgrade to it yourself)\n- `@dependabot use these labels` will set the current labels as the default for future PRs for this repo and language\n- `@dependabot use these reviewers` will set the current reviewers as the default for future PRs for this repo and language\n- `@dependabot use these assignees` will set the current assignees as the default for future PRs for this repo and language\n- `@dependabot use this milestone` will set the current milestone as the default for future PRs for this repo and language\n\nYou can disable automated security fix PRs for this repo from the [Security Alerts page](https://github.com/euguilhermegirardi/Aircnc-Frontend/network/alerts).\n\n</details>",
        "reactions": {
            "url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Frontend/issues/20/reactions",
            "total_count": 0,
            "+1": 0,
            "-1": 0,
            "laugh": 0,
            "hooray": 0,
            "confused": 0,
            "heart": 0,
            "rocket": 0,
            "eyes": 0
        },
        "timeline_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Frontend/issues/20/timeline",
        "performed_via_github_app": null,
        "state_reason": null
    },
    {
        "url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Frontend/issues/19",
        "repository_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Frontend",
        "labels_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Frontend/issues/19/labels{/name}",
        "comments_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Frontend/issues/19/comments",
        "events_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Frontend/issues/19/events",
        "html_url": "https://github.com/euguilhermegirardi/Aircnc-Frontend/pull/19",
        "id": 1181872131,
        "node_id": "PR_kwDOD55Pz841ExTM",
        "number": 19,
        "title": "Bump minimist from 1.2.5 to 1.2.6",
        "user": {
            "login": "dependabot[bot]",
            "id": 49699333,
            "node_id": "MDM6Qm90NDk2OTkzMzM=",
            "avatar_url": "https://avatars.githubusercontent.com/in/29110?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/dependabot%5Bbot%5D",
            "html_url": "https://github.com/apps/dependabot",
            "followers_url": "https://api.github.com/users/dependabot%5Bbot%5D/followers",
            "following_url": "https://api.github.com/users/dependabot%5Bbot%5D/following{/other_user}",
            "gists_url": "https://api.github.com/users/dependabot%5Bbot%5D/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/dependabot%5Bbot%5D/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/dependabot%5Bbot%5D/subscriptions",
            "organizations_url": "https://api.github.com/users/dependabot%5Bbot%5D/orgs",
            "repos_url": "https://api.github.com/users/dependabot%5Bbot%5D/repos",
            "events_url": "https://api.github.com/users/dependabot%5Bbot%5D/events{/privacy}",
            "received_events_url": "https://api.github.com/users/dependabot%5Bbot%5D/received_events",
            "type": "Bot",
            "site_admin": false
        },
        "labels": [
            {
                "id": 2121047852,
                "node_id": "MDU6TGFiZWwyMTIxMDQ3ODUy",
                "url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Frontend/labels/dependencies",
                "name": "dependencies",
                "color": "0366d6",
                "default": false,
                "description": "Pull requests that update a dependency file"
            }
        ],
        "state": "open",
        "locked": false,
        "assignee": null,
        "assignees": [],
        "milestone": null,
        "comments": 0,
        "created_at": "2022-03-26T16:11:40Z",
        "updated_at": "2022-03-26T16:11:41Z",
        "closed_at": null,
        "author_association": "NONE",
        "active_lock_reason": null,
        "draft": false,
        "pull_request": {
            "url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Frontend/pulls/19",
            "html_url": "https://github.com/euguilhermegirardi/Aircnc-Frontend/pull/19",
            "diff_url": "https://github.com/euguilhermegirardi/Aircnc-Frontend/pull/19.diff",
            "patch_url": "https://github.com/euguilhermegirardi/Aircnc-Frontend/pull/19.patch",
            "merged_at": null
        },
        "body": "Bumps [minimist](https://github.com/substack/minimist) from 1.2.5 to 1.2.6.\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a href=\"https://github.com/substack/minimist/commit/7efb22a518b53b06f5b02a1038a88bd6290c2846\"><code>7efb22a</code></a> 1.2.6</li>\n<li><a href=\"https://github.com/substack/minimist/commit/ef88b9325f77b5ee643ccfc97e2ebda577e4c4e2\"><code>ef88b93</code></a> security notice for additional prototype pollution issue</li>\n<li><a href=\"https://github.com/substack/minimist/commit/c2b981977fa834b223b408cfb860f933c9811e4d\"><code>c2b9819</code></a> isConstructorOrProto adapted from PR</li>\n<li><a href=\"https://github.com/substack/minimist/commit/bc8ecee43875261f4f17eb20b1243d3ed15e70eb\"><code>bc8ecee</code></a> test from prototype pollution PR</li>\n<li>See full diff in <a href=\"https://github.com/substack/minimist/compare/1.2.5...1.2.6\">compare view</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility score](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=minimist&package-manager=npm_and_yarn&previous-version=1.2.5&new-version=1.2.6)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't alter it yourself. You can also trigger a rebase manually by commenting `@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits that have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after your CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge and block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating it. You can achieve the same result by closing it manually\n- `@dependabot ignore this major version` will close this PR and stop Dependabot creating any more for this major version (unless you reopen the PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop Dependabot creating any more for this minor version (unless you reopen the PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop Dependabot creating any more for this dependency (unless you reopen the PR or upgrade to it yourself)\n- `@dependabot use these labels` will set the current labels as the default for future PRs for this repo and language\n- `@dependabot use these reviewers` will set the current reviewers as the default for future PRs for this repo and language\n- `@dependabot use these assignees` will set the current assignees as the default for future PRs for this repo and language\n- `@dependabot use this milestone` will set the current milestone as the default for future PRs for this repo and language\n\nYou can disable automated security fix PRs for this repo from the [Security Alerts page](https://github.com/euguilhermegirardi/Aircnc-Frontend/network/alerts).\n\n</details>",
        "reactions": {
            "url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Frontend/issues/19/reactions",
            "total_count": 0,
            "+1": 0,
            "-1": 0,
            "laugh": 0,
            "hooray": 0,
            "confused": 0,
            "heart": 0,
            "rocket": 0,
            "eyes": 0
        },
        "timeline_url": "https://api.github.com/repos/euguilhermegirardi/Aircnc-Frontend/issues/19/timeline",
        "performed_via_github_app": null,
        "state_reason": null
    },
];

describe('Repos', () => {
    let element: RenderResult;

    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        element = render(
            <MemoryRouter>
                <Repository
                    repository={mockRepository}
                    issues={mockIssues}
                />
            </MemoryRouter>
        );
    });

    it('should render the component', () => {
        // Arrange
        expect(screen).not.toBeNull();
    });

    it('should find "back" text', () => {
        // Assert
        const backTxt = screen.getByText('Back');

        // Arrange
        expect(backTxt).toBeInTheDocument();
    });

    it('should show image', () => {
        // Assert
        const image = screen.getByTestId('image') as HTMLImageElement;

        // Arrange
        expect(image.src).toContain(mockRepository.owner.avatar_url)
    });

    it('should show main title', () => {
        // Assert
        const mainTitle = screen.getByTestId('full-name');

        // Arrange
        expect(mainTitle).toHaveTextContent(mockRepository.full_name);
    });

    it('should show stars, forks and open issues', () => {
        // Assert
        const stars = screen.getByTestId('stars');
        const forks = screen.getByTestId('forks');
        const issues = screen.getByTestId('issues');

        // Arrange
        expect(stars).toHaveTextContent(mockRepository.stargazers_count);
        expect(forks).toHaveTextContent(mockRepository.forks_count);
        expect(issues).toHaveTextContent(mockRepository.open_issues_count);
    });

    it('should show issues list', () => {
        const issueList = screen.getByTestId('issuesList');

        // eslint-disable-next-line testing-library/no-node-access
        expect(issueList.children).toHaveLength(3);
    });

    it("should match snapshopt", () => {
        // Assert
        const { container } = element;

        // Arrange
        expect(container).toMatchSnapshot();
    });
});