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
  Platform
} from "react-native";
import { DrawerActions,NavigationActions } from 'react-navigation';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  SlideAnimation,
  ScaleAnimation,
} from 'react-native-popup-dialog';
import { Icon } from "native-base";

import Swiper from "react-native-swiper";
import Constant from "./../../../Constant";
import styles from "../styles";
import { setStatusBarHeight } from "../../../Utilities";
import iconsrc from "../../../iconsrc";
const paragraphtxt =
  "Paragraph Formatting description: Paragraph formatting determines the type of text you have in aparticular part of your website. Its function is to delineate your body text (the main content) from other types of text, such as paragraph, chapter, and page headings,notes, image captions, et cetera.";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      startswiper:false,
      roomcontrolDialog: false,
      ssid:"chengshibinguan",
      tid:"12356789",
      elevatorDialog:false,
      elevatorstatus:8,
    };
  }

  componentDidMount(){
    if (Platform.OS === 'android') {
      setTimeout(() => {this.setState({startswiper:true})}, 0);
    }
   
  }

  popupwifidialog = (ssid,tid) => {
    
    this.setState({ roomcontrolDialog: true });
    
  }
  popupelevatordialog=()=>{
    this.setState({ elevatorDialog: true });
  }

  render() {
    return (
      <View>

      <Dialog
      onDismiss={() => {
        this.setState({ elevatorDialog: false });
      }}
      width={0.9}
      visible={this.state.elevatorDialog}
      rounded
      actionsBordered
      // actionContainerStyle={{
      //   height: 100,
      //   flexDirection: 'column',
      // }}
      dialogTitle={
        <DialogTitle
          title="Elevator"
          style={{
            backgroundColor: '#F7F7F8',
          }}
          hasTitleBar={false}
          align="center"
        />
      }
      footer={
        <DialogFooter>
          <DialogButton
            text="CANCEL"
            textStyle={{color:Component.APP_COLOR_BLACK}}
            bordered
            onPress={() => {
              this.setState({ elevatorDialog: false });
            }}
            key="button-1"
          />
          <DialogButton
            text="OK"
            textStyle={{color:Component.APP_COLOR_BLACK}}
            bordered
            onPress={() => {
              this.setState({ elevatorDialog: false });
            }}
            key="button-2"
          />
        </DialogFooter>
      }
    >
      <DialogContent
        style={{
          backgroundColor: '#F7F7F8',
        }}
      >
       <View style={[styles.viewleft,{justifyContent:"center"}]}> 
        <Text style={[styles.btntext,{marginHorizontal:10}]}> 
          Text
        </Text>
        <TouchableOpacity style={{backgroundColor:Constant.APP_COLOR_LIGHT,borderRadius:30}}> 
         <Text style={styles.textstyle}>
          {this.state.elevatorstatus}
        </Text>
        </TouchableOpacity>
        <Text style={[styles.btntext,{marginHorizontal:10}]}> 
          Text
        </Text>
      </View>
      </DialogContent>
    </Dialog>

<Dialog
      onDismiss={() => {
        this.setState({ roomcontrolDialog: false });
      }}
      width={0.9}
      visible={this.state.roomcontrolDialog}
      rounded
      actionsBordered
      // actionContainerStyle={{
      //   height: 100,
      //   flexDirection: 'column',
      // }}
      dialogTitle={
        <DialogTitle
          title="WIFI"
          style={{
            backgroundColor: '#F7F7F8',
          }}
          hasTitleBar={false}
          align="center"
        />
      }
      footer={
        <DialogFooter>
          <DialogButton
            text="CANCEL"
            textStyle={{color:Component.APP_COLOR_BLACK}}
            
            bordered
            onPress={() => {
              this.setState({ roomcontrolDialog: false });
            }}
            key="button-1"
          />
          <DialogButton
            text="OK"
            textStyle={{color:Component.APP_COLOR_BLACK}}
            bordered
            onPress={() => {
              this.setState({ roomcontrolDialog: false });
            }}
            key="button-2"
          />
        </DialogFooter>
      }
    >
      <DialogContent
        style={{
          backgroundColor: '#F7F7F8',
        }}
      >
        <Text>SSID : {this.state.ssid}</Text>
        <Text>Test : {this.state.tid}</Text>
      </DialogContent>
    </Dialog>

        <StatusBar backgroundColor="transparent" barStyle="light-content" translucent={true} />
        <ScrollView style={styles.scrollstyle}>
          <ImageBackground style={styles.topimgstyle}  source={iconsrc.topimguri}>
            <Image
              style={styles.logoimg}
              resizeMethod={"resize"}
              resizeMode={"contain"}
              source={iconsrc.logoicon}
            />
            {/*<Text style={styles.appnamestyle}>{Constant.AppName}</Text>*/}
            <View style={styles.topviewstyle}>
              <View style={styles.viewleft}>
                <Image style={styles.iconstylesmall} source={iconsrc.calendericon} />

                <Text style={styles.textstyle}>Apr 10</Text>
              </View>
              <View style={[styles.viewright, { right: 30 }]}>
                <Text style={styles.textstyle}>20°C - 20°C</Text>
                <Image
                  resizeMode={"contain"}
                  style={styles.iconstylesmall}
                  source={iconsrc.cloudicon}
                />
              </View>
            </View>
          </ImageBackground>

          {this.state.startswiper && 
          <Swiper
            showsPagination={false}
            buttonWrapperStyle={{ backgroundColor: "transparent" }}
            nextButton={<Text style={styles.buttonText}>›</Text>}
            prevButton={<Text style={styles.buttonText}>‹</Text>}
            style={[styles.swiperstyle, { height: 80 }]}
            showsButtons={true}
            removeClippedSubviews={false}
          >
            <View style={styles.swiperview}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Lockscreen")}
                style={styles.swiperrowview}
              >
                <Image
                  style={styles.iconstylemedium}
                  resizeMode={"contain"}
                  source={iconsrc.digitalkey}
                />
                <Text style={styles.logotext}> Door Lock </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  // this.setState({
                  //   roomcontrolDialog: true
                  // });
                  this.popupwifidialog()
                }}
                style={styles.swiperrowview}
              >
                <Image
                  style={styles.iconstylemedium}
                  resizeMode={"contain"}
                  source={iconsrc.wifi}
                />
                <Text style={styles.logotext}> Wifi </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Mediaroom")} style={styles.swiperrowview}>
                <Image
                  style={styles.iconstylemedium}
                  resizeMode={"contain"}
                  source={iconsrc.room}
                />
                <Text style={styles.logotext}> Room Control </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  // this.setState({
                  //   roomcontrolDialog: true
                  // });
                  this.popupelevatordialog()
                }}
                style={styles.swiperrowview}
              >
                <Image
                  style={styles.iconstylemedium}
                  resizeMode={"contain"}
                  source={iconsrc.elevator}
                />
                <Text style={styles.logotext}> Elevator </Text>
            
              </TouchableOpacity>
            </View>

            {/* <View style={styles.swiperview}>
              <View style={styles.swiperrowview}>
                <Image
                  style={styles.iconstylemedium}
                  resizeMode={"contain"}
                  source={iconsrc.digitalkey}
                />
                <Text style={styles.logotext}> Door Lock </Text>
              </View>
            </View>
          </Swiper>}
            </View> */}
          </Swiper>}
          <View style={[styles.bottomborderstyle, { marginTop: -5 }]} />
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
          <Text style={[styles.headingsmall, { marginHorizontal: 15, marginBottom: 0 }]}>
            Property
          </Text>
          <Text style={styles.paragraph}>{paragraphtxt}</Text>

          <View style={styles.bottomborderstyle} />
          { this.state.startswiper && 
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
          </Swiper> }
          <View style={styles.bottomborderstyle} />
          <View style={[styles.rowview, { marginHorizontal: 15 }]}>
            <Image
              source={iconsrc.degreeicon}
              style={[styles.iconstylemini, { marginVertical: 10 }]}
              resizeMode={"contain"}
            />
            <Text style={[styles.headingsmall, { color: Constant.APP_COLOR_LIGHT }]}>
              Panoramic
            </Text>
          </View>
         
          
          { this.state.startswiper && <Swiper
            showsPagination={false}
            buttonWrapperStyle={{ backgroundColor: "transparent" }}
            nextButton={<Text style={styles.buttonText}>›</Text>}
            prevButton={<Text style={styles.buttonText}>‹</Text>}
            style={[styles.swiperstyle, { height: 150 }]}
          >
            <View style={styles.swiperview}>
              <View style={styles.swiperdatarowview}>
                <Image style={styles.swipeimg} resizeMode={"cover"} source={iconsrc.home} />
                <Text style={[styles.logotext, { color: Constant.APP_COLOR_GREY }]}>
                  {" "}
                  Residentals'Lounge{" "}
                </Text>
              </View>
              <View style={styles.swiperdatarowview}>
                <Image style={styles.swipeimg} resizeMode={"cover"} source={iconsrc.home} />
                <Text style={[styles.logotext, { color: Constant.APP_COLOR_GREY }]}> Guest</Text>
              </View>
              <View style={styles.swiperdatarowview}>
                <Image style={styles.swipeimg} resizeMode={"cover"} source={iconsrc.home} />
                <Text style={[styles.logotext, { color: Constant.APP_COLOR_GREY }]}> Guest Room </Text>
              </View>
            </View>

          </Swiper>}
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

          { this.state.startswiper &&  <Swiper style={[styles.swiperstyle, { height: 30 }]}>
              <View style={[styles.swiperview, { marginHorizontal: 0 }]}>
                <View style={[styles.rowview, { marginRight: 15 }]}>
                  <Image
                    style={styles.iconstylesmall}
                    resizeMode={"contain"}
                    source={iconsrc.numbericon}
                  />
                  <Text style={[styles.linetext]}> Max 3 person(s) </Text>
                </View>
                <View style={[styles.rowview, { marginRight: 15 }]}>
                  <Image
                    style={styles.iconstylesmall}
                    resizeMode={"contain"}
                    source={iconsrc.personicon}
                  />
                  <Text style={styles.linetext}> King Size bed </Text>
                </View>
              </View>
            </Swiper>}
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
              <Text style={[styles.btntext, styles.btntextcolor]}>Reservation</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomborderstyle} />
          <Text style={styles.headingsmall}>Fire Exit</Text>
          <Image resizeMode={"contain"} source={iconsrc.fireplan} style={styles.coverimg} />
          <View style={styles.bottomborderstyle} />
          <Text style={styles.headingsmall}>Tranportation</Text>

          <View style={styles.transparentbtn}>
            <Image style={styles.iconstylemedium} resizeMode={"contain"} source={iconsrc.bus} />
            <Text style={[styles.btntext, { marginHorizontal: 15 }]}>Public Bus</Text>
            <Image
            style={[styles.viewright,{ width: 20, height: 20 }]}
            resizeMode={"contain"}
            source={iconsrc.icon_right}
          />
         
          </View>
          <View style={[styles.bottomborderstyle, { marginBottom: 30 }]} />
        </ScrollView>

        <View style={styles.topDrawerButton}>
          <TouchableOpacity
            style={styles.drawerIconView}
            onPress={() => {
              this.props.navigation.toggleLeftDrawer();


            }}
          >
          <Image style={styles.drawerstylemedium} resizeMode={"contain"} source={iconsrc.icon_user} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.drawerIconView}
            onPress={() => {
              this.props.navigation.toggleRightDrawer();


            }}
          >
              <Image style={styles.drawerstylemedium} resizeMode={"contain"} source={iconsrc.icon_menu} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
