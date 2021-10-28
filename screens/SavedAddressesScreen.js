import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {

  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import SavedAddressbar from '../Componenets/SavedAddressbar';
import {useDispatch, useSelector} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {SavedAddress} from '../actions/SavedActions';

import {VerifyAccess} from '../actions/UserActions';
const {width, height} = Dimensions.get('window');
const SavedAddressesScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const userSignin = useSelector(state => state.userSignin);
  const {userInfo, loading, error} = userSignin;
  useEffect(() => {
    if (userInfo) {
      dispatch(VerifyAccess(userInfo.access, userInfo.refresh));
    }
    if (!userInfo.access) {
      props.navigation.navigate('Login');
    }
  }, [savedaddresses]);

  const [Area, setArea] = useState('');
  const [addressofplace, setaddressofplace] = useState('');
  const [locationmark, setlocationmark] = useState('');
  const [city, setcity] = useState('');
  const [statename, setstatename] = useState('');
  const [pincode, setpincode] = useState('');
  const [phoneno, setphoneno] = useState('');
  const [Addressdata, setAddressdata] = useState([
    {
      AddressOf: 'Home',
      Area: 'UFE Nagar',
      LocationMark: 'PP Mall',
      city: 'Bangalore',
      statename: 'Karnataka',
      pincode: '1270056',
    },
    {
      AddressOf: 'Home',
      Area: 'UFE Nagar',
      LocationMark: 'PP Mall',
      city: 'Bangalore',
      statename: 'Karnataka',
      pincode: '1270056',
    },
    {
      AddressOf: 'Home',
      Area: 'UFE Nagar',
      LocationMark: 'PP Mall',
      city: 'Bangalore',
      statename: 'Karnataka',
      pincode: '1270056',
    },
    {
      AddressOf: 'Home',
      Area: 'UFE Nagar',
      LocationMark: 'PP Mall',
      city: 'Bangalore',
      statename: 'Karnataka',
      pincode: '1270056',
    },
  ]);
  const [addbar, setaddbar] = useState('yes');
  const [bg, setbg] = useState('yes');
  const AddAddressHandlker = () => {
    setaddbar('no');
    setbg('no');
    setaddressofplace('');
    setArea('');
    setlocationmark('');
    setcity('');
    setstatename('');
    setpincode('');
    setphoneno('');
  };
  const GobackTolist = () => {
    setaddbar('yes');
  };

  const AddToSaveAddresseshandler = () => {
    const key = Math.random().toString();
    dispatch(
      SavedAddress(
        addressofplace,
        Area,
        locationmark,
        city,
        statename,
        pincode,
        phoneno,
        key,
      ),
    );
    setaddbar('yes');
  };
  const saved = useSelector(state => state.saved);
  const {savedaddresses} = saved;

  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        width: width,
        height: height,
        backgroundColor: '#ffffff',
      }}>
      <View
        style={{
          width: width,
          display: addbar === 'no' ? 'none' : 'flex',
          // marginLeft: 3,
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
        }}>
        <SavedAddressbar limit={30} />
      </View>
      <ScrollView
        horizontal={false}
        style={{
          backgroundColor: '#ffffff',

          width: '90%',
        }}>
        <View
          style={{
            padding: 25,
            justifyContent: 'space-between',
            flexDirection: 'row',

            backgroundColor: 'rgba(223, 243, 249, 0.6)',
            display: addbar === 'no' ? 'none' : 'flex',
          }}>
          <Text style={{fontWeight: '400', fontSize: 24, lineHeight: 31.92}}>
            Add Address
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgba(168, 235, 255, 1)',
              height: 32,
              width: 32,
              marginRight: 5,
              borderRadius: 8,
            }}
            onPress={AddAddressHandlker}>
            <MaterialCommunityIcons
              name="plus"
              size={30}
              style={{
                color: '#0D86AA',
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            margin: 40,
            marginTop: 20,
            display: addbar === 'no' ? 'flex' : 'none',
            backgroundColor: 'rgba(223, 243, 249, 0.6)',
            borderStyle: 'dashed',
            borderWidth: 1,
          }}>
          <View
            style={{
              margin: 25,
              justifyContent: 'center',
              flexDirection: 'row',
              backgroundColor: 'rgba(223, 243, 249, 0.6)',
              padding: 5,
            }}>
            <Text style={{fontWeight: '400', fontSize: 24, lineHeight: 31.92}}>
              Add Address
            </Text>
          </View>
          <KeyboardAvoidingView behavior="height">
            {/* <KeyboardAvoidingView> */}
            <ScrollView>
              <View style={styles.inputwrapper}>
                <TextInput
                  name="Addressof"
                  style={styles.input}
                  placeholder="Address of which place, eg home"
                  value={addressofplace}
                  onChangeText={e => setaddressofplace(e)}
                  autoCapitalize="none"
                />
              </View>
              <View style={styles.inputwrapper}>
                <TextInput
                  name="Area"
                  style={styles.input}
                  placeholder="Enter your area/locality"
                  value={Area}
                  onChangeText={e => setArea(e)}
                  autoCapitalize="none"
                />
              </View>
              <View style={styles.inputwrapper}>
                <TextInput
                  name="location mark"
                  style={styles.input}
                  placeholder="Enter location mark, eg a mall"
                  value={locationmark}
                  onChangeText={e => setlocationmark(e)}
                  autoCapitalize="none"
                />
              </View>
              <View style={styles.inputwrapper}>
                <TextInput
                  name="city"
                  style={styles.input}
                  placeholder="Enter your city"
                  value={city}
                  onChangeText={e => setcity(e)}
                  autoCapitalize="none"
                />
              </View>
              <View style={styles.inputwrapper}>
                <TextInput
                  name="state name"
                  style={styles.input}
                  placeholder="Enter your state"
                  value={statename}
                  onChangeText={e => setstatename(e)}
                  autoCapitalize="none"
                />
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={styles.inputwrapper}>
                  <TextInput
                    name="pincode"
                    placeholder="Enter pincode"
                    value={pincode}
                    onChangeText={e => setpincode(e)}
                    style={styles.input}
                    autoCapitalize="none"
                  />
                </View>
                <View style={styles.inputwrapper}>
                  <TextInput
                    name="phno"
                    placeholder="Enter your phone no"
                    value={phoneno}
                    onChangeText={e => setphoneno(e)}
                    style={styles.input}
                    autoCapitalize="none"
                  />
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 8,
              marginLeft: 8,
              marginRight: 8,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'rgba(168, 235, 255, 1)',
                height: 38,
                width: 122,
                marginTop: 10,
                borderRadius: 8,
                justifyContent: 'center',
                flexDirection: 'row',
              }}
              onPress={AddToSaveAddresseshandler}>
              <Text
                style={{fontWeight: '400', textAlign: 'center', marginTop: 5}}>
                Add
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'rgba(168, 235, 255, 1)',
                height: 38,
                width: 122,
                marginTop: 10,
                borderRadius: 8,
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
              }}
              onPress={GobackTolist}>
              <Text
                style={{fontWeight: '400', textAlign: 'center', marginTop: 5}}>
                Choose from existing
              </Text>
            </TouchableOpacity>
          </View>
          {/* </KeyboardAvoidingView> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default SavedAddressesScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  mainbg: {
    backgroundColor: 'white',
  },
  maintextstyle: {
    fontSize: 24,
    marginTop: 20,
    fontWeight: '700',
    lineHeight: 27.31,
    textAlign: 'center',
  },
  submaintextstyle: {
    margin: 20,
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 36,
    lineHeight: 42.19,
  },
  mainwrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputscontainer: {
    margin: 40,
    marginTop: 20,
  },
  inputwrapper: {
    margin: 5,

    color: 'black',
  },
  buttonwrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 4,
    padding: 5,
    fontSize: 14,
    lineHeight: 19.93,
    fontWeight: '400',
  },
  buttonstyle: {
    backgroundColor: '#ffffff',
    fontWeight: 'bold',
    borderRadius: 15,
    width: 88,
    height: 37,
  },

  mainwrapper: {
    marginTop: 10,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
