import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import photo from './reducers/photo'
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();

import HomeScreen from './components/HomeScreen';
import ContentScreen from './ContentScreen'
const Stack = createStackNavigator();

const store = createStore(combineReducers({photo}))

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ContentScreen" component={ContentScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
