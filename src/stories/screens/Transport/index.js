import {Platform,StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

import { isIphoneX,setStatusBarHeight } from '../../../Utilities';
import Constant from './../../../Constant';
import styles from './../styles';
import iconsrc from '../../../iconsrc';
import Swiper from 'react-native-swiper';
import { ScrollView } from 'react-native-gesture-handler';
import Roomreservation from "./index"
export default class Transport extends Component {
    
    render() {

        return (
            <View style={{flex:1}}>
              <View style={stylesinner.statusbar}>
						<TouchableOpacity
							style={stylesinner.cancelbtn}
							onPress={() =>this.props.navigation.goBack()}
						>
						 <TouchableOpacity style={stylesinner.iconstylemedium} resizeMode={"contain"} source={iconsrc.icback} />
						</TouchableOpacity>
						<Text style={{ fontSize: Constant.SCREEN_WIDTH / 22 ,color:Component.APP_COLOR_BLACK}}>Public Bus</Text>
					</View>
              <View style={stylesinner.container}>
              <View style={stylesinner.linestyle}>

              </View>
              <View style={stylesinner.label}><Text style={{padding:5,backgroundColor:"rgba(0,0,0,0.5)",fontSize:15,color:Constant.APP_COLOR_WHITE}}>Text</Text></View>
                <Text style={{fontSize:15}}>
                Paragraph Formatting description: Paragraph formatting determines the type of text you have in aparticular part of your website. Its function is to delineate your body text (the main content) from other types of text, such as paragraph, chapter, and page headings,notes, image captions, et cetera.",
					name: 'Refridgeratore
                </Text>
              </View>
              
            </View>
        );
    }



  
}
const stylesinner = StyleSheet.create({
    label:{
        backgroundColor:"rgba(0,0,0,0)",
        flexWrap:'wrap',
        
        height:25,
        marginBottom:10
    },
    linestyle:{
        borderBottomWidth:2,
        borderColor:"rgb(53,52,53)",
        marginTop:5
    },
    container:{
        height:Constant.SCREEN_HEIGHT,
        padding:15,
        backgroundColor:Constant.APP_COLOR_WHITE},
    title:{
      height:44,
      marginVertical:5
    },
    titletxt:{
      color:Constant.APP_COLOR_LIGHT,
      textDecorationLine:"underline",
      lineHeight:15
  
    },
    iconstylemedium: {
          width: (Constant.SCREEN_WIDTH * 5) / 100,
          height: (Constant.SCREEN_WIDTH * 5) / 100
        },
      statusbar: {
      borderBottomWidth: 1,
          borderColor: Constant.APP_COLOR_BORDER,
          width: Constant.SCREEN_WIDTH,
          //flex: 1,
          height:  Platform.OS === 'ios' ? setStatusBarHeight()+ 44 : 44,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: Platform.OS === 'ios' ? setStatusBarHeight() : 0
      },
      
      cancelbtn: {
          position: 'absolute',
          top: Platform.OS === 'ios' ? setStatusBarHeight() + 13 : 13,
          left: 15,
          
      },
    })