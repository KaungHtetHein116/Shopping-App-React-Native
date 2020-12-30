import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStackNavigator} from './StackNavigator';
import {PostStackNavigator} from './StackNavigator';
import {CategoryStackNavigator} from './StackNavigator';
import TabBar from './components/TabBar';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeStackNavigator}
        initialParams={{icon: 'home'}}
      />
      <Tab.Screen
        name="PostScreen"
        component={PostStackNavigator}
        initialParams={{icon: 'plus-circle'}}
      />
      <Tab.Screen
        name="CategoryScreen"
        component={CategoryStackNavigator}
        initialParams={{icon: 'segment'}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
