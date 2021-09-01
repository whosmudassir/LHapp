import React from 'react';
import {View, Text} from 'react-native';

export default function CardItem({item}) {
  return (
    <View>
      <Text>..{item.name}..</Text>
    </View>
  );
}
