import React, {useState} from 'react';
import {View, Image, Dimensions, StyleSheet} from 'react-native';
import img1 from '../Imgs/img1.jpg';
import img2 from '../Imgs/img2.jpg';
import user from '../Imgs/user.jpg';
import left from '../Imgs/left.jpg';
import shoe from '../Imgs/shoe.png';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const Images = [img1, img2, user, left, shoe];
const CarouselComp = () => {
  const {width, height} = Dimensions.get('window');
  const [active, setactive] = useState(0);

  const imgheight = (width * 100) / 60;
  return (
    <View>
      <ScrollView
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}>
        {Images.map((item, index) => (
          <Image
            key={index}
            source={item}
            style={{width: '100%', height: 220, resizeMode: 'cover'}}></Image>
        ))}
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          bottom: 0,
          alignSelf: 'center',
        }}>
        {Images.map((e, k) => (
          <TouchableOpacity onPress={() => setactive(k)}>
            <Text
              style={
                k === active ? styles.activedotstyling : styles.dotsstyling
              }>
              ⚪
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default CarouselComp;

const styles = StyleSheet.create({
  dotsstyling: {
    margin: 3,
    color: '#888',
  },
  activedotstyling: {
    margin: 3,
    color: '#fff',
  },
});
