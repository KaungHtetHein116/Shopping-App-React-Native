import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import * as theme from '../../util/theme';

export default function ButtonAddRemove({onAdd, unit, onRemove}) {
  if (unit > 0) {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.numCircle} onPress={() => onAdd()}>
          <Text style={styles.nameText}>+</Text>
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>{unit}</Text>
        </View>
        <TouchableOpacity style={styles.numCircle} onPress={() => onRemove()}>
          <Text style={styles.nameText}>-</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity style={styles.btn}>
        <Text style={{fontSize: 18, color: 'black', textAlign: 'center'}}>
          Add
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  numCircle: {
    width: 40,
    height: 40,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: theme.colors.silver,
    borderRadius: 10,
  },
  nameText: {
    fontWeight: '900',
    fontSize: theme.sizes.h1,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
