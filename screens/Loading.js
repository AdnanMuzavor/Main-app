import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import loading from '../Imgs/loading.png';
const {width, height} = Dimensions.get('window');
const LoadingScreen = ({navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#ffffff'
      }}>
      <Image
        source={loading}
        style={{
          resizeMode: 'center',
          width: (60 * width) / 100,
          height: (60 * height) / 100,
          marginTop: (10 * height) / 100,
        }}></Image>
      <Text>loading....</Text>
    </View>
  );
};

export default LoadingScreen;
