[![Node.js](https://img.shields.io/badge/Node.js_(LTS)-v22.14.0-informational)](https://nodejs.org/en)
[![NPM](https://img.shields.io/badge/NPM-11.2.0-informational)](https://www.npmjs.com/)
[![YARN](https://img.shields.io/badge/YARN-4.7.0-informational)](https://yarnpkg.com/)
[![Contributions](https://img.shields.io/badge/contributions-welcome-orange?style=flat-square)](https://github.com/camponogaraviera/react-native/pulls)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/camponogaraviera/react-native/graphs/commit-activity)

<div align='center'>
  <h1> Fundamentals of React Native with Hooks </h1>
</div>

# Table of Contents

- [Module 01: Installing Required Dependencies, IDE, and SDK](01_dep_ide_sdk.md)
- [Module 02: Creating a new React Native Project](02_new_project.md)
- [Module 03: Managing Packages](03_packages.md)
- [Module 04: Best Practices - Tooling](04_best_practices.md)
- [Module 05: Intro to React Native](05_intro.md)
- [Module 06: Design Principles and Patterns](06_react_patterns.md)
- [vscode-plugins](vscode-plugins.md)

# Updates

Note: prefer `Long-Term Support (LTS) versions` over Stable releases for production.

1. Install [Node Version Manager](https://github.com/nvm-sh/nvm) (NVM):
```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

2. Install the latest LTS release version of Node.js:
```bash
nvm install --lts && nvm use --lts && node -v
```

NPM is automatically updated to the version bundled with Node.js. If required, one can manually update NPM to the latest stable version:

```bash
npm i -g npm@latest && npm -v
```

3. Update Yarn to the latest stable version:

```bash
corepack enable && yarn set version stable && yarn install && yarn -v
```

4. [Update expo](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/) to the latest version:

```bash
yarn add expo@latest
```

# Run Mobile App

1. Install dependencies:
   
```bash
cd MobDev && yarn
```

2. Lint:
   
```bash
yarn lint
```

3. Start the development server and reset the Metro bundler cache:
   
```bash
yarn start --reset-cache
```

# Notes

1. When using Expo Go, ensure the mobile device and the PC are connected to the same Wi-Fi network.
2. It is not a best practice to mix different package managers. Use either `yarn` (recommended) or `npm` to install packages during the development cycle.
3. When using `yarn.lock`, there is no need to keep the `package-lock.json`.
4. Do not `.gitignore` the `yarn.lock` file, as it ensures that the exact versions of dependencies are installed, even if the versions in `package.json` are defined using version ranges (such as ^ or ~).
   
# References

[1] https://reactnative.dev/

[2] https://github.com/nvm-sh/nvm

[3] https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable

[4] https://code.visualstudio.com/

[5] https://developer.android.com/studio

[6] https://www.npmjs.com/package/create-expo-app

[7] https://eslint.org/docs/latest/

[8] https://prettier.io/

[9] https://www.npmjs.com/package/@react-native/eslint-config

[10] https://www.npmjs.com/package/eslint-plugin-prettier

[11] https://eslint.org/docs/latest/rules/quotes

[12] https://eslint.style/rules/js/quotes
