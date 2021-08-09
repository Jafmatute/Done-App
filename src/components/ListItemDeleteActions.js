import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../config/colors';

const ListItemDeleteActions = ({onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.container}>
      <Icon name="trash" size={20} color={colors.white} />
      </View>
      </TouchableWithoutFeedback>
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
