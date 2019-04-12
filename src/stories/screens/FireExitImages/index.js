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
  FlatList,
  Modal
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
import ImageViewer from "react-native-image-zoom-viewer";

const images = [
  {
    url: "",
    props: {
      source: iconsrc.fireplan
    },
    freeHeight: false
  },
  {
    url: "",
    props: {
      source: iconsrc.fireplan
    },
    freeHeight: false
  }
];

export default class FireExitImages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      modalVisible: false
    };
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
          <TouchableOpacity
            onPress={() => {
              this.setState({ modalVisible: true });
            }}
          >
            <Image
              style={{ width: "100%", height: 300 }}
              source={iconsrc.fireplan}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
        </View>
        <Modal
          visible={this.state.modalVisible}
          transparent={true}
          onRequestClose={() => this.setState({ modalVisible: false })}
        >
          <ImageViewer
            imageUrls={images}
            index={this.state.index}
            renderIndicator={(currentIndex, allSize) => {
              return null;
            }}
            onSwipeDown={() => {
              console.log("onSwipeDown");
              this.setState({ modalVisible: false });
            }}
            enableSwipeDown={true}
            renderHeader={currentIndex => {
              return (
                <View style={styles.headerModal}>
                  <StatusBar backgroundColor="black" barStyle="dark-content" translucent={true} />
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({ modalVisible: false });
                    }}
                    style={styles.backButtonHeader}
                  >
                    <Image source={iconsrc.icback} style={styles.backButtonImageHeader} />
                  </TouchableOpacity>
                  <Text style={styles.textHeader}>1-10</Text>
                </View>
              );
            }}
          />
        </Modal>
      </View>
    );
  }
}
