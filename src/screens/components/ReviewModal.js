import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import * as theme from '../../util/theme';
import RenderRatings from './RenderRatings';

export default function ReviewModal(props) {
  const {closeModal, item} = props;
  console.log(item.reviews.reviewers);
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={closeModal}>
          <MaterialIcons name="keyboard-arrow-left" size={30} color={'black'} />
        </TouchableOpacity>
        <View>
          <Text style={{fontSize: theme.sizes.h2}}>Reviews</Text>
        </View>
        <TouchableOpacity>
          <SimpleLineIcons name="plus" size={30} color={'black'} />
        </TouchableOpacity>
      </View>

      {/* Body */}

      <View style={{paddingTop: 60}}>
        <FlatList
          data={item.reviews.reviewers}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 1,
                backgroundColor: '#CED0CE',
              }}
            />
          )}
          renderItem={({item}) => (
            <View style={{flex: 1, paddingHorizontal: 20, marginVertical: 10}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={{marginBottom: 5}}>{item.name}</Text>
                <View style={{flexDirection: 'row'}}>
                  <RenderRatings rating={item.ratingGiven} />
                </View>
              </View>
              <View>
                <Text>{item.comment}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'transparent',
    paddingHorizontal: 10,
    paddingTop: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    flexDirection: 'row',
    // borderBottomColor: 'gray',
    // borderBottomWidth: 1,
  },
});
