import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';

import RoundInput from '../components/RoundInput';

import Colors from '../constants/Colors';

const OTPScreen = ({navigation}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.screen}>
        <View style={styles.oopScreen}>
          <View style={styles.oopContainer}>
            <Text style={styles.text}>
              Please enter your 6 digit OTP received on your registered mobile
              number
            </Text>
            <View style={styles.roundInputContainer}>
              <RoundInput />
              <RoundInput />
              <RoundInput />
              <RoundInput />
              <RoundInput />
              <RoundInput />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.textColorResend}>Not received OTP?</Text>
              <TouchableOpacity>
                <Text style={styles.textColorResend}> Click resend OTP</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btnReset}>
              <Text style={styles.textOpacity}>RESEND</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnCancel}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.textOpacity}>SUBMIT</Text>
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
  oopScreen: {
    flex: 1,
    justifyContent: 'space-between',
  },
  text: {
    marginLeft: 12,
  },
  oopContainer: {
    marginTop: 20,
  },
  roundInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
  },
  textContainer: {
    flexDirection: 'row',
    marginLeft: 12,
    marginTop: 12,
  },
  textColorResend: {
    color: Colors.gray,
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

export default OTPScreen;
