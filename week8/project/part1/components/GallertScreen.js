import { View, ScrollView, Image, StyleSheet } from 'react-native';
import { Text, Card, Badge } from 'react-native-elements'
import React from 'react'

export default function GalleryScreen() {
  return (
    <View style={styles.container}>
        <ScrollView>
            <Text style={styles.TitlePage}>Valentin's Gallery</Text>
            <Card>
                <Image source={require('../assets/picture-1.jpg')} style={{ width:'100%', height:250, marginBottom:20, marginTop:0}}/>
                <Badge status="success" value={<Text style={styles.badges}>Homme</Text>}/>
                <Badge status="success" value={<Text style={styles.badges}>70 ans</Text>}/>
                <Badge status="success" value={<Text style={styles.badges}>Barbe</Text>}/>
                <Badge status="success" value={<Text style={styles.badges}>joyeux!</Text>}/>
                <Badge status="success" value={<Text style={styles.badges}>Cheveux Gris</Text>}/>
            </Card>
            <Card>
                <Image source={require('../assets/picture-2.jpg')} style={{ width:'100%', height:250, marginBottom:20, marginTop:0}}/>
                <Badge status="success" value={<Text style={styles.badges}>Homme</Text>}/>
                <Badge status="success" value={<Text style={styles.badges}>70 ans</Text>}/>
                <Badge status="success" value={<Text style={styles.badges}>Barbe</Text>}/>
                <Badge status="success" value={<Text style={styles.badges}>joyeux!</Text>}/>
                <Badge status="success" value={<Text style={styles.badges}>Cheveux Gris</Text>}/>
            </Card>
            <Card>
                <Image source={require('../assets/picture-3.jpg')} style={{ width:'100%', height:250, marginBottom:20, marginTop:0}}/>
                <Badge status="success" value={<Text style={styles.badges}>Homme</Text>}/>
                <Badge status="success" value={<Text style={styles.badges}>70 ans</Text>}/>
                <Badge status="success" value={<Text style={styles.badges}>Barbe</Text>}/>
                <Badge status="success" value={<Text style={styles.badges}>joyeux!</Text>}/>
                <Badge status="success" value={<Text style={styles.badges}>Cheveux Gris</Text>}/>
            </Card>
            <Card>
                <Image source={require('../assets/picture-4.jpg')} style={{ width:'100%', height:250, marginBottom:20, marginTop:0}}/>
                <Badge status="success" value={<Text style={styles.badges}>Homme</Text>}/>
                <Badge status="success" value={<Text style={styles.badges}>70 ans</Text>}/>
                <Badge status="success" value={<Text style={styles.badges}>Barbe</Text>}/>
                <Badge status="success" value={<Text style={styles.badges}>joyeux!</Text>}/>
                <Badge status="success" value={<Text style={styles.badges}>Cheveux Gris</Text>}/>
            </Card>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    // justifyContent: 'center',
    paddingTop: 50
  },
  TitlePage: {
    fontSize: 30,
    textAlign:'center',
    fontWeight: '600',
    paddingTop:10
  },
  badges: {
    color:"white",
    width:150,
    textAlign:'center'
  }
});