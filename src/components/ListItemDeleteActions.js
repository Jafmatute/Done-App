import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../config/colors';

const ListItemDeleteActions = () => {
  return (
    <View style={styles.container}>
      <Icon name="trash" size={20} color={colors.white} />
    </View>
  );
};

export default ListItemDeleteActions;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
