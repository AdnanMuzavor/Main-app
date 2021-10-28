import React from 'react';
import LottieView from 'lottie-react-native';
import {Dimensions} from 'react-native';
import {View} from 'react-native';
const {width, height} = Dimensions.get('window');
const AnimatedS3 = () => {
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
          source={require('../Assets/890-loading-animation.json')}
          autoPlay
          loop
        />
      </View>
    </>
  );
};

export default AnimatedS3;
