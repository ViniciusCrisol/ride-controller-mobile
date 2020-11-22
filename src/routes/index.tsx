import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import CreateTicketRouter from './create-ticket.routes';

import { useAuth } from '../hooks/auth';

const Routes: React.FC = () => {
  const { user, ticket } = useAuth();

  if (user && !ticket) {
    return (
      <NavigationContainer>
        <CreateTicketRouter />
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      {user ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
