import React,{useEffect,useState} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/homescreen";
import SigninScreen from "../screens/signinscreen";
import SignupScreen from "../screens/signupscreens";
import Cartscreen from "../screens/Cartscreen";
import SearchScreen from "../screens/Searchscreen";
import Userscreen from "../screens/UserScreen";
import Productscreen from "../screens/ProductScreen";
import Storescreen from "../screens/storescreen";
import Stores from "../screens/Stores";
import BlogScreen from "../screens/BlogsScreen";
import AllBlogs from "../screens/AllBlogsScreen";
import Orders from "../screens/OrdersScreen";
import OrderDetailsScreen from "../screens/OrderDetails";
import ReturnScreen from "../screens/ReturnProdScreen";
import SavedProductScreen from "../screens/SavedProductsScreen";
import SavedStoreScreen from "../screens/SavedStoreScreen";
import Searchlocation from "../screens/Searchlocation";
import { useDispatch, useSelector } from "react-redux";
import {VerifyAccess} from "../actions/UserActions";
import {INITIALISE_SAVED_ADDRESS, INITIALISE_SAVED_ADDRESS_KEY, INITIALISE_SAVED_BLOGS, INITIALISE_SAVED_PRODUCTS, INITIALISE_SAVED_STORES} from "../constants/SavedConstants";
import LoadingScreen from "../screens/Loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {INITIALISE_CART} from "../constants/CartConstants";
import SavedAddressesScreen from "../screens/SavedAddressesScreen";
import {INITIALISE_SIGNIN_INFO} from "../constants/UserConstants";
import {listProducts} from "../actions/productactions";
import PlaceOrderScreen from "../screens/PlaceOrderScreen";
import AnimatedS1 from "../screens/AnimatedLoadingS1";
import UserDetailsScreen from "../screens/UserDetails";
import SavedBlogsScreen from "../screens/SavedBlogsScreen";
import CategoryScreen from "../screens/CategoryScreen";
import RazorpayC from "../screens/RazorPayScreen";
import UPIApp from "../screens/UPIPayment";
const Stack = createStackNavigator();
const MainStackNavigator = (props) => {
const dispatch=useDispatch();
   const userSignin = useSelector((state) => state.userSignin);
    const { userInfo, loading, error } = userSignin;
    const [savedprodloading,setsavedprodloading]=useState(true);


    useEffect(()=>{

      const GetUserData=async()=>{
        const exist=await AsyncStorage.getItem("UserInfo");
        if(exist){
        dispatch({type:INITIALISE_SIGNIN_INFO,payload:JSON.parse(exist)});
        console.log("existsss")
        }
        else{
          dispatch({type:INITIALISE_SIGNIN_INFO,payload:{}});
          console.log(" doesnt existsss")
        }
      }
      GetUserData();


  if(userInfo.access){
    dispatch(VerifyAccess(userInfo.access))
  }
  if(!userInfo.access){
    props.navigation.navigate("Login")
  }
  console.log("Navigation called")
 
  const SavedGetter=async()=>{
   
    const s1=await AsyncStorage.getItem("savedItems");
    console.log(JSON.parse(s1));
   
        if(s1){
      // setsaveditems(JSON.parse(s1));
      dispatch({type:INITIALISE_SAVED_PRODUCTS,payload:JSON.parse(s1)});
      setTimeout(() => {
        setsavedprodloading(false);
      }, 3500);
    }
    else{
      dispatch({type:INITIALISE_SAVED_PRODUCTS,payload:[]});
      setTimeout(() => {
        setsavedprodloading(false);
      }, 3500);
    }
   
  }
  SavedGetter();
  const SavedStoresGetter=async()=>{
    const s1=await AsyncStorage.getItem("savedstoress");
    console.log(JSON.parse(s1));
    if(s1){
     
      dispatch({type:INITIALISE_SAVED_STORES,payload:JSON.parse(s1)});
      console.log(JSON.parse(s1));
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
      setTimeout(() => {
        setsavedprodloading(false);
      }, 3500);
      console.log(JSON.parse(s1));
    }
    else{
      dispatch({type:INITIALISE_SAVED_ADDRESS,payload:[]});
      setTimeout(() => {
        setsavedprodloading(false);
      }, 3500);
      console.log(JSON.parse(s1));
    }
   
  }
  SavedAddrsGetter();
  const GetProdList=async()=>{
    dispatch(listProducts());
  }

  GetProdList();

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
  // if(userInfo.access){
  //   dispatch(VerifyAccess(userInfo.access))
  // }
  // if(!userInfo.access){
  //   props.navigation.navigate("Login")
  // }

    },[])


  return (
    // savedprodloading?<LoadingScreen></LoadingScreen>:
    savedprodloading?<AnimatedS1></AnimatedS1>:
    <Stack.Navigator     
    screenOptions={{
        headerStyle: {

          shadowColor:'black'
        },
        headerTintColor: "black",
        headerBackTitle: "Back",
      }}>
    
      {/* <Stack.Screen name="Signin" component={SigninScreen} /> */}
      {/* <Stack.Screen name="Signup" component={SignupScreen} /> */}
      {/* <Stack.Screen name="cartscreen" component={Cartscreen} /> */}
      {/* <Stack.Screen name="searchscreen" component={SearchScreen} /> */}
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* <Stack.Screen name="Account Details" component={Userscreen} /> */}
      <Stack.Screen name="product" component={Productscreen} />
      <Stack.Screen name="blog" component={BlogScreen} />
      <Stack.Screen name="stores" component={Stores} />
      <Stack.Screen name="store details" component={Storescreen} />
      <Stack.Screen name="Blog section" component={AllBlogs} />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="Order Details" component={OrderDetailsScreen} />
      <Stack.Screen name="Return Product" component={ReturnScreen} />
      <Stack.Screen name="Saved Products" component={SavedProductScreen} />
      <Stack.Screen name="Saved Stores" component={SavedStoreScreen} />
      <Stack.Screen name="Saved Addresses" component={SavedAddressesScreen} />
      <Stack.Screen name="Saved Blogs" component={SavedBlogsScreen} />
      <Stack.Screen name="Search location" component={Searchlocation} />
      <Stack.Screen name="Place Order" component={PlaceOrderScreen} />
      <Stack.Screen name="User Details" component={UserDetailsScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />
      {/* <Stack.Screen name="PAY" component={UPIApp} /> */}
    </Stack.Navigator>
  );
};
export { MainStackNavigator };