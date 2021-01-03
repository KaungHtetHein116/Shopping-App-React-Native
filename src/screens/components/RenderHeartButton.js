import React from 'react';
import {TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function RenderHeartButton({
  onPress,
  checkWishList,
  onAdd,
  onRemove,
}) {
  console.log('inside heart', checkWishList);

  if (checkWishList) {
    return (
      <TouchableOpacity onPress={() => onRemove()}>
        <FontAwesome name="heart" size={30} color={'red'} />
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity onPress={() => onAdd()}>
        <FontAwesome name="heart-o" size={30} color={'black'} />
      </TouchableOpacity>
    );
  }
}
