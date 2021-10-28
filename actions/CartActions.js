import AsyncStorage from "@react-native-async-storage/async-storage";
import { AsyncStorageStatic } from "react-native";

//This action will fetch the specific product based on id and send it's required details via payload
// import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_ADD_ITEM_FAIL,
} from "../constants/CartConstants";

//Action to add item to cart
export const AddToCart =
  (name, img, key, price, listTab, types, colors, qty, type, color) =>
  async (dispatch, getState) => {
    //Sending details we want each item in our cart to haveinform of object sended via payload
    dispatch({
      type: CART_ADD_ITEM,
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
        color,
      },
    });
    //A line of code to store items added to cart in localstorage
//     (typeof(getState().cartItems)!=='object'||getState().cartItems.length!==1)?
//     AsyncStorage.setItem(
//       "cartItems",
//       JSON.stringify(getState().cart.cartItems)
//     ):console.log("object type")
console.log("Getting from storage")
const s1=await AsyncStorage.getItem("cartItems");
console.log(JSON.parse(s1));
await AsyncStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))
// console.log("Getting from storage")
// const s2=await AsyncStorage.getItem("cartItems");
// console.log(JSON.parse(s2));

  
    // console.log(await JSON.parse(AsyncStorage.getItem("cartItems")))
  };

//Action to remove item from cart
export const RemoveItem = (key) => async (dispatch, getState) => {
  //This dispatch will induce action under which product with given id will get filtered from cartitems

  dispatch({ type: CART_REMOVE_ITEM, payload: key });
  //This will resave the newly returnrf list
};
