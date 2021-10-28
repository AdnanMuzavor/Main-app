import React, {useState} from 'react';
import {View, Text, StyleSheet,Image} from 'react-native';
import {Dimensions, PixelRatio} from 'react-native';
import { Checkbox } from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ReturnReasonslist from '../Data/ReturnReasons';
// import { launchCamera } from "react-native-image-picker";
import ImagePicker from 'react-native-image-crop-picker';
import ImgUploadOption from '../Componenets/ImageUploadOptions';

const ReturnScreen = props => {
  const [isSelected, setSelection] = useState(false);
  const [active2,setactive2]=useState(false)
  const [Returnreaons, setreturnreasons] = useState(ReturnReasonslist);

  const [img,setimg]=useState("");
  const Selectionhandler = id => {
    const Boollist = Returnreaons.map(e =>
      e.key === id ? (e.selected = true) : (e.selected = false),
    );

    setreturnreasons(prev =>
      prev.map((e, i) => {
        return {...e, selected: Boollist[i]};
      }),
    );
  };
  const OpenCamera=()=>{
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setimg(image.path)
      console.log(image.path)
    });
  }
  const choosefrom=()=>{
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
      setimg(image.path)
      
      console.log(image.path)
    });
  }

  const closer=()=>{
    setactive2(false);
  }
  const {width, height} = Dimensions.get('window');
  return (
    <View
      style={{
        width: width,
        height: height,
        backgroundColor: '#ffffff',
        flexDirection: 'column',
      }}>
      <View
        style={{
          backgroundColor: 'rgba(111, 207, 151, 0.1)',
          alignItems: 'center',
          margin: 10,
          marginBottom: 0,
          marginTop: 20,
        }}>
        <Text
          style={{
            fontWeight: '400',
            fontSize: 36,
            lineHeight: 46.01,
            margin: 15,
          }}>
          Reason for return{' '}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'rgba(254, 242, 238, 1)',

          margin: 10,
          marginTop: 0,
        }}>
        <View style={{margin: 12}}>
          <Text style={{fontWeight: '400', fontSize: 14, lineHeight: 17.89}}>
            Select the appropriate reason
          </Text>
          {Returnreaons.map(e => {
            return (
              <TouchableOpacity
                style={styles.checkboxContainer}
                key={e.key}
                onPress={() => Selectionhandler(e.key)}>
                <Checkbox value={e.selected} style={styles.checkbox} status={e.selected?'checked':'unchecked'}/>
                <Text style={styles.label}>{e.reason}</Text>
              </TouchableOpacity>
            );
          })}
          <Text
            style={{
              fontWeight: '400',
              fontSize: 14,
              lineHeight: 17.89,
              paddingBottom: 12,
              borderBottomColor: 'black',
              borderBottomWidth: 2,
            }}>
            Describe the reason
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text>Choose the images</Text>
            <TouchableOpacity
              style={{backgroundColor: 'rgba(149, 112, 255, 1)'}}
              onPress={()=>setactive2(true)}>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 14,
                  lineHeight: 17.89,
                  padding: 5,
                }}>
                upload
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{width:100,height:100,backgroundColor:'red',marginLeft:10,marginBottom:10}}>
        <Image
        style={{width:100,height:100}}
        source={{uri:img}}
        />
      </View>
      </View>
    
 {/* <FilterOption active={active2} Handler={Active2AndFilter} /> */}
 <ImgUploadOption
 active={active2}
 Handler1={OpenCamera}
 Handler2={choosefrom}
 Handler3={closer}
 
 />
    </View>
    
  );
};

export default ReturnScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
});
