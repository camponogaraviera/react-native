<div align='center'>
    <h1> Creating a React Native Project </h1>
</div>

# Table of Contents

- [Create the Project Directory](#create-the-project-directory)
- [Installing Node.js with NVM](#installing-nodejs-with-nvm)
- [Installing Yarn](#installing-yarn)
- [Expo GO Quickstart](#expo-go-quickstart)
- [React Native CLI Quickstart](#react-native-cli-quickstart)
- [Run the Development Server](#run-the-development-server)
- [Run on a Mobile Device or Locally](#run-on-a-mobile-device-or-locally)

# Create the Project Directory

```bash
mkdir react-app && cd react-app
```

---

# Installing [Node.js](https://Node.js.org/en) with NVM

1. Install [Node Version Manager](https://github.com/nvm-sh/nvm) (NVM):

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Check installation:

```bash
command -v nvm
```

2. Install the latest LTS release version of Node.js (recommended):

```bash
nvm install --lts
```

Or the latest stable version:

```bash
nvm install node
```

3. List Node.js installed versions:

```bash
nvm list
```

4. Use the latest LTS release version (recommended):

```bash
nvm use --lts && node -v
```

Or the latest stable version:

```bash
nvm use node && node -v
```

---

# Installing Yarn

Yarn is suitable for handling installation and versioning of package dependencies for React-based applications.

1. Install Corepack

```bash
npm install -g corepack
```

2. Install [modern Yarn](https://yarnpkg.com/getting-started/install) V2+ with Corepack (shipped by default with Node.js):

```bash
corepack enable && yarn set version stable && yarn install
```

3. Check installed version:

```bash
yarn -v
```

---

# Expo GO Quickstart

This section creates a managed React Native project using Expo that provides an SDK with built-in APIs.

1. Edit the `react-app/pachage.json` to set up a monorepo:

```bash
{
  "private": true,
  "workspaces": [
    "client",
    "server"
  ],
  "packageManager": "yarn@4.14.1"
}
```

2. Set up a new Expo project:

```bash
npx create-expo-app@latest client

or

npx create-expo-app@latest --template default@sdk-55
```

- Alternatively (using [Yarn](https://reactnative.dev/docs/next/environment-setup?package-manager=yarn&guide=quickstart)):

```bash
yarn create expo-app@latest client

or

yarn create expo-app --template default@sdk-55
```

3. Run `yarn install`:

```bash
cd client && yarn
```

4. Check versions:

```bash
cd client
cat package.json | grep expo
cat package.json | grep react-native
```

---

# React Native CLI Quickstart

To create a bare React Native project that gives more control to native code:

```bash
npx react-native@latest init client
```

# Run the Development Server

Open the project's folder:

```bash
cd client
```

Check whether `package.json` contains:

```bash
{
  "scripts": {
    "start": "expo start"
  }
}
```

Start the project:

```bash
yarn start
```

- Alternatives:

```bash
npm start
```
```bash
yarn expo start
```
```bash
npx expo start
```

---

# Run on a Mobile Device or Locally

- Scan the QR code to run on Expo Go (Download the App).

- Alternatively, run locally (on-premise) on your computer:

```bash
yarn android
```
Or
```bash
npm run android
```
```bash
npm run ios
```

Note: When using Expo Go, ensure the mobile device and the PC are connected to the same Wi-Fi network.
