import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import RatingDisplay0 from './Rating0Comp';
import RatingDisplay5 from './Rating5Comp';
import RatingDisplay from './RatingGiver';

const StoresRender=({stores,navigation})=>{
    return stores.map((e, i) => (
        <TouchableOpacity
          key={i + 500}
          style={{
            flexDirection: "row",

            margin: 5,
          }}
          onPress={()=>navigation.navigate("store details",e)}
        >
          <Image
            source={e.img}
            style={{ width: 66, height: 66, borderRadius: 13 }}
          ></Image>
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                fontWeight: "400",
                fontSize: 16,
                lineHeight: 20.45,
                marginTop: 10,
                marginLeft: 40,
              }}
            >
              {e.name}
            </Text>

            <View
              style={{
                textAlign: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                width: 100,
                height: 50,
                marginTop: 10,
                marginLeft: 40,
              }}
            >
                {
                    e.rating===5?<RatingDisplay5/>:null
                }
                {
                    e.rating===0?<RatingDisplay0/>:null
                }
              <RatingDisplay
               Rating={e.rating}
              />
            </View>
          </View>
        </TouchableOpacity>
      ))
}

export default StoresRender;