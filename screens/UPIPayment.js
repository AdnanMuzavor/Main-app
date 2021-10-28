import React, {Component} from 'react';
import {View,Text,Button} from 'react-native'; 
import {TouchableOpacity} from 'react-native-gesture-handler';

import RNUpiPayment from 'react-native-upi-pay';
 
/*
    npm install react-native-upi-pay
    react-native link
*/
 const payer=()=>{
     
 }

const UPIAPP=()=>{
    return(
<Text>
    <TouchableOpacity>
        <Text>PAY</Text>
    </TouchableOpacity>
</Text>
    )
}
export default UPIAPP;
 