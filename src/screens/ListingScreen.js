import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import Screen from '../components/Screen';
import Card from '../components/Card';

import colors from '../config/colors';

const listings = [
  {
    id: 1,
    title: 'Chaqueta Roja en venta',
    price: 100,
    image: require('../assets/jacket.png'),
  },
  {
    id: 2,
    title: 'sofá en perfecto estado',
    price: 150,
    image: require('../assets/couch.jpg'),
  },
];

const ListingScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({item}) => (
          <Card
            title={item.title}
            subTitle={`$ ${item.price}`}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
};

export default ListingScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
