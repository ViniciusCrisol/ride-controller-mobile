import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import History from '../screens/app/History';
import Settings from '../screens/app/Settings';
import Dashboard from '../screens/app/Dashboard';

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  showLabel: false,
  activeTintColor: '#1ACB78',
  inactiveTintColor: '#5A5A5A',
};

const icons: any = {
  History: 'list',
  Dashboard: 'home',
  Settings: 'settings',
};

const AuthRoutes: React.FC = () => (
  <Tab.Navigator
    initialRouteName="Dashboard"
    tabBarOptions={{ ...tabBarOptions }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        return <Feather name={icons[route.name]} color={color} size={size} />;
      },
    })}
  >
    <Tab.Screen name="History" component={History} />
    <Tab.Screen name="Dashboard" component={Dashboard} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
);
export default AuthRoutes;
