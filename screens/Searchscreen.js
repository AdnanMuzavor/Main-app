import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import img1 from '../Imgs/img1.jpg';
import img2 from '../Imgs/img2.jpg';
import user from '../Imgs/user.jpg';
import left from '../Imgs/left.jpg';
import searchimg from '../Imgs/search.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import shoe from '../Imgs/shoe.png';
const {width, height} = Dimensions.get('window');
import {useDispatch} from 'react-redux';
import {AddToCart} from '../actions/CartActions';
import BlogsSlider from '../Componenets/BlogsSlider';
import SearchScreenProds from '../Componenets/SearchScreenProdsRender';
const SearchScreen = ({navigation}) => {
  //   const [categories, setcategories] = useState([
  //     { val: "How maggie Improves Social bands",img:require('../Imgs/img2.jfif'), key: 1 },
  //     { val: "How maggie Improves Social bands",img:require('../Imgs/img1.JPG'), key: 2 },
  //     { val: "How maggie Improves Social bands",img:require('../Imgs/img1.JPG'), key: 3 },
  //     { val: "How maggie Improves Social bands",img:require('../Imgs/img1.JPG'), key: 4 },

  //   ]);
  const inputE1 = useRef('');
  const [search, setsearch] = useState('');
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
      name: 'Maggie',
      key: Math.random().toString(),
      img: img1,
      brand: 'Nestle',
      rating: 1.1,
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
      category: 'food',
    },
    {
      name: 'T-shirt tot',
      key: Math.random().toString(),
      img: left,
      brand: 'Nike',
      rating: 4.5,
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
      category: 'cloths',
    },
    {
      name: 'bot vot Masala',
      key: Math.random().toString(),
      img: img2,
      brand: 'Patanjali',
      rating: 5,
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
      category: 'food',
    },
    {
      name: 'Maggie top',
      key: Math.random().toString(),
      brand: 'nestle',
      rating: 3.8,
      img: img1,
      price: 2000,
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
      category: 'yummy',
    },

    {
      name: 'Masala garp',
      key: Math.random().toString(),
      img: img2,
      brand: 'bb',
      rating: 2.5,
      price: 500,
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
      category: 'tasty',
    },
    {
      name: 'Maggie sharp',
      key: Math.random().toString(),
      img: img1,
      brand: 'shey',
      rating: 5,
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
      types: ['70g', '140g', `210g`, '280g', '350g', '420g'],
      colors: [],
      category: 'edible',
    },
    {
      name: 'T-shirt rr',
      key: Math.random().toString(),
      img: left,
      brand: 'rey',
      rating: 0,
      price: 5000,
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
      category: 'topwear',
    },
    {
      name: 'Shoes pp',
      key: Math.random().toString(),
      img: shoe,
      brand: 'yey',
      rating: 1,
      price: 3500,
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
      category: 'footwear',
    },
    {
      name: 'Maggie gg',
      key: Math.random().toString(),
      img: img1,

      brand: 'britania',
      rating: 2,
      price: 250,
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
      category: 'food',
    },
    {
      name: 'T-shirt ree',
      key: Math.random().toString(),
      img: left,
      brand: 'fasttrack',
      rating: 4,
      price: 420,
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
      category: 'cloths',
    },
    {
      name: 'Shoes dfs',
      key: Math.random().toString(),
      img: shoe,
      brand: 'fasttrack',
      rating: 1,
      price: 3850,
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
      category: 'footwear',
    },
    {
      name: 'T-shirt',
      key: Math.random().toString(),
      img: left,
      brand: 'fasttrack',
      rating: 5,
      price: 2000,
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
      category: 'cloths',
    },
    {
      name: 'Shoes',
      key: Math.random().toString(),
      img: shoe,
      brand: 'Top',
      rating: 2,
      price: 3650,
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
      category: 'footwear',
    },
  ]);
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

  const dispatch = useDispatch();
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

  const [searchdata, setsearchdata] = useState([]);
  const [searchfilter, setsearchfilter] = useState('all');
  const Searcher = search => {
    console.log(inputE1.current.value);
    //  const Require2=products.filter((e)=>{console.log(Object.values(e.name).join(" ").toLowerCase().includes(search.toLowerCase()))})
    if (searchfilter === 'all') {
      const Require = products.filter(e => {
        return Object.values(e)
          .join(' ')
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      //  const Require=products.filter((e)=>console.log(e.name.split(" ").filter((char)=>{return char!==" "})));
      setsearchdata(Require);
      console.log(Require);
    } else if (searchfilter === 'category') {
      const Require = products.filter(e => {
        return e.category.toLowerCase().includes(search.toLowerCase());
      });
      setsearchdata(Require);
    } else if (searchfilter === 'brand') {
      const Require = products.filter(e => {
        return e.brand.toLowerCase().includes(search.toLowerCase());
      });
      setsearchdata(Require);
    }
  };
  return (
    <SafeAreaView>
      <View
        style={{
          paddingLeft: 18,
          paddingRight: 18,
          paddingTop: 15,
          backgroundColor: '#ffffff',
          height: height,
        }}>
        {/* <ScrollView> */}
        <View
          style={{
            backgroundColor: '#E6F2F4',
            margin: 10,
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 50,
          }}>
          <TextInput
            style={{
              backgroundColor: '#DFF3F9',
              fontSize: 14,
              fontWeight: '400',
              lineHeight: 15.93,
              marginLeft: 10,
              color: '#111417',
            }}
            placeholder="Search Products"
            type="text"
            value={search}
            ref={inputE1}
            // onChangeText={(text) => setsearch(text)}
            onChangeText={text => {
              Searcher(text);
              setsearch(text);
            }}></TextInput>

          <View>
            <Text
              style={{backgroundColor: '#DFF3F9', fontSize: 30, margin: 10}}>
              {search === '' || search === null ? (
                <Image source={searchimg} style={{width: 26, height: 26}} />
              ) : (
                <TouchableOpacity onPress={() => setsearch('')}>
                  <Text style={{fontSize: 20}}>X</Text>
                </TouchableOpacity>
              )}
            </Text>
          </View>
        </View>
        <View>
          <Text style={{fontSize: 14, fontWeight: '400',color:'black'}}>Search by:</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            style={{
              width: (width * 25) / 100,
              height: 40,
              backgroundColor:
                searchfilter === 'category' ? '#45BFE4' : '#DFF3F9',
              marginTop: 10,
              borderRadius: 10,
              display: search === '' ? 'flex' : 'none',
            }}
            onPress={() => setsearchfilter('category')}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                lineHeight: 20.31,
                textAlign: 'center',
                padding: 10,
              }}>
              Category
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 40,
              width: (width * 25) / 100,
              backgroundColor: searchfilter === 'all' ? '#45BFE4' : '#DFF3F9',
              marginTop: 10,
              borderRadius: 10,
            }}
            onPress={() => setsearchfilter('all')}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                lineHeight: 20.31,
                textAlign: 'center',
                padding: 10,
              }}>
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 40,
              width: (width * 25) / 100,
              backgroundColor: searchfilter === 'brand' ? '#45BFE4' : '#DFF3F9',
              marginTop: 10,
              borderRadius: 10,
              display: search === '' ? 'flex' : 'none',
            }}
            onPress={() => setsearchfilter('brand')}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                lineHeight: 20.31,
                textAlign: 'center',
                padding: 10,
              }}>
              Brand
            </Text>
          </TouchableOpacity>
        </View>
        {search === '' || search === null ? (
          <>
            <View
              style={{
                margin: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 16,color:'black'}}>Blogs</Text>
              <Text style={{fontWeight: 'bold', fontSize: 16, paddingBottom: 3,color:'black'}}>
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

            <ScrollView horizontal={true} >
              <View style={{height: 180, flexDirection: 'row'}}>
                <BlogsSlider height={180} navigation={navigation} />
              </View>
            </ScrollView>

            <View>
              <Text style={{fontWeight: 'bold', fontSize: 20,color:'black'}}>Products</Text>
            </View>
            <SearchScreenProds products={products} navigation={navigation} />
          </>
        ) : (
          <View style={{height: (80 * height) / 100}}>
            {searchdata !== [] ? (
              <SearchScreenProds
                products={searchdata}
                navigation={navigation}
                search={true}
              />
            ) : (
              <Text
                style={{
                  color: 'black',
                  marginTop: 20,
                  backgroundColor: 'red',
                }}>
                No Matches Found
              </Text>
            )}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
