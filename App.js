import React from 'react';
//Screens

//Components
import Screen from './src/components/Screen';
import AppTextInput from './src/components/AppTextInput';

const App = () => {
  return (
    <Screen>
      <AppTextInput placeholder="Nombre de usuario" icon="email" />
    </Screen>
  );
};
export default App;
