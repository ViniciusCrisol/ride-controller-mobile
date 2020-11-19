import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import SignIn from '../screens/auth/SignIn';
import SignUp from '../screens/auth/SignUp';

const AuthStack = createStackNavigator();

const routeProps = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  cardStyle: { backgroundColor: '#fff', headerShown: false },
};

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator headerMode="none" screenOptions={routeProps}>
    <AuthStack.Screen name="SignIn" component={SignIn} />
    <AuthStack.Screen name="SignUp" component={SignUp} />
  </AuthStack.Navigator>
);
export default AuthRoutes;
