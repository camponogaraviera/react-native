<div align='center'>
 <h1> Installing Required Dependencies, IDE, and SDK </h1>
</div>

# Table of Contents

- Installing git 
- Installing Node.js
- Installing YARN
- Installing VSCode
- Installing Android Studio SDK

 <!-- ################################################################ -->

# Installing git 

In Ubuntu-based distros:

```bash
sudo apt update && apt install git-all
```

Check out [this repo](https://github.com/QuCAI-Lab/repo-hub/blob/main/GitHub_Essentials/README.md) if you are new to GitHub.

 <!-- ################################################################ -->
 
# Installing [Node.js](https://Node.js.org/en)

First, install [Node Version Manager](https://github.com/nvm-sh/nvm) (NVM):
```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```
Check installation:
```bash
command -v nvm 
```
Install a specific version of Node.js:
```
nvm install <version>
```
Or install Node.js LTS version:
```bash
nvm install --lts
```
Alternatively, install Node.js latest version:
```bash
nvm install node
```
List Node.js installed versions:
```bash
nvm list
```
Use a specific installed version of Node.js:
```bash
nvm use <version>
```
Or use the LTS version:
```bash
nvm use --lts
```
Or use the latest version:
```bash
nvm use node
```

 <!-- ################################################################ -->

# [Installing YARN](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable)

Use the Node Package Manager (NPM), which is shipped standard with Node.js:
```bash
npm install --global yarn
```
```bash
node -v && npm -v && yarn -v
```

 <!-- ################################################################ -->

# Installing VSCode

1. [Download](https://code.visualstudio.com/).
2. Install:

```bash
sudo dpkg -i <package_name>.deb
```

3. Open VSCode:

```bash
code .
```
- Alternative: use Ubuntu Software Center.

Get a list of VSCode plugins [here](vscode-plugins.md).

 <!-- ################################################################ -->

# Installing Android Studio SDK

1. Download [Android Studio](https://developer.android.com/studio) SDK.
2. Extract:

```bash
tar -xzf <package_name>.tar.gz
```

3. Run as:

```bash
cd android-studio/bin && ./studio.sh
```

4. [Configure VM acceleration on Linux](https://developer.android.com/studio/run/emulator-acceleration?utm_source=android-studio#vm-linux).

5. To remove:

```bash
sudo dpkg -r <package_name>.deb
```

- Alternative: use Ubuntu Software Center.
