#Name:
Todo List
====


## Demo
Sorry. I will prepare.


## Usage
### Running Android simulator & Todo application
Run Android simulator & power on:
 $ emulator -avd Nexus_5X_Api_26

Run react-native run-android inside Todo project folder:
 $ cd todo
 $ react-native run-android

### Application Usage
1. Insert word in textbox of "Date" and "Todo".
2. Push "Add" button. "Date" & "Todo" is Registered.
3. if you wanna delete todo, push "delete" button.


## Install for MacOS & Android simulator
### Node, Watchman
Recommend installing Node and Watchman using Homebrew.
Run the following commands in a Terminal after installing Homebrew:
 $ brew install node
 $ brew install watchman

### The React Native CLI
Node comes with npm, which lets you install the React Native command line interface.
Run the following command in a Terminal:
 $ npm install -g react-native-cli

### Java Development Kit
React Native requires a recent version of the Java SE Development Kit(JDK). 

### Android development environment
1. Install Android Studio
Download and install Android Studio. 
Choose a "Custom" setup when prompted to select an installation type. 
Make sure the boxes next to all of the following are checked:
    ・Android SDK
    ・Android SDK Platform
    ・Performance (Intel ® HAXM) (See here for AMD)
    ・Android Virtual Device
2. Install the Android SDK
3. Configure the ANDROID_HOME environment variable
Add following lines to your ./bash_profile:
    ・export ANDROID_HOME=$HOME/Library/Android/sdk
    ・export PATH=$PATH:$ANDROID_HOME/emulator
    ・export PATH=$PATH:$ANDROID_HOME/tools
    ・export PATH=$PATH:$ANDROID_HOME/tools/bin
    ・export PATH=$PATH:$ANDROID_HOME/platform-tools

### Reference
https://facebook.github.io/react-native/docs/getting-started
