import {PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS} from "../constants/productconstants";
import products from "../Data/products";
export const listProducts = () => async (dispatch) => {
    dispatch({
      type: PRODUCT_LIST_REQUEST,
    });
    try {
    //   const res = await fetch("https://misuiindia.herokuapp.com/api/product/allproducts/", {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
  
    //   const data = await res.json();
    // //  const data="got response"
    //   console.log(`data-${data}`);
      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: products });
    } catch (e) {
      dispatch({ type: PRODUCT_LIST_FAIL, payload: e.message });
    }
  };

  export const DetailsProduct = (productid) => async (dispatch) => {
    dispatch({
      type: PRODUCT_DETAILS_REQUEST,
      payload: productid,
    });
    try {
      const res = await fetch(`https://misuiindia.herokuapp.com/api/product/detailofproduct/${productid}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      const data = await res.json();
    //   console.log(`data-${data},${data.itemname}`);
    // const data="got response";
      dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
      localStorage.setItem("ProdDetails",JSON.stringify(data));
    } catch (e) {
      dispatch({ type: PRODUCT_DETAILS_FAIL, payload: e.message });
    }
  };