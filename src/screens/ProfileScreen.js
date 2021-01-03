import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import faker from 'faker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as theme from '../util/theme';
import {useNavigation} from '@react-navigation/native';

export default function ProfileScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image source={{uri: faker.image.animals()}} style={styles.image} />
        <View>
          <Text style={{color: theme.colors.black, fontSize: theme.sizes.h2}}>
            Kaung Htet Hein
          </Text>
          <Text style={{color: 'gray', fontSize: theme.sizes.h3}}>
            KaungHtetHein@mail.com
          </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.listContainer} activeOpacity={0.7}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="list-circle-outline" size={30} color={'black'} />
            <View style={{marginLeft: 10}}>
              <Text
                style={{
                  color: theme.colors.black,
                  fontSize: theme.sizes.h2,
                }}>
                My Orders
              </Text>
            </View>
          </View>
          <View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={30}
              color={'black'}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listContainer} activeOpacity={0.7}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="md-location-outline" size={30} color={'black'} />
            <View style={{marginLeft: 10}}>
              <Text
                style={{
                  color: theme.colors.black,
                  fontSize: theme.sizes.h2,
                }}>
                Address
              </Text>
            </View>
          </View>
          <View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={30}
              color={'black'}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.listContainer}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('WishListScreen')}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="ios-heart-outline" size={30} color={'black'} />
            <View style={{marginLeft: 10}}>
              <Text
                style={{
                  color: theme.colors.black,
                  fontSize: theme.sizes.h2,
                }}>
                Whis List
              </Text>
            </View>
          </View>
          <View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={30}
              color={'black'}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listContainer} activeOpacity={0.7}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="language-outline" size={30} color={'black'} />
            <View style={{marginLeft: 10}}>
              <Text
                style={{
                  color: theme.colors.black,
                  fontSize: theme.sizes.h2,
                }}>
                Language
              </Text>
            </View>
          </View>
          <View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={30}
              color={'black'}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    backgroundColor: 'white',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 30,
  },
  avatarContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    paddingVertical: 25,
    justifyContent: 'space-between',
  },
  textContainer: {
    flexDirection: 'row',
  },
});
