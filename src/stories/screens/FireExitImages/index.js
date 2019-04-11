import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Platform,
  FlatList
} from "react-native";

import { DrawerActions, NavigationActions } from "react-navigation";

import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  SlideAnimation,
  ScaleAnimation
} from "react-native-popup-dialog";

import { Icon } from "native-base";
import Swiper from "react-native-swiper";
import Constant from "./../../../Constant";
import styles from "./styles";
import { setStatusBarHeight } from "../../../Utilities";
import iconsrc from "../../../iconsrc";

import MapboxGL from "@mapbox/react-native-mapbox-gl";

export default class FireExitImages extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent={true} />
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}
            style={styles.backButtonHeader}
          >
            <Image source={iconsrc.icback} style={styles.backButtonImageHeader} />
          </TouchableOpacity>
          <Text style={styles.textHeader}>1-10</Text>
        </View>
        <View style={styles.mainContainer}>
        <Image
          style={{width: '100%', height: 300}}
          source={iconsrc.fireplan}
          resizeMode={'contain'}
        />
        </View>
      </View>
    );
  }
}
