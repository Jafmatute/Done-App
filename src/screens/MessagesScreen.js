import React, {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteActions from '../components/ListItemDeleteActions';

const initalMessages = [
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

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initalMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = message => {
    //Delete the message from messages --- call the server
    setMessages(messages.filter(m => m.id !== message.id));
  };
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
            renderRightActions={() => (
              <ListItemDeleteActions onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: 'Willian Hamid',
              description: 'Gracias, documentos recibidos...',
              image: require('../assets/user.jpeg'),
            },
          ]);
        }}
      />
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
