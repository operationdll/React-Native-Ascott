import React from 'react';
import { Image, Platform } from 'react-native';

import { StackNavigator, StackActions } from 'react-navigation';
import { TabNavigator } from "react-navigation";
import iconsrc from "./../../../iconsrc"
import Home from "./../NewHome"

/**
 * HOME TAB
 */


export default MainTabSeekerNavigator = TabNavigator({
    Introduction: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: ({ focused }) => (
                <Image style={{ width: 23, height: 18 }} source={
                    focused ? iconsrc.ballicon : iconsrc.ballicon} />
            )
        }
    },
    Promotion: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: ({ focused }) => (
                <Image style={{ width: 23, height: 18 }} source={
                    focused ? iconsrc.ballicon : iconsrc.ballicon} />
            )
        }
    },
    
    "Local Interest": {
        screen: Home,
        navigationOptions: {
            tabBarIcon: ({ focused }) => (
                <Image style={{ width: 23, height: 18 }} source={
                    focused ? iconsrc.redar : iconsrc.redar} />
            )
        }
    },
    Community: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: ({ focused }) => (
                <Image style={{ width: 21, height: 18 }} source={
                    focused ? iconsrc.teal : iconsrc.teal} />
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
            activeTintColor: "orange",
            inactiveTintColor: "#CDE9E8",
            labelStyle: { fontSize: 9, marginBottom: Platform.OS === "ios" ? 5 : 0, fontFamily: "Montserrat-Bold", },
            showIcon: "true",
            style: { backgroundColor: "#03AEAB" },
            indicatorStyle: { opacity: 0 }
        },
        navigationOptions: ({ navigation }) => ({
            tabBarOnPress: (scene, jumpToIndex) => {

                if (Constant.OPEN_TAB_POSITION == scene.scene.index) {
                    return
                }

                Constant.OPEN_TAB_POSITION = scene.scene.index

                navigation.dispatch(StackActions.popToTop())

                if (scene.scene.index == 0) {
                    navigation.navigate("Home")
                } else if (scene.scene.index == 1) {
                    navigation.navigate("MyJob")
                } else if (scene.scene.index == 2) {
                    navigation.navigate("MyCal")
                } else if (scene.scene.index == 3) {
                    navigation.navigate("More")
                }
            },
        }),
    }
); 
