import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import MapScreen from './components/MapScreen';
import ChatScreen from './components/ChatScreen';
import POIScreen from './components/POIScreen';

import {createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import POIList from './reducers/POIList';

const store = createStore(combineReducers({POIList}));
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    <Provider store={store}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => {
                let iconName;
                if (route.name === 'Map') {
                    iconName = 'navigate'
                } else if (route.name === 'Chat') {
                    iconName = 'chatbubbles'
                } else if (route.name === 'POI List') {
                  iconName = 'list'
                }
                return <Ionicons name={iconName} size={25} color={color} />;
            }
        })}
         
        tabBarOptions={{
            activeTintColor: '#eb4d4b',
            inactiveTintColor: '#FFF',
            style: {backgroundColor: '#130f40', height: 100}
        }}
      >
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="POI List" component={POIScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
      </Tab.Navigator>
    </Provider>
    // </NavigationContainer>
  );
}
