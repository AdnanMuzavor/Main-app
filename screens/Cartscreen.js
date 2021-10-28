import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  ScrollView,
  TextInput,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import img1 from '../Imgs/img1.jpg';
import img2 from '../Imgs/img2.jpg';
import user from '../Imgs/user.jpg';
import left from '../Imgs/left.jpg';
import {TouchableOpacity} from 'react-native-gesture-handler';
import shoe from '../Imgs/shoe.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useDispatch, useSelector} from 'react-redux';
import {AddToCart, RemoveItem} from '../actions/CartActions';
import SavedAddressbar from '../Componenets/SavedAddressbar';
import BillCounter from '../Componenets/BillCounter';
const {width, height} = Dimensions.get('window');
const Cartscreen = ({navigation}) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;
  // const [cartItems,setcartItems]=useState([]);
  const userSignin = useSelector(state => state.userSignin);
  const {userInfo, loading, error} = userSignin;
  const [coupon, setcoupon] = useState('');
  const [total, settotal] = useState(0);
  const [delcost, setdelcost] = useState(0);
  const [discount, setdiscount] = useState(0);
  const [totalcost, settotalcost] = useState(0);
  useEffect(() => {}, [cartItems]);
  const [products, setproducts] = useState([
    {
      name: 'Maggie',
      key: Math.random().toString(),
      img: img1,
      price: 20,
      listTab: [
        {
          status: 'Description',
          des: 'Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish',
        },
        {
          status: 'Product Info',
          des: 'Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish',
        },
        {
          status: 'Product policy',
          des: 'Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish',
        },
      ],
      types: ['70 g', '140 g', `210 g`, '280 g', '350 g', '420 g'],
      colors: [],
    },
    {
      name: 'Masala',
      key: Math.random().toString(),
      img: img2,
      price: 50,
      listTab: [
        {
          status: 'Description',
          des: 'Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish',
        },
        {
          status: 'Product Info',
          des: 'Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish',
        },
        {
          status: 'Product policy',
          des: 'Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish',
        },
      ],

      types: [],
      colors: [],
    },

    {
      name: 'T-shirt',
      key: Math.random().toString(),
      img: left,
      price: 200,
      listTab: [
        {
          status: 'Description',
          des: 'Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish',
        },
        {
          status: 'Product Info',
          des: 'Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish',
        },
        {
          status: 'Product policy',
          des: 'Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish',
        },
      ],
      types: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['yellow', 'pink', 'orange', `red`, 'blue', 'green'],
    },
    {
      name: 'Shoes',
      key: Math.random().toString(),
      img: shoe,
      price: 350,
      listTab: [
        {
          status: 'Description',
          des: 'Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish',
        },
        {
          status: 'Product Info',
          des: 'Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish',
        },
        {
          status: 'Product policy',
          des: 'Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish',
        },
      ],
      types: ['32', '36', `37`, '38', '41', '43', '47', '50', '58', '60'],
      colors: [`red`, 'blue', 'green', 'yellow', 'pink', 'orange'],
    },
  ]);

  const IncrementQtyhandler = (
    name,
    img,
    key,
    price,
    listTab,
    types,
    colors,
    qty,
    type,
    color,
  ) => {
    dispatch(
      AddToCart(
        name,
        img,
        key,
        price,
        listTab,
        types,
        colors,
        qty + 1,
        type,
        color,
      ),
    );
  };

  const DecrementQtyhandler = (
    name,
    img,
    key,
    price,
    listTab,
    types,
    colors,
    qty,
    type,
    color,
  ) => {
    if (qty >= 2) {
      dispatch(
        AddToCart(
          name,
          img,
          key,
          price,
          listTab,
          types,
          colors,
          qty - 1,
          type,
          color,
        ),
      );
    } else if (qty === 1) {
      dispatch(RemoveItem(name));
    }
  };

  const [categories, setcategories] = useState([
    {val: 'toys', key: 1},
    {val: 'vegetables', key: 2},
    {val: 'cloths', key: 3},
    {val: 'eatables', key: 4},
    {val: 'toys', key: 5},
    {val: 'vegetables', key: 6},
    {val: 'cloths', key: 7},
    {val: 'eatables', key: 8},
  ]);

  const scrollRef = useRef();
  const Scroller = () => {
    scrollRef.current?.scrollTo({
      y: 100,
      animated: true,
    });
    scrollRef.current?.scrollToEnd({animated: true});
    // navigation.navigate("Place Order",cartItems);
  };
  return (
    <View
      style={{
        paddingLeft: 18,
        paddingRight: 18,
        paddingTop: 45,
        backgroundColor: '#ffffff',
      }}>
      <ScrollView ref={scrollRef}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                margin: 10,
                fontWeight: '700',
                fontSize: 24,
                lineHeight: 27.31,
                color:'black'
              }}>
              Cart
            </Text>
            <Text style={{margin: 10}}>
              <MaterialCommunityIcons name="cart" size={30} />
            </Text>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: 'rgba(149, 112, 255, 1)',
              borderRadius: 10,
              marginTop: 5,
            }}
            onPress={() => Scroller()}>
            <Text
              style={{
                margin: 10,
                fontWeight: '400',
                fontSize: 16,
                lineHeight: 20.31,
                color:'black'
              }}>
              Scroll to bill
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          {cartItems ? (
            cartItems.map((item, i) => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  margin: 20,
                }}>
                <Pressable onPress={() => navigation.navigate('product', item)}>
                  <Image
                    source={item.img}
                    style={{width: 66, height: 66, borderRadius: 13}}></Image>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('product', item)}>
                  <Text
                    style={{
                      fontWeight: '400',
                      lineHeight: 20.45,
                      fontSize: 16,
                      color: 'black',
                    }}>
                    {item.name}
                  </Text>
                </Pressable>
                <View style={{flexDirection: 'column'}}>
                  <Text
                    style={{
                      fontSize: 16,
                      lineHeight: 20.45,
                      fontWeight: '700',
                      textAlign: 'center',
                      color:'black'
                    }}>
                    {item.price} INR
                  </Text>
                  <View style={{marginTop: 10, flexDirection: 'row'}}>
                    <TouchableOpacity
                      onPress={() =>
                        IncrementQtyhandler(
                          item.name,
                          item.img,
                          item.key,
                          item.price,
                          item.listTab,
                          item.types,
                          item.colors,

                          item.qty,
                          item.type ? item.type : null,
                          item.color ? item.color : null,
                        )
                      }
                      style={{
                        backgroundColor: '#DFF3F9',
                        height: 32,
                        width: 32,
                        marginRight: 5,
                        borderRadius: 8,
                      }}>
                      <MaterialCommunityIcons
                        name="plus"
                        size={30}
                        style={{
                          color: '#45BFE4',
                        }}
                      />
                    </TouchableOpacity>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '400',
                        lineHeight: 20.45,
                      }}>
                      {item.qty}
                    </Text>
                    <TouchableOpacity
                      onPress={() =>
                        DecrementQtyhandler(
                          item.name,
                          item.img,
                          item.key,
                          item.price,
                          item.listTab,
                          item.types,
                          item.colors,
                          item.qty,
                          item.type ? item.type : null,
                          item.color ? item.color : null,
                        )
                      }
                      style={{
                        backgroundColor: '#DFF3F9',
                        height: 32,
                        width: 32,
                        marginLeft: 10,
                        borderRadius: 8,
                      }}>
                      <MaterialCommunityIcons
                        name="minus"
                        size={30}
                        style={{
                          color: '#45BFE4',
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))
          ) : (
            <Text>Cart Is Empty</Text>
          )}
        </ScrollView>
        <View
          style={{
            backgroundColor: '#E6F2F4',
            margin: 4,
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 40,
          }}>
          <View>
            <TextInput
              style={{color: 'black', marginLeft: 8}}
              name="coupon"
              autoCapitalize="none"
              value={coupon}
              onChangeText={text => setcoupon(text)}
              placeholder="Enter coupon code"
            />
          </View>
          <Text
            style={{
              color: '#9570FF',
              padding: 10,
              fontWeight: 'bold',
              fontSize: 14,
              lineHeight: 15.93,
              color:'black'
            }}>
            Apply
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            margin: 4,
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 40,
          }}>
          <Text
            style={{
              padding: 10,
              fontSize: 14,
              color: '#111417',
              fontWeight: '400',
              lineHeight: 15.93,
              color:'black'
            }}>
            Add any instruction
          </Text>
          <View>
            <Text
              style={{
                backgroundColor: '#DFF3F9',
                fontSize: 30,
                margin: 10,
                borderRadius: 18,
              }}>
              <MaterialCommunityIcons
                name="arrow-right"
                size={20}
                style={{backgroundColor: '#DFF3F9', borderRadius: 18}}
                color={'#9570FF'}
              />
            </Text>
          </View>
        </View>
        <View style={{margin: 4, backgroundColor: '#FEF2EE'}}>
          <BillCounter cartItems={cartItems} ispaid={false} bill={true} />
        </View>
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <SavedAddressbar navigation={navigation} limit={3} />
        </View>
        <TouchableOpacity
          onPress={() => {
            if (userInfo) {
              if (userInfo.access) {
                navigation.navigate('Place Order');
              } else {
                navigation.navigate('Login');
              }
            } else {
              navigation.navigate('Login');
            }
          }}>
          <View
            style={{
              backgroundColor:
                'linear-gradient(282.63deg, rgba(130, 237, 255, 0.44) 24.04%, #FFFFFF 79.72%, #F8FEEE 79.72%)',
              margin: 10,

              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 60,
            }}>
            <Text
              style={{
                padding: 10,
                fontWeight: '700',
                fontSize: 18,
                lineHeight: 20.45,
                color:'black'
              }}>
              Your cart value
            </Text>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '700',
                  lineHeight: 20.45,
                  margin: 10,
                  color:'black'
                }}>
                {cartItems
                  ? cartItems.reduce(function (accum, c) {
                      if (c.qty && c.price) {
                        return accum + Number(c.qty) * c.price;
                      } else {
                        return accum + 0;
                      }
                    }, 0) +
                    cartItems.reduce(function (accum, c) {
                      if (c.qty && c.price) {
                        return accum + Number(c.qty) * c.price;
                      } else {
                        return accum + 0;
                      }
                    }, 0) *
                      0.2 -
                    cartItems.reduce(function (accum, c) {
                      if (c.qty && c.price) {
                        return accum + Number(c.qty) * c.price;
                      } else {
                        return accum + 0;
                      }
                    }, 0) *
                      0.4
                  : 0}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Cartscreen;

const styles = StyleSheet.create({
  inputs: {
    backgroundColor: 'black',
    fontSize: 16,
    margin: 10,
    color: 'white',
  },
});
