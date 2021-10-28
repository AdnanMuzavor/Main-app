import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_ADD_ITEM_FAIL,
  INITIALISE_CART,
} from "../constants/CartConstants";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case INITIALISE_CART:
      return {...state,cartItems:action.payload}
    case CART_ADD_ITEM:
      //Getting object in payload
      const Item = action.payload;
   
      console.log("array type");
      const finder=state.cartItems.find((x)=>x.name===Item.name);
      console.log(finder)
     
      if(finder){
        state={...state,cartItems:state.cartItems.map((x)=>x.name===Item.name?Item:x)}
        
        return state;
      }  
      else{
        return { ...state, cartItems: [...state.cartItems, Item] };
      }  
    
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((itm) => itm.name !== action.payload),
      };

    default:
     
      return state;
  }
};
