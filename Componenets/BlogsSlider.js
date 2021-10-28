import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {View,Text,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
//Blogs Sliding component
import blogs from '../Data/Blogs';

const BlogsSlider=({navigation,height})=>{
    return(
       
<>
              {blogs.map((e, i) => (
                <TouchableOpacity
                  key={i + 100}
                  style={{ position: "relative" }}
                  onPress={() => navigation.navigate("blog", e)}
                >
                  <Image
                    source={e.img}
                    style={{ width: "92%", height: (80*height)/100, borderRadius: 30 }}
                  ></Image>
                  <Text
                    style={{
                      top: -70,
                      left: 18,
                      backgroundColor:
                        "linear-gradient(282.63deg, rgba(255, 255, 255, 0.44) 24.04%, #FFFFFF 79.72%)",
                      fontWeight: "700",
                      width: "80%",
                      textAlign: "center",
                      fontSize: 16,
                      lineHeight: 20.45,
                      borderRadius: 15,
                      height: 63,
                      color:'black'
                    }}
                  >
                    {e.name}
                  </Text>
                </TouchableOpacity>
              ))}
        
        </>
    )
}

export default BlogsSlider