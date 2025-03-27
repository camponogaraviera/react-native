<div align='center'>
 <h1> Installing Required Dependencies, IDE, and SDK </h1>
</div>

# Table of Contents

- [Installing Git](#installing-git)
- [Installing Node.js with NVM](#installing-nodejs-with-nvm)
- [Installing YARN](#installing-yarn)
- [Installing VSCode](#installing-vscode)
- [Installing Android Studio SDK](#installing-android-studio-sdk)

 <!-- ################################################################ -->

# Installing Git 

In Ubuntu-based distros:

```bash
sudo apt update && apt install git-all
```

Check out [this repo](https://github.com/camponogaraviera/linux-git-conda/blob/dev/github_essentials/README.md) if you are new to GitHub.

 <!-- ################################################################ -->
 
# Installing [Node.js](https://Node.js.org/en) with NVM

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
Or install the latest LTS release version of Node.js:
```bash
nvm install --lts
```
Or install the latest stable version of Node.js:
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
Or use the latest LTS release version (recommended):
```bash
nvm use --lts
```
Or use the latest stable version:
```bash
nvm use node
```

 <!-- ################################################################ -->

# Installing YARN

Yarn is suitable for handling installation and versioning of package dependencies for React-based applications.

- Installing [modern Yarn](https://yarnpkg.com/getting-started/install) V2+ with Corepack (shipped by default with Node.js):

```bash
corepack enable && yarn set version stable && yarn install && yarn -v
```

For older Node.js versions, use the Node Package Manager (NPM), which is shipped standard with Node.js:

```bash
npm install --global yarn
```

Check installed versions:

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

6. Adding to Path Variables:

```bash
export ANDROID_HOME=/home/lucas/Android/Sdk
export PATH=$ANDROID_HOME/emulator:$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform-tools:$PATH
source ~/.bashrc
adb --version
```

7. Simulating:

- Open `Device Manager` in `Android Studio Ladybug` and then `Create Virtual Device`. Select the screen type and the Android version.

- Run your app from your favorite IDE (I use VSCode) while Android Studio runs the virtual device:
```
yarn android
```

8. Create Desktop Icon:

```
nano ~/.local/share/applications/android-studio.desktop
```
```
[Desktop Entry]
Version=1.0
Type=Application
Name=Android Studio
Icon=/home/lucas/android-studio/bin/studio.png
Exec=bash -c "/home/lucas/android-studio/bin/studio.sh"
Comment=Android Studio IDE
Categories=Development;IDE;
Terminal=false
StartupWMClass=jetbrains-studio
```
```
chmod +x ~/.local/share/applications/android-studio.desktop
update-desktop-database ~/.local/share/applications
```

- Alternative: use Ubuntu Software Center.
