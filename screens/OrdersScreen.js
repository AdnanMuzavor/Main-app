import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {Dimensions, PixelRatio} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {VerifyAccess} from '../actions/UserActions';

import blogs from '../Data/Blogs';
import Orderdetails from '../Data/Orders';
import LoadingScreen from './Loading';
const Orders = props => {
  const {width, height} = Dimensions.get('window');
  const dispatch = useDispatch();
  const userSignin = useSelector(state => state.userSignin);
  const {userInfo, loading, error} = userSignin;
  const orders = useSelector(state => state.orders);
  // const {OrdersPlaced} = orders;
  useEffect(() => {
    if (userInfo) {
      dispatch(VerifyAccess(userInfo.access, userInfo.refresh));
    }
    if (!userInfo.access) {
      props.navigation.navigate('Login');
    }
  }, []);

  return loading ? (
    <LoadingScreen></LoadingScreen>
  ) : (
    <>
      <View style={{marginTop: 0, backgroundColor: '#ffffff'}}>
        <View
          style={{
            paddingLeft: width / 15,
            paddingRight: width / 10,
            paddingTop: height / 50,
            backgroundColor: '#ffffff',
          }}>
          <Text style={styles.titlestyle}>Hii User,</Text>
        </View>
        <View
          style={{
            marginLeft: width / 8,
            marginRight: width / 10,
            marginTop: height / 40,
          }}>
          <Text style={styles.categorystyle}>Your order history</Text>
        </View>
      </View>

      <ScrollView vertical={true}>
        <View
          style={{
            flexDirection: 'column',
            paddingTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ffffff',
          }}>
          {Orderdetails.map((e, i) => (
            <View
              key={i + 100}
              style={{
                position: 'relative',
                height: 150,
                width: '90%',
                borderRadius: 5,
                borderColor: 'rgba(0, 0, 0, 1)',
                borderWidth: 2,
                backgroundColor: 'rgba(196, 196, 196, 0)',
                margin: 10,
                flexDirection: 'column',
              }}>
              <Text style={styles.Orderstyle}>{e.OrderNo}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  margin: 10,
                  marginLeft: 15,
                  marginRight: 15,
                }}>
                <Text
                  style={{fontWeight: '400', fontSize: 13, lineHeight: 15.75}}>
                  {e.OrderItems.map((itm, i) =>
                    i < 3 ? (
                      <Text>
                        {itm.itemname} x {itm.qty},
                      </Text>
                    ) : null,
                  )}
                </Text>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 13,
                    lineHeight: 14.75,
                    marginLeft: 20,
                  }}>
                  .....etc
                </Text>
              </View>
              <Text
                style={{
                  width: 55,
                  height: 20,
                  marginLeft:5,
                  padding: 5,
                  fontWeight: '400',
                  fontSize: 9,
                  lineHeight: 10.24,
                  borderRadius: 7,
                  backgroundColor: '#E6F2F4',
                  textAlign: 'center',
                  marginBottom: 10,
                  alignItems: 'center',
                  color:'black'
                }}>
                {e.status}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginLeft: 25,
                  marginRight: 25,
                }}>
                <TouchableOpacity
                  style={{
                    width: 141,
                    height: 37,
                    backgroundColor: 'rgba(149, 112, 255, 0.1)',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => props.navigation.navigate('Order Details', e)}>
                  <Text
                    style={{
                      fontWeight: '400',
                      fontSize: 24,
                      lineHeight: 27.31,
               
                    }}>
                    Order Details
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: 141,
                    height: 37,
                    backgroundColor: 'rgba(149, 112, 255, 1)',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontWeight: '400',
                      fontSize: 24,
                      lineHeight: 27.31,
                      color: 'rgba(255, 255, 255, 1)',
                    }}>
                    Rate Order
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
  },
  titlestyle: {
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 36.4,
    color:'black'
  },
  categorystyle: {
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 23.4,
    marginBottom: 10,
    color:'black'
  },
  Orderstyle: {
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 23.4,
    margin: 5,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    color:'black'
  },
  categorydatastyle1: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    margin: 5,
    backgroundColor: '#9570FF1A',
    borderRadius: 15,
    fontSize: 16,
  },
  categorydatastyle2: {
    color: 'black',
    fontWeight: 'bold',
    padding: 10,
    margin: 5,
    backgroundColor: 'rgba(111, 207, 151, 0.1)',
    borderRadius: 15,
    fontSize: 16,
    textAlign: 'center',
  },
});
