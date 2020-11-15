import React from 'react';
import { StatusBar } from 'react-native';

import Navigation from './routes';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="dark-content" backgroundColor="#fff" />
    <Navigation />
  </>
);

export default App;
