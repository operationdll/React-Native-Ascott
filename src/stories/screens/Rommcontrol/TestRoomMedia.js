/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, Platform, TouchableOpacity, Text } from 'react-native';
import Roomtabs from './index';
import iconsrc from '../../../iconsrc';
import { setStatusBarHeight } from '../../../Utilities';

export default class TestRoomMedia extends Component {
	render() {
		return (
			<ImageBackground source={iconsrc.icback} style={styles.container}>
				<View style={styles.statusbar}>
					<TouchableOpacity
						style={styles.cancelbtn}
						onPress={() => this.props.navigation.navigate('Home')}
					>
						<Text style={styles.crossButtonText}>x</Text>
					</TouchableOpacity>
					<Text style={{ fontSize: Constant.SCREEN_WIDTH / 22 }}>Text</Text>
				</View>
				<Roomtabs />
			</ImageBackground>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1
		//paddingTop: setStatusBarHeight()
	},
	statusbar: {
		width: Constant.SCREEN_WIDTH,
		height: Constant.SCREEN_HEIGHT / 100 * 10,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: Platform.OS === 'ios' ? setStatusBarHeight() : 0
	},
	cancelbtn: {
		position: 'absolute',
		top: Platform.OS === 'ios' ? setStatusBarHeight() : 3,
		left: 15
	},
	crossButtonText: {
		fontSize: 30,
		color: Constant.APP_COLOR_LIGHT,

		fontWeight: '500'
	}
});
