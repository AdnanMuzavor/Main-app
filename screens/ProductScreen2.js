import React, { useState } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import img1 from "../Imgs/img1.jpg";
import img2 from "../Imgs/img2.jpg";
const ProductTWOscreen = () => {
  const [blogs, setblogs] = useState([
    { val: "How maggie Improves Social bands", key: 1, img: img1 },
    { val: "How maggie Improves Social bands", key: 2, img: img2 },
    { val: "How maggie Improves Social bands", key: 3, img: img1 },
    { val: "How maggie Improves Social bands", key: 4, img: img2 },
  ]);
  return (
    <ScrollView>
      <View style={{ marginLeft: 18, marginRight: 18, marginTop: 70 }}>
        <View style={{ flexDirection: "row", justifyContent:'space-between' }}>
          <View>
        
            <Text style={{ margin: 20 ,marginLeft:2}}>  <MaterialCommunityIcons name="arrow-left" size={30} /></Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={{ margin: 20 }}> <MaterialCommunityIcons name="heart" size={30} /></Text>
            <Text style={{ margin: 20 }}> <MaterialCommunityIcons name="cart" size={30} /></Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            height: 200,
            justifyContent: "space-between",
          }}
        >
          <Image
            style={{ flex: 2, width: "60%", height: "100%", borderRadius: 10 }}
            source={img2}
          ></Image>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
                marginTop: 10,
              }}
            >
              Masala
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 18,
                fontWeight: "bold",
                marginTop: 20,
              }}
            >
              20 INR
            </Text>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 30,
                  padding: 10,
                  backgroundColor: "#DFF3F9",
                  color: "#45BFE4",
                }}
              >
                +
              </Text>
              <Text style={{ fontSize: 25 }}>09</Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 30,
                  padding: 10,
                  backgroundColor: "#DFF3F9",
                  color: "#45BFE4",
                }}
              >
                -
              </Text>
            </View>
            <Text style={{ textAlign: "center" }}>Rating section</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 18,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>Description</Text>
          <Text>Product Info</Text>
          <Text>Product Policy</Text>
        </View>
        <View
          style={{ height: 220, borderRadius: 20, backgroundColor: "#FEF2EE" }}
        >
          <Text style={{ padding: 30, fontSize: 16, fontWeight: "500" }}>
            Masala (spice), any of the many spice mixes used in South Asian
            cuisine Masala chai, a flavored tea beverage Masala incense, Indian
            incense using a spice mix Masala dosa, an Indian dish
          </Text>
        </View>
        <View
          style={{
            margin: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Blogs</Text>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>more</Text>
        </View>
        <ScrollView horizontal={true}>
          <View style={{ height: 180, flexDirection: "row" }}>
            {blogs.map((e, i) => (
              <View key={i} style={{ position: "relative" }}>
                <Image
                  source={e.img}
                  style={{ width: "92%", height: "80%", borderRadius: 30 }}
                ></Image>
                <Text
                  style={{
                    top: -40,
                    backgroundColor: "gray",
                    fontWeight: "bold",
                    width: "80%",
                    textAlign: "center",
                    borderRadius: 30,
                  }}
                >
                  {e.val}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default ProductTWOscreen;
