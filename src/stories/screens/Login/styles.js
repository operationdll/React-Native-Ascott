import { Dimensions, StyleSheet } from "react-native";

const deviceHeight = Dimensions.get("window").height;

const styles: any = StyleSheet.create({
	mainContainer: {
		flex: 1,
		flexDirection: 'column'
	},
	logoContainer: {
		flex: 4,
		justifyContent: 'center',
		alignItems: 'center'		
	},
	contentContainer: {
		flex: 4,
		paddingHorizontal: 20,
		paddingTop: 45	
	},
	footerContainer: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center',		
	},
	headerText: {
		color: '#fff',
		fontSize: 30,
	},
	textFieldContainer: {
		flexDirection: 'row'
	},
	inputTextColor: {
		color: '#fff'
	},
	buttonSignInText: {
		color: '#fff',
		fontSize: 18,
		textDecorationLine: 'underline'
	},
	instructionText: {
		fontSize: 12,
		color: '#d9d9d9'
	},
	toastStyle: {
		paddingVertical: 10, 
		paddingHorizontal: 30
	},
	toastMessageStyle: {
		color: '#fff', 
		fontSize: 16
	}
});
export default styles;
