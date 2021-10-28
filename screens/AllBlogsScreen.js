import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {Dimensions, PixelRatio} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categories from '../Data/Categories';
import blogs from '../Data/Blogs';
import {marginRight, marginTop} from 'styled-system';
import {SafeAreaView} from 'react-native-safe-area-context';
import CategoryComp from '../Componenets/CategoryComp';
const {width, height} = Dimensions.get('window');
const AllBlogs = props => {
  return (
    <>
      {/* <ScrollView style={{marginBottom:10}}> */}
      <View
        style={{
          width: width,
          backgroundColor: '#ffffff',
          height: (30 * height) / 100,
        }}>
        <View
          style={{
            marginLeft: width / 15,
            marginRight: width / 10,
            marginTop: height / 40,
          }}>
          <Text style={styles.categorystyle}>Categories</Text>
          <ScrollView horizontal={true}>
            <View style={{flexDirection: 'row', marginBottom: 15}}>
              <CategoryComp
                categories={categories}
                navigation={props.navigation}
              />
            </View>
          </ScrollView>
        </View>

        <View
          style={{
            marginLeft: width / 15,
            marginRight: width / 10,
            marginTop: 15,
          }}>
          <Text style={styles.categorystyle}>Trending blog posts</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'column',
          width: width,
          height: (80 * height) / 100,
          backgroundColor: 'white',
          paddingLeft: width / 20,
        }}>
        <ScrollView>
          {blogs.map((item, i) => (
            <TouchableOpacity
              key={i + 100}
              style={{
                position: 'relative',
                height: 180,
                width: '100%',
              }}
              onPress={() => props.navigation.navigate('blog', item)}>
              <Image
                source={item.img}
                style={{
                  width: (90 * width) / 100,
                  height: (20 * height) / 100,
                  borderRadius: 30,
                  resizeMode: 'cover',
                }}></Image>
              <Text
                style={{
                  top: -70,
                  left: 15,

                  backgroundColor:
                    'linear-gradient(282.63deg, rgba(255, 255, 255, 0.44) 24.04%, #FFFFFF 79.72%)',

                  fontWeight: '700',
                  width: '85%',
                  textAlign: 'center',
                  fontSize: 16,
                  lineHeight: 20.45,
                  borderRadius: 15,
                  height: 63,
                  color: 'black',
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default AllBlogs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
  },
  titlestyle: {
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 36.4,
  },
  categorystyle: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 23.4,
    marginBottom: 10,
    color: 'black',
  },
  categorydatastyle1: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    margin: 5,
    backgroundColor: '#9570FF1A',
    borderRadius: 15,
    fontSize: 16,
  },
  categorydatastyle2: {
    color: 'black',
    fontWeight: 'bold',
    padding: 10,
    margin: 5,
    backgroundColor: 'rgba(111, 207, 151, 0.1)',
    borderRadius: 15,
    fontSize: 16,
    textAlign: 'center',
  },
});
