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
import Swiper from "react-native-swiper";
import Constant from "./../../../Constant";
import styles from "../styles";
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
      <View>

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
              <View style={[styles.viewright,{right:30}]}>
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
          <Text style={[styles.headingsmall,{marginHorizontal: 15,marginBottom:0 }]}>Property</Text>
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
          <View style={[styles.rowview,{ marginHorizontal: 15}]}>
            <Image
              source={iconsrc.degreeicon}
              style={([styles.iconstylesmall], { marginVertical: 15 })}
            />
            <Text style={[styles.headingsmall, { color: Constant.APP_COLOR_LIGHT }]}>
              Panoramic
            </Text>
          </View>
         
          
          <Swiper
            showsPagination={false}
            buttonWrapperStyle={{ backgroundColor: "transparent" }}
            nextButton={<Text style={styles.buttonText}>›</Text>}
            prevButton={<Text style={styles.buttonText}>‹</Text>}
            style={[styles.swiperstyle, { height: 150 }]}
         
          >
           
            <View style={styles.swiperview}>
              <View style={styles.swiperdatarowview}>
                <Image style={styles.swipeimg} resizeMode={"cover"} source={iconsrc.home} />
                <Text style={[styles.logotext, { color: "#6a7f7a" }]}> Residentals'Lounge </Text>
              </View>
              <View style={styles.swiperdatarowview}>
                <Image style={styles.swipeimg} resizeMode={"cover"} source={iconsrc.home} />
                <Text style={[styles.logotext, { color: "#6a7f7a" }]}> Guest</Text>
              </View>
              <View style={styles.swiperdatarowview}>
                <Image style={styles.swipeimg} resizeMode={"cover"} source={iconsrc.home} />
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



 

            <Swiper style={[styles.swiperstyle, { height: 30 }]}>
            <View style={[styles.swiperview, { marginHorizontal: 0 }]}>
              <View style={[styles.rowview,{marginRight:15}]}>
                <Image
                  style={styles.iconstylesmall}
                  resizeMode={"contain"}
                  source={iconsrc.personicon}
                />
                <Text style={[styles.linetext]}> Max 3 person(s) </Text>
              </View>
              <View style={[styles.rowview,{marginRight:15}]}>
                <Image
                  style={styles.iconstylesmall}
                  resizeMode={"contain"}
                  source={iconsrc.personicon}
                />
                <Text style={styles.linetext}> King Size bed </Text>
              </View>
            </View>
            </Swiper>
            <View style={{ marginVertical: 20 }}>
              <View>
                <Text style={[styles.linetext]}> Bedrooms : </Text>
                <Text style={[styles.viewright, styles.linetext]}>0</Text>
              </View>
              <View>
                <Text style={[styles.linetext]}> Apartment Size : </Text>
                <Text style={[styles.viewright, styles.linetext]}>75</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.buttonstyle}>
              <Text style={[styles.btntext,styles.btntextcolor]}>Reservation</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomborderstyle} />
          <Text style={styles.headingsmall}>Fire Exit</Text>
          <Image resizeMode={"contain"} source={iconsrc.fireplan} style={styles.coverimg} />
          <View style={styles.bottomborderstyle} />
          <Text style={styles.headingsmall}>Tranportation</Text>

          <View style={styles.transparentbtn}>
            <Image style={styles.iconstylemedium} resizeMode={"contain"} source={iconsrc.bus} />
            <Text style={[styles.btntext,{marginHorizontal:15}]}>Public Bus</Text>
            <Text style={[styles.viewright, { fontSize: 25 }]}>›</Text>
          </View>
          <View style={styles.bottomborderstyle} />
        </ScrollView>
      </View>
    );
  }
}
