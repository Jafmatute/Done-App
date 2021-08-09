import React from 'react';
import {StyleSheet, View} from 'react-native';
//Screens
import MessagesScreen from './src/screens/MessagesScreen';
import ListingDetailScreen from './src/screens/ListingDetailScreen';
import ViewImageScreen from './src/screens/ViewImageScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

//Components
import AppText from './src/components/AppText';
import AppButton from './src/components/AppButton';
import Card from './src/components/Card';

const App = () => {
  return <MessagesScreen />;
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f4f4',
    padding: 20,
    paddingTop: 50,
  },
});
