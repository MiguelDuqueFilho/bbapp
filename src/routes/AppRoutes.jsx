import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {EventsProvider} from '../contexts/event';
import Events from '../pages/Events';
import Detail from '../pages/Detail';

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <EventsProvider>
    <AppStack.Navigator
      initialRouteName="Events"
      screenOptions={{headerShown: false}}>
      <AppStack.Screen name="Events" component={Events} />
      <AppStack.Screen name="Detail" component={Detail} />
    </AppStack.Navigator>
  </EventsProvider>
);

export default AppRoutes;
