import React from "react";
import { StyleSheet, View, Image, Platform, Text, TouchableOpacity } from "react-native";

import iconsrc from "../../../iconsrc";

import Constant from "../../../Constant";

import { isIphoneX, setStatusBarHeight } from "../../../Utilities";

import HomeTabIndexFile from "../NewHome/index"

export default class DrawerviewRight extends React.Component {

  _onPressButton = (index) => {
  
    this.props.props.navigation.toggleRightDrawer()
  }

  render() {
    return (
      <View style={styles.mainView}>
        <Text style={styles.titleText}>MORE</Text>

        <View style={{ height: Constant.SCREEN_WIDTH / 10 }} />


        <TouchableOpacity 
          onPress={() => this._onPressButton(0)}
          style={styles.itemView}>
          <Text style={styles.itemText}>Language</Text>
          <Image
            style={{ width: 20, height: 20 }}
            resizeMode={"contain"}
            source={iconsrc.icon_right}
          />
        </TouchableOpacity>
        <View style={styles.dividerView} />

        <TouchableOpacity
          onPress={() => this._onPressButton(1)}
          style={styles.itemView}>
          <Text style={styles.itemText}>Help</Text>
          <Image
            style={{ width: 20, height: 20 }}
            resizeMode={"contain"}
            source={iconsrc.icon_right}
          />
        </TouchableOpacity>
        <View style={styles.dividerView} />

        <TouchableOpacity
          onPress={() => this._onPressButton(2)}
          style={styles.itemView}>
          <Text style={styles.itemText}>About us</Text>
          <Image
            style={{ width: 20, height: 20 }}
            resizeMode={"contain"}
            source={iconsrc.icon_right}
          />
        </TouchableOpacity>
        <View style={styles.dividerView} />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    paddingRight: Constant.SCREEN_WIDTH / 25,
    paddingTop: setStatusBarHeight() + 30,
  },
  itemView: {
    paddingVertical: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: Constant.SCREEN_WIDTH / 25
  },
  titleText: {
    width: '100%',
    fontSize: 25,
    fontWeight: '800',
    color: Constant.APP_COLOR_LIGHT_BLACK,
    paddingLeft: Constant.SCREEN_WIDTH / 25
  },
  itemText: {
    color: Constant.APP_COLOR_LIGHT_BLACK,
    fontSize: 14
  },
  dividerView: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(0,0,0,.07)'
  }
})