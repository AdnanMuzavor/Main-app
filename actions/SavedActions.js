//This action will fetch the specific product based on id and send it's required details via payload

import {
  SAVED_ADDRESS_ADD_ITEM,
  SAVED_BLOG_ADD_ITEM,
  SAVED_BLOG_REMOVE_ITEM,
  SAVED_PRODUCT_ADD_ITEM,
  SAVED_PRODUCT_REMOVE_ITEM,
  SAVED_STORE_ADD_ITEM,
  SAVED_STORE_REMOVE_ITEM,
  SELECT_ADDRESS,
} from "../constants/SavedConstants";
import AsyncStorage from "@react-native-async-storage/async-storage";
//Action to add item to cart
export const AddToLikedProducts =
  (name, img, key, price, listTab, types, colors, qty,type,color) =>
  async (dispatch, getState) => {
    //Sending details we want each item in our cart to haveinform of object sended via payload
    
    dispatch({
      type: SAVED_PRODUCT_ADD_ITEM,
      payload: {
        name,
        img,
        key,
        price,
        listTab,
        types,
        colors,
        qty,
        type,
        color
      },
    });
    console.log("Getting from storage")
    const s1=await AsyncStorage.getItem("savedItems");
    console.log(JSON.parse(s1));
    await AsyncStorage.setItem("savedItems",JSON.stringify(getState().saved.savedproducts))
    // console.log("Getting from storage")
    // const s2=await AsyncStorage.getItem("savedItems");
    // console.log(JSON.parse(s2));


    //A line of code to store items added to cart in localstorage
  };

//Action to remove item from cart
export const RemoveLikedItem = (name) => async (dispatch, getState) => {
  //This dispatch will induce action under which product with given id will get filtered from cartitems
  
  dispatch({ type: SAVED_PRODUCT_REMOVE_ITEM, payload: name });
  console.log("Getting from storage")
  const s1=await AsyncStorage.getItem("savedItems");
  console.log(JSON.parse(s1));
  await AsyncStorage.setItem("savedItems",JSON.stringify(getState().saved.savedproducts))
  // console.log("Getting from storage")
  // const s2=await AsyncStorage.getItem("savedItems");
  // console.log(JSON.parse(s2));

  //This will resave the newly returnrf list
};

export const AddToLikedStores =
  (name, img, key, contact) =>
  async (dispatch, getState) => {
    //Sending details we want each item in our cart to haveinform of object sended via payload
    dispatch({
      type: SAVED_STORE_ADD_ITEM,
      payload: {
        name,
        img,
        key,
        contact,
      },
    });
    console.log("Getting from storage")
    const s1=await AsyncStorage.getItem("savedstoress");
    console.log(JSON.parse(s1));
    await AsyncStorage.setItem("savedstoress",JSON.stringify(getState().saved.savedstores))
    // console.log("Getting from storage")
    // const s2=await AsyncStorage.getItem("savedstores");
    // console.log(JSON.parse(s2));

    //A line of code to store items added to cart in localstorage
  };

//Action to remove item from cart
export const RemoveLikedStore = (contact) => async (dispatch, getState) => {
  //This dispatch will induce action under which product with given id will get filtered from cartitems
  dispatch({ type: SAVED_STORE_REMOVE_ITEM, payload: contact });
  //This will resave the newly returnrf list
  console.log("Getting from storage")
  const s1=await AsyncStorage.getItem("savedstoress");
  console.log(JSON.parse(s1));
  await AsyncStorage.setItem("savedstoress",JSON.stringify(getState().saved.savedstores))
  // console.log("Getting from storage")
  // const s2=await AsyncStorage.getItem("savedItems");
  // console.log(JSON.parse(s2));
};

export const SavedAddress =
  (Addressof,Area,locationmark,city,statename,pincode,phoneno,key) =>
  async (dispatch, getState) => {
    //Sending details we want each item in our cart to haveinform of object sended via payload
    console.log("Saved address")
    dispatch({
      type: SAVED_ADDRESS_ADD_ITEM,
      payload: {
        Addressof,Area,locationmark,city,statename,pincode,phoneno,key
      },
    });
    console.log("Getting from storage")
    const s1=await AsyncStorage.getItem("getsavedaddresses");
    console.log(JSON.parse(s1));
    await AsyncStorage.setItem("getsavedaddresses",JSON.stringify(getState().saved.savedaddresses))
    // console.log("Getting from storage")
    // const s2=await AsyncStorage.getItem("savedstores");
    // console.log(JSON.parse(s2));

    //A line of code to store items added to cart in localstorage
  };

  export const SaveSelectedAddressKey=(key)=>async(dispatch,getState)=>{

    dispatch({type:SELECT_ADDRESS,payload:key});
    await AsyncStorage.setItem("getselectedaddresskey",JSON.stringify(getState().saved.selectedaddresskey))
  }


  export const AddToLikedBlogs =
  ( name,
    reads,
    img,
    body) =>
  async (dispatch, getState) => {
    //Sending details we want each item in our cart to haveinform of object sended via payload
    dispatch({
      type: SAVED_BLOG_ADD_ITEM,
      payload: {
        name,
        reads,
        img,
        body
      },
    });
    console.log(name);
    console.log("Getting from storage")
    const s1=await AsyncStorage.getItem("savedblogs");
    console.log(JSON.parse(s1));
    await AsyncStorage.setItem("savedblogs",JSON.stringify(getState().saved.savedblogs))
    // console.log("Getting from storage")
    // const s2=await AsyncStorage.getItem("savedstores");
    // console.log(JSON.parse(s2));

    //A line of code to store items added to cart in localstorage
  };

//Action to remove item from cart
export const RemoveLikedBlog = (name) => async (dispatch, getState) => {
  //This dispatch will induce action under which product with given id will get filtered from cartitems
  dispatch({ type: SAVED_BLOG_REMOVE_ITEM, payload: name });
  //This will resave the newly returnrf list
  console.log("Getting from storage")
  const s1=await AsyncStorage.getItem("savedblogs");
  console.log(JSON.parse(s1));
  await AsyncStorage.setItem("savedblogs",JSON.stringify(getState().saved.savedblogs))
  // console.log("Getting from storage")
  // const s2=await AsyncStorage.getItem("savedItems");
  // console.log(JSON.parse(s2));
};
