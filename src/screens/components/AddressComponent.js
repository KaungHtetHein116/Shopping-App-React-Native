import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {onRemoveAddress} from '../../redux/actions/UserAction';
import EditAddressComponent from './EditAddressComponent';

export default function AddressComponent({item}) {
  const [modalVisible, setModalVisible] = useState(false);
  const diapatch = useDispatch();

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <EditAddressComponent
          onClose={() => setModalVisible(false)}
          item={item}
        />
      </Modal>
      <View style={styles.addressCardContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="md-location-sharp" size={30} color={'dodgerblue'} />
            <Text style={{color: 'dodgerblue'}}>{item.addressType}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <MaterialCommunityIcons
                name="circle-edit-outline"
                size={30}
                color={'dodgerblue'}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => diapatch(onRemoveAddress(item))}>
              <MaterialCommunityIcons
                name="close-circle-outline"
                size={30}
                color={'dodgerblue'}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop: 10}}>
          <Text style={{textAlign: 'left'}}>
            {item.streetAddress}, {item.streetAddress2}, {item.city},
            {item.state}, {item.postalCode}, {item.country}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    elevation: 5,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  addressCardContainer: {
    margin: 10,
    padding: 5,
  },
});
