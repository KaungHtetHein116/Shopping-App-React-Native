import React from 'react';
import {View, Text} from 'react-native';

export default function App() {
  fetch('/api/shoppingdata/category/electronic')
    .then((response) => response.json())
    .then((data) => console.log(data));
  return (
    <View>
      <Text>test</Text>
    </View>
  );
}
