import React, {useEffect} from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {View,Text} from 'react-native';

//Gives Bill by calculating and also displays payment status
const BillCounter=({cartItems,ispaid,OrderPlacerFn,bill})=>{
  useEffect(()=>{
    console.log(cartItems);
  },[])
    return(
        <>
 <View
            style={{
              margin: 12,
              marginLeft: 18,
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                lineHeight: 20.45,
                fontWeight: "400",
                borderBottomWidth: 3,
                borderBottomColor: "rgba(149, 112, 255, 1)",
                color:'black'
              }}
            >
              {" "}
              Bill Details
            </Text>
          </View>

          <View style={{ backgroundColor: "#FEF2EE", padding: 10 }}>
            {cartItems.map((e) => (
              e.name!==""?
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  fontSize: 14,
                  lineHeight: 16.61,
                  fontWeight: "400",
                  paddingRight: 10,
                  paddingLeft: 10,
                  borderBottomColor: "rgba(201, 201, 201, 1)",
                  borderBottomWidth: 1,
                  borderStyle: "dotted",
                }}
              >
                <Text
                  style={{ fontSize: 16, lineHeight: 20.45, fontWeight: "400",color:'black' }}
                >
                  {e.name} {e.type!=="null"?e.type:""} {e.color!=="null"?e.color:""} x {e.qty}
                </Text>
                <Text
                  style={{ fontSize: 16, lineHeight: 20.45, fontWeight: "400",color:'black' }}
                >
                 ₹ {e.qty * e.price}
                </Text>
              </View>:null
            ))}
            <View
              style={{
                borderRadius: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                height: 20,
                padding: 15,
                marginTop: 16,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "700",
                  lineHeight: 20.45,
                  marginBottom: 10,
                  color:'black'
                }}
              >
                Payment Details
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                fontSize: 14,
                lineHeight: 16.61,
                fontWeight: "400",
                paddingRight: 10,
                paddingLeft: 10,
                borderBottomColor: "rgba(201, 201, 201, 1)",
                borderBottomWidth: 1,
                borderStyle: "dotted",
              }}
            >
              <Text style={{color:'black'}}>itemtotal</Text>
              <Text style={{color:'black'}}>
              ₹ {cartItems.reduce(function (accum, c) {
                  if (c.qty && c.price) {
                    return accum + Number(c.qty) * c.price;
                  } else {
                    return accum + 0;
                  }
                }, 0)}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                fontSize: 14,
                lineHeight: 16.61,
                fontWeight: "400",
                paddingRight: 10,
                paddingLeft: 10,
                borderBottomColor: "rgba(201, 201, 201, 1)",
                borderBottomWidth: 1,
                borderStyle: "dotted",
              }}
            >
              <Text style={{color:'black'}}>Delivery price</Text>
              <Text style={{color:'black'}}>
              ₹ {cartItems.reduce(function (accum, c) {
                  if (c.qty && c.price) {
                    return accum + Number(c.qty) * c.price;
                  } else {
                    return accum + 0;
                  }
                }, 0) * 0.2}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                fontSize: 14,
                lineHeight: 16.61,
                fontWeight: "400",
                paddingRight: 10,
                paddingLeft: 10,
                borderBottomColor: "rgba(201, 201, 201, 1)",
                borderBottomWidth: 1,
                borderStyle: "dotted",
              }}
            >
              <Text style={{color:'black'}}>Dicounts</Text>
              <Text style={{ color: "red" }}>
              ₹ {cartItems.reduce(function (accum, c) {
                  if (c.qty && c.price) {
                    return accum + Number(c.qty) * c.price;
                  } else {
                    return accum + 0;
                  }
                }, 0) * 0.4}
              </Text>
            </View>
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                fontSize: 14,
                lineHeight: 16.61,
                fontWeight: "400",
                paddingRight: 10,
                paddingLeft: 10,
                borderBottomColor: "rgba(201, 201, 201, 1)",
                borderBottomWidth: 1,
                borderStyle: "dotted",
              }}
            >
              <Text style={{color:'black'}}>Total pay</Text>
              <Text style={{ color: "#000AFF" }}>
              ₹ {cartItems.reduce(function (accum, c) {
                  if (c.qty && c.price) {
                    return accum + Number(c.qty) * c.price;
                  } else {
                    return accum + 0;
                  }
                }, 0) +
                  cartItems.reduce(function (accum, c) {
                    if (c.qty && c.price) {
                      return accum + Number(c.qty) * c.price;
                    } else {
                      return accum + 0;
                    }
                  }, 0) *
                    0.2 -
                  cartItems.reduce(function (accum, c) {
                    if (c.qty && c.price) {
                      return accum + Number(c.qty) * c.price;
                    } else {
                      return accum + 0;
                    }
                  }, 0) *
                    0.4}
              </Text>
            </View>
            {
              !bill?
              <>
<View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                fontSize: 14,
                lineHeight: 16.61,
                fontWeight: "400",
                paddingRight: 10,
                paddingLeft: 10,
                borderBottomColor: "rgba(201, 201, 201, 1)",
                borderBottomWidth: 1,
                borderStyle: "dotted",
                paddingTop:10
              }}
            >
              <Text style={{color:'black'}}>Payment mode</Text>
              {
                ispaid===false?<TouchableOpacity
                  onPress={OrderPlacerFn}
                  style={{backgroundColor:'gray',borderRadius:8}}
                >
                  <Text
                  style={{padding:10,color:'black'}}
                  >Make Payment</Text>
                </TouchableOpacity>:  <Text style={{ color: "#000AFF" }}>
                UPI
             </Text>
              }
            
            </View>
              </>
              :null
            }
            
          </View>
        </>
    )
}

export default BillCounter;