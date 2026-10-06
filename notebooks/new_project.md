<div align='center'>
    <h1> Creating an AI Enabled React Native Project </h1>
</div>

# Table of Contents

- [Create with React Native CLI Quickstart](#create-with-react-native-cli-quickstart)
  - [Run Locally](#run-locally)
- [Create with Expo GO Quickstart](#create-with-expo-go-quickstart)
  - [Run on a Mobile Device](#run-on-a-mobile-device)
  - [Enabling Native AI Development](#enabling-native-ai-development)

# Create with React Native CLI Quickstart

A bare React Native project provides direct control over the native Android and iOS projects.


Use the traditional bare React Native initialization command:

```bash
npx react-native@latest init client
```

Or use the [Community CLI](https://github.com/react-native-community/cli):

```
npx @react-native-community/cli@latest init client
```

## Run Locally

1\. Start the Metro bundler.

Using Yarn:

```bash
yarn start
```

Using NPM:

```bash
npm start
```

This is defined by the start script in `package.json`:

```bash
{
  "scripts": {
    "start": "react-native start"
  }
}
```

2\. Build and run locally:

Using Yarn:

```bash
yarn android
```
or
```bash
yarn iOS
```

Using NPM:

```bash
npm run android
```
or
```bash
npm run ios
```

---

# Create with Expo GO Quickstart

This section creates a managed React Native project using Expo that provides an SDK with built-in modules and APIs.

1\. Set up a new [Expo project](https://docs.expo.dev/get-started/create-a-project/) using Yarn:

```bash
yarn create expo-app@latest client
```

or

```bash
yarn create expo-app client --template default@sdk-57
```

2\. Check versions:

```bash
cd client
cat package.json | grep expo
cat package.json | grep react-native
```

## Run on a Mobile Device

1\. Start the Expo development server.

Using Yarn:

```bash
yarn start
```

Using NPM:

```bash
npm start
```

This is defined by the start script in `package.json`:

```bash
{
  "scripts": {
    "start": "expo start"
  }
}
```

2\. Scan the QR code to run on Expo Go (download the App).

Note: When using Expo Go, ensure the mobile device and the PC are connected to the same Wi-Fi network.

## Enabling Native AI Development 

For mobile AI development, you need a setup that supports custom native modules. If the project was initially developed using Expo, a development build is required.

The following steps demonstrate how to enable on-device LLM inference through react native bindings.

1\. Install a native module/library that provides access to an AI inference framework/engine (e.g., [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM)):

```bash
npm install react-native-litert-lm react-native-nitro-modules
```

Note: The [Nitro Modules](https://www.npmjs.com/package/react-native-nitro-modules) infrastructure is required by `react-native-litert-lm`.

2\. Add to `app.json`:

```bash
{
  "expo": {
    "plugins": ["react-native-litert-lm"],
    "android": {
      "minSdkVersion": 26
    }
  }
}
```

3\. Create a development build:

```bash
npx expo prebuild --clean
```

4\. Build and launch the native application locally (ARM-only support):

```bash
npx expo run:android
```

or

```bash
npx expo run:ios
```