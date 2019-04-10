/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View,Image, ImageBackground, StyleSheet, Platform, TouchableOpacity, Text } from 'react-native';
import Roomtabs from '.';
import iconsrc from '../../../iconsrc';
import { setStatusBarHeight } from '../../../Utilities';

export default class TabRoomMedia extends Component {
	render() {
		return (
		
			<View style={{flex:1}}>
					<View style={styles.statusbar}>
						<TouchableOpacity
							style={styles.cancelbtn}
							onPress={() => this.props.navigation.navigate('Home')}
						>
						 <Image style={styles.iconstylemedium} resizeMode={"contain"} source={iconsrc.icon_close_o} />
						</TouchableOpacity>
						<Text style={{ fontSize: Constant.SCREEN_WIDTH / 22 ,color:Component.APP_COLOR_BLACK}}>Text</Text>
					</View>
					<ImageBackground source={iconsrc.icback} style={styles.container}>	
					<Roomtabs  />
				
			</ImageBackground>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 9,
		paddingHorizontal:15,
		//paddingTop: setStatusBarHeight()
	},
	iconstylemedium: {
		width: (Constant.SCREEN_WIDTH * 5) / 100,
		height: (Constant.SCREEN_WIDTH * 5) / 100
	  },
	statusbar: {
		width: Constant.SCREEN_WIDTH,
		//flex: 1,
		height: Constant.SCREEN_HEIGHT / 100 * 10,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: Platform.OS === 'ios' ? setStatusBarHeight() : 0
	},
	drawerIconView: {
		width: (Constant.SCREEN_WIDTH * 10) / 100,
		height: (Constant.SCREEN_WIDTH * 10) / 100,
		marginHorizontal:15,
		alignItems:'center',
		justifyContent:'center'
	  },
	cancelbtn: {
		position: 'absolute',
		top: Platform.OS === 'ios' ? setStatusBarHeight()+10 : 3,
		left: 15,
		
	},
	crossButtonText: {
		fontSize: 30,
		color: Constant.APP_COLOR_LIGHT,

		fontWeight: '500'
	}
});
