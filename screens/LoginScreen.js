import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import TextAndInput from '../components/TextAndInput';

import Colors from '../constants/Colors';
import Key from '../constants/Key';

const LoginScreen = ({navigation}) => {
  const [textInputValue, setTextInputValue] = useState('');

  const saveValue = () => {
    if (textInputValue) {
      AsyncStorage.setItem(Key.logIn, textInputValue);
      setTextInputValue('');
      navigation.navigate('Home');
    } else {
      Alert.alert('Please enter your email');
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.screen}>
        <View style={styles.loginScreen}>
          <Image source={require('../assets/logo_veroshop.png')} />
          <View>
            <TextAndInput
              style={styles.textInput}
              placeholder="John"
              text="Email"
              keyboardType="email-address"
              blurOnSubmit
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={data => setTextInputValue(data)}
              value={textInputValue}
            />
            <TextAndInput
              style={styles.textInput}
              placeholder=""
              text="Password"
              blurOnSubmit
              autoCapitalize="none"
              secureTextEntry
              autoCorrect={false}
            />
          </View>
          <View>
            <TouchableOpacity
              style={styles.btnLogin}
              onPress={() => {
                saveValue();
              }}>
              <View style={styles.btnContainer}>
                <Image
                  style={styles.imageLogin}
                  source={require('../assets/login.png')}
                />
                <Text style={styles.textOpacity}>LOGIN</Text>
                <View />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.textForgot}>Forgot your password?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.backgroundScreen,
  },
  loginScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingTop: 40,
  },
  textInput: {
    width: '76%',
  },
  btnLogin: {
    backgroundColor: Colors.accent,
    width: 240,
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 10,
  },
  textOpacity: {
    color: 'white',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 32,
  },
  imageLogin: {
    height: 28,
    width: 28,
  },
  textForgot: {
    textAlign: 'center',
    color: Colors.accent,
    marginTop: 8,
  },
});

export default LoginScreen;
