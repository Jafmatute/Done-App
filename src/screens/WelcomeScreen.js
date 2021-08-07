import React from 'react';
import {ImageBackground, Image, View, StyleSheet, Text} from 'react-native';

// config styles
import colors from '../config/colors';

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoIMG}
          source={require('../assets/logo-red.png')}
        />
        <Text style={styles.txtMessage}>Bienvenido/a</Text>
      </View>

      <View style={[styles.btn, styles.loginBTN]} />
      <View style={[styles.btn, styles.registerBTN]} />
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  btn: {
    width: '100%',
    height: 70,
  },
  loginBTN: {
    backgroundColor: colors.primary,
  },
  logoIMG: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 40,
    alignItems: 'center',
  },
  registerBTN: {
    backgroundColor: colors.secondary,
  },
  txtMessage: {
    color: 'red',
    top: 10,
    fontSize: 20,
  },
});
