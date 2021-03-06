# Documentation of GIT & Github

#### What is GIT?

GIT is version management tool, specifically created for and used by developers all over the world to manage project code history locally on their machines (Windows, macOS, Linux/Unix).

#### What is GITHUB?

GitHub is an online service, it is also free for many use cases (an account is all you need) and brings Git's local "file-tracking" strengths to the cloud. Storing project code online, updating code, accessing other team members' code or collaborating on large scale projects inside your organization - all possible with the help of GitHub!

#### What is Unstaged Changes?

Unstaged changes are reffering to files changes which haven't merged and were not part of selected files that will be merged.

#### What is Staged Changes?

Staged changes are reffering to files changes which haven't merged and were part of selected files that will be merged.

#### Configuration

- `git init` : first time to initialize git versioning control on you project.
- `git config --global user.email "your@mail.com"` : allows you to add your default email in your machine.
- `git config --global user.name "yourname"` : allows you to add your default name in your machine.

#### How to use?

- `git add .` : allows you to add file on staged changes.
- `git add app/Http/routes.php` : allows you to add a specific file on staged changes.
- `git status` : allows you to tracking the status from your active working directory. See your branch, modified changes, untracked changes, etc.
- `git commit` : allows you to commit and create a list message.
- `git commit --amend` : allowing you to change the commit message of the most recent commit. In additional, you can add `-m` with the message.
- `git checkout .` or `git restore .` : allows you to remove all changes to your last commit changes.
- `git checkout file.txt` or `git restore file.txt` : allows you to remove all changes on file.txt.
- `git checkout -b bugs` : allows you to create a new branch named `bugs` and move to your new branch from you current working directory.
- `git checkout -- app/Http/routes.php` : allows you to remove a specific changes on from your current working directory.
- `git checkout master` : allows you to coming back to `master` branch. You can change to another branch that will used as active working directory.
- `git checkout 53bad1ff5d527207613a8b05b24965c8b53c899a` : allows you to coming back to another branch with specific commit id from `git log`.
- `git branch yourbranchname` : allows you to create a new branch without move to your new branch.
- `git branch -d bugs` : allows you to delete `bugs's` branch.
- `git branch -v` : allows you to check the last previous commit.
- `git log` : allows you to check list of previous commits.
- `git reset --soft HEAD^` : allows you back to previous commit without deleteing all changes in current state.
- `git reset --hard HEAD^` : allows you back to previous commit with deleteing all changes in current state.
- `git branch branchname [-d/-D]` : allows you delete your branch. `-d` used for normal delete (it will check that the branch has been merged or not), while `-D` used for force deletion.

#### Special for Unstaged Changes

- `git restore .` : allows you to delete all changes to your last commit changes.
- `git restore file.txt` : allows you to delete changes on file.txt.
- `git clean -df`: allows you to delete untracked files.

#### Special for Staged Changes

- `git reset .` : allows you to remove all changes from the staging area to unstaged changes.
- `git reset file.txt` : allows you to remove a specific change from the staging area to unstaged changes.

#### Switch (Version 2.23)

- `git switch test` : allows you to switch in other branch.
- `git switch -c test` : allows you to create a new branch named `test` and move to your new branch from you current working directory.

#### Stash
- `git stash` : allows you to add a stash.
- `git stash push -m "add message"` : allows you to add a stash with label.
- `git stash apply` : allows you to apply the last stash to your working directory without deleting the last stash.
- `git stash apply 0` : allows you to apply the specific index stash to your working directory without deleting the stash.
- `git stash pop` : allows you to apply the last stash to your working directory with deleting the last stash.
- `git stash pop 0` : allows you to apply the specific index stash to your working directory with deleting the stash.
- `git stash list` : allows you to check all available stash.
- `git stash drop 0` : allows you to remove the specific stash based on index.
- `git stash clear`: allows you to remove all stash.

#### Fast-Forward Merge
- `git merge bugs` : allows you to merge `bugs's` branch. Noted: your active working directory is master branch.
- `git merge --squash feature` : allows you to take all changes from feature branch, all changes will be untracking files

#### Non-Fast-Forward Merge
- `git merge no-ff bugs` : allows you to merge `bugs` branch into the master branch. It will put all information from previous commit from bugs branch as `shadow info`. Actually, it add an additional commit into master branch. You only can reset to `HEAD~1`.

#### Rebase
- `git rebase master` : allows you to get some updates from your master branch. In case, your master branch has some updates while you are working on different branch. It will create a new commit history for every change. Be careful do it on production.

#### Gitignore
- `*.log` : allows you to ignore files which have .log formatted.
- `!test.log` : allows you to include file which has test.log formatted. (We cused this because of `*.log` formatted).
- `web/*` : allows you to ignore files in web folder.

*** 
#### Committing "detached HEAD" Changes.
- start from master branch
- `git checkout 53bad1ff5d527207613a8b05b24965c8b53c899a` (go to detached head).
- make a changes then staged the changes and commit it with message.
- back to master branch.
- You can't find any changes on that prev branch.
- You can create a new branch, `git branch detached-head 037e3f3`.  037e3f3 is ID, you can find it when go back to master branch. Do this from master branch.
- The last, merge detached-head branch to master.
- Do not forget to delete branch.

noted : you can do another alternative. After commit, you can directly create a branch then go back to master branch and merge it.
