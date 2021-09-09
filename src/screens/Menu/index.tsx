import React, {useState, useEffect} from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {data} from '../../constants/mock-data';
import Card from '../../components/Card';

export default function Menu() {
  return (
    <View>
      <Text>Menu</Text>
      <FlatList
        data={data.categories}
        renderItem={({item}) => <Card main={item} />}
      />
    </View>
  );
}
