import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';

import Colors from './constants/Colors';
import Key from './constants/Key';
import RegisterScreen from './screens/RegisterScreen';
import StartScreen from './screens/StartScreen';
import LoginScreen from './screens/LoginScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import OTPScreen from './screens/OTPScreen';
import HomeScreen from './screens/HomeScreen';

import HeaderButton from './components/HeaderButton';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export default function App() {
  const hasLogin = async () => {
    try {
      let value = await AsyncStorage.getItem(Key.logIn);
      if (value !== null) {
        return 'Home';
      } else {
        return 'Start';
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: Colors.primary,
          headerStyle: {
            shadowColor: 'black',
            shadowOffset: {width: 0, height: 2},
            shadowRadius: 6,
            shadowOpacity: 0.26,
            elevation: 8,
          },
          headerTitleAlign: 'center',
          headerBackImage: HeaderButton,
          headerBackTitleVisible: false,
        }}
        initialRouteName={hasLogin}>
        <Stack.Screen
          options={{headerShown: false}}
          name="Start"
          component={StartScreen}
        />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={({navigation}) => ({
            headerLeft: () => (
              <HeaderBackButton
                onPress={() => navigation.popToTop()}
                backImage={HeaderButton}
                labelVisible={false}
              />
            ),
          })}
        />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="OTP" component={OTPScreen} />
        <Stack.Screen
          options={{headerShown: false, gestureEnabled: false}}
          name="Home"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
