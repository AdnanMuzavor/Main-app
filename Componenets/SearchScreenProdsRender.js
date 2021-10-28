//Renders and manages home screen products
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  Pressable,
  ScrollView,
  Header,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AddToCart} from '../actions/CartActions';
import img1 from '../Imgs/img1.jpg';
import img2 from '../Imgs/img2.jpg';
import user from '../Imgs/user.jpg';
import left from '../Imgs/left.jpg';
import shoe from '../Imgs/shoe.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const {width, height} = Dimensions.get('window');
const SearchScreenProds = ({products, navigation, search}) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;
  const [active, setactive] = useState('');
  const [qty, setqty] = useState(1);
  const IncrementQtyhandler = (
    name,
    img,
    key,
    price,
    listTab,
    types,
    colors,
    qty,
  ) => {
    dispatch(AddToCart(name, img, key, price, listTab, types, colors, qty));
    if (key !== active) {
      setqty(1);
    }
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
  ) => {
    if (qty >= 2) {
      dispatch(
        AddToCart(name, img, key, price, listTab, types, colors, qty - 1),
      );
    }
    if (key !== active) {
      setqty(1);
    }
  };
  //    const [products, setproducts] = useState([
  //     {
  //       name: "T-shirt pt",
  //       key: Math.random().toString(),
  //       img: left,
  //       price: 200,
  //       listTab: [
  //         {
  //           status: "Description",
  //           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //         },
  //         {
  //           status: "Product Info",
  //           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //         },
  //         {
  //           status: "Product policy",
  //           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //         },
  //       ],
  //       types: ["S", "M", "L", "XL", "XXL"],
  //       colors: ["yellow", "pink", "orange", `red`, "blue", "green"],
  //     },
  //     {
  //       name: "Maggie top",
  //       key: Math.random().toString(),
  //       img: img1,
  //       price: 20,
  //       listTab: [
  //         {
  //           status: "Description",
  //           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //         },
  //         {
  //           status: "Product Info",
  //           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //         },
  //         {
  //           status: "Product policy",
  //           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //         },
  //       ],
  //       types: ["70g", "140g", `210g`, "280g", "350g", "420g"],
  //       colors: [],
  //     },

  //     {
  //       name: "Masala garp",
  //       key: Math.random().toString(),
  //       img: img2,
  //       price: 50,
  //       listTab: [
  //         {
  //           status: "Description",
  //           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //         },
  //         {
  //           status: "Product Info",
  //           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //         },
  //         {
  //           status: "Product policy",
  //           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //         },
  //       ],

  //       types: [],
  //       colors: [],
  //     },
  //     {
  //       name: "Maggie sharp",
  //       key: Math.random().toString(),
  //       img: img1,
  //       price: 20,
  //       listTab: [
  //         {
  //           status: "Description",
  //           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //         },
  //         {
  //           status: "Product Info",
  //           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //         },
  //         {
  //           status: "Product policy",
  //           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //         },
  //       ],
  //       types: ["70g", "140g", `210g`, "280g", "350g", "420g"],
  //       colors: [],
  //     },
  //     {
  //       name: "T-shirt rr",
  //       key: Math.random().toString(),
  //       img: left,
  //       price: 200,
  //       listTab: [
  //         {
  //           status: "Description",
  //           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //         },
  //         {
  //           status: "Product Info",
  //           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //         },
  //         {
  //           status: "Product policy",
  //           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //         },
  //       ],
  //       types: ["S", "M", "L", "XL", "XXL"],
  //       colors: ["yellow", "pink", "orange", `red`, "blue", "green"],
  //     },
  //     {
  //       name: "Shoes pp",
  //       key: Math.random().toString(),
  //       img: shoe,
  //       price: 350,
  //       listTab: [
  //         {
  //           status: "Description",
  //           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //         },
  //         {
  //           status: "Product Info",
  //           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //         },
  //         {
  //           status: "Product policy",
  //           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //         },
  //       ],
  //       types: ["32", "36", `37`, "38", "41", "43", "47", "50", "58", "60"],
  //       colors: [`red`, "blue", "green", "yellow", "pink", "orange"],
  //     },
  //     {
  //       name: "Maggie gg",
  //       key: Math.random().toString(),
  //       img: img1,
  //       price: 20,
  //       listTab: [
  //         {
  //           status: "Description",
  //           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //         },
  //         {
  //           status: "Product Info",
  //           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //         },
  //         {
  //           status: "Product policy",
  //           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //         },
  //       ],
  //       types: ["70g", "140g", `210g`, "280g", "350g", "420g"],
  //       colors: [],
  //     },
  //     {
  //       name: "T-shirt ree",
  //       key: Math.random().toString(),
  //       img: left,
  //       price: 200,
  //       listTab: [
  //         {
  //           status: "Description",
  //           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //         },
  //         {
  //           status: "Product Info",
  //           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //         },
  //         {
  //           status: "Product policy",
  //           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //         },
  //       ],
  //       types: ["S", "M", "L", "XL", "XXL"],
  //       colors: ["yellow", "pink", "orange", `red`, "blue", "green"],
  //     },
  //     {
  //       name: "Shoes dfs",
  //       key: Math.random().toString(),
  //       img: shoe,
  //       price: 350,
  //       listTab: [
  //         {
  //           status: "Description",
  //           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //         },
  //         {
  //           status: "Product Info",
  //           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //         },
  //         {
  //           status: "Product policy",
  //           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //         },
  //       ],
  //       types: ["32", "36", `37`, "38", "41", "43", "47", "50", "58", "60"],
  //       colors: [`red`, "blue", "green", "yellow", "pink", "orange"],
  //     },
  //   ]);

  return (
    <>
      <View style={{height: (40 * height) / 100}}>
        {search === true ? (
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Results</Text>
          </View>
        ) : null}
        <FlatList
          data={products}
          renderItem={({item, i}) => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 20,
                marginTop: 8,
              }}
              key={i + 1234}>
              <Pressable onPress={() => navigation.navigate('product', item)}>
                <Image
                  source={item.img}
                  style={{width: 66, height: 66, borderRadius: 13}}></Image>
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate('product', item)}
                style={{flexDirection: 'column'}}>
                <Text
                  style={{
                    fontWeight: '400',
                    lineHeight: 20.45,
                    fontSize: 16,
                    color: 'black',
                  }}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontWeight: '400',
                    lineHeight: 20.45,
                    fontSize: 14,
                    color: 'black',
                  }}>
                  Brand: Nestle
                </Text>
                <Text
                  style={{
                    fontWeight: '400',
                    lineHeight: 20.45,
                    fontSize: 14,
                    color: 'black',
                  }}>
                  quantity:65gms
                </Text>
              </Pressable>
              <View style={{flexDirection: 'column'}}>
                <Text
                  style={{
                    fontSize: 16,
                    lineHeight: 20.45,
                    fontWeight: '700',
                    textAlign: 'center',
                    color: 'black',
                  }}>
                  {item.price} INR
                </Text>
                <View style={{marginTop: 10, flexDirection: 'row'}}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#DFF3F9',
                      height: 32,
                      width: 32,
                      marginRight: 5,
                      borderRadius: 8,
                    }}
                    onPress={() => {
                      if (item.colors || item.types) {
                        alert('Please View Item to select some details');
                      } else {
                        setqty(qty + 1);
                        setactive(item.key);
                        IncrementQtyhandler(
                          item.name,
                          item.img,
                          item.key,
                          item.price,
                          item.listTab,
                          item.types,
                          item.colors,
                          qty + 1,
                        );
                      }
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
                    {active === item.key ? qty : 1}
                  </Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#DFF3F9',
                      height: 32,
                      width: 32,
                      marginLeft: 10,
                      borderRadius: 8,
                    }}
                    onPress={() => {
                      if (item.colors || item.types) {
                        alert('Please View Item to select some details');
                      } else {
                        setqty(qty >= 1 ? qty - 1 : 0);
                        setactive(item.key);
                        DecrementQtyhandler(
                          item.name,
                          item.img,
                          item.key,
                          item.price,
                          item.listTab,
                          item.types,
                          item.colors,
                          qty - 1,
                        );
                      }
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
          )}></FlatList>
      </View>
    </>
  );
};

export default SearchScreenProds;
