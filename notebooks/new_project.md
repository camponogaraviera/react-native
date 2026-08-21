<div align='center'>
    <h1> Creating a React Native Project </h1>
</div>

# Table of Contents

- [Expo GO Quickstart](#expo-go-quickstart)
- [React Native CLI Quickstart](#react-native-cli-quickstart)
- [Run the Development Server](#run-the-development-server)
- [Run on a Mobile Device or Locally](#run-on-a-mobile-device-or-locally)

# Expo GO Quickstart

This section creates a managed React Native project using Expo that provides an SDK with built-in APIs.

1. Edit the `react-app/pachage.json` created with Yarn in the previous lecture to set up a monorepo:

```bash
{
  "private": true,
  "workspaces": [
    "client",
    "server"
  ],
  "packageManager": "yarn@4.18.0"
}
```

2. Set up a new [Expo project](https://docs.expo.dev/get-started/create-a-project/) using Yarn:

```bash
yarn create expo-app client --template default@sdk-57
```
or
```bash
yarn create expo-app@latest client
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

---

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

- Alternatively, run locally (on-premises) on your computer:

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
