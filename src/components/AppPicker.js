import React, {useState} from 'react';
import {
  Button,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import AppText from './AppText';
import Screen from './Screen';

import defaultStyles from '../config/styles';

const AppPicker = ({icon, placheholder, ...otherProps}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <Icon name={icon} size={20} color={defaultStyles.colors.medium} />
          )}
          <AppText style={styles.text}> {placheholder} </AppText>
          <Icon
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.secondary}
          />
        </View>
      </TouchableWithoutFeedback>
      {modalVisible && (
        <Screen>
          <Modal visible={modalVisible} animationType="slide">
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </Modal>
        </Screen>
      )}
    </>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  text: {
    flex: 1,
  },
});
