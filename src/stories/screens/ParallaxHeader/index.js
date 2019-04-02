import * as React from "react";
import { Dimensions, Platform, View, TouchableOpacity, StatusBar, FlatList, Image } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  List,
  ListItem
} from "native-base";
import ReactNativeParallaxHeader from 'react-native-parallax-header';

import styles from "./styles";
export interface Props {
  navigation: any;
  list: any;
}

const SCREEN_HEIGHT = Dimensions.get('window').height;
const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;
export interface State { }
class ParallaxHeader extends React.Component<Props, State> {
  static navigationOptions = {
    headerMode: 'none'
  };
  renderNavBar = () => (
    <View style={styles.navContainer}>
      <StatusBar hidden />
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Login") }}>
          <Icon name="ios-person-outline" style={styles.iconLeft} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }}>
          <Icon name="md-menu" style={styles.iconRight} />
        </TouchableOpacity>
      </View>
    </View>
  )

  _keyExtractor(item, index) {
    return item
  }

  _renderItem(info) {
    return (
      <TouchableOpacity>
        <View style={styles.itemContainer}>
          <View style={styles.imageContainer}>
            <View style={styles.cardNameContainer}>
              <Text style={styles.cardName}>{info.item}</Text>
            </View>
            <View style={styles.distanceTagContainer}>
              <Text style={styles.distanceTag}>{"9000.0 km"}</Text>
            </View>
            <Image style={styles.cardImage} source={require('../../../../assets/oerderBg.png')} />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity>
              <View style={styles.buttonContent}>
                <Text style={styles.buttonText}>{"Reservation"}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  renderContent = () => (
    <View>
      <FlatList
        data={this.props.list}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem} />
    </View>
  )

  render() {
    return (
      <Container style={styles.container}>
        <ReactNativeParallaxHeader
          headerMinHeight={HEADER_HEIGHT}
          headerMaxHeight={250}
          extraScrollHeight={20}
          navbarColor={"#000"}
          title="Ascott"
          titleStyle={styles.titleStyle}
          backgroundImage={require('../../../../assets/index_bg.jpg')}
          backgroundImageScale={1.2}
          renderNavBar={this.renderNavBar}
          renderContent={this.renderContent}
          containerStyle={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1 }}
          innerContainerStyle={{ flex: 1 }}
          scrollViewProps={{
            onScrollBeginDrag: () => console.log('onScrollBeginDrag'),
            onScrollEndDrag: () => console.log('onScrollEndDrag'),
          }}
        />
      </Container>
    );
  }
}

export default ParallaxHeader;
