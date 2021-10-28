import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import img1 from '../Imgs/img1.jpg';
import img2 from '../Imgs/img2.jpg';
import star1 from '../Imgs/star_corner.png';
import star2 from '../Imgs/star_filled.png';
import {AddToCart} from '../actions/CartActions';
import {AddToLikedProducts, RemoveLikedItem} from '../actions/SavedActions';

import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CarouselComp from './Carouselscreen';
import LoadingScreen from './Loading';
import AnimatedS3 from './AnimationLoadings3';
import RatingDisplay from '../Componenets/RatingGiver';
import RatingDisplay5 from '../Componenets/Rating5Comp';
import RatingDisplay0 from '../Componenets/Rating0Comp';
import BlogsSlider from '../Componenets/BlogsSlider';
const Productscreen = props => {
  const {width, height} = Dimensions.get('window');
  const [qty, setqty] = useState(1);
  const [selected, setselected] = useState(1);
  const [color, setcolor] = useState('');
  const [reloader, setreloader] = useState(false);
  // useEffect(() => {

  // }, []);
  const dispatch = useDispatch();
  const AddToCartHandler = () => {
    dispatch(
      AddToCart(
        props.route.params.name,
        props.route.params.img,
        props.route.params.key,
        props.route.params.price,
        props.route.params.listTab,
        props.route.params.types,
        props.route.params.colors,
        qty,
        // props.route.params.types[selected],
        typeof(props.route.params.types)==="string"?props.route.params.types.split("&&")[selected]: props.route.params.types[selected],
        color,
      ),
    );
  };

  const AddToSavedProducts = () => {
    dispatch(
      AddToLikedProducts(
        props.route.params.name,
        props.route.params.img,
        props.route.params.key,
        props.route.params.price,
        props.route.params.listTab,
        props.route.params.types,
        props.route.params.colors,
        qty,
        // props.route.params.types[selected],
        typeof(props.route.params.types)==="string"?props.route.params.types.split("&&")[selected]: props.route.params.types[selected],
        color,
      ),
    );
    setreloader(true);
    props.navigation.navigate('product');
  };
  const [Imgsarray, setimgsarray] = useState([star1, star2, img1, img2]);
  const RemoveFromSavedProducts = () => {
    dispatch(RemoveLikedItem(props.route.params.name));
    setreloader(false);
    props.navigation.navigate('product');
  };

  const [blogs, setblogs] = useState([
    {val: 'How maggie Improves Social bands', key: 1, img: img1},
    {val: 'How maggie Improves Social bands', key: 2, img: img2},
    {val: 'How maggie Improves Social bands', key: 3, img: img1},
    {val: 'How maggie Improves Social bands', key: 4, img: img2},
  ]);
  const [colors, setcolors] = useState([
    `red`,
    'blue',
    'green',
    'yellow',
    'pink',
    'orange',
  ]);

  // const listTab = [
  //   {
  //     status: 'Description',
  //     des: 'Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish',
  //   },
  //   {
  //     status: 'Product Info',
  //     des: 'Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish',
  //   },
  //   {
  //     status: 'Product policy',
  //     des: 'Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish',
  //   },
  // ];
  const [sizes, setsizes] = useState([
    '32',
    '36',
    `37`,
    '38',
    '41',
    '43',
    '47',
    '50',
    '58',
    '60',
  ]);
  const [listTab,setlistTab]=useState([])
  const [active, setactive] = useState(1);
  const [status, setstatus] = useState('Description');

  const setStatusfilter = status1 => {
    setstatus(status1);
  };

  const saved = useSelector(state => state.saved);
  const {savedproducts} = saved;

  const [saveditems, setsaveditems] = useState([]);

  const [savedprodloading, setsavedprodloading] = useState(true);

  useEffect(() => {
    const SavedGetter = async () => {
      const s1 = await AsyncStorage.getItem('savedItems');
      console.log(JSON.parse(s1));
      setlistTab(
        [
          {
            status: "Description",
            des:props.route.params.description,
          },
          {
            status: "Product Info",
            des: `\n
                  category: ${props.route.params.category}\n
                  brand: ${props.route.params.brand}\n
                  rating: ${props.route.params.rating}`,
          },
          {
            status: "Product policy",
            des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
          },
        ]
      )
      if (s1) {
        setsaveditems(JSON.parse(s1));
        setsavedprodloading(false);
        setimgsarray(prev =>
          prev.map((e, i) =>
            i === 0 ? (prev[i] = props.route.params.img) : prev[i],
          ),
        );
        setqty(props.route.params.qty ? props.route.params.qty : 1);
        setcolor(props.route.params.color ? props.route.params.color : '');
        setselected(props.route.params.type ? props.route.params.type : '');
      } else {
        setsavedprodloading(false);
        setimgsarray(prev =>
          prev.map((e, i) =>
            i === 0 ? (prev[i] = props.route.params.img) : prev[i],
          ),
        );
      }
      setqty(props.route.params.qty ? props.route.params.qty : 1);
      setcolor(props.route.params.color ? props.route.params.color : '');
      setselected(props.route.params.type ? props.route.params.type : '');
    };

    SavedGetter();
  }, [savedproducts]);
  return savedprodloading === true ? (
    <AnimatedS3></AnimatedS3>
  ) : (
    <ScrollView>
      <View
        style={{
          paddingLeft: 18,
          paddingRight: 18,
          width: width,
          backgroundColor: '#ffffff',
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <Text style={{margin: 20}}>
            <TouchableOpacity>
              {savedproducts ? (
                savedproducts.find(e => e.key === props.route.params.key) ? (
                  <>
                    <TouchableOpacity onPress={RemoveFromSavedProducts}>
                      <MaterialCommunityIcons
                        name="heart"
                        size={30}
                        style={{color: 'red'}}
                      />
                    </TouchableOpacity>
                  </>
                ) : (
                  <>
                    <TouchableOpacity onPress={AddToSavedProducts}>
                      <MaterialCommunityIcons
                        name="heart"
                        style={{color: 'black'}}
                        size={30}
                      />
                    </TouchableOpacity>
                  </>
                )
              ) : (
                <>
                  {' '}
                  <TouchableOpacity onPress={AddToSavedProducts}>
                    <MaterialCommunityIcons
                      name="heart"
                      style={{color: 'black'}}
                      size={30}
                    />
                  </TouchableOpacity>
                </>
              )}
            </TouchableOpacity>
          </Text>
          <Text style={{margin: 20}}>
            <TouchableOpacity onPress={AddToCartHandler}>
              <MaterialCommunityIcons name="cart" size={30} style={{color:'black'}} />
            </TouchableOpacity>
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            height: 0.3 * height,
            justifyContent: 'center',
          }}>
          {Imgsarray.map((e, i) =>
            i === active ? (
              <Image
                style={{
                  flex: 2,
                  width: '60%',
                  height: '90%',
                  borderRadius: 10,
                  resizeMode: 'cover',
                }}
                source={e}></Image>
            ) : null,
          )}

          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              bottom: 0,
              left: '25%',
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            {Imgsarray.map((e, k) => (
              <TouchableOpacity
                onPress={() => {
                  setactive(k);
                }}>
                <Text style={{fontSize: 10, marginLeft: 3}}>⚪</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View></View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 10,
                color:'black'
              }}>
              {props.route.params.name}
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                fontWeight: 'bold',
                marginTop: 20,
                color:'black'
              }}>
              {props.route.params.price} INR
            </Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 15,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#DFF3F9',
                  height: 32,
                  width: 32,
                  marginRight: 5,
                  borderRadius: 8,
                }}
                onPress={() => setqty(qty + 1)}>
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
                  color:'black'
                }}>
                {qty}
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#DFF3F9',
                  height: 32,
                  width: 32,
                  marginLeft: 10,
                  borderRadius: 8,
                }}
                onPress={() => setqty(qty >= 1 ? qty - 1 : qty)}>
                <MaterialCommunityIcons
                  name="minus"
                  size={30}
                  style={{
                    color: '#45BFE4',
                  }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                textAlign: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: 100,
                height: 50,
                marginTop: 15,
                marginLeft: 20,
              }}>
              {/*  */}

              {props.route.params.rating === 5 ? (
                <>
                  <RatingDisplay5 />
                </>
              ) : null}
              {props.route.params.rating === 0 ? (
                <>
                  <RatingDisplay0 />
                </>
              ) : null}
              <RatingDisplay Rating={props.route.params.rating} />
            </View>
          </View>
        </View>

        <View>
          {/* {props.route.params.colors ? (
            <ScrollView horizontal={true}>
              <View
                style={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                {props.route.params.colors.map((e, i) => (
                  <TouchableOpacity onPress={() => setcolor(e)}>
                    <Text
                      key={(i + 1200).toString()}
                      style={{
                        color: e,
                        backgroundColor: e,
                        borderRadius: 80,
                        borderColor: e === color ? 'blue' : 'black',
                        padding: 10,
                        margin: 20,
                        height: 30,
                        width: 30,
                      

                        borderWidth: e === color ? 3 : 1,
                      }}>
                      color
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          ) : null} */}
{props.route.params.colors ? (
               
               typeof(props.route.params.colors)==="string"?
               <ScrollView horizontal={true} style={{margin: 2}}>
                           <View
                           style={{
                             justifyContent: 'space-between',
                             alignItems: 'center',
                             flexDirection: 'row',
                           }}>
                           {props.route.params.colors.split("&&").map((e, i) => (
                             <TouchableOpacity onPress={() => setcolor(e)}>
                                <Text
                      key={(i + 1200).toString()}
                      style={{
                        color: e,
                        backgroundColor: e,
                        borderRadius: 80,
                        borderColor: e === color ? 'blue' : 'black',
                        padding: 10,
                        margin: 20,
                        height: 30,
                        width: 30,
                      

                        borderWidth: e === color ? 3 : 1,
                      }}>
                      color
                    </Text>
                             </TouchableOpacity>
                           ))}
                         </View>
                         </ScrollView>
                         :
                           <ScrollView horizontal={true} style={{margin: 2}}>
                             <View
                               style={{
                                 justifyContent: 'space-between',
                                 alignItems: 'center',
                                 flexDirection: 'row',
                               }}>
                               {props.route.params.colors.map((e, i) => (
                                 <TouchableOpacity onPress={() => setcolor(e)}>
                                       <Text
                      key={(i + 1200).toString()}
                      style={{
                        color: e,
                        backgroundColor: e,
                        borderRadius: 80,
                        borderColor: e === color ? 'blue' : 'black',
                        padding: 10,
                        margin: 20,
                        height: 30,
                        width: 30,
                      

                        borderWidth: e === color ? 3 : 1,
                      }}>
                      color
                    </Text>
                                 </TouchableOpacity>
                               ))}
                             </View>
                           </ScrollView>):null
               
                                   }

          {/* {
            typeof(props.route.params.types)==="string"?
           
            <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            {props.route.params.types.split().map((e, i) => (
              <TouchableOpacity onPress={() => setselected(i)}>
                <Text
                  key={(i + 1200).toString()}
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    backgroundColor: selected === i ? 'red' : '#E2E2E2',
                    borderRadius: 10,
                    padding: 4,
                    margin: 10,
                    height: 30,
                    width: 50,
                    maxWidth: 50,
                    color:'black'
                  }}>
                  {e}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
            
            
            
            :null
          } */}
          {props.route.params.types ? (
               
typeof(props.route.params.types)==="string"?
<ScrollView horizontal={true} style={{margin: 2}}>
            <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            {props.route.params.types.split('&&').map((e, i) => (
              <TouchableOpacity onPress={() => setselected(i)}>
                <Text
                  key={(i + 1200).toString()}
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    backgroundColor: selected === i ? 'red' : '#E2E2E2',
                    borderRadius: 10,
                    padding: 4,
                    margin: 10,
                    height: 30,
                    width: 50,
                    maxWidth: 50,
                    color:'black'
                  }}>
                  {e}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          </ScrollView>
          :
            <ScrollView horizontal={true} style={{margin: 2}}>
              <View
                style={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                {props.route.params.types.map((e, i) => (
                  <TouchableOpacity onPress={() => setselected(i)}>
                    <Text
                      key={(i + 1200).toString()}
                      style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        backgroundColor: selected === i ? 'red' : '#E2E2E2',
                        borderRadius: 10,
                        padding: 4,
                        margin: 10,
                        height: 30,
                        width: 50,
                        maxWidth: 50,
                        color:'black'
                      }}>
                      {e}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>):null

                    }

        </View>

        <View
          style={{
            marginTop: 18,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          {listTab.map(e => (
            <TouchableOpacity
              style={status === e.status ? styles.btnTabActive : null}
              onPress={() => setStatusfilter(e.status)}>
              <Text>{e.status}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View
          style={{height: 220, borderRadius: 20, backgroundColor: '#FEF2EE'}}>
          {listTab.map(e =>
            e.status === status ? (
              <Text style={{padding: 30, fontSize: 16, fontWeight: '500'}}>
                {e.des}
              </Text>
            ) : null,
          )}
        </View>
        <View
          style={{
            margin: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16,color:'black'}}>Blogs</Text>
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
      </View>
    </ScrollView>
  );
};

export default Productscreen;

const styles = StyleSheet.create({
  colorcont: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnTabActive: {
    color:'black',
    borderColor: '#ffffff',
    borderBottomColor: '#9570FF',
    borderWidth: 2,
  },
});
