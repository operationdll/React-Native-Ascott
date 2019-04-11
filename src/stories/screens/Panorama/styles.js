import { StyleSheet } from "react-native";
import Constant from "../../../Constant";
import { setStatusBarHeight } from "../../../Utilities";

const styles = StyleSheet.create({
  header: {
    height: 44,
    width: "100%",
    marginTop: setStatusBarHeight(),
    justifyContent: "center"
  },
  mainContainer: {
    flex: 1
  },
  backButtonHeader: {
    position: "absolute",
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center"
  },
  backButtonImageHeader: {
    width: 20,
    height: 20
  },
  textHeader: {
    alignSelf: "center",
    fontSize: 18
  },
  panoramaContainer: {
    flex: 1
  },
  panoramaView: {
    flex: 1
  },
  bottomView:{
    backgroundColor: "rgba(0,0,0,0.3)",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80
  },
  flatlistContainer:{ 
    flexGrow: 1,
     justifyContent: "center"
     },
     flatlistItem:{ width: 80, height: 80 },
     flatlistTouchable:{ backgroundColor: "red", flex: 1, margin: 8 },
     flatlistImage:{ flex: 1 }
});

export default styles;
