import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const ViewImageScreen = () => {
  return (
    <View style={styles.containerImage}>
      <View style={[styles.icon, styles.closeIcon]}></View>
      <View style={[styles.icon, styles.DeleteIcon]}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../assets/chair.jpg')}
      />
    </View>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  containerImage: {
    backgroundColor: '#000',
    flex: 1,
  },
  closeIcon: {
    top: 30,
    left: 30,
    backgroundColor: '#fc5c65',
  },
  DeleteIcon: {
    backgroundColor: '#43cdc4',
    top: 30,
    right: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  icon: {
    width: 50,
    height: 50,
    position: 'absolute',
  },
});
