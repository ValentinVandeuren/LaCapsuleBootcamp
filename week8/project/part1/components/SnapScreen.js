import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useRef} from 'react';
import { Camera } from 'expo-camera';
import { Button, Overlay, Input } from 'react-native-elements'
import IonIcon from 'react-native-vector-icons/Ionicons';
import { useIsFocused } from '@react-navigation/native';

export default function SnapScreen() {

const [hasPermission, setHasPermission] = useState(false);
const [type, setType] = useState(Camera.Constants.Type.back);
const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
const [isVisible, setIsVisible] = useState(false);

var cameraRef = useRef(null);

const isFocused = useIsFocused();


useEffect(() => {  
    (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
    })();
  }, []);

  var cameraDisplay;
  if(hasPermission && isFocused) {
   cameraDisplay = 
   <Camera type={type} flashMode={flash} style={{ flex: 1 }} ref={ref => (cameraRef = ref)}>
       <View style={{flex:1, flexDirection: 'row', justifyContent:'center', alignItems:'flex-end'}}>
            <TouchableOpacity style={{alignItems:"center", paddingRight:10, paddingBottom:10}} onPress={() => {setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back);}}>
                <IonIcon name="camera-reverse" size={30} color="white"/>
                <Text style={{color:"white", fontSize:20}}>Flip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:"center", paddingLeft:10, paddingBottom:10}} onPress={() => {setFlash(flash === Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.on : Camera.Constants.FlashMode.off);}}>
                <IonIcon name={flash === Camera.Constants.FlashMode.off ? 'flash-off' : 'flash'} size={30} color="white"/>
                <Text style={{color:"white", fontSize:20}}>Flash</Text>
            </TouchableOpacity>
       </View>
       <Button
       title="Take a picture"
       titleStyle={{ fontWeight: '500' }}
       buttonStyle={{
       backgroundColor: '#e92754',
       borderColor: 'transparent',
       borderWidth: 0,
       height: 60,
       color:"#000"
       }}
       onPress={async () => {
        setIsVisible(true)
           if(cameraRef){
               let photo = await cameraRef.takePictureAsync(
                   { quality: 0.7, base64: true, exif: true }
               )
               console.log("Votre photo a bien été prise, elle possède une largeur de " + photo.width + "px");
               setIsVisible(false);
           }
       }}
       />
       <Overlay isVisible={isVisible}
        overlayStyle={{
        width: 175,
        height:50,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        shadowOpacity: 100,
      }}
      >
      <Text style={{fontSize:20}}>Taking picture...</Text> 
      </Overlay>
   </Camera>
  } else {
   cameraDisplay = <View style={{ flex: 1 }}></View>
  }

  return (
<View style={{ flex: 1 }}>
    {cameraDisplay}
</View>
  )
}