import React from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import * as theme from '../util/theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

export default function SearchScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={[styles.flex, styles.row, styles.header]}>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome
                name="chevron-left"
                color={theme.colors.black}
                size={20}
              />
            </TouchableOpacity>
            <TextInput
              autoFocus
              style={{
                color: theme.colors.black,
                borderRadius: 20,
                width: 300,
                borderColor: 'grey',
                marginLeft: 20,
              }}
              placeholder="Search Product"
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  flex: {
    flex: 0,
  },
  row: {
    flexDirection: 'row',
  },
  header: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
