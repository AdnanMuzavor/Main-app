
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/homescreen";
import SigninScreen from "../screens/signinscreen";
import SignupScreen from "../screens/signupscreens";
import Cartscreen from "../screens/Cartscreen";
import SearchScreen from "../screens/Searchscreen";
import Userscreen from "../screens/UserScreen";
import Productscreen from "../screens/ProductScreen";
import Storescreen from "../screens/storescreen";
import Stores from "../screens/Stores";
import { View } from "native-base";
import { Image } from "react-native";
import search from "../Imgs/search.png";
import shop from "../Imgs/shop.png"

import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MainStackNavigator } from "./stacknav";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BlogScreen from "../screens/BlogsScreen";
import {VerifyAccess} from "../actions/UserActions";
import {INITIALISE_SAVED_ADDRESS, INITIALISE_SAVED_ADDRESS_KEY, INITIALISE_SAVED_BLOGS, INITIALISE_SAVED_PRODUCTS, INITIALISE_SAVED_SADDRESS, INITIALISE_SAVED_STORES} from "../constants/SavedConstants";
import LoadingScreen from "../screens/Loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {INITIALISE_CART} from "../constants/CartConstants";
import {INITIALISE_SIGNIN_INFO} from "../constants/UserConstants";
import {listProducts} from "../actions/productactions";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AnimatedS1 from "../screens/AnimatedLoadingS1";
const Tab = createMaterialBottomTabNavigator();


const Tabs=()=> {
  const [access,setaccess]=useState(false)
  
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;
  const dispatch = useDispatch();
  const [savedprodloading,setsavedprodloading]=useState(true);
  useEffect(()=>{

    const GetUserData=async()=>{
      const exist=await AsyncStorage.getItem("UserInfo");
      if(exist){
        console.log("existsss")
      dispatch({type:INITIALISE_SIGNIN_INFO,payload:JSON.parse(exist)});
      setaccess(true);
      }
      else{
        dispatch({type:INITIALISE_SIGNIN_INFO,payload:{}});
        console.log("doesnt existsss from bottom")
        setaccess(false)
      }
    }
    GetUserData();
  const GetSelectedAddress=async()=>{
    const exist=await AsyncStorage.getItem("getselectedaddresskey");
    if(exist){
      dispatch({type:INITIALISE_SAVED_ADDRESS_KEY,payload:JSON.parse(exist)})
    }
    else{
      dispatch({type:INITIALISE_SAVED_ADDRESS_KEY,payload:""})
    }
  }
   GetSelectedAddress();
  console.log("downpart useefect called")
  const SavedGetter=async()=>{
   
    const s1=await AsyncStorage.getItem("savedItems");
    console.log(JSON.parse(s1));
   
        if(s1){
      // setsaveditems(JSON.parse(s1));
      dispatch({type:INITIALISE_SAVED_PRODUCTS,payload:JSON.parse(s1)});
      setTimeout(() => {
        setsavedprodloading(false);
      }, 3500);
     
      console.log(JSON.parse(s1));
    }
    else{
      dispatch({type:INITIALISE_SAVED_PRODUCTS,payload:[]});
      // setsavedprodloading(false);
      setTimeout(() => {
        setsavedprodloading(false);
      }, 3500);
      console.log(JSON.parse(s1));
    }
   
  }

  SavedGetter();

  const SavedStoresGetter=async()=>{
    const s1=await AsyncStorage.getItem("savedstoress");
    console.log(JSON.parse(s1));
    if(s1){
     
      dispatch({type:INITIALISE_SAVED_STORES,payload:JSON.parse(s1)});
      console.log(JSON.parse(s1));
      // setsavedprodloading(false);
      setTimeout(() => {
        setsavedprodloading(false);
      }, 3500);
    }
    else{
      dispatch({type:INITIALISE_SAVED_STORES,payload:[]});
      console.log(JSON.parse(s1));
      setTimeout(() => {
        setsavedprodloading(false);
      }, 3500);
      // setsavedprodloading(false);
    }
  }
  SavedStoresGetter();
  const CartGetter=async()=>{
    const s1=await AsyncStorage.getItem("cartItems");
    console.log(JSON.parse(s1));
    if(s1){
      console.log(JSON.parse(s1));
      dispatch({type:INITIALISE_CART,payload:JSON.parse(s1)});
    }
    else{
      console.log(JSON.parse(s1));
      dispatch({type:INITIALISE_CART,payload:[]});
    }
  }
  CartGetter();
  const SavedAddrsGetter=async()=>{
   
    const s1=await AsyncStorage.getItem("getsavedaddresses");
   
    console.log(JSON.parse(s1));
   
        if(s1){
      // setsaveditems(JSON.parse(s1));
      dispatch({type:INITIALISE_SAVED_ADDRESS,payload:JSON.parse(s1)});
      // setsavedprodloading(false);
         setTimeout(() => {
        setsavedprodloading(false);
      }, 3500);
      console.log(JSON.parse(s1));
    }
    else{
      dispatch({type:INITIALISE_SAVED_ADDRESS,payload:[]});
      // setsavedprodloading(false);
      setTimeout(() => {
        setsavedprodloading(false);
      }, 3500);
      console.log(JSON.parse(s1));
    }
   
  }
  SavedAddrsGetter();
  const SavedBlogsGetter=async()=>{
    const s1=await AsyncStorage.getItem("savedblogs");
    console.log(JSON.parse(s1));
    if(s1){
     
      dispatch({type:INITIALISE_SAVED_BLOGS,payload:JSON.parse(s1)});
      console.log(JSON.parse(s1));
      setTimeout(() => {
        setsavedprodloading(false);
      }, 3500);
    }
    else{
      dispatch({type:INITIALISE_SAVED_BLOGS,payload:[]});
      console.log(JSON.parse(s1));
      setTimeout(() => {
        setsavedprodloading(false);
      }, 3500);
    }
  }
  SavedBlogsGetter();
  //If log out occured
  // if(userInfo){
  //   if(userInfo.access){
  //     // dispatch(VerifyAccess(userInfo.access,userInfo.refresh));
  //     console.log("accessed alllowed")
  //     setaccess(true);
  //   }
  // }
  // else{
  //   setaccess(false)
    
  // }
  const GetProdList=async()=>{
    dispatch(listProducts());
  }

  GetProdList();
  },[])

  return (
    // savedprodloading?<LoadingScreen></LoadingScreen>:
    savedprodloading?<AnimatedS1></AnimatedS1>:
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="white"
      barStyle={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarColor:'#E6F2F4',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={'black'} size={26} />
            
          ),
        }}
      />
  
   
  {/* <Tab.Screen
        name="storelist"
        component={Stores}
        options={{
          tabBarLabel: 'storelist',
          tabBarColor:'#E6F2F4',
          tabBarIcon: ({ color }) => (
            <Image source={shop} style={{width:26,height:26}}/>
          ),
        }}
        
      /> */}


<Tab.Screen
        name="searchscreen"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarColor:'#E6F2F4',
          tabBarIcon: ({ color }) => (
            // <MaterialCommunityIcons name="cart" color={color} size={26} />
            <Image source={search} style={{width:26,height:26}}/>
          ),
        }}
      />

 

      <Tab.Screen
        name="cartscreen"
        component={Cartscreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarColor:'#E6F2F4',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart" color={'black'} size={26} />
          ),
        }}
      />
        <Tab.Screen
        name="profile"
        component={Userscreen}
        options={{
          tabBarLabel: '',
          tabBarColor:'#E6F2F4',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={'black'} size={26} />
          ),
        }}

      />
{/* <Tab.Screen
        name="product"
        component={Productscreen}
      
        options={{
          tabBarLabel: 'product',
          tabBarColor:'#E6F2F4',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
        
      /> */}
{/* <Tab.Screen
        name="blog"
        component={BlogScreen}
      
        options={{
          tabBarLabel: 'blog',
          tabBarColor:'#E6F2F4',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
        
      /> */}
    </Tab.Navigator>
    
  );
}

export default Tabs;