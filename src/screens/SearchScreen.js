import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import * as theme from '../util/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function SearchScreen() {
  return (
    <View style={styles.searchContainer}>
      <Icon name="search" color={'black'} size={25} />
      <TextInput
        style={styles.textInputContainer}
        placeholder="Search.."
        placeholderTextColor={theme.colors.gray}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    paddingLeft: 10,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#F4F4FA',
  },
});
