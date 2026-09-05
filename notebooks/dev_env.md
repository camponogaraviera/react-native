<div align='center'>
 <h1> Setting up the Development Environment </h1>
 <h2> Developer Tools & SDK Installation Guide </h2>
</div>

# Table of Contents

- [Install Node Version Manager (NVM)](#install-node-version-manager-nvm)
- [Install Node.js](#install-nodejs)
- [Install Yarn](#install-yarn)
- [Install VSCode](#install-vscode)
- [Install Git](#install-git)
- [Install Android Studio SDK](#install-android-studio-sdk)

# Install [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm)

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Check installation:

```bash
command -v nvm
```

# Install [Node.js](https://nodejs.org/en)

- Install and use the latest LTS release version of Node.js (recommended):

```bash
nvm install --lts && nvm use --lts && node -v
```

---

# Install Yarn

Yarn is suitable for handling installation and versioning of package dependencies for React-based applications.

- Enter the project folder:

```bash
cd react-app
```

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

# Install VSCode

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

# Install Git 

In Ubuntu-based distros:

```bash
sudo apt update && apt install git-all
```

Check out [this repo](https://github.com/camponogaraviera/linux-git-conda/blob/main/github_essentials/README.md) if you are new to GitHub.

---

# Install Android Studio SDK

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
