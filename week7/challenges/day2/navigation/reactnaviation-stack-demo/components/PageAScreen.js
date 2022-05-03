import { View, Button } from 'react-native'
import React from 'react'

export default function PageAScreen(props) {
  return (
    <View style={{flex: 1, alinItems: 'center', justifyContent: 'center', backgroundColor: '#2ecc71'}}>
      <Button title='Go Home' onPress={() => props.navigation.navigate('Home')} />
    </View>
  )
}