import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Dimensions, PixelRatio} from 'react-native';

import HomeScreenProds from '../Componenets/HomeScreenProductRender';

const CategoryScreen = props => {
  const {width, height} = Dimensions.get('window');

  useEffect(() => {
    console.log("cat ss")
    console.log(props.route.params);
  }, []);

  return (
    <View style={{width: width, height: height, backgroundColor: '#ffffff'}}>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text
          style={{
            color: 'black',
            margin: 10,
            padding: 5,
            color: 'black',
            fontWeight: 'bold',
            textAlign: 'center',
            padding: 10,
            margin: 5,
            backgroundColor: '#9570FF1A',
            borderRadius: 15,
            fontSize: 16,
          }}>
          {props.route.params}
        </Text>
      </View>
      <HomeScreenProds
        navigation={props.navigation}
        filter={'category'}
        type={props.route.params}
      />
    </View>
  );
};

export default CategoryScreen;
