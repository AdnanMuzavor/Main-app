import {TouchableHighlight, TouchableOpacity} from 'react-native-gesture-handler';
import RazorpayCheckout from 'react-native-razorpay';
import React from 'react';
import {Text, View} from 'react-native';

const RazorpayC=()=>{
    var options = {
        description: 'Credits towards consultation',
        image: 'https://i.imgur.com/3g7nmJC.png',
        currency: 'INR',
        key: 'rzp_test_gPkmmmt5shaIyc',
        amount: '5000',
        name: 'foo',
        prefill: {
          email: 'void@razorpay.com',
          contact: '9191919191',
          name: 'Razorpay Software'
        },
        theme: {color: '#F37254'}
      }

      const onpressingbutton=()=>{
        RazorpayCheckout.open(options).then((data) => {
            // handle success
            alert(`Success: ${data.razorpay_payment_id}`);
          }).catch((error) => {
            // handle failure
            alert(`Error: ${error.code} | ${error.description}`);
          });
      }
    return(
        <View style={{width:60,height:60,backgroundColor:'red'}}>
            <TouchableOpacity
            onPress={()=>onpressingbutton()}
            >
                <Text>
                    PAY
                </Text>
            </TouchableOpacity>
</View>
    )
}

export default RazorpayC;

