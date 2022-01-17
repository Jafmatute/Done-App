import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
// components
import AppText from '../components/AppText';
import {ListItem} from '../components/lists/';

import colors from '../config/colors';

const ListingDetailScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/jacket.png')} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket For sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/user.jpeg')}
            title="Josue Flores"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
};

export default ListingDetailScreen;

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: colors.primary,
  },
  userContainer: {
    marginVertical: 20,
  },
});
