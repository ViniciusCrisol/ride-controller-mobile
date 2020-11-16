import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

// import { useAuth } from '../hooks/auth';

const Routes: React.FC = () => {
  // const { user, loading } = useAuth();

  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
};

export default Routes;