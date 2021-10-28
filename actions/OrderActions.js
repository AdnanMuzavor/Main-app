import {
  GET_SPECIFIC_ORDERDATA,
  ORDER_PLACED,
  PLACE_ORDER_FAIL,
  REQUESTING_ORDERS_PLACED,
} from "../constants/OrderConstants";

export const PlaceOrderHandler =
  (orderstring, status, address,userdetails,totalprice,paymentid) => async (dispatch) => {
    dispatch({
      type: GET_SPECIFIC_ORDERDATA,
      payload: { orderstring, status, address,userdetails,totalprice,paymentid},
    });
    try {
      // let Orderdetails = [
      //   {
      //     OrderNo: "1234 1234 567",
      //     OrderItems: [
      //       { itemname: "maggie", qty: "2", cost: 30 },
      //       { itemname: "onion 1kg", qty: "3", cost: 20 },
      //       { itemname: "maggie", qty: "2", cost: 30 },
      //       { itemname: "onion 1kg", qty: "3", cost: 20 },
      //     ],
      //     status: "on the way",
      //     address:
      //       " College Walkway, M S R Nagar, MSRIT Post, Bengaluru, Karnataka 560054",
      //   },
      //   {
      //     OrderNo: "5679 1234 567",
      //     OrderItems: [
      //       { itemname: "onion 1kg", qty: "3", cost: 20 },
      //       { itemname: "maggie", qty: "2", cost: 30 },
      //       { itemname: "onion 1kg", qty: "3", cost: 20 },
      //       { itemname: "maggie", qty: "2", cost: 30 },
      //     ],
      //     status: "delivered",
      //     address:
      //       ", M S R Nagar, MSRIT Post, College Walkway Bengaluru, Karnataka 560054",
      //   },
      //   {
      //     OrderNo: "1234 1234 567",
      //     OrderItems: [
      //       { itemname: "maggie", qty: "2", cost: 30 },
      //       { itemname: "onion 1kg", qty: "3", cost: 20 },
      //       { itemname: "maggie", qty: "2", cost: 30 },
      //       { itemname: "onion 1kg", qty: "3", cost: 20 },
      //     ],
      //     status: "on the way",
      //     address:
      //       " College Walkway, M S R Nagar, MSRIT Post, Bengaluru, Karnataka 560054",
      //   },
      //   {
      //     OrderNo: "5679 1234 567",
      //     OrderItems: [
      //       { itemname: "onion 1kg", qty: "3", cost: 20 },
      //       { itemname: "maggie", qty: "2", cost: 30 },
      //       { itemname: "onion 1kg", qty: "3", cost: 20 },
      //       { itemname: "maggie", qty: "2", cost: 30 },
      //     ],
      //     status: "delivered",
      //     address:
      //       "MSRIT Post, Bengaluru, College Walkway, M S R Nagar, Karnataka 560054",
      //   },
      // ];
      //     console.log(Orderdetails)
      //     console.log("failed before")
      //   Orderdetails=Orderdetails.append({ordernumber,OrderItems,status,address});
      //   console.log("failed after")
      //   const data2 = await response.json();

      // const data = { name, email, password, phno };
      const neworder={orderstring, status, address,userdetails,totalprice,paymentid}
      console.log(neworder)
      console.log(orderstring);
      dispatch({
        type: ORDER_PLACED,
        payload: orderstring,
      });
    } catch (error) {
      dispatch({
        type: PLACE_ORDER_FAIL,
        payload: error,
      });
    }
  };
