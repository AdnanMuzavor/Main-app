import React, { useState, useEffect,useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Dimensions, PixelRatio } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";
import { signout, VerifyAccess } from "../actions/UserActions";

const Userscreen = ({ navigation }) => {
  const { width, height } = Dimensions.get("window");
  const [active, setactive] = useState(false);
  const scrollRef=useRef();
  const Signouthandler = () => {
    dispatch(signout());
    navigation.navigate("Login");
  };

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      if (!userInfo.access) {
        navigation.navigate("Login");
      }
    } else {
      navigation.navigate("Login");
    }
     const Scroller=()=>{
       scrollRef.current?.scrollTo({
         y:0,
         animated:true,
       })
     }
     Scroller();
  }, [userInfo]);

  return (
    <SafeAreaView>
      <ScrollView ref={scrollRef}>
        {/* <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          marginTop: height / 10,
          marginLeft: width / 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <MaterialCommunityIcons
            name="arrow-left"
            style={{
              borderRadius: 8,
              marginRight: 14,
            }}
            color={"black"}
            size={24}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 24, fontWeight: "700", lineHeight: 27.31 }}>
          Account details
        </Text>
      </View> */}
        <View
          style={{
            padding: 40,
            paddingTop: 0,
            width: width,
            height: height,
            backgroundColor: "#ffffff",
          }}
        >
          <Text
            style={{
              fontSize: 28,
              fontWeight: "700",
              marginLeft: 1,
              marginBottom: 10,
              lineHeight: 36.4,
              marginTop: height / 15,
              color:'black'
            }}
          >
            
            {
              userInfo?userInfo.username?`Hi ${userInfo.username},`:"Hi User,":"Hi User"
            }
          </Text>
          <Text
            style={{
              marginLeft: 36,
              fontWeight: "400",
              fontSize: 18,
              lineHeight: 23.4,
              color:'black'
            }}
          >
            Making your life easy with misui India
          </Text>
          <View style={{ marginTop: height / 15, fontSize: 20 }}>
          {/* {userInfo ? (
              userInfo.access ? (
                <>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Login")}
                  >
                    <Text style={styles.fontstyle}>
                      Login with another account
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setactive(!active);
                    }}
                  >
                    <Text style={styles.fontstyle}>Log out</Text>
                  </TouchableOpacity>
                </>
              ) : null
            ) : null} */}

            {userInfo ? (
              userInfo.access ? (
                <>
                  <TouchableOpacity
                   onPress={() => navigation.navigate("User Details")}
                  >
                    <Text style={styles.fontstyle}>User Details</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Orders")}
                  >
                    <Text style={styles.fontstyle}>Orders</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Saved Products")}
                  >
                    <Text style={styles.fontstyle}>Saved products</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Saved Stores")}
                  >
                    <Text style={styles.fontstyle}>Saved stores</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Saved Addresses")}
                  >
                    <Text style={styles.fontstyle}>Saved addresses</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Saved Blogs")}
                  >
                    <Text style={styles.fontstyle}>Saved Blogs</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={styles.fontstyle}>Refer a friend</Text>
                  </TouchableOpacity>
                </>
              ) : null
            ) : null}


{

  !userInfo?<>
   <TouchableOpacity
                    onPress={() => navigation.navigate("Login")}
                  >
                    <Text style={styles.fontstyle}>
                      Login/Signup
                    </Text>
                  </TouchableOpacity>
  
  </>:null
}
            <TouchableOpacity>
              <Text style={styles.fontstyle}>Support</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.container}>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={active}
                  onRequestClose={() => {
                    console.warn("closed");
                  }}
                >
                  <View style={styles.container}>
                    <View style={styles.View}>
                      <Text style={styles.text}>Log-Out?</Text>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <TouchableOpacity
                          style={{
                            width: 51,
                            height: 24,
                            marginLeft: 20,
                            backgroundColor: "rgba(149, 112, 255, 0.1)",
                            borderRadius: 20,
                          }}
                          onPress={() => {
                            setactive(!active);
                            Signouthandler();
                          }}
                        >
                          <Text
                            style={{
                              fontWeight: "400",
                              fontSize: 18,
                              lineHeight: 20.41,
                              textAlign: "center",
                            }}
                          >
                            Yes
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          title="No"
                          style={{
                            width: 51,
                            height: 24,
                            marginRight: 20,
                            backgroundColor: "rgba(149, 112, 255, 0.7)",
                            borderRadius: 20,
                          }}
                          onPress={() => {
                            setactive(!active);
                          }}
                        >
                          <Text
                            style={{
                              fontWeight: "400",
                              fontSize: 18,
                              lineHeight: 20.41,
                              textAlign: "center",
                            }}
                          >
                            No
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.fontstyle}>About</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.fontstyle}>Terms and conditions</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={()=>navigation.navigate("Signup")}>
            <Text style={styles.fontstyle}>Signup</Text>
          </TouchableOpacity> */}
            {/* {userInfo ? (
              userInfo.access ? (
                <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                  <Text style={styles.fontstyle}>
                    Signup with another account
                  </Text>
                </TouchableOpacity>
              ) : null
            ) : null} */}
            {userInfo ? (
              userInfo.access ? (
                <>
                
                  <TouchableOpacity
                    onPress={() => {
                      setactive(!active);
                    }}
                  >
                    <Text style={styles.fontstyle}>Log out</Text>
                  </TouchableOpacity>
                </>
              ) : null
            ) : null}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Userscreen;

const styles = StyleSheet.create({
  fontstyle: {
    fontSize: 18,
    lineHeight: 20.48,
    margin: 10,
    fontWeight: "400",
    borderStyle: "dotted",
              borderBottomColor: "rgba(201, 201, 201, 1)",
              borderBottomWidth: 2,
              color:'black'
  },
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
  View: {
    backgroundColor: "white",
    height: 120,
    width: 250,
    borderRadius: 15,
    flexDirection: "column",
    justifyContent: "space-around",
    margin: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "black",
  },
  text: {
    fontSize: 24,
    fontWeight: "400",
    lineHeight: 27.31,
    color: "black",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    margin: 20,
    width: 200,
  },
});
