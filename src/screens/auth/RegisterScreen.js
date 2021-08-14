import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Screen from '../../components/Screen';
import {AppForm, AppFormField, SubmitButton} from '../../components/forms';
import colors from '../../config/colors';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('El nombre es requerido').label('Name'),
  email: Yup.string().required('El email es obligatorio').label('Email'),
  password: Yup.string()
    .required('La contraseña es obligatoria')
    .min(5, 'Minímo 5 caracteres')
    .label('Password'),
});

const RegisterScreen = () => {
  const [eyePassword, setEyePassword] = useState(true);
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{name: '', email: '', password: ''}}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}>
        <AppFormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Nombre completo"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
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
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  iconPass: {
    position: 'absolute',
    padding: 30,
    right: 0,
  },
});
