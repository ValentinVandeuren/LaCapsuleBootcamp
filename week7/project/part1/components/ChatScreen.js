import { View, ScrollView } from 'react-native'
import React from 'react'
import { Button, Input, ListItem } from 'react-native-elements';

export default function ChatScreen() {
  return (
    <View style={{flex: 1, alinItems: 'center', justifyContent: 'space-between', backgroundColor: '#F2F2F2', paddingTop: 50}}>
        <ScrollView>
            <ListItem bottomDivider>
                <ListItem.Content>
                    <ListItem.Title>bponjour</ListItem.Title>
                    <ListItem.Subtitle>sdsds</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
                <ListItem.Content>
                    <ListItem.Title>bponjour</ListItem.Title>
                    <ListItem.Subtitle>sdsds</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        </ScrollView>
        <View>
            <Input
                placeholder='Your message'
                inputStyle={{
                    textAlign: 'center',
                    width: '100%'
                }}
            />
            <Button
                title="Send!"
                icon={{
                    name: 'mail',
                    type: 'ionicon',
                    size: 15,
                    color: '#FFF',
                }}
                iconContainerStyle={{ marginRight: 10 }}
                titleStyle={{ fontWeight: '700' }}
                buttonStyle={{
                    backgroundColor: '#eb4d4b',
                    borderColor: 'transparent',
                    borderWidth: 0,
                }}
                containerStyle={{
                    width: '100%'
                }}
            />
        </View>
    </View>
  )
}