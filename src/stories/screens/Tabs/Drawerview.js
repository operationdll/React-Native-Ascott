import React from "react";
import { StyleSheet, View, Image, Platform, Text, TouchableOpacity } from "react-native";

import iconsrc from "./../../../iconsrc";

import Constant from "../../../Constant";

import { isIphoneX, setStatusBarHeight } from "../../../Utilities";

import HomeTabIndexFile from "../NewHome/index"

export default class Drawerview extends React.Component {

  _onPressButton = (index) => {
    // this.props.props.navigation.navigate("Parallax")
    this.props.props.navigation.toggleLeftDrawer();
    if(index==5){
      this.props.props.navigation.navigate('Login');
    }
  }

  render() {
    return (
      <View style={styles.mainView}>
        <Text style={styles.titleText}>wang</Text>

        <View style={{ height: Constant.SCREEN_WIDTH / 10 }} />

        <TouchableOpacity
          onPress={() => this._onPressButton(0)}
          style={styles.itemView}>
          <Text style={styles.itemText}>Room Info</Text>
          <Text style={[styles.itemText, { color: Constant.APP_COLOR_LIGHT }]}>No.0702</Text>
        </TouchableOpacity>

        <View style={styles.dividerView} />

        <TouchableOpacity
          onPress={() => this._onPressButton(1)}
          style={styles.itemView}>
          <Text style={styles.itemText}>Message</Text>
          <Image
            style={{ width: 20, height: 20 }}
            resizeMode={"contain"}
            source={iconsrc.msg}
          />
        </TouchableOpacity>
        <View style={styles.dividerView} />

        <TouchableOpacity
          onPress={() => this._onPressButton(2)}
          style={styles.itemView}>
          <Text style={styles.itemText}>Check Order</Text>
          <Image
            style={{ width: 20, height: 20 }}
            resizeMode={"contain"}
            source={iconsrc.viewOrder}
          />
        </TouchableOpacity>
        <View style={styles.dividerView} />

        <TouchableOpacity
          onPress={() => this._onPressButton(3)}
          style={styles.itemView}>
          <Text style={styles.itemText}>Billing</Text>
          <Image
            style={{ width: 20, height: 20 }}
            resizeMode={"contain"}
            source={iconsrc.msg}
          />
        </TouchableOpacity>
        <View style={styles.dividerView} />

        <TouchableOpacity
          onPress={() => this._onPressButton(4)}
          style={styles.itemView}>
          <Text style={styles.itemText}>Change password</Text>
          <Image
            style={{ width: 20, height: 20 }}
            resizeMode={"contain"}
            source={iconsrc.pwd}
          />
        </TouchableOpacity>
        <View style={styles.dividerView} />

        <TouchableOpacity
          onPress={() => this._onPressButton(5)}
          style={styles.itemView}>
          <Text style={styles.itemText}>Logout</Text>
          <Image
            style={{ width: 20, height: 20 }}
            resizeMode={"contain"}
            source={iconsrc.logout}
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
    paddingTop: setStatusBarHeight() + 30,
    paddingLeft: Constant.SCREEN_WIDTH / 25
  },
  itemView: {
    paddingVertical: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: Constant.SCREEN_WIDTH / 25,
  },
  titleText: {
    width: '100%',
    fontSize: 25,
    fontWeight: '800',
    color: Constant.APP_COLOR_LIGHT_BLACK
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