import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function CartItemCount({itemCount}) {
  return (
    <View>
      <Text style={{color: 'white'}}>{itemCount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
