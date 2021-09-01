import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {data} from '../mock-data';
import Card from './Card';

export default function Menu() {
  return (
    <View>
      <Text>Menu</Text>
      {data.categories.map(main => (
        <Card main={main} />
      ))}
    </View>
  );
}
