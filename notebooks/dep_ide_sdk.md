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

1. Install [Node Version Manager](https://github.com/nvm-sh/nvm) (NVM):

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Check installation:

```bash
command -v nvm 
```

2. Install a specific version of Node.js:

```
nvm install <version>
```

Or install the latest stable version of Node.js:

```bash
nvm install node
```

Or install the latest LTS release version of Node.js (recommended):

```bash
nvm install --lts
```

3. List Node.js installed versions:

```bash
nvm list
```

4. Use a specific installed version of Node.js:

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

--- 

# Installing YARN

Yarn is suitable for handling installation and versioning of package dependencies for React-based applications.

1. Installing [modern Yarn](https://yarnpkg.com/getting-started/install) V2+ with Corepack (shipped by default with Node.js):

```bash
corepack enable && yarn set version stable && yarn install
```

For older Node.js versions, use the Node Package Manager (NPM), which is shipped standard with Node.js:

```bash
npm install --global yarn
```

2. Check installed version:

```bash
yarn -v
```

---

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

---

# Installing Android Studio SDK

1. Download [Android Studio](https://developer.android.com/studio) SDK.
2. Extract to the `/opt/` folder:

```bash
tar -xzf <package_name>.tar.gz
sudo mv android-studio /opt/
```

3. Run as:

```bash
/opt/android-studio/bin/studio.sh
```

4. Adding to Path Variables:

```bash
sudo ln -s /opt/android-studio/bin/studio.sh /usr/local/bin/studio
```
Run as:
```bash
studio
```

5. Create Desktop Icon:

```
nano ~/.local/share/applications/android-studio.desktop
```
```
[Desktop Entry]
Version=1.0
Type=Application
Name=Android Studio
Comment=Android IDE
Exec=/opt/android-studio/bin/studio.sh
Icon=/opt/android-studio/bin/studio.png
Terminal=false
StartupNotify=true
Categories=Development;IDE;
```
```
chmod +x ~/.local/share/applications/android-studio.desktop
update-desktop-database ~/.local/share/applications
```

- Alternative: use Ubuntu Software Center.

6. To remove:

```bash
sudo dpkg -r <package_name>.deb
```

7. [Configure VM acceleration on Linux](https://developer.android.com/studio/run/emulator-acceleration?utm_source=android-studio#vm-linux).

8. Simulating:

- Open `Device Manager` in `Android Studio` and then `Create Virtual Device`. Select the screen type and the Android version.

- Run your app from your favorite IDE (I use VSCode) while Android Studio runs the virtual device:
```
yarn android
```
