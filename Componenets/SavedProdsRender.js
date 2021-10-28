
import React, {useEffect, useState} from "react";
import {
  View,
  Text,
  FlatList,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import { Dimensions, PixelRatio } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";

import AsyncStorage from "@react-native-async-storage/async-storage";

import {AddToLikedProducts, RemoveLikedItem} from "../actions/SavedActions";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const { width, height } = Dimensions.get("window");

 
const SavedProdsRender = ({savedproducts,navigation}) => {
const dispatch=useDispatch();
  
  useEffect(()=>{

  

  },[savedproducts])
  
  const IncrementQtyhandler = (
    name,
    img,
    key,
    price,
    listTab,
    types,
    colors,
    qty
  ) => {
    dispatch(AddToLikedProducts(name, img, key, price, listTab, types, colors, qty + 1));
  };
  
  const DecrementQtyhandler = (
    name,
    img,
    key,
    price,
    listTab,
    types,
    colors,
    qty
  ) => {
    if (qty >= 2) {
      dispatch(
        AddToLikedProducts(name, img, key, price, listTab, types, colors, qty - 1)
      );
    }
    else if(qty===1){
      dispatch(RemoveLikedItem(name));
    }
  };

  return savedproducts.map(item => (
    
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
  ));
};

export default SavedProdsRender;
