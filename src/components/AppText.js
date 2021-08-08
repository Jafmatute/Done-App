import React from 'react';
import {StyleSheet, Platform, Text} from 'react-native';

import colors from '../config/colors';

const AppText = ({children, style}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});
