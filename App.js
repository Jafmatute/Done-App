import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Button} from 'react-native-vector-icons/FontAwesome';

//Screens
import ViewImageScreen from './src/screens/ViewImageScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

//Components
import AppText from './src/components/AppText';
import AppButton from './src/components/AppButton';

const App = () => {
  return <WelcomeScreen />;
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 30,
    margin: 20,
  },
});
