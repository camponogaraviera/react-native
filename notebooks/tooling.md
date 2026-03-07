<div align='center'>
<h1> Tooling: code formatter and linter </h1>
</div>

This file demonstrates how to set up a code formatter (Prettier) to enforce code style consistency and a static code analysis tool (ESLint).

# Table of Contents

- Code Formatters vs Linters
- Dev Dependencies
- Setting up ESLint
- Setting up Prettier

# Code Formatters vs Linters

Code Formatters

- **Prettier:** an opinionated code formatter for JavaScript, TypeScript, and other files. It enforces consistent style by applying its own formatting rules.
- A code formatter is a tool that automatically enforces consistent code style (e.g., indentation, line breaks, quotes, and semicolons).

Linters

- **ESLint:** a linter for JavaScript/TypeScript. Commonly used **alongside Prettier**.
- A linter is a static code analysis tool that detects **syntax errors** (e.g., typos), flags **code issues** (e.g., unused variables and missing imports), and enforces coding standards. Some have limited logic/semantic checks (e.g., unreachable code and shadowed variables).

# Dev Dependencies

Installing in development mode:

```bash
yarn add --dev eslint prettier eslint-config-prettier eslint-plugin-prettier babel-eslint @react-native/eslint-config @stylistic/eslint-plugin-js
```

<!--
# Installing jshint (Deprecated!)

1. Installing in development mode:

```bash
yarn add --dev jshint@2.13.6
```

- Usage example:

```bash
npx jshint App.js
```
-->

# Setting up ESLint

1. Search and install the ESLint extension in VSCode.

2. Create a new `.eslintrc.json` file:

```bash
yarn eslint --init
```

Follow the setup wizard selecting the options that best suit your requirements (use space to skip questions). My configurations were:

- How would you like to use ESLint? ‣ To check syntax, find problems, and enforce code style
- What type of modules does your project use? ‣ JavaScript modules (import/export)
- Which framework does your project use? ‣ React
- Does your project use TypeScript? ‣ No
- Where does your code run? ‣ Node
- Answer questions about your style
- What format do you want your config file to be in? ▸ json
- What style of indentation do you use? ▸ Spaces
- What quotes do you use for strings? ▸ Double
- What line endings do you use? ▸ Unix
- Do you require semicolons? ‣ Yes
- Would you like to install them now? ▸ Yes
- Which package manager do you want to use? ▸ yarn

3. Create a new script in the `"scripts"` section of the `package.json` file:

```bash
"lint": "eslint . --ext .js"
```

This will force ESLint to lint only files with JavaScript (.js) extension.

Note: I have made some changes to the original `.eslintrc.json` file, such as including `"@react-native"`, ` { "avoidEscape": true }` and changing the identation level from 4 to 2 in `"indent": ["error", 2]` to match Prettier autosaving mode in VScode.

- Usage:

```bash
yarn lint
```

- To fix errors:

```bash
yarn lint --fix
```

- Alternatively:

```bash
npx eslint <filename>.js
```

If the message `error  'React' must be in scope when using JSX` shows up, just add `import React from "react";` at the 1st line of the `App.js` file.

# Setting up Prettier

1. Search and install Prettier extension in VSCode.
2. Go to `File`-`Preferences`-`Settings`.
3. Search for `format on save`. Enable it.
4. Search for `default formatter` and select `Prettier - Code formatter`.`
