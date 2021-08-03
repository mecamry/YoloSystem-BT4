import React from 'react';
import HomeScreen from '../screen/Home';
import {RootStackParamList} from './Navigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DetailsScreen from '../screen/Detail';
import MainDrawer from './MainDrawer';
import {createStackNavigator} from '@react-navigation/stack';
import HomeDrawer from './HomeDrawer';

const Stack = createStackNavigator<RootStackParamList>();
export function HomeScreenTab() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const MainTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: () => <MaterialIcons size={32} name="home" />,
        }}
        name="HomeTab"
        component={HomeScreenTab}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <MaterialIcons size={32} name="settings" />,
        }}
        name="MainDrawer"
        component={MainDrawer}
      />
    </Tab.Navigator>
  );
};
export default MainTab;
