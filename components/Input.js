import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

import Colors from '../constants/Colors';

const Input = props => {
  return (
    <View style={styles.textInput}>
      <TextInput
        {...props}
        style={{...styles.borderInput, ...props.style}}
        placeholder={props.placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  borderInput: {
    height: 36,
    borderRadius: 8,
    borderWidth: 1,
    paddingLeft: 12,
    paddingRight: 12,
    borderColor: Colors.gray,
  },
});

export default Input;
