import {
  ORDER_PLACED,
  REQUESTING_ORDERS_PLACED,
  REQUESTING_ORDERS_PLACED_FAIL,
} from "../constants/OrderConstants";
export const OrderPlacedReducer = (state = {NewOrder:{}, OrderSpecDetails:"",loading:false }, action) => {
  switch (action.type) {
    case REQUESTING_ORDERS_PLACED:
      return {...state,  NewOrder: action.payload, loading: true };
    case ORDER_PLACED:
      return {...state, loading: false, OrderSpecDetails:action.payload};

    case REQUESTING_ORDERS_PLACED_FAIL:
      return {
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
