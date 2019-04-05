import * as React from "react";
import { Dimensions, Platform, View, Image, TouchableOpacity, Text } from 'react-native';
import styles from "./styles";

class Community extends React.Component<Props, State> {
  static navigationOptions = {
    headerMode: 'none'
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.headerImage} resizeMode="cover" source={require('../../../../assets/community-bg.png')} />
          <View style={styles.pageTitle}>
            <Text style={styles.pageTitleText}>{"COMMUNITY"}</Text>
          </View>
        </View>
        <View style={styles.menuContainer}>
          <View style={styles.pageTitleAlt}>
            <Text style={styles.pageTitleText}>{"COMMUNITY"}</Text>
          </View>
          <View style={styles.menuUpperRow}>
            <TouchableOpacity>
              <View style={styles.menuButtonStyle}>
                <Image style={styles.menuImage} resizeMode="contain" source={require('../../../../assets/icons/property-activity.png')} />
                <Text style={styles.menuTitle}>{"Activities"}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.menuButtonStyle, styles.menuCenterOptionBorder]}>
                <Image style={styles.menuImage} resizeMode="contain" source={require('../../../../assets/icons/opinion-survey.png')} />
                <Text style={styles.menuTitle}>{"Notice"}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.menuButtonStyle}>
                <Image style={styles.menuImage} resizeMode="contain" source={require('../../../../assets/icons/shopping.png')} />
                <Text style={styles.menuTitle}>{"Shopping"}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.menuBottomRow}>
            <TouchableOpacity>
              <View style={styles.menuButtonStyle}>
                <Image style={styles.menuImage} resizeMode="contain" source={require('../../../../assets/icons/ascott-life.png')} />
                <Text style={styles.menuTitle}>{"Ascott Living"}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.menuButtonStyle, styles.menuCenterOptionBorder]}>
                <Image style={styles.menuImage} resizeMode="contain" source={require('../../../../assets/icons/icon-feedback.png')} />
                <Text style={styles.menuTitle}>{"Feedback"}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.menuButtonStyle}>
                <Image style={styles.menuImage} resizeMode="contain" source={require('../../../../assets/icons/lifestyle.png')} />
                <Text style={styles.menuTitle}>{"Life Style"}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Community;
