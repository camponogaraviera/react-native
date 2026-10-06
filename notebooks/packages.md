<div align='center'>
<h1> Managing Packages </h1>
</div>

# Table of Contents

- [Installing Packages](#installing-packages)
- [Updating Packages](#updating-packages)
- [Notes](#notes)

# Installing Packages

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

Where `tag` is the [package version](https://github.com/camponogaraviera/nvm-npm?tab=readme-ov-file#semantic-versioning-semver).

- Install a package in production mode:

```bash
yarn add <package-name>
```

# Updating Packages

- Select Yarn packages to update:

```bash
yarn upgrade-interactive
```

---

Or update everything to the latest versions within the range:

```bash
yarn up "*"
```

# Notes

1. It is not a best practice to mix different package managers. Use either `yarn` (recommended) or `npm` to install packages during the development cycle. 
2. When using `yarn.lock`, there is no need to keep the `package-lock.json`.
