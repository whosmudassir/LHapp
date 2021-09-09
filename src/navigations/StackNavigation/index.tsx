import React from 'react';
import {View, Text, Button} from 'react-native';
import Header from '../../components/Header';
import Cart from '../../screens/Cart';
import Menu from '../../screens/Menu';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{
          headerTitle: () => <Header />,
        }}
      />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}
