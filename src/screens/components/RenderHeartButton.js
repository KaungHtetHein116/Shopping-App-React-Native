import React from 'react';
import {TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function RenderHeartButton({
  checkWishList,
  onAdd,
  onRemove,
  size,
}) {
  if (checkWishList) {
    return (
      <TouchableOpacity onPress={() => onRemove()}>
        <FontAwesome name="heart" size={size} color={'red'} />
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity onPress={() => onAdd()}>
        <FontAwesome name="heart-o" size={size} color={'black'} />
      </TouchableOpacity>
    );
  }
}
