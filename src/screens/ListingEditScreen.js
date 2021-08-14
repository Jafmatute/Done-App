import React from 'react';
import {StyleSheet} from 'react-native';
import * as Yup from 'yup';

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from '../components/forms/';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required('El titulo es obligatorio')
    .min(5, 'Mínimo de 5 caracteres'),
  price: Yup.number()
    .required('Ingrese un precio por favor')
    .min(3, 'Mínimo 3 digitos')
    .max(10000, 'Maximo diesmil digitos'),
  description: Yup.string().label('Descripción'),
  category: Yup.object().required('La categoría es obligatorio').nullable(),
});

const categories = [
  {label: 'Muebles', value: 1},
  {label: 'Ropa', value: 2},
  {label: 'Cámara', value: 3},
];

const ListingEditScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
        }}
        onSubmit={value => console.log(value)}
        validationSchema={validationSchema}>
        <AppFormField maxLength={255} name="Titulo" placeholder="Titulo" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Precio"
        />
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Categoría"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Descripción"
        />
        <SubmitButton title="Guardar" />
      </AppForm>
    </Screen>
  );
};

export default ListingEditScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
