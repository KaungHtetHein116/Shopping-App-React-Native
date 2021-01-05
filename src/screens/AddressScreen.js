import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Button,
  Modal,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ActionButton from 'react-native-action-button';
import {useSelector, useDispatch} from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as theme from '../util/theme';
import AddressComponent from './components/AddressComponent';
import AddAddressComponent from './components/AddAddressComponent';

export default function AddressScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const address = useSelector((state) => state.User.Address);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <AddAddressComponent
          onClose={() => setModalVisible(false)}
          item={address}
        />
      </Modal>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="keyboard-arrow-left" size={30} color={'black'} />
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <FontAwesome5
            name="address-book"
            color={'dodgerblue'}
            size={30}
            style={{marginRight: 10}}
          />
          <Text style={{fontSize: theme.sizes.h1, color: 'dodgerblue'}}>
            Address Book
          </Text>
        </View>
        <View style={{height: 30, width: 30}} />
      </View>
      <FlatList
        data={address}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return <AddressComponent item={item} />;
        }}
      />
      <ActionButton
        buttonColor="dodgerblue"
        onPress={() => {
          setModalVisible(true);
        }}
        style={{marginBottom: 40}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    marginHorizontal: 10,
    marginBottom: 10,
  },
});
