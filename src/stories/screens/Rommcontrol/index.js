import React from 'react';
import { Image, Platform } from 'react-native';

import { StackNavigator, StackActions } from 'react-navigation';
import { TabNavigator } from 'react-navigation';
import iconsrc from './../../../iconsrc';
import Mediaroom from './Mediaroom';
import { isIphoneX } from '../../../Utilities';

/**
 * HOME TAB
 */

export default (Roomtabs = TabNavigator(
	{
		Overview: {
			screen: Mediaroom,
			tabBarLabel: 'Overview'
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
		lazy: true,
		swipeEnabled: true,
    animationEnabled: false,
		tabBarOptions: {
			activeTintColor: Constant.APP_COLOR_LIGHT,
			inactiveTintColor: Constant.APP_COLOR_WHITE,
			labelStyle: {
				fontSize: Constant.SCREEN_WIDTH / 35,
				paddingBottom: isIphoneX() ? 10 : 20
			},
			indicatorStyle: {
				borderTopColor: Constant.APP_COLOR_LIGHT,
				borderTopWidth: 5,
				height: 4,
        top: 0,
			},
			style: {
				backgroundColor: 'transparent',
				borderTopWidth: 1,
				borderColor: Constant.APP_COLOR_LIGHT,
				height: isIphoneX() ? 50 : 50
			}
		}
	}
));
