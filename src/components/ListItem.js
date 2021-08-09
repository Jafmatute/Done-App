import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

const ListItem = ({title, subTitle, image}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}> {subTitle} </AppText>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 35,
    marginRight: 10,
  },
  subTitle: {
    color: colors.medium,
    fontSize: 15,
  },
  title: {
    fontWeight: '900',
  },
});
