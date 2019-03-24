import { StyleSheet, Dimensions, Platform } from "react-native";

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
});
export default styles;
