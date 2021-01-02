import React from 'react';
import {View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as theme from '../../util/theme';

const RenderRatings = ({rating}) => {
  const stars = new Array(5).fill(0);
  return stars.map((_, index) => {
    const activeStar = Math.floor(rating) >= index + 1;
    return (
      <View style={{margin: 3, flexDirection: 'row'}}>
        <FontAwesome
          name="star"
          key={`star-${index}`}
          size={20}
          color={theme.colors[activeStar ? 'yellow' : 'gray']}
        />
      </View>
    );
  });
};

export default RenderRatings;
