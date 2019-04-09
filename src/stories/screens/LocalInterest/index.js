import * as React from "react";
import { Dimensions, Platform, View } from 'react-native';
import { Container, Header, Content, Tab, Tabs, Body,Title } from 'native-base';
import styles from "./styles";
import Landmark from "../Landmark";
import Restaurant from "../Restaurant";
import Shopping from "../Shopping";

class LocalInterest extends React.Component<Props, State> {
  static navigationOptions = {
    headerMode: 'none'
  };

  render() {
    return (
      <Container>
        <Header 
          hasTabs 
          style={styles.headerStyle}
          androidStatusBarColor='#fff'
          iosBarStyle={"dark-content"}          
        >
          <Body>
            <Title style={styles.headerTitleStyle}>Local Interest</Title>
          </Body>
        </Header>
        <Tabs 
          tabContainerStyle={styles.tabContainerStyle}
          tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
        >
          <Tab 
            heading="Landmark" 
            tabStyle={styles.tabStyle}
            activeTabStyle={styles.activeTabStyle}
            textStyle={styles.tabTextStyle}
            activeTextStyle={styles.activeTabTextStyle}
          >
            <Landmark list={this.props.list}/>
          </Tab>
          <Tab 
            heading="Restaurant" 
            tabStyle={styles.tabStyle}
            activeTabStyle={styles.activeTabStyle}
            textStyle={styles.tabTextStyle}
            activeTextStyle={styles.activeTabTextStyle}
          >
            <Restaurant list={this.props.list}/>
          </Tab>
          <Tab 
            heading="Shopping" 
            tabStyle={styles.tabStyle}
            activeTabStyle={styles.activeTabStyle}
            textStyle={styles.tabTextStyle}
            activeTextStyle={styles.activeTabTextStyle}
          >
            <Shopping list={this.props.list}/>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default LocalInterest;
