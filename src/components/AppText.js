import React from 'react';
import {StyleSheet, Platform, Text} from 'react-native';

const AppText = ({children}) => {
  return <Text style={styles.text}>{children}</Text>;
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    color: 'tomato',
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});
