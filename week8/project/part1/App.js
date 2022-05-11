import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();

import HomeScreen from './components/HomeScreen';
import ContentScreen from './ContentScreen'
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ContentScreen" component={ContentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
