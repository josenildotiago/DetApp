import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
/** UserContext */
import UserContextProvider from './src/contexts/UserContext';
/** MainStack */
import MainStack from './src/stacks/MainStack';

export default () => {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <MainStack/>
      </NavigationContainer>
    </UserContextProvider>
  );
}