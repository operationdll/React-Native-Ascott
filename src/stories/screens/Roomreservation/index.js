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

import Constant from "./../../../Constant";

import iconsrc from "../../../iconsrc";


export default class Roomreservation extends Component {
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
