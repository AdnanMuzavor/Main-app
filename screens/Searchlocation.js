import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Pressable,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import img1 from "../Imgs/img1.jpg";
import img2 from "../Imgs/img2.jpg";
import user from "../Imgs/user.jpg";
import left from "../Imgs/left.jpg";
import search from "../Imgs/search.png";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import shoe from "../Imgs/shoe.png";
const Searchlocation = ({ navigation }) => {
  const [location, setlocation] = useState("");
  const homePlace = {
    description: "Home",
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
  };
  const workPlace = {
    description: "Work",
    geometry: { location: { lat: 48.8496818, lng: 2.940881 } },
  };
  return (
    // <View
    //   style={{
    //     paddingLeft: 18,
    //     margipadding: 18,
    //     height: 500,
    //     backgroundColor: "red",
    //   }}
    // >
    //   <ScrollView>
    //     <View
    //       style={{
    //         backgroundColor: "#E6F2F4",
    //         margin: 10,
    //         borderRadius: 10,
    //         flexDirection: "row",
    //         justifyContent: "space-between",
    //         alignItems: "center",
    //         height: 50,
    //       }}
    //     >
    //       <TextInput
    //         style={{
    //           backgroundColor: "#DFF3F9",
    //           fontSize: 16,
    //           margin: 10,
    //           color: "#111417",
    //         }}
    //         placeholder="Search Products"
    //         value={location}
    //         onChangeText={(text) => setlocation(text)}
    //       ></TextInput>
    //       <View>
    //         <Text
    //           style={{ backgroundColor: "#DFF3F9", fontSize: 30, margin: 10 }}
    //         >
    //           <Image source={search} style={{ width: 26, height: 26 }} />
    //         </Text>
    //       </View>
    //     </View>
    //     <View>
    // <View style={{justifyContent:'center'}}>
          // <GooglePlacesAutocomplete
          //   placeholder="Search"
          //   onPress={(data, details = null) => {
          //     // 'details' is provided when fetchDetails = true
          //     console.log(data, details);
          //   }}
            
          //   listViewDisplayed='auto'
          //   fetchDetails={true}
          //   renderDescription={row=>row.description}
          //   currentLocation={true}
          //   currentLocationLabel="Current location"
          //   nearbyPlacesAPI='GooglePlacesSearch'
          //   GooglePlacesSearchQuery={{
          //     rankby:'distance'
          //   }}
          //   query={{
          //     key: "AIzaSyC2dgfF5s0TO5EWeVIgPuPo0q1mOtxx270",
          //     language: "en",
          //   }}
          //   GooglePlacesDetailsQuery={{
          //     fields:'formatted_address'
          //   }}
          //   filterReverseGeocodingByTypes={['locality','administrative_area_level_3']}
          //   predefinedPlaces={[homePlace,workPlace]}
          //   styles={{
          //     textInputContainer:{
          //       width:'80%'
          //     },
          //     description:{
          //       fontWeight:'bold'
          //     },
          //     predefinedPlacesDescription:{
          //       color:'black'
          //     }
          //   }}
          //   debounce={200}
          // />
       
    //   </ScrollView>
    // </View>
    <Text>Screen</Text>
  );
};

export default Searchlocation;
