import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';

const Card = ({title, subTitle, image}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden',
  },
  detailsContainer: {
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
  subTitle: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  title: {
    marginBottom: 5,
    color: colors.secondary,
  },
});
