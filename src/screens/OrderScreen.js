import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as theme from '../util/theme';
import {useNavigation} from '@react-navigation/native';

export default function OrderScreen() {
  const navigation = useNavigation();
  const order = useSelector((state) => state.User.Order);
  console.log(order);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="keyboard-arrow-left" size={30} color={'black'} />
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <SimpleLineIcons
            name="basket"
            color={'dodgerblue'}
            size={30}
            style={{marginRight: 10}}
          />
          <Text style={{fontSize: theme.sizes.h1, color: 'dodgerblue'}}>
            Your Orders
          </Text>
        </View>
        <View style={{height: 30, width: 30}} />
      </View>
      <FlatList
        data={order}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginVertical: 10,
              backgroundColor: 'white',
              elevation: 5,
              padding: 15,
              borderRadius: 10,
            }}>
            <View>
              <Text> Order No. {item.orderNo}</Text>
              <Text style={{color: 'grey'}}>{item.time}</Text>
            </View>
            <View style={{backgroundColor: 'dodgerblue', borderRadius: 5}}>
              <Text
                style={{color: 'white', padding: 5, fontSize: theme.sizes.h3}}>
                {item.status}
              </Text>
            </View>
          </View>
        )}
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
