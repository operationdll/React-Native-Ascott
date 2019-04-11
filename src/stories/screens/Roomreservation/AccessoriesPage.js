/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
	Platform,
	Image,
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	FlatList,
	TouchableOpacity
} from 'react-native';
import { isIphoneX, setStatusBarHeight } from '../../../Utilities';
import Constant from './../../../Constant';
import styles from './../styles';
import iconsrc from '../../../iconsrc';
import Swiper from 'react-native-swiper';
import { ScrollView } from 'react-native-gesture-handler';

export default class AccessoriesPage extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View
				style={{
					backgroundColor: Constant.APP_COLOR_WHITE,
					height: Constant.SCREEN_HEIGHT
				}}
			>
				<View style={stylesinner.statusbar}>
					<TouchableOpacity
						style={stylesinner.cancelbtn}
						onPress={() => this.props.navigation.goBack()}
					>
						<Image
							style={stylesinner.iconstylemedium}
							resizeMode={'contain'}
							source={iconsrc.icback}
						/>
					</TouchableOpacity>
					<Text
						style={{
							fontSize: Constant.SCREEN_WIDTH / 22,
							color: Component.APP_COLOR_BLACK
						}}
					>
						{this.props.navigation.state.params.item.name}
					</Text>
				</View>
				<Text style={{ marginHorizontal: 15 }}>
					{this.props.navigation.state.params.item.description}
				</Text>
				<Image style={stylesinner.bottomicon} source={iconsrc.reporticon} />
			</View>
		);
	}
}

const stylesinner = StyleSheet.create({
	bottomicon: {
		position: 'absolute',
		bottom: 50,
		right: 0,
		width: Constant.SCREEN_WIDTH / 8,
		height: Constant.SCREEN_WIDTH / 8
	},
	iconstylemedium: {
		width: Constant.SCREEN_WIDTH * 5 / 100,
		height: Constant.SCREEN_WIDTH * 5 / 100
	},
	statusbar: {
		borderBottomWidth: 1,
		borderColor: Constant.APP_COLOR_BORDER,
		width: Constant.SCREEN_WIDTH,
		//flex: 1,
		height: Platform.OS === 'ios' ? setStatusBarHeight() + 44 : 44,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: Platform.OS === 'ios' ? setStatusBarHeight() : 0
	},

	cancelbtn: {
		position: 'absolute',
		top: Platform.OS === 'ios' ? setStatusBarHeight() + 13 : 13,
		left: 15
	}
});
