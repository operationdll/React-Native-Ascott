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
import iconsrc from "../../../iconsrc";
import Swiper from 'react-native-swiper';
import { ScrollView } from 'react-native-gesture-handler';

export default class Roomreservation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			arraw: 10,
			roomaccessories: [
				{
					id: 0,
					description:
						'Paragraph Formatting description: Paragraph formatting determines the type of text you have in aparticular part of your website. Its function is to delineate your body text (the main content) from other types of text, such as paragraph, chapter, and page headings,notes, image captions, et cetera.',
					name: 'Refridgeratore',
					image:
						'https://www.ikea.com/gb/en/images/products/avkyld-integrated-fridge-a-white__0280272_pe419220_s5.jpg'
				},
				{
					id: 1,
					description:
						'Paragraph Formatting description: Paragraph formatting determines the type of text you have in aparticular part of your website. Its function is to delineate your body text (the main content) from other types of text, such as paragraph, chapter, and page headings,notes, image captions, et cetera.',
					name: 'TV',
					image:
						'https://www.ikea.com/gb/en/images/products/avkyld-integrated-fridge-a-white__0280272_pe419220_s5.jpg'
				},
				{
					id: 2,
					description:
						'Paragraph Formatting description: Paragraph formatting determines the type of text you have in aparticular part of your website. Its function is to delineate your body text (the main content) from other types of text, such as paragraph, chapter, and page headings,notes, image captions, et cetera.',
					name: 'Laundry dryers',
					image:
						'http://www.scottbrookhouse.com/gallery/understanding-the-main-types-of-laundry-dryers-pictures/Understanding-the-Main-Types-of-Laundry-Dryers-jpg.jpg'
				}
			]
		};
	}
	componentWillMount = () => {
		this.timer();
	};
	timer = () => {
		setInterval(() => {
			if (this.state.arraw < 20) {
				var tt = this.state.arraw + 2;
				this.setState({
					arraw: tt
				});
			} else {
				this.setState({
					arraw: 10
				});
			}
		}, 140);
	};
	_renderItem = ({ item, index }) => {
		return (
			<TouchableOpacity
				onPress={() => {
					this.props.navigation.navigate('Accessoriespage', { item: item });
				}}
				style={[ styles.rowview, { marginVertical: 10 } ]}
			>
				<Image style={stylesinner.img} source={{ uri: item.image }} />
				<Text style={[ styles.headingsmall ]}>{item.name}</Text>
			</TouchableOpacity>
		);
	};
	render() {
		return (
			<View
				style={{
					backgroundColor: Constant.APP_COLOR_WHITE
				}}
			>
				<ScrollView style={styles.ScrollView}>
					<View style={stylesinner.mainview}>
						<Image
							resizeMode={'cover'}
							source={{
								uri:
									'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
							}}
							style={[ styles.propertyimg ]}
						/>
						<Text style={[ styles.headingsmall, { marginLeft: 0 } ]}>
							One-Bedroom Executive
						</Text>

						<View style={[ styles.swiperview, { marginHorizontal: 0 } ]}>
							<View style={[ styles.rowview, { marginRight: 15 } ]}>
								<Image
									style={styles.iconstylesmall}
									resizeMode={'contain'}
									source={iconsrc.numbericon}
								/>
								<Text style={[ styles.linetext ]}> Max 3 person(s) </Text>
							</View>
							<View style={[ styles.rowview, { marginRight: 15 } ]}>
								<Image
									style={styles.iconstylesmall}
									resizeMode={'contain'}
									source={iconsrc.personicon}
								/>
								<Text style={styles.linetext}> King Size bed </Text>
							</View>
						</View>

						<View style={{ marginVertical: 20 }}>
							<View>
								<Text style={[ styles.linetext ]}> Bedrooms : </Text>
								<Text style={[ styles.viewright, styles.linetext ]}>0</Text>
							</View>
							<View>
								<Text style={[ styles.linetext ]}> Apartment Size : </Text>
								<Text style={[ styles.viewright, styles.linetext ]}>75</Text>
							</View>
						</View>
						<FlatList
							style={{ marginBottom: 35 }}
							horizontal={false}
							data={this.state.roomaccessories}
							extraData={this.state}
							keyExtractor={this._keyExtractor}
							renderItem={this._renderItem}
						/>
					</View>
				</ScrollView>
				<View style={stylesinner.btmview}>
					<View style={stylesinner.btnanim}>
						<Image
							style={{ marginTop: this.state.arraw }}
							source={iconsrc.icon_arrow_do}
						/>
					</View>
					<TouchableOpacity style={[ styles.buttonstyle, stylesinner.bottomview ]}>
						<Text style={[ styles.btntext, styles.btntextcolor ]}>Reservation</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const stylesinner = StyleSheet.create({
	btmview: {
		position: 'absolute',
		zIndex: 10,
		bottom: 0,
		left: 0,
		right: 0
	},
	title: {
		height: 44,
		marginVertical: 5
	},
	titletxt: {
		color: Constant.APP_COLOR_LIGHT,
		textDecorationLine: 'underline',
		lineHeight: 15
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
	},
	btnanim: {
		height: 40,
		width: Constant.SCREEN_WIDTH,
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0)'
	},
	mainview: {
		marginHorizontal: 15
	},
	img: {
		width: Constant.SCREEN_WIDTH / 3,
		height: Constant.SCREEN_WIDTH / 3
	},
	bottomview: {
		marginTop: 0,
		marginBottom: Platform.OS === 'ios' ? (isIphoneX() ? 25 : 0) : 0
	}
});
