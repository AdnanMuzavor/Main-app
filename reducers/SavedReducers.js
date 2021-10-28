import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_ADD_ITEM_FAIL,
} from "../constants/CartConstants";
import {
  INITIALISE_SAVED_ADDRESS,
  INITIALISE_SAVED_ADDRESS_KEY,
  INITIALISE_SAVED_BLOGS,
  INITIALISE_SAVED_PRODUCTS,
  INITIALISE_SAVED_STORES,
  SAVED_ADDRESS_ADD_ITEM,
  SAVED_BLOG_ADD_ITEM,
  SAVED_BLOG_REMOVE_ITEM,
  SAVED_PRODUCT_ADD_ITEM,
  SAVED_PRODUCT_REMOVE_ITEM,
  SAVED_STORE_ADD_ITEM,
  SAVED_STORE_REMOVE_ITEM,
  SELECT_ADDRESS,
} from "../constants/SavedConstants";

export const SavedReducer = (
  state = { savedproducts: [], savedstores: [],savedaddresses:[],selectedaddresskey:{},savedblogs: [], },
  action
) => {
  switch (action.type) {
    case INITIALISE_SAVED_PRODUCTS:
      return {...state,savedproducts:action.payload}
    case SAVED_PRODUCT_ADD_ITEM:
      //Getting object in payload
      const Item = action.payload;
      const finder = state.savedproducts.find((x) => x.name === Item.name);
      console.log(finder);
      if (finder) {
        return {
          ...state,
          savedproducts: state.savedproducts.map((x) =>
            x.name === Item.name ? Item : x
          ),
        };
      } else {
        return { ...state, savedproducts: [...state.savedproducts, Item] };
      }

    case SAVED_PRODUCT_REMOVE_ITEM:
      return {
        ...state,
        savedproducts: state.savedproducts.filter(
          (itm) => itm.name !== action.payload
        ),
      };
    case INITIALISE_SAVED_STORES:
      return {...state,savedstores:action.payload}
    case SAVED_STORE_ADD_ITEM:
      //Getting object in payload
      const Item2 = action.payload;
      const finder2 = state.savedstores.find((x) => x.name === Item2.name);
      console.log(finder2);
      if (finder2) {
        return {
          ...state,
          savedstores: state.savedstores.map((x) =>
            x.name === Item2.name ? Item2 : x
          ),
        };
      } else {
        return { ...state, savedstores: [...state.savedstores, Item2] };
      }

    case SAVED_STORE_REMOVE_ITEM:
      return {
        ...state,
        savedstores: state.savedstores.filter(
          (itm) => itm.contact !== action.payload
        ),
      };
      case INITIALISE_SAVED_BLOGS:
        return { ...state, savedblogs: action.payload };
      case SAVED_BLOG_ADD_ITEM:
        const Item3 = action.payload;
        const finder3 = state.savedblogs.find((x) => x.name === Item3.name);
        console.log(finder3);
        if (finder2) {
          return {
            ...state,
            savedblogs: state.savedblogs.map((x) =>
              x.name === Item3.name ? Item3 : x
            ),
          };
        } else {
          return { ...state, savedblogs: [...state.savedblogs, Item3] };
        }
      case SAVED_BLOG_REMOVE_ITEM:
        return {
          ...state,
          savedblogs: state.savedblogs.filter(
            (itm) => itm.name !== action.payload
          ),
        }; 
    case SAVED_ADDRESS_ADD_ITEM:
      return{...state, savedaddresses:[...state.savedaddresses,action.payload]}  
    case INITIALISE_SAVED_ADDRESS:
      return {...state,savedaddresses:action.payload};
    case INITIALISE_SAVED_ADDRESS_KEY:
      return {...state,selectedaddresskey:action.payload}    
    case SELECT_ADDRESS:
      const findaddress=state.savedaddresses.filter((e)=>e.key===action.payload)[0];
      return {...state,selectedaddresskey:findaddress}  
    default:
      return state;
  }
};
