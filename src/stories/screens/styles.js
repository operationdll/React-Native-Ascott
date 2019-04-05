import { StyleSheet } from "react-native";
import Constant from "../../Constant";
import { setStatusBarHeight } from "../../Utilities";
const styles = StyleSheet.create({
  swipeimg: {
    width: (Constant.SCREEN_WIDTH * 27) / 100,
    height: (Constant.SCREEN_WIDTH * 27) / 100
  },
  rowview: {
    flexDirection: "row"
  },

  buttonText: {
    color: Constant.SWIPER_BUTTON_COLOR,
    fontSize: Constant.SCREEN_HEIGHT / 20
  },
  scrollstyle: { backgroundColor: Constant.APP_COLOR_WHITE, width: Constant.SCREEN_WIDTH },
  logotext: {
    marginTop: 5,
    fontSize: Constant.SCREEN_WIDTH / 33
  },
  buttonstyle: {
    marginVertical: 10,
    backgroundColor: Constant.BUTTON_COLOR,
    height: (Constant.SCREEN_HEIGHT * 7) / 100,
    alignItems: "center",
    justifyContent: "center"
  },
  btntext: {
    fontSize: Constant.SCREEN_WIDTH / 25
  },
  drawertop: {
    height: Constant.SCREEN_HEIGHT / 4,
    paddingHorizontal: 30,
    alignItems: "center"
  },
  drawertitletext: {
    fontSize: Constant.SCREEN_WIDTH / 20,
    fontWeight: "bold"
  },
  btntextcolor: {
    color: Constant.BUTTON_TEXT_COLOR
  },
  linetext: {
    marginVertical: 5,

    fontSize: Constant.SCREEN_WIDTH / 30
  },
  transparentbtn: {
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 15,
    paddingLeft: 15,
    alignItems: "center"
  },

  viewleft: { alignItems: "center", flexDirection: "row" },
  viewright: { flexDirection: "row", alignItems: "center", position: "absolute", right: 0 },
  swiperview: {
    flexDirection: "row",
    marginHorizontal: 15,
    marginVertical: 5
  },

  swiperstyle: {
    //alignSelf:'baseline',
    //height: 100,
    marginTop: 15
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
    width: (Constant.SCREEN_WIDTH - 30) / 3,
    marginRight: 5
  },
  textstyle: {
    margin: 10,
    color: "#fff",
    backgroundColor: "transparent",
    fontSize: Constant.SCREEN_WIDTH / 27
  },

  topviewstyle: {
    flexDirection: "row",
    position: "absolute",
    bottom: 15,
    width: Constant.SCREEN_WIDTH,
    alignItems: "center",
    paddingHorizontal: 30
  },
  logoimg: {
    marginTop: setStatusBarHeight(),
    width: Constant.SCREEN_WIDTH / 3,
    height: Constant.SCREEN_WIDTH / 3
  },
  appnamestyle: {
    fontSize: Constant.SCREEN_WIDTH / 15,
    backgroundColor: "transparent",
    color: Constant.APP_COLOR_LIGHT,
    marginVertical: 10
  },
  container: {
    backgroundColor: Constant.APP_COLOR_WHITE,
    alignItems: "center",
    justifyContent: "center",
    width: Constant.SCREEN_WIDTH
  },
  drawercontainer: {
    backgroundColor: Constant.APP_COLOR_WHITE,
    alignItems: "center",
    paddingHorizontal: 15,
    width: Constant.SCREEN_WIDTH
  },
  topimgstyle: {
    width: Constant.SCREEN_WIDTH,
    height: (Constant.SCREEN_HEIGHT * 40) / 100,
    alignItems: "center"
  },
  headingmedium: { margin: 15, fontSize: Constant.SCREEN_WIDTH / 22 },
  headingsmall: { margin: 15, fontSize: Constant.SCREEN_WIDTH / 25, fontWeight: "bold" },
  paragraph: { marginHorizontal: 15, fontSize: Constant.SCREEN_WIDTH / 27, marginBottom: 10 },
  iconstylemedium: {
    width: 30,
    height: 30
  },
  iconstylesmall: {
    width: (Constant.SCREEN_WIDTH * 6) / 100,
    height: (Constant.SCREEN_WIDTH * 6) / 100
  },
  bottomborderstyle: {
    borderBottomWidth: 1,
    marginHorizontal: 15,

    borderColor: "#d6d7da"
  },
  coverimg: {
    height: Constant.SCREEN_HEIGHT / 4,
    marginHorizontal: 15,
    marginVertical: 10,
    width: Constant.SCREEN_WIDTH - 30
  },
  propertyimg: { height: Constant.SCREEN_HEIGHT / 3 },
  propertyview: {
    marginRight: 45,
    marginLeft: 15,
    marginVertical: 15
  }
});
export default styles;
