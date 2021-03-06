import React from 'react';
import {useFormikContext} from 'formik';
import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';

const AppFormPicker = ({items, name, placeholder}) => {
  const {errors, setFieldValue, touched, values} = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        onSelectedItem={item => setFieldValue(name, item)}
        placheholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
