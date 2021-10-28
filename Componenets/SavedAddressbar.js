import { NavigationContainer } from "@react-navigation/native";
import { usePropsResolution } from "native-base";
import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import { View, Text, StyleSheet, TextInput } from "react-native";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector,useDispatch } from "react-redux";
import {SaveSelectedAddressKey} from "../actions/SavedActions";
import {SELECT_ADDRESS} from "../constants/SavedConstants";
import LoadingScreen from "../screens/Loading";
const SavedAddressbar = ({ navigation, limit }) => {
  const [selected, setselected] = useState("");
  const dispatch=useDispatch();
  const Selectadress=(key)=>{
     setselected(key);
     dispatch(SaveSelectedAddressKey(key));
  }
  const [Addressdata, setAddressdata] = useState([
    {
      AddressOf: "Home",
      Area: "UFE Nagar",
      LocationMark: "PP Mall",
      city: "Bangalore",
      statename: "Karnataka",
      pincode: "1270056",
      key: Math.random().toString(),
      phoneno: "1290562310",
    },
    {
      AddressOf: "Home",
      Area: "UFE Nagar",
      LocationMark: "PP Mall",
      city: "Bangalore",
      statename: "Karnataka",
      pincode: "1270056",
      key: Math.random().toString(),
      phoneno: "1290562310",
    },
    {
      AddressOf: "Home",
      Area: "UFE Nagar",
      LocationMark: "PP Mall",
      city: "Bangalore",
      statename: "Karnataka",
      pincode: "1270056",
      key: Math.random().toString(),
      phoneno: "1290562310",
    },
    {
      AddressOf: "Home",
      Area: "UFE Nagar",
      LocationMark: "PP Mall",
      city: "Bangalore",
      statename: "Karnataka",
      pincode: "1270056",
      key: Math.random().toString(),
      phoneno: "1290562310",
    },
  ]);

  const saved = useSelector((state) => state.saved);
  const { savedaddresses } = saved;
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setloading(false);
    console.log(savedaddresses);
  }, [savedaddresses]);
  return loading ? (
    <LoadingScreen></LoadingScreen>
  ) : savedaddresses.length >= 1 ? (
    <View style={{ width: "90%", marginBottom: 0, marginTop: 10 }}>
      <Text
        style={{
          fontWeight: "400",
          fontSize: 18,
          lineHeight: 20.48,
          marginBottom: limit === 3 ? 10 : 0,
        }}
      >
        Delivery Addressess
      </Text>

      {savedaddresses !== [] ? (
        <View
          style={{
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: "rgba(223, 243, 249, 0.6)",
            padding: 5,
         
            marginBottom: 10,
            height: (30 * height) / 100,
            borderRadius: 10,
          }}
        >
          {/* <View> */}
          <ScrollView>
            {
              savedaddresses.map((item,index)=>
              index <= limit - 1 ?
              <TouchableOpacity
          
              onPress={() =>Selectadress(item.key)}
            >
              <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    height: 58,
                    borderBottomColor: "black",
                    borderBottomWidth: 1,
                    
                    marginTop: 5,
                   
                    backgroundColor:
                      selected === item.key
                        ? "rgba(149, 112, 255, 0.2)"
                        : "rgba(223, 243, 249, 0.6)",
                        borderStyle:'dashed'
                  }}
              >
              <Text
                style={{
                  fontWeight: "700",
                  fontSize: 14,
                  lineHeight: 16.48,
                }}
              >
                {item.Addressof}
              </Text>
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 14,
                  lineHeight: 16.48,
                }}
              >
                {item.Area}, {item.LocationMark}, {item.city},
                {item.statename},{item.pincode}
                {item.AddressOf}
              </Text>

              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 14,
                  lineHeight: 16.48,
                }}
              >
                phone number:{item.phoneno}
              </Text>
              </View>
            </TouchableOpacity>:null
              )
            }
            {/* <FlatList
              data={savedaddresses}
              renderItem={({ item, index }) =>
                index <= limit - 1 ? (
                  <TouchableOpacity
                    style={{
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      height: 58,
                      borderBottomColor: "black",
                      borderBottomWidth: 2,
                      marginTop: 5,
                      backgroundColor:
                        selected === item.key
                          ? "rgba(149, 112, 255, 0.2)"
                          : "rgba(223, 243, 249, 0.6)",
                    }}
                    onPress={() =>Selectadress(item.key)}
                  >
                    <Text
                      style={{
                        fontWeight: "700",
                        fontSize: 14,
                        lineHeight: 16.48,
                      }}
                    >
                      {item.AddressOf}
                    </Text>
                    <Text
                      style={{
                        fontWeight: "400",
                        fontSize: 14,
                        lineHeight: 16.48,
                      }}
                    >
                      {item.Area}, {item.LocationMark}, {item.city},
                      {item.statename},{item.pincode}
                      {item.AddressOf}
                    </Text>

                    <Text
                      style={{
                        fontWeight: "400",
                        fontSize: 14,
                        lineHeight: 16.48,
                      }}
                    >
                      phone number:{item.phoneno}
                    </Text>
                  </TouchableOpacity>
                ) : null
              }
            ></FlatList> */}
            {limit === 3 ? (
              <View style={{ flexDirection: "column"}}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "400",
                      lineHeight: 18.62,
                    }}
                  >
                    ...Other saved addresses
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Saved Addresses")}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "400",
                        color: "rgba(13, 134, 170, 1)",
                      }}
                    >
                      {">>>"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              
            ) : null}
            </ScrollView>
          {/* </View> */}
        </View>
      ) : (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              backgroundColor: "rgba(149, 112, 255, 1)",
              marginTop: 15,
              marginBottom: 15,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "400",
                lineHeight: 20.31,
                textAlign: "center",
                padding: 10,
              }}
            >
              No Addresses saved.
            </Text>
          </View>
        </View>
      )}
       <View
            style={{
              display:limit!==3?"none":"flex",
              justifyContent: "space-between",
              flexDirection: "row",
              paddingTop:10,
              paddingBottom:10,
              borderRadius:10,
              backgroundColor: "rgba(223, 243, 249, 0.6)",
              // borderColor:'red',
              // borderWidth:5,
            
            }}
          >
            <Text
              style={{ fontWeight: "400", fontSize: 24, lineHeight: 31.92,marginLeft:10 }}
            >
              Add Address
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "rgba(168, 235, 255, 1)",
                height: 32,
                width: 32,
               marginRight:10,
                borderRadius: 8,
              }}
              onPress={()=>navigation.navigate("Saved Addresses")}
            >
              <MaterialCommunityIcons
                name="plus"
                size={30}
                style={{
                  color: "#0D86AA",
                }}
              />
            </TouchableOpacity>
          </View>
    </View>
  ) : (
    <View
      style={{
        backgroundColor: "rgba(149, 112, 255, 1)",
        marginTop: 15,
        marginBottom: 15,
        borderRadius: 10,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: "400",
          lineHeight: 20.31,
          textAlign: "center",
          padding: 10,
        }}
      >
        No Addresses saved.
      </Text>
    </View>
  );
};

export default SavedAddressbar;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  mainbg: {
    backgroundColor: "white",
  },
  maintextstyle: {
    fontSize: 24,
    marginTop: 20,
    fontWeight: "700",
    lineHeight: 27.31,
    textAlign: "center",
  },
  submaintextstyle: {
    margin: 20,
    fontWeight: "700",
    textAlign: "center",
    fontSize: 36,
    lineHeight: 42.19,
  },
  mainwrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  inputscontainer: {
    margin: 40,
    marginTop: 20,
  },
  inputwrapper: {
    margin: 5,

    color: "black",
  },
  buttonwrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 4,
    padding: 5,
    fontSize: 14,
    lineHeight: 19.93,
    fontWeight: "400",
  },
  buttonstyle: {
    backgroundColor: "#ffffff",
    fontWeight: "bold",
    borderRadius: 15,
    width: 88,
    height: 37,
  },

  mainwrapper: {
    marginTop: 10,
    justifyContent: "center",
    alignContent: "center",
  },
});
