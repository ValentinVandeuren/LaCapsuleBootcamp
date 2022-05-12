import React, { useState } from 'react';
import { View, ImageBackground } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen(props) {
    const [pseudo, setPseudo] = useState("");

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ImageBackground
            source={require('../assets/home.jpg')}
            style={{ height: "100%", width: "100%", flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Input
                placeholder='John'
                leftIcon={{type : 'Ionicons', name: 'person'}}
                containerStyle={{
                    width: '80%'
                }}
                onChangeText={(value) => setPseudo(value)}
              value={pseudo}
            />
            <Button
                title="Lest's Go!"
                onPress={() => {props.navigation.navigate('ContentScreen')}}
                icon={{
                    name: 'rocket',
                    type: 'ionicon',
                    size: 15,
                    color: '#FFF',
                }}
                iconContainerStyle={{ marginRight: 10 }}
                titleStyle={{ fontWeight: '700' }}
                buttonStyle={{
                    backgroundColor: 'rgba(90, 154, 230, 1)',
                    borderColor: 'transparent',
                    borderWidth: 0,
                    borderRadius: 30,
                }}
                containerStyle={{
                    width: 200,
                    marginHorizontal: 50,
                    marginVertical: 10,
                }}
            />
        </ImageBackground>
    </View>
  )
}