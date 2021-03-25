import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

import Colors from '../constants/Colors';

const StartScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Veroshop</Text>
      <Image source={require('../assets/logo_veroshop.png')} />
      <View style={styles.btnContainer}>
        <View style={styles.btn}>
          <TouchableOpacity style={styles.btnSignUp}>
            <Text
              style={styles.textOpacity}
              onPress={() => navigation.navigate('Register')}>
              SIGN UP
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity style={styles.btnLogin}>
            <Text
              style={styles.textOpacity}
              onPress={() => navigation.navigate('Login')}>
              LOGIN
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: Colors.backgroundStartScreen,
  },
  text: {
    fontSize: 48,
    color: 'white',
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  btn: {
    width: '80%',
    marginTop: 20,
  },
  textOpacity: {
    textAlign: 'center',
    color: 'white',
  },
  btnSignUp: {
    backgroundColor: Colors.primary,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
  },
  btnLogin: {
    backgroundColor: Colors.accent,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
  },
});

export default StartScreen;
