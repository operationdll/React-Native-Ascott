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
  Animated,
  Dimensions
} from "react-native";
import { DrawerNavigator } from "react-navigation";
import Timer from "jest-jasmine2/build/jasmine/Timer";
import Constant from "./../../../Constant";

import iconsrc from "../../../iconsrc";

let CIRCLE_RADIUS = 50;
let CIRCLE_RADIUS1 = 15;
let i = Constant.SCREEN_HEIGHT * (80/ 100) ;

export default class Lock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arrowtop: 52.5,

      pan: new Animated.ValueXY()
    };

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {
          //dx : this.state.pan.x,

          dy: this.state.pan.y
        }
      ]),
      onPanResponderMove: (evt, gestureState) => {
        var j = Constant.SCREEN_HEIGHT * (20 / 100);
        console.log(
          "gestureState.moveY" +
            JSON.stringify(gestureState) +
            " location i=  " +
            i +
            " location j=  " +
            j
        );
        if (gestureState.dy > 0 && gestureState.moveY < i) {
          return Animated.event([
            null,
            {
              //dx: this.state.pan.x,
              dy: this.state.pan.y
            }
          ])(evt, gestureState);
        } else {
          return Animated.event([
            null,
            {
              //dx: this.state.pan.x,
              //dy: this.state.pan.y
            }
          ])(evt, gestureState);
        }
      },

      onPanResponderRelease: (e, gesture) => {
        if (this.isDropArea(gesture)) {
          this.props.navigation.navigate("Lockstatus");//change screen
        } else {
          Animated.spring(this.state.pan, {
            toValue: { x: 0, y: 0 },
            friction: 5
          }).start();
        }
      }
    });
  }
  componentWillMount = () => {
   // this.timer();
  };
  timer = () => {
    setInterval(() => {
      if (this.state.arrowtop < 60) {
        var tt = this.state.arrowtop + 3;
        this.setState({
          arrowtop: tt
        });
      } else {
        this.setState({
          arrowtop: 52
        });
      }
    }, 500);
  };
  isDropArea(gesture) {
    if (gesture.moveY > i) {
      // console.log(Window.height / 4 - CIRCLE_RADIUS);
      return true;
    } else {
      false;
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {
          //console.log("y = " + JSON.stringify(this.state.pan.y))
        }
        <View style={styles.lockview}>
          {this.renderDraggable()}

          <Image
            source={iconsrc.arrow}
            style={[styles.arrow, { top: Constant.SCREEN_HEIGHT * (this.state.arrowtop / 100) }]}
          />

          <Image source={iconsrc.dot} resizeMode={"contain"} style={[styles.dot, { top: Constant.SCREEN_HEIGHT * (50 / 100) }]} />

          <Image source={iconsrc.dot} resizeMode={"contain"} style={[styles.dot, { top: Constant.SCREEN_HEIGHT * (53 / 100) }]} />
          <Image source={iconsrc.dot} resizeMode={"contain"} style={[styles.dot, { top: Constant.SCREEN_HEIGHT * (56 / 100) }]} />
          <Image source={iconsrc.dot} resizeMode={"contain"} style={[styles.dot, { top: Constant.SCREEN_HEIGHT * (59 / 100) }]} />

          <View style={styles.unlockContainer}>
            <View style={styles.unlockcircle} > 
            <Image source={iconsrc.unlock} resizeMode={"contain"} style={{ width: CIRCLE_RADIUS1 , height: CIRCLE_RADIUS1}} />
            </View>
          </View>
        </View>
      </View>
    );
  }
  renderDraggable() {
    return (
      <View style={styles.draggableContainer}>
        <Animated.View
          style={styles.circle}
          {...this.panResponder.panHandlers}
          style={[this.state.pan.getLayout(), styles.circle]}
        >
          <Image source={iconsrc.digitalkey} resizeMode={"contain"} style={{ width: CIRCLE_RADIUS , height: CIRCLE_RADIUS}} />
        </Animated.View>
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
  lockview: {
    height: Constant.SCREEN_HEIGHT / 1.5,
    justifyContent: "center",
    alignItems: "center",
   
  },

  draggableContainer: {
    justifyContent: "center"
  },
  unlockContainer: {
    position: "absolute",
    bottom: 0,
    //left: Window.width / 2 - CIRCLE_RADIUS1
    justifyContent: "center"
  },
  circle: {
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS,
    alignItems:"center",
    justifyContent:"center"
  },
  unlockcircle: {
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    width: 50,
    alignItems:"center",
    justifyContent:"center",
    height: 50,
    borderRadius: 35
  },
  dot: {
    height:10,
    width: 10,
    // position: "absolute",
    //left: Window.width / 2 - 18
    justifyContent: "center"
  },
  arrow: {
    height: 10,
    width: 10,
    // position: "absolute",
    //left: Window.width / 2 - 8
    justifyContent: "center"
  }
});
