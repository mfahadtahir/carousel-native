import React, {Component} from 'react';

import Carousel from 'react-native-snap-carousel';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {Header, Colors} from 'react-native/Libraries/NewAppScreen';

class MyCarousel extends Component {
  _renderItem = ({item, index}) => {
    return (
      <View style={styles.slide}>
        <ImageBackground source={item.img} style={styles.slideimage}>
          <Text style={styles.title}>{item.title}</Text>
        </ImageBackground>
      </View>
    );
  };
  render() {
    const data = [
      {img: require('./assets/01.jpg'), title: 'Crispy'},
      {img: require('./assets/02.jpg'), title: 'Mac'},
      {img: require('./assets/03.jpg'), title: 'Jumbo'},
      {img: require('./assets/04.jpg'), title: 'Cheese'},
      {img: require('./assets/05.jpg'), title: 'Chicken'},
      {img: require('./assets/06.jpg'), title: 'French'},
    ];
    return (
      <Carousel
        ref={(c) => {
          this._carousel = c;
        }}
        layout={'tinder'}
        // layoutCardOffset={`18`}
        data={data}
        renderItem={this._renderItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
      />
    );
  }
}
const styles = StyleSheet.create({
  slide: {
    backgroundColor: Colors.lighter,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    padding: 15,
  },
  title: {
    color: Colors.white,
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
  slideimage: {
    // width: 200,
    // height: 200,
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
export default MyCarousel;
