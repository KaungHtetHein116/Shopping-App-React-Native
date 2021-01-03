import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as theme from '../../util/theme';
import ProductBagComponent from './ProductBagComponents';
import _ from 'lodash';

const BagModal = ({closeModal}) => {
  const [itemCount, setItemCount] = useState(0);
  const [subtotalAmount, setsubtotalAmount] = useState(0);
  const [tax, setTax] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const cart = useSelector((state) => state.User.Cart);

  useEffect(() => {
    if (!_.isEmpty(cart)) {
      onCalculateAmount();
      itemsInCart();
    } else {
      setsubtotalAmount(0);
      setTotalAmount(0);
      setItemCount(0);
    }
  }, [cart]);
  console.log(cart);
  const onCalculateAmount = () => {
    let total = 0;
    cart.map((item) => {
      total = total + item.price * item.unit;
    });
    setsubtotalAmount(total);
    setTotalAmount(total + tax);
  };

  const itemsInCart = () => {
    let totalItem = 0;
    cart.map((item) => {
      totalItem = totalItem + item.unit;
    });
    setItemCount(totalItem);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your Cart</Text>
        <Text style={styles.headerSubTitle}>{itemCount} Items</Text>
      </View>
      {/* Transaction */}
      {!_.isEmpty(cart) ? (
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            margin: 10,
            borderRadius: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 200,
            elevation: 10,
          }}>
          <View style={{paddingLeft: 20}}>
            <Text style={{marginBottom: 20}}>Subtotal</Text>
            <Text style={{marginBottom: 20}}>Tax {'&'} Fees</Text>
            <Text style={{marginBottom: 20}}>Delivery</Text>
            <Text style={{fontSize: theme.sizes.h4, fontWeight: 'bold'}}>
              Total
            </Text>
          </View>
          <View style={{paddingRight: 20}}>
            <Text
              style={{
                textAlign: 'right',
                marginBottom: 20,
                color: 'red',
              }}>
              ${subtotalAmount}
            </Text>
            <Text
              style={{
                textAlign: 'right',
                marginBottom: 20,
                color: 'red',
              }}>
              ${tax}
            </Text>
            <Text
              style={{
                textAlign: 'right',
                marginBottom: 20,
                color: 'red',
              }}>
              Free
            </Text>
            <Text
              style={{
                textAlign: 'right',
                fontSize: theme.sizes.h4,
                color: 'red',
              }}>
              ${totalAmount}
            </Text>
          </View>
        </View>
      ) : null}

      {!_.isEmpty(cart) ? (
        <View style={styles.bodyContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={cart}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
              return <ProductBagComponent item={item} />;
            }}
          />
        </View>
      ) : (
        <View
          style={[
            styles.bodyContainer,
            {
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}>
          <Image
            style={{width: '100%', height: 250}}
            source={require('../../assets/empty-cart.png')}
          />
        </View>
      )}

      {/* Footer */}

      {!_.isEmpty(cart) ? (
        <View style={styles.footerContainer}>
          <TouchableOpacity style={styles.btnContainer} activeOpacity={0.8}>
            <Text style={styles.btnText}>CHECKOUT</Text>
            <Icon
              name="keyboard-arrow-right"
              size={30}
              color={theme.colors.white}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <TouchableOpacity
            style={styles.btnContainer}
            activeOpacity={0.8}
            onPress={() => closeModal()}>
            <Text style={styles.btnText}>GO TO SHOPPING</Text>
            <Icon
              name="keyboard-arrow-right"
              size={30}
              color={theme.colors.white}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 60,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: theme.sizes.h4,
    color: 'red',
  },
  headerSubTitle: {
    fontSize: theme.sizes.h2,
    fontWeight: 'bold',
    color: theme.colors.black,
  },
  bodyContainer: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  footerContainer: {
    padding: 0,
    backgroundColor: theme.colors.light.background,
  },
  btnContainer: {
    flex: 1,
    padding: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#CB1649',
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: theme.sizes.h3,
    color: 'white',
  },
});

export default BagModal;
