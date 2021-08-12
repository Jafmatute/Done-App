import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import AppTextInput from '../../components/AppTextInput';
import AppButton from '../../components/AppButton';
import AppText from '../../components/AppText';
import Screen from '../../components/Screen';

import colors from '../../config/colors';

const LoginScreen = () => {
  const logo = require('../../assets/logo-red.png');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [eyePassword, setEyePassword] = useState(true);

  return (
    <Screen style={styles.container}>
      <View style={styles.containerLogo}>
        <Image style={styles.logo} source={logo} />
        <AppText style={styles.text}>React Native </AppText>
      </View>
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
        placeholder="Correo electronico"
        textContentType="password"
      />
      <View>
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          onChangeText={text => setPassword(text)}
          placeholder="Contraseña"
          secureTextEntry={eyePassword ? true : false}
          textContentType="password"
        />
        <Icon
          onPress={() => setEyePassword(!eyePassword)}
          style={styles.iconPass}
          name={eyePassword ? 'eye-off' : 'eye'}
          size={25}
          color={eyePassword ? colors.medium : colors.secondary}
        />
      </View>

      <AppButton
        title="Inicio de Sesión"
        onPress={() => console.log(email, password)}
      />
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  containerLogo: {
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  containerIconPass: {
    justifyContent: 'center',
  },
  iconPass: {
    position: 'absolute',
    padding: 30,
    right: 0,
  },
  logo: {
    height: 100,
    width: 100,
  },
  text: {
    fontWeight: 'bold',
  },
});
