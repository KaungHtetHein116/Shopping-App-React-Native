import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Picker,
  FlatList,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as theme from '../util/theme';
import {useNavigation} from '@react-navigation/native';
import CheckOutProductComponent from './components/CheckOutProductComponent';
import {useDispatch} from 'react-redux';
import {onClearCart, onPlaceOrder} from '../redux/actions/UserAction';
import moment from 'moment';

export default function CheckOutScreen({route}) {
  const dispatch = useDispatch();
  const {cart, address, totalAmount} = route.params;
  const [pickedItem, setPickedItem] = useState(null);
  const navigation = useNavigation();
  console.log(cart);

  const order = {
    orderNo: Math.floor(Math.random() * 10000000),
    status: 'Processing',
    time: moment().format('MMMM Do YYYY, h:mm:ss a'),
  };

  const handleOrder = async () => {
    if (pickedItem) {
      alert('Your order has been place successfully');
      cart.map((item) => {
        item.unit = 0;
      });
      await dispatch(onPlaceOrder(order));
      await dispatch(onClearCart());
    } else {
      alert('You need to choose an address');
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="keyboard-arrow-left" size={30} color={'black'} />
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <Feather
            name="shopping-bag"
            color={'dodgerblue'}
            size={30}
            style={{marginRight: 10}}
          />
          <Text style={{fontSize: theme.sizes.h1, color: 'dodgerblue'}}>
            CHECK OUT
          </Text>
        </View>
        <View style={{height: 30, width: 30}} />
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.pickerStyle}>
          <Picker
            style={{width: 200, borderWidth: 1, borderColor: 'black'}}
            mode="dropdown"
            selectedValue={pickedItem}
            onValueChange={(item) => {
              setPickedItem(item);
            }}>
            <Picker.Item label={'Choose Address'} value={null} />
            {address.map((item, index) => {
              return (
                <Picker.Item
                  label={`${item.addressType} address`}
                  value={item}
                  key={index}
                />
              );
            })}
          </Picker>
        </View>
        {pickedItem && (
          <View>
            <View style={styles.addressCard}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 10,
                  justifyContent: 'center',
                }}>
                <FontAwesome5
                  name="address-book"
                  size={30}
                  color={'dodgerblue'}
                  style={{marginRight: 10}}
                />
                <Text style={{color: 'dodgerblue'}}>Your Address</Text>
              </View>
              <Text style={{textAlign: 'left'}}>
                {pickedItem.streetAddress}, {pickedItem.streetAddress2},{' '}
                {pickedItem.city},{pickedItem.state},{pickedItem.postalCode},{' '}
                {pickedItem.country}
              </Text>
            </View>
            <View style={styles.divider} />
          </View>
        )}
      </View>

      <FlatList
        style={{backgroundColor: 'white', margin: -10}}
        contentContainerStyle={{paddingVertical: 20}}
        data={cart}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <CheckOutProductComponent item={item} />}
      />

      <View style={styles.footerContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text style={{color: 'red', fontSize: 20}}>
              Total : {totalAmount}.00 $
            </Text>
            <Text>VAT included</Text>
          </View>
          <TouchableOpacity
            style={styles.btnContainer}
            activeOpacity={0.8}
            onPress={() => handleOrder()}>
            <Text style={{color: 'white'}}>Place Order</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={20}
              color={theme.colors.white}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 15,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  divider: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'dodgerblue',
    width: 400,
    marginTop: 20,
  },
  addressCard: {
    backgroundColor: 'white',
    elevation: 10,
    padding: 10,
    borderRadius: 10,
  },
  pickerStyle: {
    borderRadius: 10,
    overflow: 'hidden',
    padding: 0,
    backgroundColor: 'white',
    elevation: 10,
    marginBottom: 20,
  },
  footerContainer: {
    padding: 0,
    backgroundColor: theme.colors.light.background,
    zIndex: 1,
    marginBottom: 50,
  },
  btnContainer: {
    flexDirection: 'row',
    backgroundColor: 'dodgerblue',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: theme.sizes.h3,
    color: 'white',
  },
});
