import React from 'react';
import LottieView from 'lottie-react-native';
import {Dimensions} from 'react-native';
import {View} from 'react-native';
const {width, height} = Dimensions.get('window');
const AnimatedS2 = () => {
  return (
    <>
      <View
        style={{
          width: width,
          height: height,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ffffff',
        }}>
        <LottieView
          source={require('../Assets/81808-purchase-made.json')}
          autoPlay
          loop
        />
      </View>
    </>
  );
};

export default AnimatedS2;
