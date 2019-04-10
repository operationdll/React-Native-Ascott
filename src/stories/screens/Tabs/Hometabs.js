import React from "react";
import { Image, Platform } from "react-native";

import { StackNavigator, StackActions } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation";
import iconsrc from "./../../../iconsrc";
import Home from "./../NewHome/index";
import LocalInterest from "../../../container/LocalInterestContainer";
import Community from "../../../container/CommunityContainer";
import Constant from "../../../Constant";

import { isIphoneX } from "../../../Utilities";

/**
 * HOME TAB
 */

export default (Hometabs = createBottomTabNavigator(
  {
    Introduction: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image
            style={{ width: 20, height: 20, tintColor }}
            source={iconsrc.ballicon}
          />
        )
      }
    },
    Promotion: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image
            style={{ width: 20, height: 20, tintColor }}
            source={iconsrc.ballicon}
          />
        )
      }
    },

    LocalInterest: {
      screen: LocalInterest,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image
            style={{ width: 20, height: 20, tintColor }}
            source={iconsrc.redar}
          />
        )
      }
    },
    Community: {
      screen: Community,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image style={{ width: 20, height: 20, tintColor }} source={iconsrc.teal} />
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
      labelStyle: { fontSize: 9, marginBottom: Platform.OS === "ios" ? (isIphoneX() ? 2 : 5) : 0 },
      showIcon: "true",
      style: { backgroundColor: Constant.APP_COLOR_WHITE, height: Platform.OS === "ios" ? (isIphoneX() ? 50 : 50) : 70 },
      indicatorStyle: { opacity: 0 }
    }
  }
));