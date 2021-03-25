import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';

import Colors from '../constants/Colors';

const TextAndInput = props => {
  return (
    <View style={styles.textInput}>
      <Text style={styles.text}>{props.text}</Text>
      <TextInput
        {...props}
        style={{...styles.borderInput, ...props.style}}
        placeholder={props.placeholder}
        blurOnSubmit
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 16,
    paddingRight: 16,
  },
  text: {
    color: Colors.primary,
    fontWeight: 'bold',
  },
  borderInput: {
    width: '60%',
    height: 36,
    borderRadius: 8,
    borderWidth: 1,
    paddingLeft: 12,
    paddingRight: 12,
    borderColor: Colors.gray,
  },
});

export default TextAndInput;
