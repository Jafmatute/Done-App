import React, {useState} from 'react';
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import AppText from './AppText';
import Screen from './Screen';

import defaultStyles from '../config/styles';
import PickerItem from './PickerItem';
import colors from '../config/colors';

const AppPicker = ({
  icon,
  items,
  onSelectedItem,
  placheholder,
  selectedItem,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <Icon name={icon} size={20} color={defaultStyles.colors.medium} />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placheholder}>{placheholder}</AppText>
          )}
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
            <FlatList
              data={items}
              keyExtractor={item => item.value.toString()}
              renderItem={({item}) => (
                <PickerItem
                  label={item.label}
                  onPress={() => {
                    setModalVisible(false);
                    onSelectedItem(item);
                  }}
                />
              )}
            />
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
  placheholder: {
    color: defaultStyles.colors.medium,
    flex: 1,
  },
  text: {
    flex: 1,
  },
});
