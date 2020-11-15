import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '../screens/app/Dashboard';
import Settings from '../screens/app/Settings';

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  showLabel: false,
  activeTintColor: '#1ACB78',
  inactiveTintColor: '#5A5A5A',
};

const icons: any = {
  Dashboard: 'home',
  Settings: 'settings',
};

const AuthRoutes: React.FC = () => (
  <Tab.Navigator
    tabBarOptions={{ ...tabBarOptions }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        return <Feather name={icons[route.name]} color={color} size={size} />;
      },
    })}
  >
    <Tab.Screen name="Dashboard" component={Dashboard} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
);
export default AuthRoutes;
