import {
  INITIALISE_SIGNIN_INFO,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
} from "../constants/UserConstants";
import {
  NEW_TOKENS_RECEIVED,
  REQUESTING_NEW_TOKENS_USING_REFRESHT,
  TOKEN_VALIDITY_CHECK,
  TOKEN_VARIFICATION_FAILED,
  TOKEN_VARIFIED,
} from "../constants/TokenActions";
export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
        access: action.payload.access,
        refresh: action.payload.refresh,
      };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case INITIALISE_SIGNIN_INFO:
      return {loading:false,userInfo:action.payload}
    case USER_SIGNIN_REQUEST:
      return { loading: true, details: action.payload };
    case USER_SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    case TOKEN_VALIDITY_CHECK:
      return {...state, loading: false };
    case TOKEN_VARIFIED:
      return {...state, loading: false };
    case TOKEN_VARIFICATION_FAILED:
      return { loading: false, error: action.payload };
    case REQUESTING_NEW_TOKENS_USING_REFRESHT:
      return { loading: false, details: action.payload };
    case NEW_TOKENS_RECEIVED:
      return { loading: false, userInfo: action.payload };
    case USER_SIGNOUT:
      return {};
    default:
      return state;
  }
};
