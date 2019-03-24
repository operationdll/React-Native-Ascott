
## React Native Ascott v0.0.1

### A [React Native](https://facebook.github.io/react-native/docs/getting-started.html) Starter Kit with [NativeBase](https://nativebase.io/) + [React Navigation](https://reactnavigation.org/) + [Redux](https://github.com/reactjs/redux) Apps (iOS & Android)

## Get Started

### 1. System Requirements

* Globally installed [node](https://nodejs.org/en/)

* Globally installed [react-native CLI](https://facebook.github.io/react-native/docs/getting-started.html)


### 2. Installation

On the command prompt run the following commands

```sh
$ git clone https://github.com/GeekyAnts/react-native-boilerplate-redux-flow.git

$ cd react-native-boilerplate-redux-flow/

$ npm install
  or
  yarn
```

### Run on iOS

 * Opt #1:
 	* Run `npm start` in your terminal
	* Scan the QR code in your Expo app
 * Opt #2:
	* Run `npm run ios` in your terminal

### Run on Android

  * Opt #1:git diff --
	* Run `npm start` in your terminal
	* Scan the QR code in your Expo app
  * Opt #2:
	* Run `npm run android` in your terminal


For apps with more advance designs, please visit **[NativeBase Market](https://market.nativebase.io/)**.


## Temporary Workaround

### react-native-localize

#### Issue1 - Could not find method implementation() for arguments
React-Native android platform is based on 26.0, so you should use implementation, but my nativebase version is 23.0, when building , there may be an error as below
```
Could not find method implementation() for arguments 
```
Temporary solution is to modify android/build.gradle in node-modules from implemenration to compile

#### Issue2 - java.io.ICEXception : Could not delete folder "" in android studio

My solution is delete build folder inside project/android and then build again