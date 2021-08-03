import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import HomeScreen from '../screen/Home';
import SettingsScreen from '../screen/Setting';

const Drawer = createDrawerNavigator();
export default function MainDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
