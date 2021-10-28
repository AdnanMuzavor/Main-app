import React from 'react';
import {Dimensions, Text, View} from 'react-native';
const {width, height} = Dimensions.get('window');
const UserDetailsScreen = () => {
  return (
    <>
      <View
        style={{
          width: width,
          height: height,
          color: 'black',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#ffffff',
        }}>
        <View
          style={{height: (20 * height) / 100, justifyContent: 'space-around'}}>
          <View style={{marginLeft: 10}}>
            <Text
              style={{
                fontWeight: '700',
                fontSize: 28,
                lineHeight: 36.4,
                color: 'black',
              }}>
              Hii User,
            </Text>
          </View>
          <View style={{marginLeft: 10, color: 'black'}}>
            <Text style={{color: 'black'}}>Number- 9123781290</Text>
            <Text style={{color: 'black'}}>
              Mailing address- mailme@gmail.com
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'rgba(223, 243, 249, 0.4)',
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            height: (80 * height) / 100,
          }}>
          <View style={{margin: 15, marginLeft: 18}}>
            <Text
              style={{
                fontWeight: '700',
                fontSize: 28,
                lineHeight: 36.4,
                color: 'black',
              }}>
              Referral code
            </Text>
          </View>
          <View style={{margin: 15, marginLeft: 18}}>
            <Text
              style={{
                fontWeight: '700',
                fontSize: 18,
                lineHeight: 23.4,
                color: 'black',
              }}>
              XXXXXXXX
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default UserDetailsScreen;
