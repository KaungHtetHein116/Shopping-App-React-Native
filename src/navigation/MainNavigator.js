import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import TabBarProvider from './contexts/TabBarProvider';
import {LogInStackNavigator} from './StackNavigator';
import {useSelector} from 'react-redux';

const MainNavigator = () => {
  const signedIn = useSelector((state) => state.User.signedIn);
  console.log(signedIn);
  return (
    <TabBarProvider>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        {signedIn ? <TabNavigator /> : <LogInStackNavigator />}
        {/* <LogInStackNavigator /> */}
        {/* <TabNavigator /> */}
      </NavigationContainer>
    </TabBarProvider>
  );
};

export default MainNavigator;
