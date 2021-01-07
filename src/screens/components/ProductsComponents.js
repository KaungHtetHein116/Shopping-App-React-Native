import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Dimensions,
} from 'react-native';
import ProductModal from './ProductModal';
import * as theme from '../../util/theme';
import RenderRatings from './RenderRatings';

const {width} = Dimensions.get('window');
const ProductComponent = ({item, onUpdateCart}) => {
  const [productVisible, setProductVisible] = useState(false);

  const closeProductModal = () => {
    setProductVisible(!productVisible);
  };

  const ToggleProductVisible = () => {
    setProductVisible(!productVisible);
  };

  return (
    <TouchableOpacity
      onPress={() => ToggleProductVisible()}
      style={[styles.container, {backgroundColor: 'white'}]}
      activeOpacity={0.8}>
      <Modal
        animationType="slide"
        visible={productVisible}
        onRequestClose={() => ToggleProductVisible()}>
        <ProductModal
          closeProductModal={() => closeProductModal()}
          closeModal={() => ToggleProductVisible()}
          item={item}
          onUpdateCart={() => {
            onUpdateCart(item);
            let unit = isNaN(item.unit) ? 0 : item.unit;
            item.unit = unit + 1;
          }}
        />
      </Modal>
      <View style={styles.imgContainer}>
        <Image source={{uri: item.preview}} style={styles.image} />
      </View>
      <View style={{padding: 4}}>
        <Text numberOfLines={2} style={styles.title}>
          {item.title}
        </Text>
        <Text style={styles.subTitle}>{item.price}$</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <RenderRatings rating={item.rating} />
          <Text> ({item.reviews.reviewerCount})</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    borderTopRightRadius: theme.sizes.radius,
    borderTopLeftRadius: theme.sizes.radius,
    elevation: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: theme.sizes.h3,
    color: theme.colors.light.foreground,
  },
  subTitle: {
    fontSize: theme.sizes.h3,
    color: theme.colors.tomato,
  },
  imgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width - theme.sizes.padding * 2,
    height: (width - theme.sizes.padding * 2) / 2,
  },
});

export default ProductComponent;
