import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Dimensions, PixelRatio} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import star1 from '../Imgs/star_corner.png';
import star2 from '../Imgs/star_filled.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {VerifyAccess} from '../actions/UserActions';
import LoadingScreen from './Loading';
const SavedStoreScreen = props => {
  const {width, height} = Dimensions.get('window');
  const dispatch = useDispatch();
  const saved = useSelector(state => state.saved);
  const {savedstores} = saved;
  const [savedstoresget, setsavedstoresget] = useState([]);
  const userSignin = useSelector(state => state.userSignin);
  const {userInfo, loading, error} = userSignin;
  const [savedprodloading, setsavedprodloading] = useState(true);
  useEffect(() => {
    const SavedGetter = async () => {
      const s1 = await AsyncStorage.getItem('savedstoress');
      console.log(JSON.parse(s1));
      if (s1) {
        setsavedstoresget(JSON.parse(s1));
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
  }, [savedstores]);

  return savedprodloading === true ? (
    <LoadingScreen></LoadingScreen>
  ) : (
    <View style={{width: width, height: height, backgroundColor: '#ffffff'}}>
      {savedstores.length >= 1 ? (
        <ScrollView>
          <View style={{marginTop: 10}}>
            {savedstores.map((e, i) => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  margin: 10,
                  marginTop: 8,
                }}>
                <TouchableOpacity
                  key={i + 500}
                  style={{
                    flexDirection: 'row',
                  }}
                  onPress={() => props.navigation.navigate('store details', e)}>
                  <Image
                    source={e.img}
                    style={{width: 66, height: 66, borderRadius: 13}}></Image>
                  <View style={{flexDirection: 'column'}}>
                    <Text
                      style={{
                        fontWeight: '400',
                        fontSize: 16,
                        lineHeight: 20.45,
                        marginTop: 10,
                        marginLeft: 40,
                      }}>
                      {e.name}
                    </Text>

                    <View
                      style={{
                        textAlign: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: 100,
                        height: 50,
                        marginTop: 10,
                        marginLeft: 40,
                      }}>
                      <Image
                        source={star2}
                        style={{
                          width: 13.33,
                          height: 12.68,
                          resizeMode: 'cover',
                        }}></Image>
                      <Image
                        source={star2}
                        style={{
                          width: 13.33,
                          height: 12.68,
                          resizeMode: 'cover',
                        }}></Image>
                      <Image
                        source={star2}
                        style={{
                          width: 13.33,
                          height: 12.68,
                          resizeMode: 'cover',
                        }}></Image>
                      <Image
                        source={star1}
                        style={{
                          width: 13.33,
                          height: 12.68,
                          resizeMode: 'cover',
                        }}></Image>
                      <Image
                        source={star1}
                        style={{
                          width: 13.33,
                          height: 12.68,
                          resizeMode: 'cover',
                        }}></Image>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
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
              No stores saved.
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default SavedStoreScreen;
