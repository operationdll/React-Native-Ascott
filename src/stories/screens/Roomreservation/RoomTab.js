import {Platform,StyleSheet, View, Text,TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';
import {IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';
import { isIphoneX,setStatusBarHeight } from '../../../Utilities';
import Constant from '../../../Constant';
import styles from '../styles';
import iconsrc from '../../../iconsrc';
import Swiper from 'react-native-swiper';
import { ScrollView } from 'react-native-gesture-handler';
import Roomreservation from "./index"
export default class Test extends Component {
    _renderTitleIndicator() {
        return <PagerTitleIndicator  indicatorPosition="top"  style={{backgroundColor:"white"}} titles={['One-Bedroom']} />;
    }
    render() {

        return (
            <View style={{flex:1}}>
              <View style={stylesinner.statusbar}>
						<TouchableOpacity
							style={stylesinner.cancelbtn}
							onPress={() =>this.props.navigation.goBack()}
						>
						 <Image style={stylesinner.iconstylemedium} resizeMode={"contain"} source={iconsrc.icback} />
						</TouchableOpacity>
						<Text style={{ fontSize: Constant.SCREEN_WIDTH / 22 ,color:Component.APP_COLOR_BLACK}}>One-Bedroom</Text>
					</View>
              
                <IndicatorViewPager
             
             indicatorPosition="top" 
                   style={{flex: 1, flexDirection: 'column-reverse'}}
                    indicator={this._renderTitleIndicator()}
                >   
                    <View>
                        < Roomreservation style={{width:"100%"}} navigation={this.props.navigation}/>
                      </View>
                    {/* <View style={{flex:1,backgroundColor:'cornflowerblue'}}>
                    < Roomreservation/>
                    </View>
                    <View style={{backgroundColor:'#1AA094'}}>
                    < Roomreservation/>
                    </View> */}
                </IndicatorViewPager>
                
          
            </View>
        );
    }



  
}
const stylesinner = StyleSheet.create({
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