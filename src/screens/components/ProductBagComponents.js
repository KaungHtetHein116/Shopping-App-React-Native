import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import ProductModal from './ProductModal';
import * as theme from '../../util/theme';
import AddRemoveButton from './AddRemoveButton';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch} from 'react-redux';
import {onUpdateCart} from '../../redux/actions/UserAction';

const ProductBagComponent = ({item}) => {
  const [productVisible, setProductVisible] = useState(false);

  const ToggleProductVisible = () => {
    setProductVisible(!productVisible);
  };

  const dispatch = useDispatch();

  const didUpdateCart = (unit) => {
    item.unit = unit;
    dispatch(onUpdateCart(item));
  };

  return (
    <View style={styles.container} onPress={() => ToggleProductVisible()}>
      <Modal
        animationType="slide"
        visible={productVisible}
        onRequestClose={() => ToggleProductVisible()}>
        <ProductModal
          closeModal={() => ToggleProductVisible()}
          item={item}
          onUpdateCart={() => {
            onUpdateCart(item);
            let unit = isNaN(item.unit) ? 0 : item.unit;
            item.unit = unit + 1;
          }}
        />
      </Modal>

      <TouchableOpacity
        style={styles.subContainer}
        onPress={() => ToggleProductVisible()}>
        <View style={[styles.imgContainer]}>
          <Image
            source={{uri: item.preview}}
            style={{width: 100, height: 100, borderRadius: 10}}
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.nameText}>{item.title}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Entypo name="shop" size={25} color={theme.colors.gray} />
            <Text
              style={[
                styles.nameText,
                {marginLeft: 5, fontSize: 12, color: theme.colors.gray},
              ]}>
              {item.shop.name}
            </Text>
          </View>

          <Text style={styles.priceText}>{item.price}.00$</Text>
        </View>
        <View
          style={{
            padding: 5,
            alignItems: 'center',
          }}>
          <AddRemoveButton
            onAdd={() => {
              let unit = isNaN(item.unit) ? 0 : item.unit;
              didUpdateCart(unit + 1);
            }}
            onRemove={() => {
              let unit = isNaN(item.unit) ? 0 : item.unit;
              didUpdateCart(unit > 0 ? unit - 1 : unit);
            }}
            unit={item.unit}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: theme.colors.gray,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 1,
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
});

export default ProductBagComponent;
