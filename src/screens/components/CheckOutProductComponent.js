import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import * as theme from '../../util/theme';

export default function CheckOutProductComponent({item}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.subContainer}>
        <View style={[styles.imgContainer]}>
          <Image
            source={{uri: item.preview}}
            style={{width: 100, height: 100, borderRadius: 10}}
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.nameText}>{item.title}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Entypo name="shop" size={25} color={'grey'} />
            <Text
              style={[
                styles.nameText,
                {marginLeft: 5, fontSize: 12, color: 'grey'},
              ]}>
              {item.shop.name}
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.priceText}>{item.price}.00$</Text>
            <Text style={styles.unitText}>Qty : {item.unit}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 10,
    // backgroundColor: 'white',
    // elevation: 10,
    // padding: 10,
    // borderRadius: 10,
  },
  subContainer: {
    flexDirection: 'row',
  },
  imgContainer: {
    padding: 5,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-evenly',
  },
  nameText: {
    fontWeight: '900',
    fontSize: theme.sizes.h3,
  },
  priceText: {
    marginTop: 7,
    fontWeight: 'bold',
    color: 'red',
  },
  unitText: {
    color: 'black',
    fontSize: 13,
  },
});
