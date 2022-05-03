import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PageAScreen from './components/PageAScreen';
import PageBScreen from './components/PageBScreen';

const Stack = createStackNavigator();

export default function PagesStacks() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="PageA" component={PageAScreen} />
        <Stack.Screen name="PageB" component={PageBScreen} />
      </Stack.Navigator>
  );
}
