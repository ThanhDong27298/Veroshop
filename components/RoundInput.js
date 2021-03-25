import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

import Colors from '../constants/Colors';

const RoundInput = props => {
  return (
    <View>
      <TextInput
        {...props}
        style={{...styles.borderInput, ...props.style}}
        placeholder={props.placeholder}
        blurOnSubmit
        autoCapitalize="none"
        maxLength={1}
        autoCorrect={false}
        keyboardType="number-pad"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  borderInput: {
    height: 60,
    width: 60,
    borderRadius: 12,
    borderWidth: 1,
    marginLeft: 4,
    marginRight: 4,
    textAlign: 'center',
    fontSize: 32,
    borderColor: Colors.gray,
  },
});

export default RoundInput;
