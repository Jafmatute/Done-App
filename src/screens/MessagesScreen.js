import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteActions from '../components/ListItemDeleteActions';

const MessagesScreen = () => {
  const messages = [
    {
      id: 1,
      title: 'Liliana Casas',
      description: 'No me llegó la notificación',
      image: require('../assets/user.jpeg'),
    },
    {
      id: 2,
      title: 'Willian Hamid',
      description: 'Gracias, documentos recibidos...',
      image: require('../assets/user.jpeg'),
    },
  ];
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({item}) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log(`Mensaje seleccionado: ${item.id}`)}
            renderRightActions={ListItemDeleteActions}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
