import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CoreContext } from '../../../../services/context/coreContext';
import { TabNavigate } from '../TabNavigate';
import { StackNavigate } from '../StackNavigate';

export const AppNavigation = () => {
  const { userToken } = useContext(CoreContext);

  return (
    <NavigationContainer>
      {userToken !== null ? <TabNavigate /> : <StackNavigate />}
    </NavigationContainer>
  );
};
