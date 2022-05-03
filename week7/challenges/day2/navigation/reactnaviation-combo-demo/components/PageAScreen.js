import { View, Button } from 'react-native'
import React from 'react'

export default function HomeScreen(props) {
  return (
    <View style={{flex: 1, alinItems: 'center', justifyContent: 'center', backgroundColor: '#e67e22'}}>
      <Button title='Go page B' onPress={() => props.navigation.navigate('PageB')} />
    </View>
  )
}