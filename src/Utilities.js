import { AsyncStorage } from "react-native";
import { Dimensions, Platform, StatusBar, Alert } from "react-native";
//import Constant from "../constants/Constant";

import { NavigationActions, StackActions } from 'react-navigation'


//./storage.js
const isIphoneX = () => {
  const dimen = Dimensions.get("window");

  return (
    Platform.OS === "ios" &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 896 ||
      dimen.width === 896)
  );
};


const setStatusBarHeight = () => {
  const dimen = Dimensions.get("window");

  if (Platform.OS === "ios") {
    if (
      !Platform.isPad &&
      !Platform.isTVOS &&
      (dimen.height === 812 ||
        dimen.width === 812 ||
        dimen.height === 896 ||
        dimen.width === 896)
    ) {
      return 44
    } else {
      return 20
    }
  } else {
    return StatusBar.currentHeight
  }

};

const isNumber = n => {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const ifIphoneX = (iphoneXStyle, regularStyle) => {
  if (isIphoneX()) {
    return iphoneXStyle;
  }
  return regularStyle;
};

const getStatusBarHeight = safe => {
  return Platform.select({
    ios: ifIphoneX(safe ? 44 : 30, 20),
    android: StatusBar.currentHeight
  });
};

const emailValidation = (email) => {
  var emailString = "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.+[A-Za-z]{2,64}"

  if (!email.match(emailString)) {
    // Alert.alert(Constant.ALERT_TITLE, "Enter valid Email");
    //Constant.showToast.show("Enter valid Email", Constant.ToastDureston);
  }


  return email.match(emailString)
}

const passwordValidation = (password) => {

  var passwordString = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})";

  if (!password.match(passwordString)) {
    Alert.alert("Password Strength", "enter minimum of 8 characters");
  }

  return password.match(passwordString)
}

const manageApiResponseCode = (response, navigation) => {

  if (response.status_code === 400) {
    ///Alert.alert(Constant.ALERT_TITLE, response.message);
  } else if (response.status_code === 401) {
   // Alert.alert(Constant.ALERT_TITLE, response.message);
    this.clearAppData(navigation)
  }

}

const logoutFromApp = (isViewDialog, navigation) => {

  if (isViewDialog) {
    Alert.alert(
      "Log out",
      "Are you sure you want to logout.",
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'Logout', onPress: () => this.clearAppData(navigation) },
      ],
      { cancelable: false }
    )
  } else {
    this.clearAppData(navigation)
  }
}

clearAppData = (navigation) => {

  var formData = new FormData();
//  formData.append('token', Constant.USER_DATA.token);
  formData.append('device_type', Platform.OS);
 // formData.append('device_token', Constant.FCM_TOKEN);

  // fetch(Constant.API_LOGOUT, {
  //   method: 'POST',
  //   headers: {
  //     "Authorization": Constant.HEADER,
  //   },
  //   body: formData
  // }).then(r => r.json())
  //   .then(data => {
  //   })

  //Constant.IS_LOGIN = "false"
 // Constant.USER_DATA = {}
 //AsyncStorage.setItem('user_data', JSON.stringify({}))
  //AsyncStorage.setItem('is_login', 'false')

  try {
    navigation.dispatch(StackActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({ routeName: 'Login' })],
    }))
  } catch (error) {
    alert(error)
  }
}

const convertTime12to24 = (time12h) => {
  const [time, modifier] = time12h.split(' ');

  let [hours, minutes] = time.split(':');

  if (hours === '12') {
    hours = '00';
  }

  if (modifier === 'PM' || modifier === 'pm') {
    hours = parseInt(hours, 10) + 12;
  }

  return hours + ':' + minutes;
}

const utilities = {
  // Storage,
  isIphoneX,
  isNumber,
  getStatusBarHeight,
  emailValidation,
  passwordValidation,
  manageApiResponseCode,
  logoutFromApp,
  convertTime12to24,
  setStatusBarHeight
};

module.exports = utilities;
