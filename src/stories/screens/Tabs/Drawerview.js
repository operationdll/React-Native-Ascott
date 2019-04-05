import React{Component} from "react";
import { Image, Platform } from "react-native";

import iconsrc from "./../../../iconsrc";

import Constant from "../../../Constant";

import { isIphoneX } from "../../../Utilities";
import styles from "./../styles"


export default Drawerview extends React.Component{
    render(){
        return(
            <View style={styles.drawercontainer}>
            <View style={styles.drawertop}>
                <Text style={styles.drawertitletext}>wang</Text>
            </View>
             <View style={styles.transparentbtn}>
           
            <Text style={[styles.btntext]}>Room Info</Text>
            <Image
                  style={[styles.iconstylemedium,styles.viewright]}
                  resizeMode={"contain"}
                  source={iconsrc.digitalkey}
                />
            </View>
            <View style={styles.transparentbtn}>
           
           <Text style={[styles.btntext]}>Message</Text>
           <Image
                  style={[styles.iconstylemedium,styles.viewright]}
                  resizeMode={"contain"}
                  source={iconsrc.digitalkey}
                />
           </View>
           <View style={styles.transparentbtn}>
           
           <Text style={[styles.btntext]}>Check Order</Text>
           <Image
                  style={[styles.iconstylemedium,styles.viewright]}
                  resizeMode={"contain"}
                  source={iconsrc.digitalkey}
                />
           </View>
          <View style={styles.bottomborderstyle} />
          </View>
        )
    }
}