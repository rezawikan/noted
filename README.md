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
- `git merge bugs` : allows you to merge `bugs's` branch. Noted: your active working directory is master branch.
- `git branch yourbranchname` : allows you to create a new branch without move to your new branch.
- `git branch -d bugs` : allows you to delete `bugs's` branch.
- `git branch -v` : allows you to check the last previous commit.
- `git log` : allows you to check list of previous commits.
- `git clean -dn` : allows you to check all entires untracked changes.
- `git reset --soft HEAD^` : allows you back to previous commit without deleteing all changes in current state.
- `git reset --hard HEAD^` : allows you back to previous commit with deleteing all changes in current state.

#### Special for Unstaged Changes
- `git restore .` : allows you to discard all changes to your last commit changes.
- `git restore file.txt` : allows you to discard changes on file.txt.

#### Special for Staged Changes
- `git reset .` : allows you to remove all changes from the staged changes to unstaged changes.
- `git reset file.txt` : allows you to remove a specific change from the staged changes to unstaged changes.

#### New Features for 2.23 versions
- `git switch yourbranchname` : allows you to switch in other branch.
- `git switch -c test` : allows you to create a new branch named `test` and move to your new branch from you current working directory.
