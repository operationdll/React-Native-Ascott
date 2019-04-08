import { Dimensions, Platform, Animated } from "react-native";


var { width, height } = Dimensions.get("window");

export default (Constant = {
  SCREEN_WIDTH: width,
  SCREEN_HEIGHT: height,
  AppName: "Ascott",
  //color
  APP_COLOR_CANCEL:"#f2e943",
  APP_COLOR_LIGHT: "#EEBB5B",
  SWIPER_BUTTON_COLOR: "#87ceeb",
  APP_COLOR_DARK: "",
  APP_COLOR_SEMI_DARK: "",
  APP_COLOR_BLACK: "#000000",
  APP_COLOR_WHITE: "#ffffff",
  APP_COLOR_BLACK: "#000000",
  APP_COLOR_LIGHT_BLACK: "#353535",
  APP_COLOR_GRAY: "",
  DIVEDER_COLOR: "",
  DIVEDER_LIGHT_COLOR: "",
  BUTTON_TEXT_COLOR: "white",
  BUTTON_COLOR: "#EEBB5B",
  APP_COLOR_GREY:"6a7f7a",
  APP_COLOR_BORDER:"#d6d7da",


  // Globle Reference
  showToast: "",
  ToastDureston: 1500,
  NOTIFICATION_BADGE_ANIMATION: new Animated.Value(1),




});
