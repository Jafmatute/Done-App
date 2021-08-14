import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {AppForm, AppFormField, SubmitButton} from '../../components/forms';
import AppText from '../../components/AppText';
import Screen from '../../components/Screen';

import colors from '../../config/colors';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Ingrese una dirección de correo')
    .email('Dirección de correo inválida')
    .label('Email'),
  password: Yup.string()
    .required('Ingrese su contraseña')
    .min(4, 'Debe ingresar 4 caracteres como mínimo')
    .label('Password'),
});

const LoginScreen = () => {
  const logo = require('../../assets/logo-red.png');
  const [eyePassword, setEyePassword] = useState(true);

  return (
    <Screen style={styles.container}>
      <View style={styles.containerLogo}>
        <Image style={styles.logo} source={logo} />
        <AppText style={styles.text}>React Native </AppText>
      </View>
      <AppForm
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}>
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          name="email"
          keyboardType="email-address"
          placeholder="Correo electronico"
          textContentType="password"
        />

        <View>
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
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

        <SubmitButton title="Inicio de Sesión" />
      </AppForm>
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
