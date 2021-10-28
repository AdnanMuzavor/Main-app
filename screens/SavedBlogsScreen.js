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
const SavedBlogsScreen = props => {
  const {width, height} = Dimensions.get('window');
  const dispatch = useDispatch();
  const saved = useSelector(state => state.saved);
  const {savedblogs} = saved;
  const [savedstoresget, setsavedstoresget] = useState([]);
  const userSignin = useSelector(state => state.userSignin);
  const {userInfo, loading, error} = userSignin;
  const [savedprodloading, setsavedprodloading] = useState(true);
  useEffect(() => {
    const SavedGetter = async () => {
      const s1 = await AsyncStorage.getItem('savedblogs');
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
  }, [savedblogs]);

  return savedprodloading === true ? (
    <LoadingScreen></LoadingScreen>
  ) : (
    <View style={{width: width, height: height, backgroundColor: '#ffffff'}}>
      {savedblogs.length >= 1 ? (
        <View
          style={{
            flexDirection: 'column',
            width: width,
            marginTop: 10,
            height: (80 * height) / 100,
            backgroundColor: 'white',
            paddingLeft: width / 20,
          }}>
          <ScrollView>
            {savedblogs.map((item, i) => (
              <TouchableOpacity
                key={i + 100}
                style={{
                  position: 'relative',
                  height: 180,
                  width: '100%',
                }}
                onPress={() => props.navigation.navigate('blog', item)}>
                <Image
                  source={item.img}
                  style={{
                    width: (90 * width) / 100,
                    height: (20 * height) / 100,
                    borderRadius: 30,
                    resizeMode: 'cover',
                  }}></Image>
                <Text
                  style={{
                    top: -70,
                    left: 15,

                    backgroundColor:
                      'linear-gradient(282.63deg, rgba(255, 255, 255, 0.44) 24.04%, #FFFFFF 79.72%)',

                    fontWeight: '700',
                    width: '85%',
                    textAlign: 'center',
                    fontSize: 16,
                    lineHeight: 20.45,
                    borderRadius: 15,
                    height: 63,
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
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

export default SavedBlogsScreen;
