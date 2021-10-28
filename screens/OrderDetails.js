import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import star1 from '../Imgs/star_corner.png';
import star2 from '../Imgs/star_filled.png';
import {Dimensions, PixelRatio} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {VerifyAccess} from '../actions/UserActions';
import LoadingScreen from './Loading';
import BillCounter from '../Componenets/BillCounter';
import {State} from 'react-native-gesture-handler';
const OrderDetailsScreen = props => {
  const {width, height} = Dimensions.get('window');
  const [mainload,setmainload]=useState(true);
  const dispatch = useDispatch();
  const userSignin = useSelector(state => state.userSignin);
  const {userInfo, loading, error} = userSignin;
  const orders = useSelector(state => state.orders);
  const {OrderSpecDetails} = orders;
  const [OrderItems2, setorderItems2] = useState([]);
  useEffect(() => {
    if (!userInfo.access) {
      props.navigation.navigate('Login');
    }

    if (userInfo) {
      dispatch(VerifyAccess(userInfo.access, userInfo.refresh));
    }
 
    if (OrderSpecDetails) {
      console.log('from here');
      console.log(OrderSpecDetails.split('$$$$')[0].split('&&'));
      OrderSpecDetails.split('$$$$')
        .map(e => e.split('&&'))
        .map((e, i) =>
          setorderItems2(prev => [
            ...prev,
            {
              name: e[0],
              price: Number(e[1]),
              productid: Number(e[2]),
              qty: Number(e[3]),
              color: e[4],
              type: e[5],
            },
          ]),
        );
    //setorderItems2((prev)=>prev.filter((e)=>{return e.name!==""}));
    setTimeout(() => {
      console.log(OrderItems2);
      setmainload(false)
    }, 1000);
      
    } else {
      console.log('guhkjbvdxrdtfuk');
      console.log(OrderSpecDetails);
      setmainload(false)
    }
  }, []);
  //Rating for product
  const [defaultRating, setdefaultRating] = useState(2);
  const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);
  //Rating for Experience
  const [defaultExpRating, setdefaultExpRating] = useState(2);
  const [maxExpRating, setmaxExpRating] = useState([1, 2, 3, 4, 5]);
  //Rating for Delivery
  const [defaultDelRating, setdefaultDelRating] = useState(2);
  const [maxDelRating, setmaxDelRating] = useState([1, 2, 3, 4, 5]);

  const starImgFilled = star2;
  const starImgUnFilled = star1;
  return mainload ? (
    <LoadingScreen></LoadingScreen>
  ) : (
    <View
      style={{
        paddingLeft: 18,
        paddingRight: 18,
        paddingTop: 10,
        backgroundColor: '#ffffff',
        width: width,
      }}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text
              style={{
                margin: 10,
                marginLeft: 2,
                fontWeight: '400',
                fontSize: 18,
                lineHeight: 23.4,
              }}>
              Order Number #{props.route.params.OrderNo}
            </Text>
            <Text
              style={{
                margin: 10,
                padding: 5,
                fontWeight: '400',
                fontSize: 9,
                lineHeight: 10.24,
                backgroundColor: '#E6F2F4',
              }}>
              On the way
            </Text>
          </View>

          <View
            style={{
              width: 288,
              height: 148,
              borderColor: 'black',
              backgroundColor: 'rgba(196, 196, 196, 0)',
              borderStyle: 'dotted',
              borderColor: 'black',
              borderWidth: 3,
            }}>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 13,
                lineHeight: 16.9,
                margin: 10,
                marginBottom: 2,
                color: 'rgba(149, 112, 255, 1)',
              }}>
              Delivery
            </Text>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 13,
                lineHeight: 16.9,
                margin: 2,
                marginLeft: 6,
                color: 'rgba(0, 0, 0, 0.6)',
              }}>
              {props.route.params.address}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft: 10,
                marginRight: 10,
                marginTop: 10,
              }}>
              <TouchableOpacity
                style={{
                  width: 120,
                  height: 58,
                  backgroundColor: 'rgba(111, 207, 151, 0.2)',
                  justifyContent: 'flex-start',

                  flexDirection: 'column',
                }}
                onPress={() => props.navigation.navigate('Order Details', e)}>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 13,
                    lineHeight: 16.61,
                    padding: 2,
                  }}>
                  order placed at 12:56 AM
                </Text>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 13,
                    lineHeight: 16.61,
                    padding: 2,
                  }}>
                  03-08-2021
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 120,
                  height: 58,
                  backgroundColor: 'rgba(111, 207, 151, 0.2)',
                  justifyContent: 'flex-start',

                  flexDirection: 'column',
                }}>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 13,
                    lineHeight: 16.61,
                    padding: 2,
                  }}>
                  to delivered by 12:57 AM
                </Text>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 13,
                    lineHeight: 16.61,
                    padding: 2,
                  }}>
                  03-08-2021
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ScrollView>
          <BillCounter
            cartItems={props.route.params.OrderItems}
            cartItems={OrderItems2?OrderItems2:null}
            ispaid={true}
            OrderPlacerFn={null}
          />
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: width / 12,
            marginRight: width / 12,
            margin: width / 18,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <MaterialCommunityIcons
              name="account"
              color={'black'}
              size={26}
              style={{backgroundColor: 'gray', borderRadius: 10}}
            />

            <Text
              style={{
                marginLeft: 8,
                fontWeight: '400',
                fontSize: 13,
                lineHeight: 16.61,
                marginTop: 2,
              }}>
              Mr person{' '}
              {props.route.params.status === 'on the way'
                ? 'is your delivery agent'
                : 'delivered'}
            </Text>
          </View>
          <TouchableOpacity>
            {props.route.params.status === 'on the way' ? (
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 13,
                  lineHeight: 16.61,
                  backgroundColor: 'rgba(255, 0, 0, 0.4)',
                  padding: 5,
                }}>
                Call
              </Text>
            ) : (
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 13,
                  lineHeight: 16.61,
                  backgroundColor: 'rgba(196, 196, 196, 0.35)',
                  padding: 5,
                }}>
                Support
              </Text>
            )}
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            width: 321,
            height: 260,
            margin: width / 12,
            marginTop: 10,
            backgroundColor: 'rgba(111, 207, 151, 0.1)',
          }}>
          <Text
            style={{
              marginLeft: 5,
              fontWeight: '700',
              fontSize: 18,
              lineHeight: 23,
            }}>
            Rate Your Delivery
          </Text>
          <View
            style={{
              textAlign: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: 280,
              height: 50,
              marginTop: 10,
              marginLeft: 20,
            }}>
            {maxDelRating.map((item, key) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  key={item}
                  onPress={() => setdefaultDelRating(item)}>
                  <Image
                    source={
                      item <= defaultDelRating ? starImgFilled : starImgUnFilled
                    }
                    style={{
                      width: 29,
                      height: 29,
                      resizeMode: 'cover',
                    }}></Image>
                </TouchableOpacity>
              );
            })}
          </View>
          <Text
            style={{
              marginLeft: 5,
              fontWeight: '700',
              fontSize: 18,
              lineHeight: 23,
            }}>
            Rate Your Experience
          </Text>
          <View
            style={{
              textAlign: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: 280,
              height: 50,
              marginTop: 10,
              marginLeft: 20,
            }}>
            {maxExpRating.map((item, key) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  key={item}
                  onPress={() => setdefaultExpRating(item)}>
                  <Image
                    source={
                      item <= defaultExpRating ? starImgFilled : starImgUnFilled
                    }
                    style={{
                      width: 29,
                      height: 29,
                      resizeMode: 'cover',
                    }}></Image>
                </TouchableOpacity>
              );
            })}
          </View>
          <Text
            style={{
              marginLeft: 5,
              fontWeight: '700',
              fontSize: 18,
              lineHeight: 23,
            }}>
            Rate Your Product
          </Text>
          <View
            style={{
              textAlign: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: 280,
              height: 50,
              marginTop: 10,
              marginLeft: 20,
            }}>
            {maxRating.map((item, key) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  key={item}
                  onPress={() => setdefaultRating(item)}>
                  <Image
                    source={
                      item <= defaultRating ? starImgFilled : starImgUnFilled
                    }
                    style={{
                      width: 29,
                      height: 29,
                      resizeMode: 'cover',
                    }}></Image>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View></View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            width: 321,
            height: 78,
            margin: width / 12,
            marginTop: 0,
            backgroundColor: 'rgba(196, 196, 196, 0.3)',
          }}>
          <Text style={{fontWeight: '400', fontSize: 48, lineHeight: 61.34}}>
            29 mins
          </Text>
          <Text style={{marginTop: 50}}>left</Text>
          <TouchableOpacity
            style={{marginTop: 20, marginLeft: 28}}
            onPress={() => props.navigation.navigate('Return Product')}>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 18,
                lineHeight: 23,
                backgroundColor: 'rgba(255, 0, 0, 0.4)',
                padding: 5,
              }}>
              Return
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderDetailsScreen;
