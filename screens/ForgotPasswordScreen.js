import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';

import Input from '../components/Input';

import Colors from '../constants/Colors';

const ForgotPasswordScreen = ({navigation}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.screen}>
        <View style={styles.forgotPasswordScreen}>
          <View style={styles.resetPassword}>
            <Text>Enter your registered email ID</Text>
            <Input style={styles.textInput} />
          </View>

          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.btnReset}
              onPress={() => navigation.navigate('OTP')}>
              <Text style={styles.textOpacity}>RESET</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnCancel}
              onPress={() => navigation.goBack()}>
              <Text style={styles.textOpacity}>CANCEL</Text>
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
  forgotPasswordScreen: {
    flex: 1,
    justifyContent: 'space-between',
  },
  resetPassword: {
    paddingTop: 20,
    paddingLeft: 16,
    paddingRight: 16,
  },
  textInput: {
    marginTop: 20,
  },
  btnContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 20,
  },
  btnReset: {
    backgroundColor: Colors.gray,
    width: 100,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 10,
    margin: 10,
  },
  btnCancel: {
    backgroundColor: Colors.primary,
    width: 100,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 10,
    margin: 10,
  },
  textOpacity: {
    textAlign: 'center',
    color: 'white',
  },
});

export default ForgotPasswordScreen;
