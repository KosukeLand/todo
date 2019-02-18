#Name:
Todo List
====


## Demo
Sorry. I will prepare.


## Usage
### Running Android simulator & Todo application
Run Android simulator & power on:<br>
 $ emulator -avd Nexus_5X_Api_26

Run react-native run-android inside Todo project folder:<br>
 $ cd todo<br>
 $ react-native run-android

### Application Usage
1. Insert word in textbox of "Date" and "Todo".
2. Push "Add" button. "Date" & "Todo" is Registered.
3. if you wanna delete todo, push "delete" button.


## Install for MacOS & Android simulator
### Node, Watchman
Recommend installing Node and Watchman using Homebrew.<br>
Run the following commands in a Terminal after installing Homebrew:<br>
 $ brew install node<br>
 $ brew install watchman

### The React Native CLI
Node comes with npm, which lets you install the React Native command line interface.<br>
Run the following command in a Terminal:<br>
 $ npm install -g react-native-cli

### Java Development Kit
React Native requires a recent version of the Java SE Development Kit(JDK). 

### Android development environment
1. Install Android Studio
Download and install Android Studio. <br>
Choose a "Custom" setup when prompted to select an installation type. <br>
Make sure the boxes next to all of the following are checked:<br>
    ・Android SDK<br>
    ・Android SDK Platform<br>
    ・Performance (Intel ® HAXM) (See here for AMD)<br>
    ・Android Virtual Device
2. Install the Android SDK
3. Configure the ANDROID_HOME environment variable
Add following lines to your ./bash_profile:<br>
    ・export ANDROID_HOME=$HOME/Library/Android/sdk<br>
    ・export PATH=$PATH:$ANDROID_HOME/emulator<br>
    ・export PATH=$PATH:$ANDROID_HOME/tools<br>
    ・export PATH=$PATH:$ANDROID_HOME/tools/bin<br>
    ・export PATH=$PATH:$ANDROID_HOME/platform-tools

### Reference
https://facebook.github.io/react-native/docs/getting-started
