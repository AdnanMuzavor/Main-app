import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/CartReducers";
import { SavedReducer } from "./reducers/SavedReducers";
import {
  userRegisterReducer,
  userSigninReducer,
} from "./reducers/UserReducers";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {ProductDetailsReducer, ProductListReducer} from "./reducers/productreducers";
import {OrderPlacedReducer} from "./reducers/OrderReducers";

const CartItemsReturn=async()=>{
  const s2=await AsyncStorage.getItem("cartItems");
  console.log(s2);
  const s3=JSON.parse(s2);
  console.log(s3);
  return s3;
}
const getplz=async()=>{
  const s2=await AsyncStorage.getItem("cartItems");
  return s2;
}
const AsyncCartChecker=async()=>{
  const CartFilled=await AsyncStorage.getItem("cartItems");
  console.log("Cart checker");
  console.log(CartFilled);
  if(CartFilled!==undefined){
    const items=CartItemsReturn();
    console.log("getting items");
    console.log(items.Array);
    console.log(typeof(items));
    return true;
  }else{
    return false;
  }
 
}


const initialState = {
  cart: {
    cartItems:AsyncCartChecker()?[]:[],
  },
  saved: {
    savedproducts: [],
    savedstores: [],
    savedaddresses:[],
    selectedaddresskey:{},
  },
  orders:{
    NewOrder:{},
    OrderSpecDetails:"",
  },
  userSignin: {
    userInfo:{},
  
  },
  productlist:{
    products:[],
  }
};
const reducer = combineReducers({
  cart: cartReducer,
  saved: SavedReducer,
  userRegister: userRegisterReducer,
  userSignin: userSigninReducer,
  productlist:ProductListReducer,
  productdetails:ProductDetailsReducer,
  orders:OrderPlacedReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
