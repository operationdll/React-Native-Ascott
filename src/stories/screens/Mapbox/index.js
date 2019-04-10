/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  PanResponder,
  Animated
} from "react-native";
import { DrawerNavigator } from "react-navigation";
import Constant from "./../../../Constant";
//import MapboxGL from '@mapbox/react-native-mapbox-gl';
import iconsrc from "../../../iconsrc";
import {onSortOptions} from './Test';

export default class Mapbox extends Component {
  constructor(props) {
    super(props);
    
}
   
  
  render() {
    return (
      <View style={styles.container}>

     
      </View>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  
});
