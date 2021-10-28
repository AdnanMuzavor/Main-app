import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import RatingDisplay from './RatingGiver';
const StoreDisplay=({props,MakeCallHandler})=>{
   return <View
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
          color:'black'
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
          color={'black'}
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
        {/* <Image
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
        ></Image> */}
        <RatingDisplay
         Rating={props.route.params.rating}
        />
      </View>
    </View>
  </View>
}

export default StoreDisplay;