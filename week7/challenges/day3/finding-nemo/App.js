import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default function App() {
  const [position, setPosition] = useState("");

  useEffect(() => {
    async function askPermissions() {
      var { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status === 'granted') {
        Location.watchPositionAsync({distanceInterval: 10}, (location) => { console.log(location); setPosition(location.coords); });
      }
    }
    askPermissions();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: position.latitude,  // pour centrer la carte
          longitude: position.longitude,
          latitudeDelta: 0.0922,  // le rayon à afficher à partir du centre
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{latitude: position.latitude, longitude: position.longitude}}
          title="Hello"
          description="I am here"
          draggable  // Rendre le marqueur drag & dropable
          opacity={0.5}  // Modifier l'opacité
        />
        <Marker
          coordinate={{latitude: 48.858370, longitude: 2.294481}}
          title="Hello2"
          description="I am here2"
          draggable  // Rendre le marqueur drag & dropable
          opacity={0.5}  // Modifier l'opacité
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});