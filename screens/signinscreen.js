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
import * as Animatable from 'react-native-animatable';
import {Dimensions, PixelRatio} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {linear} from 'react-native/Libraries/Animated/Easing';
import {useSelector, useDispatch} from 'react-redux';
import {register, signin} from '../actions/UserActions';
import LoadingScreen from './Loading';
const {width, height} = Dimensions.get('window');
function SigninScreen({navigation}) {
  const [email, setemail] = useState('');
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [error2, seterror] = useState('');

  const userSignin = useSelector(state => state.userSignin);
  const {userInfo, loading, error} = userSignin;
  const dispatch = useDispatch();

  const submitHandler = () => {
    if (username && password) {
      console.log(username);
      console.log(password);
      dispatch(signin(username, password));
    } else {
      seterror('Fields not filled properly.');
    }
  };
  useEffect(() => {
    if (userInfo) {
      if (!userInfo.access) {
        seterror('');
      } else {
        setusername('');
        setpassword('');
        navigation.navigate('Home');
        seterror('');
      }
    } else {
      seterror('');
    }
    if(error){
      seterror('Invalid Cridentials')
    }
  }, [userInfo]);

  return (
    <>
      <SafeAreaView>
        <KeyboardAvoidingView>
          {loading ? (
            <LoadingScreen></LoadingScreen>
          ) : (
            <KeyboardAvoidingView behavior="height">
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
                    marginTop: (10 * height) / 100,
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
                    Welcome to <Text style={{color: 'green'}}>Misui</Text> India
                  </Text>
                </View>

                <Animatable.View
                animation="fadeInUpBig"
                  style={{
                    backgroundColor: 'blue',
                    height: (80 * height) / 100,
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',

                    backgroundColor:
                      'rgba(221, 255, 245, 0.44),rgba(255,255,255, 1),rgba(248, 254, 238, 1)',
                  }}>
                  {/* <LinearGradient colors={['rgba(221, 255, 245, 0.44)','rgba(255, 255, 255, 1)','rgba(248, 254, 238, 1)']}> */}
                  <View style={styles.mainwrapper}>
                    <Text
                      name="Signupscreentop"
                      style={styles.submaintextstyle}>
                      LOGIN
                    </Text>
                  </View>
                  <View style={styles.inputscontainer}>
                    <View style={styles.inputwrapper}>
                      {error !== '' ? (
                        <View style={styles.inputwrapper}>
                          <Text style={{color: 'red'}}>{error2}</Text>
                        </View>
                      ) : null}
                      <TextInput
                        name="name"
                        placeholder="Enter user name"
                        value={username}
                        onChangeText={typed => setusername(typed)}
                        autoCapitalize="none"
                        style={styles.input}
                      />
                    </View>
                    <View style={styles.inputwrapper}>
                      <TextInput
                        name="password"
                        placeholder="Enter user password"
                        value={password}
                        onChangeText={typed => setpassword(typed)}
                        autoCapitalize="none"
                        style={styles.input}
                        secureTextEntry={true}
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
                        {/* <Pressable style={styles.buttonstyle}
            onPress={submitHandler}> */}
                        <Text
                          style={{
                            textAlign: 'center',
                            padding: 10,
                            fontSize: 18,
                            fontWeight: '700',
                            lineHeight: 20.48,
                          }}>
                          Login
                        </Text>
                        {/* </Pressable> */}
                      </TouchableOpacity>
                    </View>
                    <View style={{marginTop: 10}}>
                      <TouchableOpacity>
                        <Text
                          style={{
                            marginTop: 12,
                            textAlign: 'center',
                            fontSize: 18,
                            color: 'red',
                            marginTop: 10,
                          }}>
                          Forgotten password?
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{marginTop: 10}}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Signup')}>
                        <Text
                          style={{
                            marginTop: 12,
                            textAlign: 'center',
                            fontSize: 18,
                            color: 'black',
                          }}>
                          New user? Sign-up
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Animatable.View>
                {/* </LinearGradient> */}
              </View>
            </KeyboardAvoidingView>
          )}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  mainbg: {
    backgroundColor: 'white',
    margin: 10,
  },
  maintextstyle: {
    fontSize: 30,
    marginTop: 20,
    textAlign: 'center',
  },
  submaintextstyle: {
    fontSize: 36,
    textAlign: 'center',
    color: 'black',
    fontWeight: '700',
    lineHeight: 40.97,
  },
  mainwrapper: {
    marginTop: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  inputscontainer: {
    margin: 40,
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
    fontSize: 20,
  },
  buttonstyle: {
    backgroundColor: 'gray',
    fontWeight: 'bold',
    borderRadius: 10,
  },

  mainwrapper: {
    marginTop: 10,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
