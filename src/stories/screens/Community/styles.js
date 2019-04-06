import { StyleSheet, Dimensions, Platform } from "react-native";
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles: any = StyleSheet.create({
	mainContainer: {
        flex: 1
    },
    imageContainer: {
        height: deviceHeight/3,
        position: 'relative'
    },
    pageTitle: {
        position: 'absolute',
        zIndex: 5,
        width: deviceWidth*9/10,
        bottom: -deviceHeight/20,
        left: deviceWidth/20,        
        height: deviceHeight/10,        
        backgroundColor: '#F1BF61',
        alignItems: 'center',
        justifyContent: 'center'        
    },
    pageTitleAlt: {
        position: 'absolute',
        zIndex: 5,
        width: deviceWidth*9/10,
        top: -deviceHeight/20,
        left: deviceWidth/20,        
        height: deviceHeight/10,        
        backgroundColor: '#F1BF61',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pageTitleText: {
        color: '#fff',
        fontSize: 53,
        fontWeight: 'bold'
    },
    headerImage: {
        height: deviceHeight/3,
        width: deviceWidth
    },
    menuContainer: {
        height: deviceHeight*2/3,
        backgroundColor: '#fff'
    },
    menuUpperRow: {
        paddingTop: deviceHeight/16,
        flexDirection: 'row',        
    },
    menuBottomRow: {      
        flexDirection: 'row',         
    },
    menuButtonStyle: {
        width: deviceWidth/3,
        alignItems: 'center',
        paddingVertical: deviceHeight/24,
        borderBottomColor: "#CCCCCC",
        borderBottomWidth: 0.5
    },
    menuImage: {
        height: deviceHeight/12
    },
    menuTitle: {
        paddingTop: deviceHeight/40,
        color: "#8F8F8F"
    },
    menuCenterOptionBorder: {
        borderRightColor: "#CCCCCC",
        borderRightWidth: 0.5,
        borderLeftColor: "#CCCCCC",
        borderLeftWidth: 0.5
    }
});
export default styles;
