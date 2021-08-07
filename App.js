import React from 'react';
import {StyleSheet} from 'react-native';
import ViewImageScreen from './src/screens/ViewImageScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

const App = () => {
  return <WelcomeScreen />;
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
