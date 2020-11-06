### Branching Strategy

When adding features or other code, `git pull` the latest changes from `master` and check out a new branch. Make your changes and push your branch to GitHub. You can name your branch whatever you'd like locally, but make sure you give your branch a useful name such as `admin/add-book`, `docs/api-spec-update`, or `<ticket code>/<ticket summary>` when you push it.

Aim to make every commit a deployable unit of code (i.e. one that can run through the pipeline successfully). This will ensure that we can merge branches more frequently and avoid extensive merge conflicts.

It is your responsibility to handle potential merge conflicts before opening a Merge Request. 

When opening a merge request, select the "squash commits before merging" option. This will ensure that `master`'s history will be linear, with each commit representing a meaningful feature, addition, or fix to the codebase.

