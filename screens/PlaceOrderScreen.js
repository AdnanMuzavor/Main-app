import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RazorpayCheckout from 'react-native-razorpay';
import star1 from '../Imgs/star_corner.png';
import star2 from '../Imgs/star_filled.png';
import {Dimensions, PixelRatio} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {VerifyAccess} from '../actions/UserActions';
import LoadingScreen from './Loading';
import {PlaceOrderHandler} from '../actions/OrderActions';
import CurrDateAndTime from '../Componenets/CurrDateAndTime';
import BillCounter from '../Componenets/BillCounter';
import AnimatedS2 from './AnimatedLoadingS2';
import RazorpayC from './RazorPayScreen';
import UPIApp from './UPIPayment';
const PlaceOrderScreen = props => {
  const {width, height} = Dimensions.get('window');
  const [useraddress, setuseraddress] = useState([]);
  const [paymentid,setpaymentid]=useState("1224");
  const dispatch = useDispatch();
  const userSignin = useSelector(state => state.userSignin);
  const {userInfo, loading, error} = userSignin;
  const saved = useSelector(state => state.saved);
  const {savedaddresses, selectedaddresskey} = saved;
  const cart = useSelector(state => state.cart);
  const [orderplaced, setorderplaced] = useState(false);
  const [ispaid, setispaid] = useState(false);
  const {cartItems} = cart;
  const [paymentload, setpaymentload] = useState(false);
  const [orderstring,setorderstring]=useState("");
  useEffect(() => {
    if (userInfo) {
      if(userInfo.access){
        dispatch(VerifyAccess(userInfo.access,userInfo.refresh));
      }
      else{
        props.navigation.navigate('Login');
        
      }
     
    }
   
    if (selectedaddresskey) {
      console.log(selectedaddresskey);
    }

    console.log(cartItems);
    console.log(new Date());
  }, []);

  const totalpricefn=()=>{
    const totalamt=cartItems.reduce(function (accum, c) {
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
        0.4;
        console.log(totalamt);
        return totalamt;
  }
 

  const OrderPlacer =async () => {

    setTimeout(() => {
      setpaymentload(false);
    }, 4000);
    setpaymentload(true);
    const ordernumber = Math.random() * 1000000;
    const OrderItems = cartItems;
    const status = 'on the way';
    const address = `${selectedaddresskey.Area}, ${selectedaddresskey.locationmark}, ${selectedaddresskey.city}, ${selectedaddresskey.statename}, ${selectedaddresskey.pincode},Phone no: ${selectedaddresskey.phoneno}`;
    const userid=1234;
    const usern="username";
    const userdetails={userid,usern};
    const totalprice=totalpricefn();
    // console.log(OrderItems.forEach(function(v){delete v.listTab}))
    // console.log(OrderItems.map((e)=>delete e.listTab))
    // console.log(OrderItems.map((e)=>delete e.types))
    // console.log(OrderItems.map((e)=>delete e.colors))
    let tempstring="";
   for(var i=0;i<OrderItems.length;i++){
     
     const order=`${OrderItems[i].name}&&${OrderItems[i].price}&&${OrderItems[i].key}&&${OrderItems[i].qty}&&${OrderItems[i].color?OrderItems[i].color:null}&&${OrderItems[i].type?OrderItems[i].type:null}`;
     console.log(order)
    //  if(order){
      console.log(orderstring);
      console.log("------------------------------")
     // setorderstring((prev)=>prev+order+"$$$$");
      tempstring=tempstring+order+"$$$$";
      console.log("_________")
      console.log(tempstring);
    // }
     
    
    
   }
   
   console.log("Final order is:");
  // console.log(orderstring)
   setTimeout(() => {
    dispatch(PlaceOrderHandler(tempstring,status,address,userdetails,totalprice,paymentid))
   }, 2000);
 
    // var options = {
    //   description: 'Credits towards consultation',
    //   image: 'https://i.imgur.com/3g7nmJC.png',
    //   currency: 'INR',
    //   key: 'rzp_test_gPkmmmt5shaIyc',
    //   amount: `500000`,
    //   name: 'foo',
    //   prefill: {
    //     email: 'void@razorpay.com',
    //     contact: '9191919191',
    //     name: 'Razorpay Software'
    //   },
    //   theme: {color: '#F37254'}
    // }

    // RazorpayCheckout.open(options).then((data) => {
    //   // handle success
    //   setpaymentid(data.razorpay_payment_id)
    //   if(data.razorpay_payment_id){
    //     setispaid(true);
    //     setorderplaced(true);
    //     console.log("placing")
    //     dispatch(PlaceOrderHandler( OrderItems, status, address,userid,usern,totalprice,data.razorpay_payment_id));
    //   }
    //  alert(`Success: ${data.razorpay_payment_id}`);
    
    // //  razr_successCallback(data);
    // console.log(data)
    // // setShowModel(true);
    // // props.navigation.navigate("PAY")
    // }).catch((error) => {
    //   // handle failure
    //   alert(`Error: ${error.code} | ${error.description}`);
    // });

 
    // try {
    //   const res=await RazorpayCheckout.open(options);
    
    //   console.log("no err")
    //   console.log(res);
      
    // } catch (error) {
    //   console.log(error)
    // }
    // props.navigation.navigate("PAY")
  };

  return paymentload ? (
    <AnimatedS2></AnimatedS2>
  ) : loading ? (
    <LoadingScreen></LoadingScreen>
  ) : (
    <View
      style={{
        paddingLeft: 18,
        paddingRight: 18,
        paddingTop: 10,
        backgroundColor: '#ffffff',
        width: width,
        height: height,
      }}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  margin: 10,
                  marginLeft: 2,
                  fontWeight: '400',
                  fontSize: 18,
                  lineHeight: 23.4,
                  color:'black'
                }}>
                Order Number #{Math.random() * 100000000}
              </Text>
              {orderplaced === false ? (
                <Text
                  style={{
                    margin: 5,
                    marginLeft: 2,
                    fontWeight: '700',
                    fontSize: 16,
                    lineHeight: 23.4,
                    color:'black'
                  }}>
                  Order yet to be confirmed
                </Text>
              ) : null}
            </View>
            {orderplaced === true ? (
              <Text
                style={{
                  margin: 10,
                  padding: 5,
                  fontWeight: '400',
                  fontSize: 9,
                  lineHeight: 10.24,
                  backgroundColor: '#E6F2F4',
                  color:'black'
                }}>
                On the way
              </Text>
            ) : null}
          </View>

          <View
            style={{
              width: 288,
              height: 148,
              borderColor: 'black',
              backgroundColor: 'rgba(196, 196, 196, 0)',
              borderStyle: 'dotted',
              borderColor: 'black',
              borderWidth: 3,
            }}>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 13,
                lineHeight: 16.9,
                margin: 10,
                marginBottom: 2,
                color: 'rgba(149, 112, 255, 1)',
              }}>
              Delivery
            </Text>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 13,
                lineHeight: 16.9,
                margin: 2,
                marginLeft: 6,
                color: 'rgba(0, 0, 0, 0.6)',

              }}>
              {selectedaddresskey
                ? `${selectedaddresskey.Addressof}, ${selectedaddresskey.Area}, ${selectedaddresskey.locationmark}, ${selectedaddresskey.city}, ${selectedaddresskey.statename}, ${selectedaddresskey.pincode},Phone no: ${selectedaddresskey.phoneno}`
                : null}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft: 10,
                marginRight: 10,
                marginTop: 10,
              }}>
              <CurrDateAndTime />

              <TouchableOpacity
                style={{
                  width: 120,
                  height: 58,
                  backgroundColor: 'rgba(111, 207, 151, 0.2)',
                  justifyContent: 'flex-start',

                  flexDirection: 'column',
                }}>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 13,
                    lineHeight: 16.61,
                    padding: 2,
                    color:'black'
                  }}>
                  to delivered by 12:57 AM
                </Text>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 13,
                    lineHeight: 16.61,
                    padding: 2,
                    color:'black'
                  }}>
                  03-08-2021
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ScrollView>
          <BillCounter
            cartItems={cartItems}
            ispaid={ispaid}
            OrderPlacerFn={OrderPlacer}
          />
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: width / 12,
            marginRight: width / 12,
            margin: width / 18,
          }}>
          {orderplaced === true ? (
            <>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <MaterialCommunityIcons
                  name="account"
                  color={'black'}
                  size={26}
                  style={{backgroundColor: 'gray', borderRadius: 10}}
                />

                <Text
                  style={{
                    marginLeft: 8,
                    fontWeight: '400',
                    fontSize: 13,
                    lineHeight: 16.61,
                    marginTop: 2,
                  }}>
                  Mr person is your delivery agent
                </Text>
              </View>
              <TouchableOpacity>
                {orderplaced === true ? (
                  <Text
                    style={{
                      fontWeight: '400',
                      fontSize: 13,
                      lineHeight: 16.61,
                      backgroundColor: 'rgba(255, 0, 0, 0.4)',
                      padding: 5,
                    }}>
                    Call
                  </Text>
                ) : null}
              </TouchableOpacity>
            </>
          ) : null}
        </View>
        {/* <RazorpayC/>
        <UPIApp/> */}
      </ScrollView>
    </View>
  );
};

export default PlaceOrderScreen;
