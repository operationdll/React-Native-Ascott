import React from 'react';
import {Image, Text, View} from "react-native";

const Icons = {
    Introduction: (tintColor = "#CCCCCC") => <Image
        style={{width: 20, height: 24, tintColor}}
        source={require('../../assets/icons/icon_foot_1.png')}
    />,
    Promotion: (tintColor = "#CCCCCC") => <Image
        style={{width: 21, height: 24, tintColor}}
        source={require('../../assets/icons/icon_foot_2.png')}
    />,
    LocalInterest: (tintColor = "#CCCCCC") => <Image
        style={{width: 24, height: 24, tintColor}}
        source={require('../../assets/icons/icon_foot_3.png')}
    />,
    Community: (tintColor = "#CCCCCC") => <Image
        style={{width: 34, height: 24, tintColor}}
        source={require('../../assets/icons/icon_foot_4.png')}
    />
};

const TabIcons = (icon, tintColor, focused) => {
    return (
        <View style={{flexDirection: 'column', justifyContent: 'space-between', padding: 5,paddingTop:10}}>
            <View style={{height: 60,  justifyContent: 'center', alignItems: 'center',}}>
                {icon}
            </View>
            <View style={{
                borderBottomColor: focused ? tintColor : "transparent",
                borderBottomWidth: 5,
                paddingTop: 5
            }}/>

        </View>
    );
}
export {Icons, TabIcons};