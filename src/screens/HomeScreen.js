import {useSelector, useDispatch} from 'react-redux';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {ApiCall} from '../redux/actions/DataAction';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProductComponent from './components/ProductsComponents';
import BagModal from './components/BagModal';
import * as theme from '../util/theme';
import {useNavigation} from '@react-navigation/native';
import AnimatedScrollView from '../navigation/components/AnimatedScrollView';
import CategoryTypes from './components/CategoryTypes';
import {onUpdateCart} from '../redux/actions/UserAction';
import {connect} from 'react-redux';
import CartItemCount from './components/CartItemCount';
import _ from 'lodash';

const currentTheme = theme.colors.light;
const types = [
  {
    id: 0,
    type: 'Electronic',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Noto_Emoji_KitKat_263a.svg/200px-Noto_Emoji_KitKat_263a.svg.png',
  },
  {
    id: 1,
    type: 'Mobile',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Noto_Emoji_KitKat_263a.svg/200px-Noto_Emoji_KitKat_263a.svg.png',
  },
  {
    id: 2,
    type: 'Food',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Noto_Emoji_KitKat_263a.svg/200px-Noto_Emoji_KitKat_263a.svg.png',
  },
  {
    id: 3,
    type: 'Car',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Noto_Emoji_KitKat_263a.svg/200px-Noto_Emoji_KitKat_263a.svg.png',
  },
  {
    id: 4,
    type: 'Bike',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Noto_Emoji_KitKat_263a.svg/200px-Noto_Emoji_KitKat_263a.svg.png',
  },
];

function HomeScreen(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [bagVisible, setBagVisible] = useState(false);
  const [idSelected, setIdSelected] = useState(0);
  const [itemCount, setItemCount] = useState(0);

  const ToggleBagVisible = () => {
    setBagVisible(!bagVisible);
  };

  const state = useSelector((state) => state.Data.data);
  const cart = useSelector((state) => state.User.Cart);
  console.log(state);

  useEffect(() => {
    if (!_.isEmpty(cart)) {
      itemsInCart();
    } else {
      setItemCount(0);
    }
  }, [cart]);
  console.log(itemCount);

  const itemsInCart = () => {
    let totalItem = 0;
    cart.map((item) => {
      totalItem = totalItem + item.unit;
    });
    setItemCount(totalItem);
  };

  useEffect(() => {
    dispatch(ApiCall());
  }, []);

  const onSelected = (id) => {
    setIdSelected(id);
  };

  return (
    <View style={{flex: 1}}>
      <Modal
        animationType="slide"
        visible={bagVisible}
        onRequestClose={() => ToggleBagVisible()}>
        <BagModal closeModal={() => ToggleBagVisible()} />
      </Modal>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.titleText}>Do your shopping online</Text>
            <Text style={styles.subTitleText}>
              find the best choices for you
            </Text>
          </View>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => ToggleBagVisible()}>
            <Icon
              name="shopping-cart"
              color={currentTheme.background}
              size={25}
            />
            <View style={styles.badgeContainer}>
              {/* <Text style={styles.badgeText}>6</Text> */}
              <CartItemCount itemCount={itemCount} />
            </View>
          </TouchableOpacity>
        </View>
        {/* Search */}
        <TouchableOpacity
          style={styles.searchContainer}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('SearchScreen')}>
          <Icon name="search" color={'black'} size={25} />
          <View style={styles.textInputContainer}>
            <Text style={{color: theme.colors.gray}}>Search...</Text>
          </View>
        </TouchableOpacity>
        {/* Category */}

        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={types}
            horizontal
            renderItem={({item}) => {
              return (
                <CategoryTypes
                  onSelected={onSelected}
                  selected={item.id == idSelected}
                  {...item}
                />
              );
            }}
          />
        </View>
        {/* Body */}
        <View style={styles.bodyContainer}>
          <AnimatedScrollView>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={state}
              numColumns={2}
              keyExtractor={(item) => item.id}
              renderItem={({item}) => {
                return (
                  <ProductComponent
                    item={item}
                    onUpdateCart={props.onUpdateCart}
                  />
                );
              }}
            />
          </AnimatedScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#FFFFFF',
  },
  // Header Style
  headerContainer: {
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  badgeText: {
    color: theme.colors.light.background,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: theme.sizes.h1,
  },
  subTitleText: {
    fontSize: theme.sizes.h2,
    color: theme.colors.gray,
  },
  iconContainer: {
    padding: 10,
    borderRadius: 30,
    backgroundColor: currentTheme.foreground,
  },
  // Search Style
  searchContainer: {
    paddingLeft: 10,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#F4F4FA',
    height: 40,
    justifyContent: 'center',
  },
  textInputContainer: {
    flex: 1,
  },
  // Body Style
  bodyContainer: {
    flex: 1,
  },
  listItemType: {
    flexDirection: 'row',
    backgroundColor: 'red',
  },
});

// export default HomeScreen;
export default connect(null, {onUpdateCart})(HomeScreen);
