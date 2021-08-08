import React from 'react';
import {ImageBackground, Image, View, StyleSheet, Text} from 'react-native';
import AppButton from '../components/AppButton';

// config styles
import colors from '../config/colors';

const WelcomeScreen = () => {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require('../assets/background.jpg')}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoIMG}
          source={require('../assets/logo-red.png')}
        />
        <Text style={styles.txtMessage}>Bienvenido/a</Text>
      </View>

      <View style={styles.btnContainer}>
        <AppButton title="Inicio de Sesión" />
        <AppButton title="Registro" color="secondary" />
      </View>
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
  btnContainer: {
    padding: 20,
    width: '100%',
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
  txtMessage: {
    color: 'red',
    paddingVertical: 20,
    fontSize: 25,
    fontWeight: '600',
  },
});
