# Release howto

List tags by running:

`git tag -l`

After that, run the following commands. Replace the version number
by an increase of the largest number from the previous command.

- pnpm extract # extract localizable strings
- pnpm compile # Compile translations
- pnpm build
- git tag -a v0.10.4
- git push origin v0.10.4
- git push origin master
- pnpm run deploy
