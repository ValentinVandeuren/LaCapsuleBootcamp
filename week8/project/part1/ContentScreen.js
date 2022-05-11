import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
import SnapScreen from './components/SnapScreen';
import GalleryScreen from './components/GallertScreen';

export default function App() {
  return (
    // <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => {
                let iconName;
                if (route.name === 'Snap') {
                    iconName = 'camera'
                } else if (route.name === 'Gallery') {
                    iconName = 'images'
                }
                return <Ionicons name={iconName} size={25} color={color} />;
            }
        })}
         
        tabBarOptions={{
            activeTintColor: '#009788',
            inactiveTintColor: '#FFF',
            style: {backgroundColor: '#111224', height: 100}
        }}
      >
        <Tab.Screen name="Gallery" component={GalleryScreen} />
        <Tab.Screen name="Snap" component={SnapScreen} />
      </Tab.Navigator>
    // </NavigationContainer>
  );
}
