import React from 'react';
import {View, Text} from 'react-native';
import Nav from './components/Nav';
import Menu from './components/Menu';
import Cart from './components/Cart';

export default function App() {
  return (
    <View>
      <Nav />
      <Menu />
      <Cart />
    </View>
  );
}
