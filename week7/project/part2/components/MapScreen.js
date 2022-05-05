import { StyleSheet, View, Modal, Alert, Text, Pressable, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Button, Input } from 'react-native-elements';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import {connect} from 'react-redux';

export function MapScreen(props) {
  const [position, setPosition] = useState("");
  const [addPOI, setAddPOI] = useState(false);
  // let [listPOI, setListPOI] = useState([]);
  const [titlePOI, setTitlePOI] = useState("");
  const [descriptionPOI, setDescriptionPOI] = useState("");
  let [positionPOI, setPositionPOI] = useState("")

  useEffect(() => {
    async function askPermissions() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        Location.watchPositionAsync({distanceInterval: 10}, (location) => { setPosition(location.coords); });
      }
    }
    askPermissions();
  }, []);

  const addPOIPress = () => {
    setAddPOI(true);
  }

  const addPossision = (location) => {
    setPositionPOI(location);
  }

  const onAjoutPOI = () => {
    // setListPOI([...listPOI, {
    //   title: titlePOI,
    //   description: descriptionPOI,
    //   longitude: positionPOI.longitude,
    //   latitude: positionPOI.latitude
    // }])
    props.onSubmitListPOI({
      title: titlePOI,
      description: descriptionPOI,
      longitude: positionPOI.longitude,
      latitude: positionPOI.latitude
    })
    setTitlePOI("");
    setDescriptionPOI("");
  }
  
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={addPOI}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setAddPOI(!addPOI);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Input
              style={styles.modalInput}
              placeholder="Title"
              containerStyle={{
                width: 150
              }}
              onChangeText={(value) => setTitlePOI(value)}
              value={titlePOI}
            />
            <Input
              style={styles.modalInput}
              placeholder="Description"
              containerStyle={{
                width: 150
              }}
              onChangeText={(value) => setDescriptionPOI(value)}
              value={descriptionPOI}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {setAddPOI(!addPOI), onAjoutPOI(position)}}
            >
              <Text style={styles.textStyle}>Ajouter POI</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <MapView
        style={styles.map}
        region={{
          latitude: 50.850340,  // pour centrer la carte
          longitude: 4.351710,
          latitudeDelta: 0.0922,  // le rayon à afficher à partir du centre
          longitudeDelta: 0.0421,
        }}
        onPress={ (event) => addPossision(event.nativeEvent.coordinate) }
      >
        <Marker
          coordinate={{latitude: position.latitude, longitude: position.longitude}}
          title="Hello"
          description="I am here"
          opacity={1}  // Modifier l'opacité
        >
          <Image source={require('../assets/MapMarkerPink.png')} style={styles.markerMap}></Image>
        </Marker>
        {props.ListPOI.map((marker,i) => (
          <Marker key={i}
            coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
            title={marker.title}
            description={marker.description}
            draggable  // Rendre le marqueur drag & dropable
            opacity={1}  // Modifier l'opacité
          >
            <Image source={require('../assets/MapMarkerBlue.png')} style={styles.markerMap}></Image>
          </Marker>
        ))}
      </MapView>
      <Button
        title="Add POI"
        icon={{
          name: 'location',
          type: 'ionicon',
          size: 15,
          color: '#FFF',
        }}
        iconContainerStyle={{ marginRight: 10 }}
        titleStyle={{ fontWeight: '700' }}
        buttonStyle={{ backgroundColor: '#eb4d4b' }}
        containerStyle={styles.buttonAddPOI}
        onPress={() => addPOIPress()}
      />
    </View>
  )
}

function mapStateToProps(state) {
  return { ListPOI: state.POIList }
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmitListPOI: function(list) {
      dispatch({type: 'saveList', list: list})
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: "100%",
    height: "100%"
  },
  buttonAddPOI: {
    width: '100%',
    marginBottom: 30,
    height: 50
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonClose: {
    backgroundColor: "#eb4d4b",
    elevation: 2,
    padding: 10
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalInput: {
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  markerMap: {
    height: 40,
    width: 40
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MapScreen)