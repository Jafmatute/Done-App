import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Button} from 'react-native-vector-icons/FontAwesome';

//Screens
import ViewImageScreen from './src/screens/ViewImageScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

//Components
import AppText from './src/components/AppText';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Button name="facebook" backgroundColor="#3b5998">
        Login with Facebook
      </Button>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 30,
    margin: 20,
  },
});
