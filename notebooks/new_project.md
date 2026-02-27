<div align='center'>
<h1> Creating a new React Native Project </h1>
</div>

# Table of Contents

- [Expo GO Quickstart](#expo-go-quickstart)
- [React Native CLI Quickstart](#react-native-cli-quickstart)
- [Run the Development Server](#run-the-development-server)
- [Run on a Mobile Device or Locally](#run-on-a-mobile-device-or-locally)

# Expo GO Quickstart

["The global Expo CLI has been superseded by 'npx expo' and eas-cli."](https://www.npmjs.com/package/expo-cli)

- Setting up a new Expo project with [YARN](https://reactnative.dev/docs/next/environment-setup?package-manager=yarn&guide=quickstart) (recommended):

```bash
yarn create expo-app <ProjectName> --template
```

- \[Alternative\] Setting up a new Expo project with [NPM](https://reactnative.dev/docs/next/environment-setup?package-manager=npm&guide=quickstart):

```bash
npx create-expo-app <ProjectName> --template
```

- Choose `blank`.

# React Native CLI Quickstart

```bash
npx react-native@latest init <ProjectName>
```

# Run the development server

Open the project's folder:

```bash
cd <ProjectName>
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

# Run on a mobile device or locally

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
