import { Dimensions, Platform, Animated } from "react-native";


var { width, height } = Dimensions.get("window");

export default (Constant = {
  SCREEN_WIDTH: width,
  SCREEN_HEIGHT: height,
  AppName: "Ascott",
  //color
  APP_COLOR_LIGHT: "orange",
  APP_COLOR_DARK: "",
  APP_COLOR_SEMI_DARK: "",
  APP_COLOR_BLACK: "",
  APP_COLOR_LIGHT_BLACK: "",
  APP_COLOR_GRAY: "",
  DIVEDER_COLOR: "",
  DIVEDER_LIGHT_COLOR: "",

  // Globle Reference
  showToast: "",
  ToastDureston: 1500,
  NOTIFICATION_BADGE_ANIMATION: new Animated.Value(1),

  //Styles
  headingmedium: { margin: 15, fontSize: 25 },
  headingsmall: { margin: 15, fontSize: 20 },
  paragraph: { margin: 15, fontSize: 15 },
  iconstylemedium: {
    
    width: 40,
    height: 40
  },
  iconstylesmall: {
    width: 30,
    height: 30
  },
  bottomborderstyle:{ borderBottomWidth: 1, margin: 15,borderColor: '#d6d7da' },
 
});
