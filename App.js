import React from 'react';
import { CoreProvider } from './src/services/context/coreContext';
import { AppNavigation } from './src/components/modules/Navigation/AppNavigation';

const App = () => {
  return (
    <CoreProvider>
      <AppNavigation />
    </CoreProvider>
  );
};

export default App;
