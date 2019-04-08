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
	ImageBackground,
	TouchableOpacity,
  ScrollView,
  Animated
} from 'react-native';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';
import { DrawerNavigator } from 'react-navigation';
import Timer from 'jest-jasmine2/build/jasmine/Timer';
import Constant from './../../../Constant';

import iconsrc from '../../../iconsrc';
import { setStatusBarHeight } from '../../../Utilities';
export default class Mediaroomtab extends Component {
	constructor(props) {
		super(props);
		this.state = {
			maincontrollerlist: [
				{
					id: 0,
					name: 'Sleeping',
					aicon: iconsrc.sleeping,
					iicon: iconsrc.sleepinggray,
					status: 0
				},
				{
					id: 1,
					name: 'Dining',
					aicon: iconsrc.sleeping,
					iicon: iconsrc.sleepinggray,
					status: 1
				},
				{
					id: 2,
					name: 'Media',
					aicon: iconsrc.sleeping,
					iicon: iconsrc.sleepinggray,
					status: 0
				},
				{
					id: 3,
					name: 'Welcome',
					aicon: iconsrc.sleeping,
					iicon: iconsrc.sleepinggray,
					status: 0
				}
			],
			subcontrollerlist: [
				{
					id: 0,
					name: 'Temp',
					aicon: iconsrc.sleeping,
					iicon: iconsrc.sleepinggray,
					status: 0
				},
				{
					id: 1,
					name: 'Humidity',
					aicon: iconsrc.sleeping,
					iicon: iconsrc.sleepinggray,
					status: 1
				},
				{
					id: 2,
					name: 'Lamp',
					aicon: iconsrc.sleeping,
					iicon: iconsrc.sleepinggray,
					status: 0
				},
				{
					id: 3,
					name: 'Sound',
					aicon: iconsrc.sleeping,
					iicon: iconsrc.sleepinggray,
					status: 0
				},
				{
					id: 4,
					name: 'TV',
					aicon: iconsrc.sleeping,
					iicon: iconsrc.sleepinggray,
					status: 1
				},
				{
					id: 5,
					name: 'Curtain',
					aicon: iconsrc.sleeping,
					iicon: iconsrc.sleepinggray,
					status: 0
				},
				{
					id: 6,
					name: 'Sound',
					aicon: iconsrc.sleeping,
					iicon: iconsrc.sleepinggray,
					status: 0
				},
				{
					id: 7,
					name: 'TV',
					aicon: iconsrc.sleeping,
					iicon: iconsrc.sleepinggray,
					status: 1
				},
				{
					id: 8,
					name: 'Curtain',
					aicon: iconsrc.sleeping,
					iicon: iconsrc.sleepinggray,
					status: 0
				}
			]
		};
	}
	maincontrolchange = (id) => {
		const array = [ ...this.state.maincontrollerlist ];
		if (array[id].status == 1) {
			array[id].status = 0;
		} else {
			array[id].status = 1;
		}
		this.setState({
			maincontrollerlist: array
		});
	};
	subcontrolchange = (id) => {
		const array = [ ...this.state.subcontrollerlist ];
		if (array[id].status == 1) {
			array[id].status = 0;
		} else {
			array[id].status = 1;
		}
		this.setState({
			subcontrollerlist: array
		});
	};
	_renderItem = ({ item, index }) => {
		return (
			<TouchableOpacity
				onPress={() => {
					this.maincontrolchange(item.id);
				}}
				style={styles.menuitemview}
			>
				<Image
					style={styles.itemimg}
					resizeMode={'contain'}
					source={item.status == 1 ? item.aicon : item.iicon}
				/>
				<Text
					style={[
						styles.itemtext,
						{
							color:
								item.status == 1
									? Constant.APP_COLOR_LIGHT
									: Constant.APP_COLOR_WHITE
						}
					]}
				>
					{item.name}
				</Text>
			</TouchableOpacity>
		);
	};
	_rendersubItem = ({ item, index }) => {
		return (
			<TouchableOpacity
				onPress={() => {
					this.subcontrolchange(item.id);
				}}
				style={styles.menusubitemview}
			>
				<Image
					style={styles.subitemimg}
					source={item.status == 1 ? item.aicon : item.iicon}
				/>
				<Text
					style={[
						styles.itemtext,
						{
							color:
								item.status == 1
									? Constant.APP_COLOR_LIGHT
									: Constant.APP_COLOR_WHITE
						}
					]}
				>
					{item.name}
				</Text>
			</TouchableOpacity>
		);
	};
	render() {
		return (
			<View style={styles.container}>
				
				<View style={styles.controltitle}>
					<Text style={styles.txttitle}> MEDIAROOM </Text>
				</View>
				<View style={styles.mainmenu}>
					<FlatList
						style={{ margin: 0 }}
						scrollEnabled={false}
						horizontal={true}
						data={this.state.maincontrollerlist}
						extraData={this.state}
						keyExtractor={this._keyExtractor}
						renderItem={this._renderItem}
					/>
					<View style={[ styles.bottomborderstyle ]} />
					<ScrollView>
						<FlatList
							style={{ margin: 5 }}
							numColumns={3}
							data={this.state.subcontrollerlist}
							extraData={this.state}
							keyExtractor={this._keyExtractor}
							renderItem={this._rendersubItem}
						/>
					</ScrollView>
				</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({


	bottomborderstyle: {
		borderBottomWidth: 1,
		marginVertical: 10,

		borderColor: Constant.APP_COLOR_BORDER
	},
	itemimg: {
		width: Constant.SCREEN_WIDTH * 7 / 100,
		height: Constant.SCREEN_WIDTH * 7 / 100
	},
	subitemimg: {
		width: Constant.SCREEN_WIDTH * 10 / 100,
		height: Constant.SCREEN_WIDTH * 10 / 100
	},
	itemtext: {
		marginVertical: 5
	},
	menusubitemview: {
		flexDirection: 'column',
		alignItems: 'center',
		marginVertical: 5,
		width: (Constant.SCREEN_WIDTH - 30) / 3
	},
	menuitemview: {
		alignItems: 'center',
		width: (Constant.SCREEN_WIDTH - 40) / 4,
		height: Constant.SCREEN_HEIGHT * 10 / 100,
		justifyContent: 'center',
		padding: 0
  },
  selectedTabTxt: {
    color: '#2C3E50',
    marginTop: 0,
    fontSize: 12
},
	mainmenu: {
		marginHorizontal: 15,
		marginBottom: 0
	},
	txttitle: {
		fontSize: Constant.SCREEN_WIDTH / 10,
		backgroundColor: 'transparent',
		color: Constant.APP_COLOR_WHITE
	},
	controltitle: {
		height: Constant.SCREEN_WIDTH * 35 / 100,
		justifyContent: 'center',
		alignItems: 'center'
	},
	container: {
		flex: 1
		//paddingTop: setStatusBarHeight()
	}
});

class Mediaroom extends Component {
	render() {
		return (
      <Animated.View style={{flex: 1, backgroundColor: this._bgColor}} >
      <IndicatorViewPager
          style={{flex: 1}}
          indicator={this._renderTabIndicator()}
         
          scrollEnabled={false}
          initialPage={1}
      >
					<Mediaroomtab />
          <Mediaroomtab />
          <Mediaroomtab />
          <Mediaroomtab />
				</IndicatorViewPager>
			</Animated.View>
		);
	}
	_renderTabIndicator() {
		let tabs = [
			{
				text: 'Overview'
			},
			{
				text: 'Mediaroom'
			},
			{
				text: 'Diningroom'
			},
			{
				text: 'Bedroom'
			}
		];
    return <PagerTabIndicator
    selectedTextStyle={styles.selectedTabTxt}
    tabs={tabs} />;
	}
}
