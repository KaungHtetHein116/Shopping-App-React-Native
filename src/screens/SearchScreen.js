import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import * as theme from '../util/theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import SearchListComponent from './components/SearchListComponent';
import _ from 'lodash';

export default function SearchScreen() {
  const navigation = useNavigation();
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [filteredDataSource, setFilteredDataSource] = useState([]);

  const state = useSelector((state) => state.Data.data);

  useEffect(() => {
    setMasterDataSource(state);
    setFilteredDataSource(state);
  }, []);

  const searchFilterFunction = (text) => {
    const formattedQuery = text.toLowerCase();
    const result = _.filter(masterDataSource, (item) => {
      if (item.title.toLowerCase().includes(formattedQuery)) {
        return true;
      } else {
        return false;
      }
    });
    setFilteredDataSource(result);
  };
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
              onChangeText={(text) => searchFilterFunction(text)}
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
      <View style={{paddingBottom: 120}}>
        <FlatList
          contentContainerStyle={{paddingVertical: 20}}
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return <SearchListComponent item={item} />;
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
