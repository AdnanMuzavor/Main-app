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
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import img1 from '../Imgs/img1.jpg';
import img2 from '../Imgs/img2.jpg';
import user from '../Imgs/user.jpg';
import left from '../Imgs/left.jpg';
import shoe from '../Imgs/shoe.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SafeAreaView} from 'react-native-safe-area-context';

import {AddToCart} from '../actions/CartActions';
import BlogsSlider from '../Componenets/BlogsSlider';
import {height} from 'styled-system';
import HomeScreenProds from '../Componenets/HomeScreenProductRender';
import arrowimg from '../Imgs/arrowimg.png';

import FilterOption from '../Componenets/FilterOptions2';
import CategoryComp from '../Componenets/CategoryComp';

const HomeScreen = props => {
  //   const [categories, setcategories] = useState([
  //     { val: "How maggie Improves Social bands",img:require('../Imgs/img2.jfif'), key: 1 },
  //     { val: "How maggie Improves Social bands",img:require('../Imgs/img1.JPG'), key: 2 },
  //     { val: "How maggie Improves Social bands",img:require('../Imgs/img1.JPG'), key: 3 },
  //     { val: "How maggie Improves Social bands",img:require('../Imgs/img1.JPG'), key: 4 },

  //   ]);

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;
  const [active, setactive] = useState('');
  const [active2, setactive2] = useState(false);
  const [blogs, setblogs] = useState([
    {
      name: 'How maggie Improves Social bands',
      key: 1,
      img: img1,
      body: 'Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish',
    },
    {
      name: 'How maggie Improves Social bands',
      key: 2,
      img: img2,
      body: 'Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish',
    },
    {
      name: 'How maggie Improves Social bands',
      key: 3,
      img: img1,
      body: 'Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish',
    },
    {
      name: 'How maggie Improves Social bands',
      key: 4,
      img: img2,
      body: 'Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish',
    },
  ]);
  const [products, setproducts] = useState([
    {
      name: 'T-shirt pt',
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
      name: 'Maggie top',
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
      types: ['70g', '140g', `210g`, '280g', '350g', '420g'],
      colors: [],
    },

    {
      name: 'Masala garp',
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
      name: 'Maggie sharp',
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
      types: ['70g', '140g', `210g`, '280g', '350g', '420g'],
      colors: [],
    },
    {
      name: 'T-shirt rr',
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
      name: 'Shoes pp',
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
    {
      name: 'Maggie gg',
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
      types: ['70g', '140g', `210g`, '280g', '350g', '420g'],
      colors: [],
    },
    {
      name: 'T-shirt ree',
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
      name: 'Shoes dfs',
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

  const [categories, setcategories] = useState([
    {val: 'food', key: 1},
    {val: 'vegetables', key: 2},
    {val: 'cloths', key: 3},
    {val: 'footwear', key: 4},
    {val: 'toys', key: 5},
    {val: 'vegetables', key: 6},
    {val: 'cloths', key: 7},
    {val: 'eatables', key: 8},
  ]);

  const [qty, setqty] = useState(1);
  const [filter, setfilter] = useState('');
  const [option, setoption] = useState('');
  const Active2AndFilter = option => {
    setactive2(false);
    console.log('Option is');
    console.log(option);
    if (option === 'Price:Low to High') {
      setoption('Price:Low to High');
      setfilter('LTH');
    } else if (option === 'Price:High to Low') {
      setoption('Price:High to Low');
      setfilter('HTL');
    } else if (option === 'Customer Review') {
      setoption('Customer Review');
      setfilter('CR');
    } else if (option === 'New and popular') {
      setoption('New and popular');
      setfilter('NAP');
    } else {
      setoption('');
      setfilter('');
    }
  };
  useEffect(() => {}, [filter]);
  return (
    <View style={{paddingLeft: 18, paddingRight: 18, backgroundColor: 'white'}}>
      <ScrollView>
        <View
          name="userdetails"
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
            height: 40,
          }}>
          <Text
            style={{
              padding: 15,
              backgroundColor: '#E6F2F4',
              borderRadius: 10,
              fontSize: 20,
              fontWeight: '400',
              fontSize: 14,
              lineHeight: 10.93,
            }}
            name="homescreen">
            Banglore
          </Text>
          <Image source={user} style={{width: 50, height: 50}}></Image>
        </View>

        <View
          name="userdetails"
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <View style={{flex: 2}}>
            <Text
              style={{
                padding: 2,
                borderRadius: 10,
                fontWeight: 'bold',
                fontSize: 25,
                color: 'black',
              }}
              name="homescreen">
              Hii User
            </Text>
            <Text
              style={{
                padding: 2,
                borderRadius: 10,
                fontSize: 18,
                fontWeight: '400',
                lineHeight: 23.4,
                color: 'black',
              }}>
              How can you save time and money with misui india?
            </Text>
          </View>

          <View style={{flex: 1, position: 'relative', right: -20, top: 0}}>
            <Image source={arrowimg} style={{width: 120, height: 120}}></Image>
          </View>
        </View>
        <ScrollView horizontal={true}>
          <View style={{flexDirection: 'row'}}>
            <CategoryComp
              categories={categories}
              navigation={props.navigation}
            />
          </View>
        </ScrollView>
        <TouchableOpacity
          style={{
            backgroundColor: '#FEF2EE',
            margin: 10,
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 60,
          }}
          onPress={() => props.navigation.navigate('stores')}>
          <Text
            style={{
              padding: 10,
              fontWeight: 'bold',
              fontSize: 18,
              color: 'black',
            }}>
            Visit nearest stores
          </Text>
          <View>
            <TouchableOpacity
              style={{marginRight: 10}}
              onPress={() => props.navigation.navigate('Blog section')}>
              <MaterialCommunityIcons
                name="arrow-right"
                size={20}
                style={{backgroundColor: '#DFF3F9', borderRadius: 8}}
                color={'#9570FF'}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <View
          style={{
            margin: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>Blogs</Text>
          <Text style={{fontWeight: 'bold', fontSize: 16, paddingBottom: 3}}>
            more{'  '}
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Blog section')}>
              <MaterialCommunityIcons
                name="arrow-right"
                size={20}
                style={{backgroundColor: '#DFF3F9', borderRadius: 8}}
                color={'#9570FF'}
              />
            </TouchableOpacity>
          </Text>
        </View>

        <ScrollView horizontal={true}>
          <View style={{height: 180, flexDirection: 'row'}}>
            <BlogsSlider height={180} navigation={props.navigation} />
          </View>
        </ScrollView>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
            Products
          </Text>
          <TouchableOpacity onPress={() => setactive2(true)}>
            <Text>Filter {option !== '' ? option : null}</Text>
          </TouchableOpacity>
          <FilterOption active={active2} Handler={Active2AndFilter} />
        </View>
        <HomeScreenProds navigation={props.navigation} filter={filter} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
