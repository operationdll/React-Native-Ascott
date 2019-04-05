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
  TouchableOpacity
} from "react-native";

import { Icon } from "native-base";

import Swiper from "react-native-swiper";
import Constant from "./../../../Constant";
import styles from "./styles";
import { setStatusBarHeight } from "../../../Utilities";
import iconsrc from "../../../iconsrc";
const paragraphtxt =
  "Paragraph Formatting. Paragraph formatting determines the type of text you have in aparticular part of your website. Its function is to delineate your body text (the main content) from other types of text, such as paragraph, chapter, and page headings,notes, image captions, et cetera.";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ width: Constant.SCREEN_WIDTH }}>
        <ScrollView style={styles.scrollstyle}>
          <ImageBackground style={styles.topimgstyle} source={iconsrc.topimguri}>
            <Image
              style={styles.logoimg}
              resizeMethod={"resize"}
              resizeMode={"contain"}
              source={iconsrc.logoicon}
            />
            <Text style={styles.appnamestyle}>{Constant.AppName}</Text>
            <View style={styles.topviewstyle}>
              <View style={styles.viewleft}>
                <Image style={styles.iconstylesmall} source={iconsrc.calendericon} />

                <Text style={styles.textstyle}>Apr 4</Text>
              </View>
              <View style={styles.viewright}>
                <Text style={styles.textstyle}>20°C - 20°C</Text>
                <Image resizeMode={"contain"} style={styles.iconstylesmall} source={iconsrc.cloudicon} />
              </View>
            </View>
          </ImageBackground>

          <Swiper
            showsPagination={false}
            buttonWrapperStyle={{ backgroundColor: "transparent" }}
            nextButton={<Text style={styles.buttonText}>›</Text>}
            prevButton={<Text style={styles.buttonText}>‹</Text>}
            style={[styles.swiperstyle, { height: 80 }]}
            showsButtons={true}
          >
            <View style={styles.swiperview}>
              <View style={styles.swiperrowview}>
                <Image
                  style={styles.iconstylemedium}
                  resizeMode={"contain"}
                  source={iconsrc.digitalkey}
                />
                <Text style={styles.logotext}> Door Lock </Text>
              </View>
              <View style={styles.swiperrowview}>
                <Image
                  style={styles.iconstylemedium}
                  resizeMode={"contain"}
                  source={iconsrc.wifi}
                />
                <Text style={styles.logotext}> Wifi </Text>
              </View>
              <View style={styles.swiperrowview}>
                <Image
                  style={styles.iconstylemedium}
                  resizeMode={"contain"}
                  source={iconsrc.room}
                />
                <Text style={styles.logotext}> Room Control </Text>
              </View>
              <View style={styles.swiperrowview}>
                <Image
                  style={styles.iconstylemedium}
                  resizeMode={"contain"}
                  source={iconsrc.elevator}
                />
                <Text style={styles.logotext}> Elevator </Text>
              </View>
            </View>

            <View style={styles.swiperview}>
              <View style={styles.swiperrowview}>
                <Image
                  style={styles.iconstylemedium}
                  resizeMode={"contain"}
                  source={iconsrc.digitalkey}
                />
                <Text style={styles.logotext}> Door Lock </Text>
              </View>
            </View>
          </Swiper>
          <View style={styles.bottomborderstyle} />
          <Text style={styles.headingmedium}>CITY INN</Text>

          <Image
            resizeMode={"contain"}
            source={{
              uri:
                "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }}
            style={styles.coverimg}
          />
          <View style={styles.bottomborderstyle} />
          <Text style={styles.headingsmall}>Property</Text>
          <Text style={styles.paragraph}>{paragraphtxt}</Text>

          <View style={styles.bottomborderstyle} />
          <Swiper
            showsPagination={false}
            buttonWrapperStyle={{ backgroundColor: "transparent" }}
            nextButton={<Text style={styles.buttonText}>›</Text>}
            prevButton={<Text style={styles.buttonText}>‹</Text>}
            style={[styles.swiperstyle, { height: 50 }]}
            showsButtons={true}
          >
            <View style={styles.swiperview}>
              <View style={styles.swiperrowview}>
                <Image
                  style={styles.iconstylemedium}
                  resizeMode={"contain"}
                  source={iconsrc.swimmimg}
                />
              </View>
              <View style={styles.swiperrowview}>
                <Image style={styles.iconstylemedium} resizeMode={"contain"} source={iconsrc.gym} />
              </View>
            </View>
          </Swiper>
          <View style={styles.bottomborderstyle} />
          <View style={styles.rowview}>
            <Image
              source={iconsrc.degreeicon}
              style={([styles.iconstylesmall], { marginVertical: 15 })}
            />
            <Text style={[styles.headingsmall, { color: Constant.APP_COLOR_LIGHT }]}>
              Panoramic
            </Text>
          </View>
          <Swiper style={[styles.swiperstyle, { height: 140 }]}>
            <View style={styles.swiperview}>
              <View style={styles.swiperdatarowview}>
                <Image style={styles.swipeimg} resizeMode={"contain"} source={iconsrc.home} />
                <Text style={[styles.logotext, { color: "#6a7f7a" }]}> Residentals'Lounge </Text>
              </View>
              <View style={styles.swiperdatarowview}>
                <Image style={styles.swipeimg} resizeMode={"contain"} source={iconsrc.home} />
                <Text style={[styles.logotext, { color: "#6a7f7a" }]}> Guest Room </Text>
              </View>
            </View>
          </Swiper>
          <View style={styles.bottomborderstyle} />
          <Text style={styles.headingsmall}>Rooms</Text>
          <View style={styles.propertyview}>
            <Image
              resizeMode={"cover"}
              source={{
                uri:
                  "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              }}
              style={[styles.propertyimg]}
            />
            <Text style={[styles.headingsmall, { marginLeft: 0 }]}>One-Bedroom Executive</Text>
            <View style={[styles.swiperview, { marginHorizontal: 0 }]}>
              <View style={{ marginRight: 15, flexDirection: "row" }}>
                <Image
                  style={styles.iconstylesmall}
                  resizeMode={"contain"}
                  source={iconsrc.personicon}
                />
                <Text style={[styles.linetext]}> Max 3 person(s) </Text>
              </View>
              <View style={{ marginRight: 15, flexDirection: "row" }}>
                <Image
                  style={styles.iconstylesmall}
                  resizeMode={"contain"}
                  source={iconsrc.personicon}
                />
                <Text style={styles.linetext}> King Size bed </Text>
              </View>
            </View>
            <View style={{ marginVertical: 20 }}>
              <View>
                <Text style={[styles.linetext]}> Bedrooms : </Text>
                <Text style={[styles.viewright, styles.headingsmall, styles.linetext]}>0</Text>
              </View>
              <View>
                <Text style={[styles.linetext]}> Apartment Size : </Text>
                <Text style={[styles.viewright, styles.headingsmall, styles.linetext]}>75</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.buttonstyle}>
              <Text style={styles.btntext}>Reservation</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomborderstyle} />
          <Text style={styles.headingsmall}>Fire Exit</Text>
          <Image resizeMode={"contain"} source={iconsrc.fireplan} style={styles.coverimg} />
          <View style={styles.bottomborderstyle} />
          <Text style={styles.headingsmall}>Tranportation</Text>

          <View style={styles.transparentbtn}>
            <Image style={styles.iconstylemedium} resizeMode={"contain"} source={iconsrc.bus} />
            <Text style={[styles.linetext]}> Public Bus </Text>
            <Text style={[styles.viewright, { fontSize: 25 }]}>›</Text>
          </View>
          <View style={styles.bottomborderstyle} />
        </ScrollView>

        <View style={{
          position: "absolute",
          flexDirection: 'row',
          marginTop: setStatusBarHeight(),
          justifyContent: "space-between",
          width: Constant.SCREEN_WIDTH - 20,
          marginLeft: 10,
          alignItems: 'center'
        }}>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('LeftSideMenu') }}>
            <Icon name="ios-person-outline" style={styles.iconLeft} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('RightSideMenu')
          }}>
            <Icon name="md-menu" style={styles.iconRight} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
