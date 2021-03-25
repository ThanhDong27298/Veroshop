import React from 'react';
import {Image, StyleSheet} from 'react-native';

const HeaderButton = () => {
  return (
    <Image
      style={styles.imageBackButton}
      source={require('../assets/chevron-left.png')}
    />
  );
};

const styles = StyleSheet.create({
  imageBackButton: {
    width: 32,
    height: 32,
  },
});

export default HeaderButton;
