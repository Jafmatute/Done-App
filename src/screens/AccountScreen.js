import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';

import colors from '../config/colors';
import IconApp from '../components/IconApp';

const menuItems = [
  {
    title: 'Mi lista',
    icon: {
      name: 'list',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'Mis Mensajes',
    icon: {
      name: 'envelope-square',
      backgroundColor: colors.secondary,
    },
  },
];
const AccountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.cotainer}>
        <ListItem
          title="Josue F. Matute"
          subTitle="contoso@.com"
          image={require('../assets/user.jpeg')}
        />
      </View>
      <View style={styles.cotainer}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({item}) => (
            <ListItem
              title={item.title}
              IconComponent={
                <IconApp
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <View>
        <ListItem
          title="Cerrar Sesión"
          IconComponent={<IconApp name="sign-out" backgroundColor="#ffe66d" />}
        />
      </View>
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  cotainer: {
    marginVertical: 10,
  },
  screen: {
    backgroundColor: colors.light,
  },
});
