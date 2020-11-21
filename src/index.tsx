import React from 'react';
import { StatusBar } from 'react-native';

import Navigation from './routes';
import AppContext from './hooks';

const App: React.FC = () => (
  <AppContext>
    <StatusBar barStyle="dark-content" backgroundColor="#fff" />
    <Navigation />
  </AppContext>
);

export default App;
