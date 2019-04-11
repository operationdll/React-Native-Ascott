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
import { PanoramaView } from "react-native-gvr";

export default class Panorama extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        {
          id: 0,
          image:
            "https://video.360cities.net/wong-chi-chuen/01633841_20181218_Ocean_Terminal_Deck________360_____Tsim_Sha_Tsui__HK-1024x512.jpg"
        }
      ]
    };
  }

  componentDidMount() {
      
  }

  _renderItem = ({ item }) => (
    <View style={styles.flatlistItem}>
      <TouchableOpacity style={styles.flatlistTouchable}>
        <Image style={styles.flatlistImage} source={{ uri: item.image }} />
      </TouchableOpacity>
    </View>
  );

  _keyExtractor = (item, index) => item.id;

  _onPressItem = (id: string) => {};

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
          <Text style={styles.textHeader}>Residents' Lounge</Text>
        </View>
        <View style={styles.panoramaContainer}>
          <PanoramaView
            style={{ flex: 1 }}
            source={{
              uri:
                "https://video.360cities.net/wong-chi-chuen/01633841_20181218_Ocean_Terminal_Deck________360_____Tsim_Sha_Tsui__HK-1024x512.jpg",
              type: "mono"
            }}
            displayMode={"embedded"}
            enableTouchTracking
            enableFullscreenButton={false}
            enableCardboardButton={false}
            hidesTransitionView
            enableInfoButton={false}
            onContentLoad={this.onContentLoad}
            onTap={this.onTap}
            onChangeDisplayMode={this.onChangeDisplayMode}
          />
        </View>
        <View style={styles.bottomView}>
          <FlatList
            data={this.state.images}
            extraData={this.state}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            horizontal={true}
            contentContainerStyle={styles.flatlistContainer}
          />
        </View>
      </View>
    );
  }
}
