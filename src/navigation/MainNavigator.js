import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import TabBarProvider from './contexts/TabBarProvider';

const MainNavigator = () => {
  return (
    <TabBarProvider>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </TabBarProvider>
  );
};

export default MainNavigator;
