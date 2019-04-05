import { StyleSheet } from "react-native";
import Constant from "./../../../Constant";
import { setStatusBarHeight } from "../../../Utilities";
const styles = StyleSheet.create({
  swipeimg: {
    width: 130,
    height: 90
  },
  rowview: {
    flexDirection: "row",
    marginHorizontal: 15,
    paddingLeft: 2
  },
  buttonText: {
    color: "#87ceeb",
    fontSize: 40
  },
  scrollstyle: { backgroundColor: Constant.APP_COLOR_WHITE, width: Constant.SCREEN_WIDTH },
  logotext: {
    marginVertical: 5,
    fontSize: Constant.SCREEN_WIDTH / 25
  },
  buttonstyle: {
    marginVertical: 10,
    backgroundColor: Constant.BUTTON_COLOR,
    height: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  btntext: {
    fontSize: 20,
    color: Constant.BUTTON_TEXT_COLOR
  },
  linetext: {
    marginVertical: 5,
    marginHorizontal: 5,
    fontSize: 17
  },
  transparentbtn: {
    flexDirection: "row",
    marginVertical: 20,
    marginHorizontal: 15,
    paddingLeft: 15
  },

  viewleft: { alignItems: "center", flexDirection: "row" },
  viewright: { flexDirection: "row", position: "absolute", right: 30 },
  swiperview: {
    flexDirection: "row",
    marginHorizontal: 15,
    marginVertical: 5
  },

  swiperstyle: {
    //alignSelf:'baseline',
    //height: 100,
    marginTop: 25
  },
  swiperpropertystyle: {
    marginTop: 25
  },
  swiperpropertyrowstyle: {
    alignItems: "center",
    width: (Constant.SCREEN_WIDTH - 20) / 2
  },
  swiperrowview: {
    alignItems: "center",
    width: (Constant.SCREEN_WIDTH - 40) / 4
  },
  swiperdatarowview: {
    alignItems: "center",
    width: (Constant.SCREEN_WIDTH - 28) / 2.8,
    marginRight: 5
  },
  textstyle: { margin: 10, color: "#fff", backgroundColor: "transparent", fontSize: 20 },

  topviewstyle: {
    flexDirection: "row",
    position: "absolute",
    bottom: 15,
    width: Constant.SCREEN_WIDTH,

    paddingLeft: 30,
    paddingRight: 30
  },
  logoimg: {
    marginTop: setStatusBarHeight(),
    width: Constant.SCREEN_WIDTH / 3,
    height: Constant.SCREEN_WIDTH / 3
  },
  appnamestyle: {
    fontSize: 35,
    backgroundColor: "transparent",
    color: Constant.APP_COLOR_LIGHT
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: Constant.SCREEN_WIDTH
  },
  topimgstyle: {
    width: Constant.SCREEN_WIDTH,
    height: (Constant.SCREEN_HEIGHT * 40) / 100,
    alignItems: "center"
  },
  headingmedium: { margin: 15, fontSize: 25 },
  headingsmall: { margin: 15, fontSize: 20, fontWeight: "bold" },
  paragraph: { margin: 15, fontSize: 15 },
  iconstylemedium: {
    width: 30,
    height: 30
  },
  iconstylesmall: {
    width: 30,
    height: 30
  },
  bottomborderstyle: { borderBottomWidth: 1, margin: 15, borderColor: "#d6d7da" },
  coverimg: { height: Constant.SCREEN_HEIGHT / 4, marginHorizontal: 15 },
  propertyimg: { height: Constant.SCREEN_HEIGHT / 3 },
  propertyview: {
    marginRight: 45,
    marginLeft: 15,
    marginVertical: 15
  },
  iconLeft: {
    fontSize: 35,
    color: '#F1BF61'
  },
  iconRight: {
    fontSize: 30,
    color: '#F1BF61'
  },
});
export default styles;
