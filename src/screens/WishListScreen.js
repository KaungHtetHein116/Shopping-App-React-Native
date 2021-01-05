import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';
import BagModal from './components/BagModal';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as theme from '../util/theme';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import WishListComponent from './components/WishListComponent';
import CartItemCount from './components/CartItemCount';
import _ from 'lodash';

export default function WishListScreen() {
  const [itemCount, setItemCount] = useState(0);
  const [bagVisible, setBagVisible] = useState(false);

  const navigation = useNavigation();
  const wishList = useSelector((state) => state.User.WishList);
  const cart = useSelector((state) => state.User.Cart);

  const ToggleBagVisible = () => {
    setBagVisible(!bagVisible);
  };

  const itemsInCart = () => {
    let totalItem = 0;
    cart.map((item) => {
      totalItem = totalItem + item.unit;
    });
    setItemCount(totalItem);
  };

  useEffect(() => {
    if (!_.isEmpty(cart)) {
      itemsInCart();
    } else {
      setItemCount(0);
    }
  }, [cart]);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        visible={bagVisible}
        onRequestClose={() => ToggleBagVisible()}>
        <BagModal closeModal={() => ToggleBagVisible()} />
      </Modal>
      {/* Header */}
      <View style={styles.headerContainer}>
        <MaterialIcons
          name="keyboard-arrow-left"
          size={30}
          color={'black'}
          onPress={() => navigation.goBack()}
        />
        <Text style={{fontSize: theme.sizes.h2, fontWeight: 'bold'}}>
          WHIS LIST
        </Text>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => ToggleBagVisible()}>
          <MaterialIcons name="shopping-cart" size={25} color={'white'} />
          <View style={styles.badgeContainer}>
            <CartItemCount itemCount={itemCount} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.listCount}>
        <Text style={{color: 'white'}}>{wishList.length} items</Text>
      </View>
      <View>
        <FlatList
          data={wishList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return <WishListComponent item={item} />;
          }}
        />
      </View>
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
    alignItems: 'center',
    height: 60,
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  listCount: {
    backgroundColor: 'dodgerblue',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: theme.sizes.h3,
  },
  iconContainer: {
    padding: 10,
    borderRadius: 30,
    backgroundColor: 'black',
  },
  badgeContainer: {
    top: -4,
    right: -4,
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: theme.colors.green,
  },
});
