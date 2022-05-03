import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './components/HomeScreen';
import PagesStacks from './PagesStacks';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home'
            } else if (route.name === 'PagesStacks') {
              iconName = 'heart'
            }
            return <Ionicons name={iconName} size={25} color={color} />;
          },
         })}
         
         tabBarOptions={{
          activeTintColor: '#0984e3',
          inactiveTintColor: '#dfe6e9',
         }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="PagesStacks" component={PagesStacks} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
