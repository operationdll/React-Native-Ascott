import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  ScrollView
} from "react-native";
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
      <ScrollView>
        <View style={styles.container}>
          <View>
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
                  <Image style={Constant.iconstylesmall} source={iconsrc.calendericon} />

                  <Text style={styles.textstyle}>Apr 4</Text>
                </View>
                <View style={styles.viewright}>
                  <Text style={styles.textstyle}>20°C - 20°C</Text>
                  <Image style={Constant.iconstylesmall} source={iconsrc.cloudicon} />
                </View>
              </View>
            </ImageBackground>

            <Swiper
              showsPagination={false}
              buttonWrapperStyle={{ backgroundColor: "transparent" }}
              nextButton={<Text style={styles.buttonText}>›</Text>}
              prevButton={<Text style={styles.buttonText}>‹</Text>}
              style={[styles.swiperstyle, { height: 100 }]}
              showsButtons={true}
            >
              <View style={styles.swiperview}>
                <View style={styles.swiperrowview}>
                  <Image
                    style={Constant.iconstylemedium}
                    resizeMode={"center"}
                    source={iconsrc.digitalkey}
                  />
                  <Text style={styles.logotext}> Door Lock </Text>
                </View>
                <View style={styles.swiperrowview}>
                  <Image
                    style={Constant.iconstylemedium}
                    resizeMode={"contain"}
                    source={iconsrc.wifi}
                  />
                  <Text style={styles.logotext}> Wifi </Text>
                </View>
                <View style={styles.swiperrowview}>
                  <Image
                    style={Constant.iconstylemedium}
                    resizeMode={"contain"}
                    source={iconsrc.room}
                  />
                  <Text style={styles.logotext}> Room Control </Text>
                </View>
                <View style={styles.swiperrowview}>
                  <Image
                    style={Constant.iconstylemedium}
                    resizeMode={"contain"}
                    source={iconsrc.elevator}
                  />
                  <Text style={styles.logotext}> Elevator </Text>
                </View>
              </View>

              <View style={styles.swiperview}>
                <View style={styles.swiperrowview}>
                  <Image
                    style={Constant.iconstylemedium}
                    resizeMode={"contain"}
                    source={iconsrc.digitalkey}
                  />
                  <Text style={styles.logotext}> Door Lock </Text>
                </View>
              </View>
            </Swiper>
            <View style={Constant.bottomborderstyle} />
            <Text style={Constant.headingmedium}>CITY INN</Text>

            <Image
              resizeMode={"cover"}
              source={{
                uri:
                  "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              }}
              style={{ height: Constant.SCREEN_HEIGHT / 3, marginHorizontal: 15 }}
            />
            <View style={Constant.bottomborderstyle} />
            <Text style={Constant.headingsmall}>Property</Text>
            <Text style={Constant.paragraph}>{paragraphtxt}</Text>

            <View style={Constant.bottomborderstyle} />
            <Swiper
              showsPagination={false}
              buttonWrapperStyle={{ backgroundColor: "transparent" }}
              nextButton={<Text style={styles.buttonText}>›</Text>}
              prevButton={<Text style={styles.buttonText}>‹</Text>}
              style={[styles.swiperstyle, { height: 70 }]}
              showsButtons={true}
            >
              <View style={styles.swiperview}>
                <View style={styles.swiperrowview}>
                  <Image
                    style={Constant.iconstylemedium}
                    resizeMode={"contain"}
                    source={iconsrc.swimmimg}
                  />
                </View>
                <View style={styles.swiperrowview}>
                  <Image
                    style={Constant.iconstylemedium}
                    resizeMode={"contain"}
                    source={iconsrc.gym}
                  />
                </View>
              </View>
            </Swiper>
            <View style={Constant.bottomborderstyle} />
            <View style={styles.rowview}>
              <Image
                source={iconsrc.degreeicon}
                style={([Constant.iconstylesmall], { marginVertical: 15 })}
              />
              <Text style={[Constant.headingsmall, { color: Constant.APP_COLOR_LIGHT }]}>
                Panoramic
              </Text>
            </View>
            <Swiper
              style={[styles.swiperstyle, { height: 170 }]}
              nextButton={<Text style={styles.buttonText}>›</Text>}
              prevButton={<Text style={styles.buttonText}>‹</Text>}
            >
              <View style={styles.swiperview}>
                <View style={styles.swiperdatarowview}>
                  <Image style={styles.swipeimg}  source={iconsrc.home} />
                  <Text style={styles.logotext}> Residentals'Lounge </Text>
                </View>
                <View style={styles.swiperdatarowview}>
                  <Image style={styles.swipeimg}  source={iconsrc.home} />
                  <Text style={styles.logotext}> Residentals'Lounge </Text>
                </View>
              </View>
            </Swiper>
            <View style={Constant.bottomborderstyle} />
          </View>
        </View>
      </ScrollView>
    );
  }
}
