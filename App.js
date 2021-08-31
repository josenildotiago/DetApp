import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
/** UserContext */
import UserContextProvider from './src/contexts/UserContext';
/** MainStack */
import MainStack from './src/stacks/MainStack';
import { StatusBar } from 'react-native';

export default () => {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <MainStack />
      </NavigationContainer>
    </UserContextProvider>
  );
}