import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as theme from '../util/theme';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import WishListComponent from './components/WishListComponent';

export default function WishListScreen() {
  const navigation = useNavigation();
  const wishList = useSelector((state) => state.User.WishList);
  console.log(wishList);
  return (
    <View style={styles.container}>
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
        <View style={{width: 30, height: 30}} />
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
    backgroundColor: 'black',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: theme.sizes.h3,
  },
});
