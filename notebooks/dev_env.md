<div align='center'>
 <h1> Setting up the Development Environment </h1>
 <h2> Developer Tools & SDK Installation Guide </h2>
</div>

# Table of Contents

- [Installing VSCode](#installing-vscode)
- [Installing Git](#installing-git)
- [Installing Android Studio SDK](#installing-android-studio-sdk)

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

# Installing Git 

In Ubuntu-based distros:

```bash
sudo apt update && apt install git-all
```

Check out [this repo](https://github.com/camponogaraviera/linux-git-conda/blob/main/github_essentials/README.md) if you are new to GitHub.

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
