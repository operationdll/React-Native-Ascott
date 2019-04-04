
import {
   
    StyleSheet
  } from "react-native";
  import Constant from "./../../../Constant";
  import { setStatusBarHeight } from "../../../Utilities";
const styles = StyleSheet.create({
    swipeimg:{
      width:120,
      height:100
    },
    rowview:{
      flexDirection:"row",
      margin:15,
      paddingLeft:2
    },
    buttonText:{
      color:"#87ceeb",
      fontSize:40
    },
    logotext:{
      marginVertical:5,
      
    },
    viewleft:{ alignItems: "center", flexDirection: "row" },
    viewright:{ flexDirection: "row", position: "absolute", right: 30 },
    swiperview: {
      flexDirection: "row",
      marginHorizontal: 20,
      marginVertical:10
    },
  
    swiperstyle: {
      //alignSelf:'baseline',
      //height: 100,
      marginTop: 25
    },
    swiperrowview: {
      alignItems: "center",
      width: (Constant.SCREEN_WIDTH - 40) / 4
    },
    swiperdatarowview:{
        alignItems: "center",
        width:(Constant.SCREEN_WIDTH - 30) / 3,
        marginRight:5,
    },
    textstyle: { margin: 10, color: "#fff", backgroundColor: "transparent", fontSize: 20 },
   
  
    topviewstyle: {
      flexDirection: "row",
  
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
      flex: 1
    },
    topimgstyle: {
      width: Constant.SCREEN_WIDTH,
      height: (Constant.SCREEN_HEIGHT * 35) / 100,
      alignItems: "center"
    }
  });
 export default styles;  