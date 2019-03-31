import { StyleSheet, Dimensions, Platform } from "react-native";

const WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

const styles: any = StyleSheet.create({
	container: {
		backgroundColor: "#FBFAFA",		
	},
	navContainer: {
		height: HEADER_HEIGHT,
		marginHorizontal: 10,
	},
	navBar: {
		height: NAV_BAR_HEIGHT,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: 'transparent',
	},
	titleStyle: {
		color: "#fff",
		fontWeight: 'bold',
		fontSize: 18,
	},
	iconLeft: {
		fontSize: 35, 
		color: '#F1BF61'
	},
	iconRight: {
		fontSize: 30, 
		color: '#F1BF61'
	},
	itemContainer: {
		marginTop: WIDTH * 0.05,		
	},
	cardNameContainer:{
		position: 'absolute',
		top: WIDTH * 0.02,
		zIndex: 10,
		left: WIDTH * 0.08
	},
	cardName: {
		color: '#fff',
		fontSize: 19
	},
	distanceTag: {
		color: '#F1BF61',
		fontSize: 16
	},
	distanceTagContainer: {
		position: 'absolute',
		top: WIDTH * 0.02,
		zIndex: 10,
		right: WIDTH * 0.08
	},
	cardImage: {
		width: WIDTH * 0.9,
		height: WIDTH * 0.3
	},
	imageContainer: {				
		alignItems: 'center'
	},
	buttonContainer: {		
		alignItems: 'flex-end'
	},
	buttonContent: {		
		paddingVertical: 10,
		paddingHorizontal: 7,
		borderRadius: 20,
		backgroundColor: '#F1BF61',
		marginRight: WIDTH * 0.05,
		marginTop: WIDTH * 0.04
	},
	buttonText: {
		color: '#fff'
	}
});
export default styles;
