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

export default class Mapbox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent={false} />
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}
            style={styles.backButtonHeader}
          >
            <Image source={iconsrc.icback} style={styles.backButtonImageHeader} />
          </TouchableOpacity>
          <Text style={styles.textHeader}>Location</Text>
        </View>
        <View style={styles.mainContainer}>
          <MapboxGL.MapView
            showUserLocation={true}
            zoomLevel={12}
            userTrackingMode={MapboxGL.UserTrackingModes.Follow}
            style={{ flex: 1 }}
            centerCoordinate={[-73.970895, 40.723279]}
          >
            <MapboxGL.PointAnnotation
              key={1}
              id={`pointAnnotation`}
              title="Test"
              coordinate={[-73.970895, 40.723279]}
            >
              <Image source={iconsrc.guideIcon} style={{   }} />

              <MapboxGL.Callout title={""} />
            </MapboxGL.PointAnnotation>
          </MapboxGL.MapView>
          <View style={{ height: 90, flexDirection: 'row' }} >

          <View style={{ flex: 1}} >
          <Text style= {{margin: 10, fontWeight: '600'}}>CITY INN</Text>
            </View>
            <View style={{ width: 88, justifyContent: 'center', alignItems: 'center'}} >
            <Image style={{ width: 30, height: 30}} source={iconsrc.iconVoice} ></Image>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
