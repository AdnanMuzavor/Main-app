import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Dimensions, PixelRatio} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {VerifyAccess} from '../actions/UserActions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingScreen from './Loading';

import SavedProdsRender from '../Componenets/SavedProdsRender';
const SavedProductScreen = props => {
  const {width, height} = Dimensions.get('window');

  const userSignin = useSelector(state => state.userSignin);
  const {userInfo, loading, error} = userSignin;

  const dispatch = useDispatch();
  const saved = useSelector(state => state.saved);
  const {savedproducts} = saved;
  const [saveditems, setsaveditems] = useState([]);

  const [savedprodloading, setsavedprodloading] = useState(true);

  useEffect(() => {
    const SavedGetter = async () => {
      const s1 = await AsyncStorage.getItem('savedItems');
      console.log(JSON.parse(s1));

      if (s1) {
        setsaveditems(JSON.parse(s1));
        setsavedprodloading(false);
      } else {
        setsavedprodloading(false);
      }
    };
    SavedGetter();

    if (userInfo) {
      dispatch(VerifyAccess(userInfo.access, userInfo.refresh));
    }
    if (!userInfo.access) {
      props.navigation.navigate('Login');
    }
  }, [savedproducts]);

  return savedprodloading === true ? (
    <LoadingScreen></LoadingScreen>
  ) : (
    <View style={{width: width, height: height, backgroundColor: '#ffffff'}}>
      {savedproducts.length >= 1 ? (
        <ScrollView>
          <View style={{marginTop: 10}}>
            <SavedProdsRender
              savedproducts={savedproducts}
              navigation={props.navigation}
            />
          </View>
        </ScrollView>
      ) : (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              width: width - 80,
              height: 40,
              backgroundColor: 'rgba(149, 112, 255, 1)',
              marginTop: 30,
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                lineHeight: 20.31,
                textAlign: 'center',
                padding: 10,
              }}>
              No products saved.
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default SavedProductScreen;
