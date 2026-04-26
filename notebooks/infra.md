<div align='center'>
  <h1> Infrastructure </h1>
</div>

# Table of Contents

- [Setup](#setup)
- [Hardware Recommendations](#hardware-recommendations)
- [Deployment](#deployment)  

# Setup

In a high-level, a typical React Native setup requires:

1. IDE:
    - VSCode, etc.

2. Platform Toolchains:
    - Android
      - Android Studio: Includes the SDK and emulator. The SDK includes Platform Tools, Build Tools, and Android API Platform packages, which are downloaded through the SDK Manager.
      - Java Development Kit (JDK): Required for Gradle builds.
       
    - iOS (macOS only)
      - Xcode: Includes iOS SDK and Simulator.
      - [Swift Package Manager (SPM)](https://docs.swift.org/swiftpm/documentation/packagemanagerdocs/): Dependency manager for native iOS modules that will replace [CocoaPods](https://github.com/cocoapods/cocoapods).
   
3. Tools:
    - Node.js.
    - Package manager (NPM/Yarn).
    - `React Native CLI (bare/native setup via npx)` or `Expo (managed or bare workflow)`. Expo bare workflow is essentially a bare React Native project augmented by Expo modules.

4. JavaScript Bundler:
    - Metro (default bundler for React Native and Expo). Runs as the development server when starting the app with `react-native start` or `expo start`.
    
5. Runtime:
    - Android Studio Emulator (installed via Android Studio).
    - Xcode Simulator (iOS only, requires macOS + Xcode).
    - Physical device (Android or iOS).
    
---

# Hardware Recommendations

- **Android development:**
  - Any computer with **8GB RAM** (minimum) or **16GB RAM** (preferred) and **256GB+ SSD**.

- **iOS development:**
  - MacBook Air M1/M2/M3 (or newer) with **8GB RAM** (minimum) or **16GB RAM** (preferred) of unified memory and **256GB+ SSD**.

---

# Deployment

## On Android

React Native apps are compiled into APK (for direct install) or AAB (for Play Store distribution).

## On iPhone

React Native apps are compiled for iOS using `Xcode's build system`, which produces an iOS App Store Package (`.ipa file`) that can be installed on iPhones/iPads.

The IPA contains:

1. The native ARM binary.
2. The JavaScript bundle.
3. Assets (images, fonts, etc.)
4. App metadata and provisioning information.

Note: Running macOS on non-Apple hardware (VMware/VirtualBox) is illegal.

Options to run Xcode:

1. Buy a Mac (MacBook, Mac mini, Mac Studio, Mac Pro, etc.).
2. Use a cloud macOS service: [MacStadium](https://macstadium.com/) or [Amazon EC2 Mac instances](https://aws.amazon.com/ec2/instance-types/mac/).
