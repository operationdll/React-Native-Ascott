import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { Icon } from "native-base";

import Swiper from "react-native-swiper";

import Constant from "./../../../Constant";

import { setStatusBarHeight } from "../../../Utilities";
import iconsrc from "../../../iconsrc";

export default class Lockstatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [
        { date: "05/01", detailData: [{ status: 1 }, { status: 1 }, { status: 0 }, { status: 0 }, { status: 1 }] },
        { date: "06/01", detailData: [{ status: 1 }, { status: 1 }, { status: 1 }] },
        { date: "07/01", detailData: [{ status: 0 }, { status: 1 }, { status: 1 }, { status: 1 }] },
        { date: "08/01", detailData: [{ status: 1 }, { status: 1 }, { status: 1 }] },
      ]
    }
  }

  _renderItem = ({ item, index }) => {
    return (
      <View style={styles.itemMainView} >

        <Text style={styles.itemDateText}>{item.date}</Text>

        {item.detailData.map((datailData, detailsIndex) => {
          return (
            <View style={styles.detailItemView}>

              <Text style={[styles.timeTextView, { color: datailData.status == 1 ? '#eaeaea' : '#e84747' }]}>12:00:23</Text>

              <View style={{ alignItems: 'center', marginHorizontal: 5 }}>

                <View style={{
                  width: 1,
                  backgroundColor: detailsIndex == 0 ? 'transparent' : 'rgba(255,255,255,.2)',
                  height: 6
                }} />

                <View style={styles.roundView} />

                <View style={{
                  width: 1,
                  backgroundColor: 'rgba(255,255,255,.2)',
                  flex: detailsIndex != (item.detailData.length - 1) ? 1 : 0
                }} />

              </View>

              <Text
                numberOfLines={2}
                ellipsizeMode={'tail'}
                style={[styles.itemDetailsText, { color: datailData.status == 1 ? '#eaeaea' : '#e84747' }]}>Room No.0702 Ascott Hengshan Unloacked</Text>

            </View>
          )
        })

        }

      </View>
    )
  }

  render() {
    return (
      <ImageBackground
        source= {iconsrc.icback}
        style={styles.container} >

        <TouchableOpacity style={styles.drawerIconView} onPress={() => this.props.navigation.goBack()} >
        <Image style={styles.iconstylemedium} resizeMode={"contain"} source={iconsrc.icon_close_o} />
        </TouchableOpacity>
        <Text style={styles.historyText}>HISTORY</Text>

        <FlatList
          data={this.state.listData}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  iconstylemedium: {
    width: (Constant.SCREEN_WIDTH * 7) / 100,
    height: (Constant.SCREEN_WIDTH * 7) / 100
  },
  container: {
    flex: 1,
    paddingTop: setStatusBarHeight()
  },
  itemMainView: {
    margin: 20,
    flex: 1,
  },
  drawerIconView: {
    width: (Constant.SCREEN_WIDTH * 10) / 100,
    height: (Constant.SCREEN_WIDTH * 10) / 100,
    marginHorizontal:15,
    alignItems:'center',
    justifyContent:'center'
  },
  itemDateText: {
    fontSize: 17,
    color: Constant.APP_COLOR_WHITE,
    marginLeft: 48,
    fontWeight: '600',
    marginVertical: 12,
  },
  detailItemView: {
    flexDirection: 'row',
    height: 70,
  },
  timeTextView: {
    fontSize: 14,
    width: 65,
    textAlign: 'center',
    fontWeight: '700',
  },
  roundView: {
    width: 6,
    height: 6,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,.7)'
  },
  itemDetailsText: {
    fontSize: 15,
    width: 65,
    flex: 1,
    marginLeft: 5,
    fontWeight: '700',
  },
  crossButtonText: {
    fontSize: 40,
    color: Constant.APP_COLOR_LIGHT,
    marginLeft: 20,
    fontWeight: '500',
  },
  historyText: {
    fontSize: 35,
    color: 'rgba(255,255,255,.85)',
    marginLeft: 20,
    fontWeight: '500',
  }
})
