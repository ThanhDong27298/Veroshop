import React from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Text,
} from 'react-native';

import TextAndInput from '../components/TextAndInput';

import Colors from '../constants/Colors';

const RegisterScreen = ({navigation}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.screen}>
        <View style={styles.registerScreen}>
          <View style={styles.textInputContainer}>
            <TextAndInput placeholder="John" text="First Name" />
            <TextAndInput placeholder="Alen" text="Last Name" />
            <TextAndInput
              placeholder="john@text.com"
              text="Email"
              keyboardType="email-address"
            />
            <TextAndInput
              placeholder="1231431442"
              text="Phone Number"
              keyboardType="number-pad"
            />
            <TextAndInput
              placeholder="Villa 112, XXX Street, KL, Malaysia"
              text="Address"
            />
            <TextAndInput
              placeholder="xxxx xxxx xxxx 2671"
              text="Credit Card"
              keyboardType="number-pad"
            />
            <TextAndInput
              placeholder="********************"
              text="Password"
              secureTextEntry
            />
            <TextAndInput
              placeholder="********************"
              text="Confirm Password"
              secureTextEntry
            />
          </View>
          <View style={styles.btn}>
            <TouchableOpacity
              style={styles.btnNext}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.textOpacity}>NEXT</Text>
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
  registerScreen: {
    flex: 1,
    justifyContent: 'space-between',
  },
  textInputContainer: {
    marginTop: 20,
  },
  btn: {
    alignItems: 'flex-end',
    marginRight: 20,
    marginBottom: 20,
  },
  btnNext: {
    backgroundColor: Colors.primary,
    width: 100,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 10,
  },
  textOpacity: {
    textAlign: 'center',
    color: 'white',
  },
});

export default RegisterScreen;
