import React from "react";
import { Image, Platform } from "react-native";

import { StackNavigator, StackActions } from "react-navigation";
import { TabNavigator } from "react-navigation";
import iconsrc from "./../../../iconsrc";
import Home from "./../NewHome/index";
import Constant from "../../../Constant";

import { isIphoneX } from "../../../Utilities";

/**
 * HOME TAB
 */

export default (Hometabs = TabNavigator(
  {
    Introduction: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Image
            style={{ width: 20, height: 20 }}
            source={focused ? iconsrc.ballicon : iconsrc.ballicon}
          />
        )
      }
    },
    Promotion: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Image
            style={{ width: 20, height: 20 }}
            source={focused ? iconsrc.ballicon : iconsrc.ballicon}
          />
        )
      }
    },

    LocalInterest: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Image
            style={{ width: 20, height: 20 }}
            source={focused ? iconsrc.redar : iconsrc.redar}
          />
        )
      }
    },
    Community: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Image style={{ width: 20, height: 20 }} source={focused ? iconsrc.teal : iconsrc.teal} />
        )
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarPosition: "bottom",
    lazy: true,
    swipeEnabled: false,
    animationEnabled: false,
    tabBarOptions: {
      activeTintColor: Constant.APP_COLOR_LIGHT,
      inactiveTintColor: Constant.APP_COLOR_BLACK,
      labelStyle: { fontSize: 9, marginBottom: Platform.OS === "ios" ? (isIphoneX() ? 25 : 5) : 0 },
      showIcon: "true",
      style: { backgroundColor: Constant.APP_COLOR_WHITE, height: Platform.OS === "ios" ? (isIphoneX() ? 70 : 50) : 70 },
      indicatorStyle: { opacity: 0 }
    }
  }
));
