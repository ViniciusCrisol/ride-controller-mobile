import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import CreateTicket from '../screens/CreateTicket';

const CreateTicketStack = createStackNavigator();

const routeProps = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  cardStyle: { backgroundColor: '#fff', headerShown: false },
};

const CreateTicketRouter: React.FC = () => (
  <CreateTicketStack.Navigator headerMode="none" screenOptions={routeProps}>
    <CreateTicketStack.Screen name="CreateTicket" component={CreateTicket} />
  </CreateTicketStack.Navigator>
);
export default CreateTicketRouter;
