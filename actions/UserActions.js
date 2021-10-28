import jwt_decode from "jwt-decode";

import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
} from "../constants/UserConstants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  NEW_TOKENS_RECEIVED,
  REQUESTING_NEW_TOKENS_USING_REFRESHT,
  TOKEN_VALIDITY_CHECK,
  TOKEN_VARIFICATION_FAILED,
  TOKEN_VARIFIED,
} from "../constants/TokenActions";
// export const register = (name, email, password, phno) => async (dispatch) => {
//   dispatch({
//     type: USER_REGISTER_REQUEST,
//     payload: { name, email, password, phno },
//   });
//   try {
//     //   const { data } = await Axios.post('/api/users/register', {
//     //     name,
//     //     email,
//     //     password,
//     //   });
//     const response = await fetch("http://e069-103-248-35-214.ngrok.io/api/token/obtain/", {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify({
//         name, email, password, phno
//       }),
//     });
//     const data2 = await response.json();

//     // const data = { name, email, password, phno };
//     dispatch({ type: USER_REGISTER_SUCCESS, payload: data2 });
//   } catch (error) {
//     dispatch({
//       type: USER_REGISTER_FAIL,
//       payload: error,
//     });
//   }
// };
export const register = (username, phno, password) => async (dispatch) => {
  dispatch({
    type: USER_REGISTER_REQUEST,
    payload: { username, phno, password },
  });
  try {
    //   const { data } = await Axios.post('/api/users/register', {
    //     name,
    //     email,
    //     password,
    //   });
    const response = await fetch(
      "http://9705-103-248-35-149.ngrok.io/api/register/",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          username,
          phno,
          password,
        }),
      }
    );
    const data2 = await response.json();
   
    // const data = { name, email, password, phno };
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data2 });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error,
    });
  }
};


export const signin = (username, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { username, password } });
  try {
    console.log("before")
    const response = await fetch(
      "https://misuiindia.herokuapp.com/api/token/obtain/",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      }
    );
    const data2 = await response.json();
    console.log(data2)
    var token=data2.access;
    var decoded = jwt_decode(token);
    console.log(decoded);
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data2 });
    if(data2.detail){
      console.log(data2.detail);
      dispatch({
        type: USER_SIGNIN_FAIL,
        payload: data2.detail,
      });
    }
    else{
      await AsyncStorage.setItem("UserInfo", JSON.stringify(data2));
    }
    
  } catch (error) {
    console.log(error)
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload: error,
    });
  }
};

export const signout = () => async (dispatch) => {
  console.log("Signout requesred");
  await AsyncStorage.removeItem("UserInfo");

  dispatch({ type: USER_SIGNOUT });
};

export const VerifyAccess = (access, refresh) => async (dispatch) => {
  //verify if access token valid else
  //send request for new access and refresh token
  dispatch({ type: TOKEN_VALIDITY_CHECK, payload: access });

  //const accesschecker = new Date().getMonth(); //10

  console.log(access);
  console.log(refresh)
  try {
    const token = access;
    //Request to verify access token

    const response = await fetch(
      "https://misuiindia.herokuapp.com/api/token/verify/",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          token,
        }),
      }
    );

    const verification = await response.json();
    console.log(verification);
    console.log(typeof(verification));
  
    if (!verification.detail) {
      //access token is verified
      console.log(refresh)
     
      dispatch({ type: TOKEN_VARIFIED});

    } else {
      

      dispatch({
        type: TOKEN_VARIFICATION_FAILED,
        payload:"Verification failed"
      });

      dispatch({
        type: REQUESTING_NEW_TOKENS_USING_REFRESHT,
        payload: refresh,
      });
       console.log(refresh)
      //Posting refresh token for getting new access tokens
      const response2 = await fetch(
        "https://misuiindia.herokuapp.com/api/token/refresh/",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            refresh,
          }),
        }
      );

      const newtokens = await response2.json();
      if (newtokens) {
        dispatch({ type: NEW_TOKENS_RECEIVED, payload: newtokens });
        AsyncStorage.setItem("UserInfo", JSON.stringify(newtokens));
      }
    }
  } catch (e) {
    console.log(e);
  }
};


