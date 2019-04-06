import * as React from "react";
import { Dimensions, Platform, View, FlatList, TouchableOpacity, Text, Image } from 'react-native';
import { Container } from 'native-base';
import styles from "./styles";

class Landmark extends React.Component<Props, State> {
  static navigationOptions = {
    headerMode: 'none'
  };

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
            <Image style={styles.cardImage} source={require('../../../../assets/oerderBg.png')} />
          </View>
          <View style={styles.dataOuter}>
            <View style={styles.dataContainer}>
              <Text style={styles.nameTag}>{info.item}</Text>
              <Text style={styles.distanceTag}>{"9000.0 km"}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <Container>
        <FlatList
          data={this.props.list}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem} />
      </Container>
    );
  }
}

export default Landmark;
