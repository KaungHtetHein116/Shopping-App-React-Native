import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  ImageBackground,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import * as theme from '../util/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import faker from 'faker';
import AnimatedScrollView from '../navigation/components/AnimatedScrollView';

const {width, height} = Dimensions.get('window');
const types = [
  {
    name: faker.lorem.word(),
    image: faker.image.business(),
  },
  {
    name: faker.lorem.words(),
    image: faker.image.nature(),
  },
  {
    name: faker.lorem.words(),
    image: faker.image.nightlife(),
  },
  {
    name: faker.lorem.words(),
    image: faker.image.abstract(),
  },
  {
    name: faker.lorem.word(),
    image: faker.image.business(),
  },
  {
    name: faker.lorem.words(),
    image: faker.image.nature(),
  },
  {
    name: faker.lorem.words(),
    image: faker.image.nightlife(),
  },
  {
    name: faker.lorem.words(),
    image: faker.image.abstract(),
  },
];

export default function CategoryScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="search" color={'black'} size={25} />
        <TextInput
          style={styles.textInputContainer}
          placeholder="Search.."
          placeholderTextColor={theme.colors.gray}
        />
      </View>
      <AnimatedScrollView>
        <FlatList
          data={types}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={{alignItems: 'center', margin: 5}}
                activeOpacity={0.8}
                onPress={() => alert('To be added later')}>
                <ImageBackground
                  source={{uri: item.image}}
                  style={{width: width - 20, height: 100}}>
                  <View style={styles.textContainer}>
                    <View
                      style={{
                        backgroundColor: '#000000a0',
                        width: width - 20,
                        height: 100,
                        justifyContent: 'center',
                      }}>
                      <Text style={styles.text}>{item.name}</Text>
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            );
          }}
        />
      </AnimatedScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    paddingLeft: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#F4F4FA',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: 400,
    height: 100,
  },
  textContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
