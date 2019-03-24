import * as React from "react";
import { Dimensions, Platform, View, TouchableOpacity, StatusBar } from 'react-native';
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
        <TouchableOpacity onPress={() => { }}>
          <Icon name="ios-person-outline" style={styles.iconLeft} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }}>
          <Icon name="md-menu" style={styles.iconRight} />
        </TouchableOpacity>
      </View>
    </View>
  )

  renderContent = () => (
    <Content>
      <List>
        {this.props.list.map((item, i) => (
          <ListItem
            key={i}
            onPress={() =>
              this.props.navigation.navigate("BlankPage", {
                name: { item }
              })}
          >
            <Text>{item}</Text>
          </ListItem>
        ))}
      </List>
    </Content>
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
