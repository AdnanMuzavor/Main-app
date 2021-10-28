import React from 'react';

//Gives Current Date and time
//Used for place order screen
import { TouchableOpacity } from 'react-native-gesture-handler';
import {View,Text} from 'react-native';

const CurrDateAndTime=({date,time})=>{
    return (
        <>
<TouchableOpacity
                style={{
                  width: 120,
                  height: 58,
                  backgroundColor: "rgba(111, 207, 151, 0.2)",
                  justifyContent: "flex-start",

                  flexDirection: "column",
                }}
                onPress={() => props.navigation.navigate("Order Details", e)}
              >
                <Text
                  style={{
                    fontWeight: "400",
                    fontSize: 13,
                    lineHeight: 16.61,
                    padding: 2,
                  }}
                >
                  order placed at{"        "}
                  {`${
                    new Date().getHours() > 12
                      ? new Date().getHours() - 12
                      : new Date().getHours()
                  }:${
                    new Date().getMinutes() < 10
                      ? "0" + new Date().getMinutes()
                      : new Date().getMinutes()
                  } ${new Date().getHours() >= 12 ? "PM" : "AM"}`}
                </Text>
                <Text
                  style={{
                    fontWeight: "400",
                    fontSize: 13,
                    lineHeight: 16.61,
                    padding: 2,
                  }}
                >
                  {`${
                    new Date().getDate() < 10
                      ? "0" + new Date().getDate()
                      : new Date().getDate()
                  }/${
                    new Date().getMonth() < 10
                      ? "0" + new Date().getMonth()
                      : new Date().getMonth()
                  }/${new Date().getFullYear()}`}
                </Text>
              </TouchableOpacity>
        </>
    )
}

export default CurrDateAndTime;