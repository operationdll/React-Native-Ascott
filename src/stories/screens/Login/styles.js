import { Dimensions, StyleSheet } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const styles: any = StyleSheet.create({
	mainContainer: {
		flex: 1,
		height: deviceHeight,
		width: deviceWidth,		
		justifyContent: 'flex-end',
		paddingHorizontal: 20
	},	
	textFieldContainer: {			
		flexDirection: 'row',				
		marginLeft: -5,
	},
	textContainer: {
		paddingTop: 15,
		flexDirection: 'row'
	},
	buttonContainer: {
		paddingTop: 40,
		paddingBottom: 40,
		alignItems: 'center'
	},	
	headerText: {
		color: '#fff',
		fontSize: 30,
	},
	inputText: {
		color: '#fff',
		height: 60,
		width: deviceWidth/2 - 30,
		paddingLeft: 10,		
		fontSize: 16		
	},
	buttonSignInText: {
		color: '#fff',
		fontSize: 18,
		textDecorationLine: 'underline'
	},
	instructionText: {
		fontSize: 12,
		color: '#d9d9d9',
		width: deviceWidth/2 - 30,
	},
	toastStyle: {
		paddingVertical: 10, 
		paddingHorizontal: 30
	},
	toastMessageStyle: {
		color: '#fff', 
		fontSize: 16
	},
	inputPadding : {
		marginLeft: 25
	}	
});
export default styles;
