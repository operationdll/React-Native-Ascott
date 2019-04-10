import React from 'react';
import { Image, Platform } from 'react-native';

import { createMaterialTopTabNavigator } from "react-navigation";
import iconsrc from './../../../iconsrc';
import Mediaroom from './Mediaroom';
import { isIphoneX } from '../../../Utilities';

import Constant from "../../../Constant"

/**
 * HOME TAB
 */

export default Roomtabs = createMaterialTopTabNavigator({

	Overview: {
		screen: Mediaroom,
	},
	Mediaroom: {
		screen: Mediaroom
	},
	Diningroom: {
		screen: Mediaroom
	},
	Bedroom: {
		screen: Mediaroom
	}
},
	{
		navigationOptions: {
			header: {
				visible: true
			}
		},
		tabBarPosition: 'bottom',
		lazy: false,
		swipeEnabled: true,
		animationEnabled: false,
		tabBarOptions: {
			height: 20,
			activeTintColor: Constant.APP_COLOR_LIGHT,
			inactiveTintColor: "white",
			style: {backgroundColor: "rgba(52,52,52,0)", borderTopWidth: 1, borderColor: Constant.APP_COLOR_LIGHT },
			labelStyle: { fontSize:  Constant.SCREEN_WIDTH / 40, marginBottom: Platform.OS === "ios" ? (isIphoneX() ? 28 : 5) : 5},
			indicatorStyle: {
				backgroundColor: Constant.APP_COLOR_LIGHT,
				height: 4,
				opacity: 1,
				top: 0
			}
		}
	}
);