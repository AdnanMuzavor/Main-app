import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Button,
  Pressable,
  Platform,
  Linking,
  Dimensions
} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import img1 from "../Imgs/img1.jpg";
import img2 from "../Imgs/img2.jpg";
import img4 from "../Imgs/img4.jpg";
import star1 from "../Imgs/star_corner.png";
import star2 from "../Imgs/star_filled.png";
import left from "../Imgs/left.jpg";
import shoe from "../Imgs/shoe.png";
import { useDispatch, useSelector } from "react-redux";
import {AddToLikedStores, RemoveLikedStore} from "../actions/SavedActions";
import HomeScreenProds from "../Componenets/HomeScreenProductRender";
import BlogsSlider from "../Componenets/BlogsSlider";
import StoreDisplay from "../Componenets/StoreDisplayComp";
const {height,width}=Dimensions.get("window");
const Storescreen = (props) => {
 
  const dispatch = useDispatch();
  const saved = useSelector((state) => state.saved);
  const { savedstores } = saved;
  const AddToSavedStores = () => {
    dispatch(
      AddToLikedStores(
        props.route.params.name,
        props.route.params.img,
        props.route.params.key,
        props.route.params.contact,
        
        
      )
    );
  };

  const RemovefromSavedStores = () => {
    dispatch(
      RemoveLikedStore(
        props.route.params.contact,
        
        
      )
    );
  };
  const [blogs, setblogs] = useState([
    { val: "How maggie Improves Social bands", key: 1, img: img1 },
    { val: "How maggie Improves Social bands", key: 2, img: img2 },
    { val: "How maggie Improves Social bands", key: 3, img: img1 },
    { val: "How maggie Improves Social bands", key: 4, img: img2 },
  ]);
  const [colors, setcolors] = useState([
    `red`,
    "blue",
    "green",
    "yellow",
    "pink",
    "orange",
  ]);
  const [products, setproducts] = useState([
    {
      name: "Maggie",
      key: Math.random().toString(),
      img: img1,
      price: 20,
      listTab: [
        {
          status: "Description",
          des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
        },
        {
          status: "Product Info",
          des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
        },
        {
          status: "Product policy",
          des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
        },
      ],
      types: ["70g", "140g", `210g`, "280g", "350g", "420g"],
      colors:[],
    },
    {
      name: "Masala",
      key: Math.random().toString() ,
      img: img2,
      price: 50,
      listTab: [
        {
          status: "Description",
          des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
        },
        {
          status: "Product Info",
          des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
        },
        {
          status: "Product policy",
          des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
        },
      ],

      types: [],
      colors: [],
    },

    {
      name: "T-shirt",
      key: Math.random().toString() ,
      img: left,
      price: 200,
      listTab: [
        {
          status: "Description",
          des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
        },
        {
          status: "Product Info",
          des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
        },
        {
          status: "Product policy",
          des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
        },
      ],
      types: ["S", "M", "L", "XL", "XXL"],
      colors: ["yellow", "pink", "orange", `red`, "blue", "green"],
    },
    {
      name: "Shoes",
      key: Math.random().toString() ,
      img: shoe,
      price: 350,
      listTab: [
        {
          status: "Description",
          des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
        },
        {
          status: "Product Info",
          des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
        },
        {
          status: "Product policy",
          des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
        },
      ],
      types: ["32", "36", `37`, "38", "41", "43", "47", "50", "58", "60"],
      colors: [`red`, "blue", "green", "yellow", "pink", "orange"],
    },
  ]);

  const [sizes, setsizes] = useState([`37`, "38", "41", "43", "47"]);
  const MakeCallHandler=(number)=>{
    let Linker="";
    
         if(Platform.OS==="android"){
            Linker=`tel:${number}`;
         }
         else{
           Linker=`temprompt:${number}`;
         }

         Linking.openURL(Linker);
  }
  return (
    <ScrollView>
      <View style={{ paddingLeft: 18, paddingRight: 18,width:width,backgroundColor:'#ffffff'}}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={{ margin: 10, marginLeft: 2 }}>
              {/* <MaterialCommunityIcons name="arrow-left" size={30} style={{color:'white'}} /> */}
            </Text>
          </View>
          <View>
            <Text style={{ margin: 10, fontWeight: "700", fontSize: 18,textAlign:'center',color:'black' }}>
             {props.route.params.name}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ margin: 10 }}>
              <TouchableOpacity>
              <TouchableOpacity >
              {savedstores ? (
                savedstores.find((e) => e.key === props.route.params.key) ? (
                  <>
                    <TouchableOpacity onPress={RemovefromSavedStores}>
                      <MaterialCommunityIcons
                        name="heart"
                        size={30}
                        style={{ color: "red" }}
                      />
                    </TouchableOpacity>
                  </>
                ) : (
                  <>
                    <TouchableOpacity onPress={AddToSavedStores}>
                      <MaterialCommunityIcons name="heart" style={{color:'black'}} size={30} />
                    </TouchableOpacity>
                  </>
                )
              ) : (
                <>
                  {" "}
                  <TouchableOpacity onPress={AddToSavedStores}>
                    <MaterialCommunityIcons name="heart" style={{color:'black'}} size={30} />
                  </TouchableOpacity>
                </>
              )}
            </TouchableOpacity>
                </TouchableOpacity>
            
            </Text>
       
          </View>
        </View>
        {/* <View
          style={{
            flexDirection: "row",
            height: 200,
            justifyContent: "space-between",
          }}
        >
          <Image
            style={{ flex: 2, width: "60%", height: "100%", borderRadius: 10 }}
            source={props.route.params.img}
          ></Image>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "400",
                textAlign: "center",
                lineHeight: 20.45,
                marginTop: 10,
              }}
            >
              {props.route.params.contact}
            </Text>

            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity
              onPress={()=>MakeCallHandler(props.route.params.contact)}
              >
              <MaterialCommunityIcons
                name="phone"
                style={{ marginRight: 10 }}
                size={30}
              />
              </TouchableOpacity>
              <MaterialCommunityIcons name="map" size={30} />
            </View>
            <View
              style={{
                textAlign: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                width: 100,
                height: 50,
                marginTop: 10,
                marginLeft: 20,
              }}
            >
              <Image
                source={star2}
                style={{ width: 20, height: 20, resizeMode: "cover" }}
              ></Image>
              <Image
                source={star2}
                style={{ width: 20, height: 20, resizeMode: "cover" }}
              ></Image>
              <Image
                source={star2}
                style={{ width: 20, height: 20, resizeMode: "cover" }}
              ></Image>
              <Image
                source={star1}
                style={{ width: 20, height: 20, resizeMode: "cover" }}
              ></Image>
              <Image
                source={star1}
                style={{ width: 20, height: 20, resizeMode: "cover" }}
              ></Image>
            </View>
          </View>
        </View> */}
        <StoreDisplay
         props={props}
         MakeCallHandler={MakeCallHandler}
        />
        <View
          style={{
            margin: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "700", fontSize: 18 }}>Blogs</Text>
          <Text style={{ fontWeight: "bold", fontSize: 16,paddingBottom:3,color:'black' }}>
              more{"  "}
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Blog section")}
              >
                <MaterialCommunityIcons
                  name="arrow-right"
                  size={20}
                  style={{ backgroundColor: "#DFF3F9", borderRadius: 8 }}
                  color={"#9570FF"}
                />
              </TouchableOpacity>
            </Text>
        </View>

        <ScrollView horizontal={true}>
          <View style={{ height: 180, flexDirection: "row" }}>
       
            <BlogsSlider
             height={180}
             navigation={props.navigation}
            />
          </View>
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "700", fontSize: 18,color:'black' }}>Products</Text>
          <Text style={{ fontWeight: "bold", fontSize: 16,paddingBottom:3,color:'black' }}>
              more{"  "}
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Home")}
              >
                <MaterialCommunityIcons
                  name="arrow-right"
                  size={20}
                  style={{ backgroundColor: "#DFF3F9", borderRadius: 8 }}
                  color={"#9570FF"}
                />
              </TouchableOpacity>
            </Text>
        </View>
        
        <HomeScreenProds
        navigation={props.navigation}
        filter={""}
        selling={"no"}
      />
      </View>
  
    </ScrollView>
  );
};

export default Storescreen;

const styles = StyleSheet.create({
  colorcont: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
