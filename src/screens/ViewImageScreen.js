import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

//config styles
import colors from '../config/colors';

const ViewImageScreen = () => {
  return (
    <View style={styles.containerImage}>
      <View style={[styles.icon, styles.closeIcon]}>
        <Icon name="close" size={35} color="white" />
      </View>
      <View style={[styles.icon, styles.DeleteIcon]}>
        <Icon name="trash" size={35} color="tomato" />
      </View>
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
    backgroundColor: colors.black,
    flex: 1,
  },
  closeIcon: {
    top: 30,
    left: 30,
    // backgroundColor: colors.primary,
  },
  DeleteIcon: {
    // backgroundColor: colors.secondary,
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
