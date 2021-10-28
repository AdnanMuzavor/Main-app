import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Dimensions, PixelRatio} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import {register} from '../actions/UserActions';
import LoadingScreen from './Loading';
import * as Animatable from 'react-native-animatable';

const SignupScreen = ({navigation}) => {
  const {width, height} = Dimensions.get('window');
  const [seeconfirmpassword, setseeconfirmpassword] = useState(true);
  const [seepassword, setseepassword] = useState(true);
  const [username, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [cpassword, setcpassword] = useState('');
  const [phno, setphno] = useState('');
  const [referrralcode, setreferralcode] = useState('');

  const userRegister = useSelector(state => state.userRegister);

  const {userInfo, loading, error} = userRegister;
  const dispatch = useDispatch();

  const submitHandler = () => {
    if (password !== cpassword) {
      alert('Password and confirm password are not matching');
    } else {
      dispatch(register(username, phno, password));
    }
  };
  useEffect(() => {
    if (userInfo) {
      navigation.navigate('Login');
    }
  }, [userInfo]);
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          {loading ? (
            <LoadingScreen></LoadingScreen>
          ) : (
            <KeyboardAvoidingView behavior="height">
              <ScrollView>
                <View
                  style={{
                    width: width,
                    height: height,
                    backgroundColor: '#ffffff',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: (5 * height) / 100,
                    }}>
                    <Text
                      style={{
                        fontWeight: '700',
                        fontFamily: 'DM Sans',
                        fontSize: 24,
                        lineHeight: 27.31,
                        textAlign: 'center',
                        color: 'black',
                      }}>
                      Welcome to <Text style={{color: 'green'}}>Misui</Text>{' '}
                      India
                    </Text>
                  </View>

                  <Animatable.View
                    style={{
                      backgroundColor: 'blue',
                      height: (90 * height) / 100,
                      borderTopRightRadius: 30,
                      borderTopLeftRadius: 30,
                      flexDirection: 'column',
                      justifyContent: 'space-evenly',
                      shadowColor: 'black',

                      backgroundColor:
                        'rgba(221, 255, 245, 0.44),rgba(255,255,255, 1),rgba(248, 254, 238, 1)',
                      // shadowRadius:10,
                      // shadowOffset:{
                      //   width:10,
                      //   height:31
                      // },
                      // shadowOpacity:1,
                    }}>
                    <View style={styles.mainwrapper}>
                      <Text
                        name="Signupscreentop"
                        style={styles.submaintextstyle}>
                        Sign - Up
                      </Text>
                    </View>
                    <View style={styles.inputscontainer}>
                      {/* <View style={styles.inputwrapper}>
                  {
              error!==""?<View style={styles.inputwrapper}><Text>{error}</Text></View>:null
            }
              <TextInput
                name="name"
                placeholder="Enter user name"
                value={username}
                onChangeText={(typed) => setusername(typed)}
                autoCapitalize="none"
                style={styles.input}
              />
            </View>
            <View style={styles.inputwrapper}>
              <TextInput
                name="password"
                placeholder="Enter user password"
                value={password}
                onChangeText={(typed) => setpassword(typed)}
                autoCapitalize="none"
                style={styles.input}
                secureTextEntry={true}
              />
            </View> */}
                      <View style={styles.inputwrapper}>
                        <TextInput
                          name="name"
                          style={styles.input}
                          placeholder="Enter user name"
                          value={username}
                          onChangeText={typed => setname(typed)}
                          autoCapitalize="none"
                        />
                      </View>
                      <View style={styles.inputwrapper}>
                        <TextInput
                          name="email"
                          style={styles.input}
                          placeholder="Enter user email"
                          value={email}
                          onChangeText={typed => setemail(typed)}
                          autoCapitalize="none"
                        />
                      </View>
                      <View style={styles.inputwrapper}>
                        <TextInput
                          name="password"
                          style={styles.input}
                          placeholder="Enter user password"
                          value={password}
                          onChangeText={typed => setpassword(typed)}
                          autoCapitalize="none"
                          secureTextEntry={seepassword}
                        />
                      </View>
                      <View style={styles.inputwrapper}>
                        <TextInput
                          name="cpassword"
                          style={styles.input}
                          placeholder="re-enter your password"
                          value={cpassword}
                          onChangeText={typed => setcpassword(typed)}
                          autoCapitalize="none"
                          secureTextEntry={seeconfirmpassword}
                        />
                      </View>
                      <View style={styles.inputwrapper}>
                        <TextInput
                          name="phno"
                          placeholder="Enter your phno"
                          value={phno}
                          onChangeText={typed => setphno(typed)}
                          style={styles.input}
                          autoCapitalize="none"
                        />
                      </View>
                      <View style={styles.inputwrapper}>
                        <TextInput
                          name="phno"
                          placeholder="Enter your phno"
                          value={referrralcode}
                          onChangeText={typed => setreferralcode(typed)}
                          style={styles.input}
                          autoCapitalize="none"
                        />
                      </View>
                    </View>
                    <View style={styles.buttonwrapper}>
                      <View>
                        <TouchableOpacity
                          onPress={submitHandler}
                          style={{
                            width: 98,
                            height: 47,
                            backgroundColor: '#ffffff',
                            borderRadius: 15,
                          }}>
                         
                          <Text
                            style={{
                              textAlign: 'center',
                              padding: 10,
                              fontSize: 18,
                              fontWeight: '700',
                              lineHeight: 20.48,
                              color: 'black',
                            }}>
                            Sign-up
                          </Text>
                          {/* </Pressable> */}
                        </TouchableOpacity>
                      </View>

                      <View style={{marginTop: 10}}>
                        <TouchableOpacity
                          onPress={() => navigation.navigate('Login')}>
                          <Text
                            style={{
                              marginTop: 12,
                              textAlign: 'center',
                              fontSize: 14,
                              lineHeight: 15.93,
                              color: 'black',
                            }}>
                            Login
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </Animatable.View>
                </View>
              </ScrollView>
            </KeyboardAvoidingView>
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default SignupScreen;

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
    color: 'black',
  },
  mainwrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
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
