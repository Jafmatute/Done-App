import React from 'react';
//Screens

//Components
import Screen from './src/components/Screen';
import AppTextInput from './src/components/AppTextInput';
import AppPicker from './src/components/AppPicker';

const App = () => {
  return (
    <Screen>
      <AppPicker icon="apps" placheholder="Categoria" />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
};
export default App;
