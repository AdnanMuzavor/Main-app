import {NavigationContainer} from "@react-navigation/native";
import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import BlogsSlider from "../Componenets/BlogsSlider";
import StoresRender from "../Componenets/StoresRender";
import img1 from "../Imgs/img1.jpg";
import img2 from "../Imgs/img2.jpg";
import img4 from "../Imgs/img4.jpg";
import star1 from "../Imgs/star_corner.png";
import star2 from "../Imgs/star_filled.png";
const Stores = (props) => {
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
  const [stores, setstores] = useState([
    { name: "Bajaja Mart", key: 1, img: img1, price: 20,contact:"0001 - 34581",rating:3 },
    { name: "We Stores", key: 2, img: img2, price: 50 ,contact:"8501 - 34582",rating:2 },
    { name: "Food Stop", key: 3, img: img1, price: 20 ,contact:"8501 - 34584",rating:1 },
    { name: "Bajaja Mart", key: 4, img: img2, price: 50,contact:"0001 - 34586" ,rating:4 },
    { name: "Food Stop", key: 1, img: img1, price: 20,contact:"0001 - 34589",rating:1 },
    { name: "Masala", key: 2, img: img2, price: 50,contact:"0001 - 345812",rating:2 },
    { name: "Bajaja Mart", key: 3, img: img1, price: 20,contact:"0001 - 345819" ,rating:3.8},
    { name: "We Stores", key: 4, img: img2, price: 50,contact:"0001 - 345820" ,rating:5 },
  ]);

  const [sizes, setsizes] = useState([`37`, "38", "41", "43", "47"]);
  return (  <View style={{ paddingLeft: 18, paddingRight: 18,paddingTop:10,backgroundColor:'#ffffff' }}>
    <ScrollView>
    
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      
         
          
        </View>
      
        <View
          style={{
            margin: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "700", fontSize: 18 }}>Blogs</Text>
          <Text style={{ fontWeight: "bold", fontSize: 16,paddingBottom:3 }}>
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
          <Text style={{ fontWeight: "700", fontSize: 18,color:'black' }}>
            Stores near you
          </Text>
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
       <StoresRender
        stores={stores}
        navigation={props.navigation}
       />
    
    </ScrollView>  
    </View>
  );
};

export default Stores;

const styles = StyleSheet.create({
  colorcont: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
