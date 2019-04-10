import { StyleSheet, Dimensions, Platform } from "react-native";
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles: any = StyleSheet.create({
	container: {
		backgroundColor: "#FBFAFA",		
	},
	itemContainer: {
        marginTop: WIDTH * 0.05
	},
	cardNameContainer:{
		backgroundColor: 'transparent',
		position: 'absolute',
		top: WIDTH * 0.02,
		zIndex: 10,
		left: WIDTH * 0.08
	},
	cardName: {
		color: '#fff',
		fontSize: 19
	},
	cardImage: {
		width: WIDTH * 0.9,
		height: WIDTH * 0.4
	},
	imageContainer: {				
		alignItems: 'center'
    },
    dataOuter: {
        alignItems: 'center'
    },
	dataContainer: {
        paddingVertical: HEIGHT * 0.03, 
        width: WIDTH * 0.9,
        flexDirection: 'row',		
        justifyContent: 'space-between',
        borderBottomColor: '#E5E5E5',
        borderBottomWidth: 1
    },
    distanceTag: {
		color: '#F1BF61',
		fontSize: 16
    },
    nameTag: {
        fontSize: 18
    }
});
export default styles;
