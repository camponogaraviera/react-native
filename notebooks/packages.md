<div align='center'>
<h1> Managing Packages </h1>
</div>

# Table of Contents

- Yarn
- NPM
- Notes

# [Yarn](https://classic.yarnpkg.com/lang/en/docs/cli/add/)

- [Update Yarn](https://yarnpkg.com/getting-started/install#updating-yarn):

```bash
yarn set version stable && yarn install && yarn -v
```

- Install or update a package in development mode:

```bash
yarn add <package...> [--dev/-D]
```
Example:
```bash
yarn add --dev package1@tag package2@tag
```
or
```bash
yarn add -D package1@tag package2@tag
```

Where `tag` is the package [version](https://github.com/camponogaraviera/nvm-npm?tab=readme-ov-file#semantic-versioning-semver).

- Install a package in production mode:

```bash
yarn add <package-name>
```

## Bump a Yarn-based package to its latest version:

1. First, install the update manager:
```bash
npm i -g npm-check-updates
```
2. Check which packages can be updated:
```bash
ncu
```
3. Update and install:
```bash
ncu -u && yarn
```

# NPM

[Managing Packages with NPM](https://github.com/camponogaraviera/nvm-npm).

# Notes

1. It is not a best practice to mix different package managers. Use either `yarn` (recommended) or `npm` to install packages during the development cycle. 
2. When using `yarn.lock`, there is no need to keep the `package-lock.json`.
