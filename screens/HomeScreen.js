import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Colors from '../constants/Colors';
import Key from '../constants/Key';

const HomeScreen = ({navigation}) => {
  const removeValue = () => {
    AsyncStorage.removeItem(Key.logIn);
    navigation.navigate('Login');
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Home Screen</Text>
      <Button title="Logout" onPress={removeValue} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.backgroundScreen,
  },
  text: {
    fontSize: 40,
  },
  textStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 24,
  },
});

export default HomeScreen;
