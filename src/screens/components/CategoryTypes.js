import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const ItemType = ({type, id, image, selected, onSelected}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onSelected(id)}>
      <View style={[styles.imgBg, selected && {backgroundColor: '#59B7C9'}]}>
        <Image source={{uri: image}} style={{width: 40, height: 40}} />
      </View>
      <Text style={styles.text}>{type}</Text>
    </TouchableOpacity>
  );
};

export default ItemType;

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    fontFamily: 'CeraPro-Medium',
    marginTop: 10,
  },
  imgBg: {
    backgroundColor: '#F1F2F6',
    padding: 10,
    borderRadius: 20,
  },
});
