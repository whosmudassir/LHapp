import React from 'react';
import 'react-native-gesture-handler';
import Nav from './components/Nav';
import Footer from './components/Footer';
import {NativeBaseProvider, ScrollView} from 'native-base';
import DrawerNavigation from './navigations/DrawerNavigation';
import TabNavigation from './navigations/TabNavigation';

export default function App() {
  return (
    <NativeBaseProvider>
      {/* <DrawerNavigation /> */}
      <TabNavigation />
      <Nav />
      <Footer />
    </NativeBaseProvider>
  );
}
