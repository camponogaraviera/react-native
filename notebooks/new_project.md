<div align='center'>
    <h1> Creating an AI-Enabled React Native Project </h1>
</div>

# Table of Contents

- [Create with React Native CLI Quickstart](#create-with-react-native-cli-quickstart)
  - [Run Locally](#run-locally)
- [Create with Expo GO Quickstart](#create-with-expo-go-quickstart)
  - [Run on a Mobile Device](#run-on-a-mobile-device)
  - [Enabling Native AI Development](#enabling-native-ai-development)
- [Updating Expo & React Native](#updating-expo--react-native)
  - Check Current Versions
  - Check Node.js and Yarn Requirements
  - Upgrade Expo SDK
  - Automatically Fix Incompatible Dependencies
  - Check Dependency Compatibility
  - Review Changes
  - Test the Application
    
---

# Create with React Native CLI Quickstart

A bare React Native project provides direct control over the native Android and iOS projects.

Use the [Community CLI](https://github.com/react-native-community/cli):

```
npx @react-native-community/cli@latest init <ProjectName>
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

1\. Initialize a new [Expo app](https://docs.expo.dev/tutorial/create-your-first-app/) using Yarn:

```bash
yarn create expo-app@latest <ProjectName>
```

Or [start with a default project](https://docs.expo.dev/get-started/create-a-project/):

```bash
yarn create expo-app --template default@sdk-58
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

---

# Updating Expo & React Native

1. Check Current Versions

```bash
node -v && \
yarn -v && \
npx expo --version && \
npm list expo && \
yarn why react-native
```

2. Check Node.js and Yarn Requirements

Check the minimum Node.js version required by the target Expo SDK before upgrading Node.

- Upgrade Node.js to the latest LTS version if needed:

```bash
nvm install --lts && nvm use --lts && node -v
```

- Upgrade Yarn to the latest stable version if needed:

```bash
yarn set version stable && yarn install && yarn -v
```

3. Upgrade Expo SDK

Create a Git checkpoint first:

```bash
git status
git add .
git commit -m "Checkpoint before Expo SDK upgrade"
```

Then upgrade Expo using Yarn:

```bash
yarn add expo@latest
```

4. Automatically Fix Incompatible Dependencies

```bash
npx expo install --fix
```

Note: Do not independently install react-native@latest in an Expo-managed project.

5. Check Dependency Compatibility

```bash
npx expo install --check
```

Verify the result:

```bash
npx expo-doctor
```

6. Review Changes

```bash
git diff -- package.json
git status
```

7. Test the Application

```bash
npx expo start --clear
```
