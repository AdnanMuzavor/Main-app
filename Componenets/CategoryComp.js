import React from 'react';
import { View,Text } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
const CategoryComp=({categories,navigation})=>{
    return(
        <>
        {categories.map((e, i) =>
            i % 2 === 0 ? (
              <View key={i + 1000} style={{ width: 150 }}>
                <TouchableOpacity
                onPress={()=>navigation.navigate("Category",e.val)}
                >
                <Text
                  key={e.key}
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    textAlign: "center",
                    padding: 10,
                    margin: 5,
                    backgroundColor: "#9570FF1A",
                    borderRadius: 15,
                    fontSize: 16,
                    color:'black'
                  }}
                >
                  {e.val}
                </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={{ width: 150 }}>
                <TouchableOpacity
                 onPress={()=>props.navigation.navigate("Category",e.val)}
                >
                <Text
                  key={e.key}
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    padding: 10,
                    margin: 5,
                    color:'black',
                    backgroundColor: "rgba(111, 207, 151, 0.1)",
                    borderRadius: 15,
                    fontSize: 16,
                    textAlign: "center",
                  }}
                >
                  {e.val}
                </Text>
                </TouchableOpacity>
              </View>
            )
          )}
    </>)
}

export default CategoryComp;