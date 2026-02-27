<div align='center'>
  <h1> Infrastructure </h1>
</div>

# Table of Contents

- [Hardware Requirements](#hardware-requirements)
- [Deployment](#deployment)

---

# Hardware Requirements

## Light Native Development

A typical React Native setup requires:

1. IDE:
  - Xcode (iOS)
  - Android Studio (Android)
3. JavaScript bundler:
  - Metro (default RN bundler)
4. Mobile simulator/emulator:
  - Xcode Simulator for iOS
  - Android Studio Emulator
5. Occasional native compilation during builds (especially for iOS and when adding native modules).

- **Recommended Hardware:** MacBook Air M2/M3/M4 with **16 GB RAM** unified memory and **512 GB SSD**.

## Heavy Native Development

1. Large Swift/Obj-C codebases.
2. Native ML, vision, GPU, ARKit.

- **Recommended Hardware:** MacBook Pro M4 with **32 GB RAM** and **1 TB SSD**.

---

# Deployment

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

## On Android

React Native apps are compiled into APK (for direct install) or AAB (for Play Store distribution).
