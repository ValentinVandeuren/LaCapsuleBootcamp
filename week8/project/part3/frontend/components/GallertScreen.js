import { View, ScrollView, Image, StyleSheet } from 'react-native';
import { Text, Card, Badge } from 'react-native-elements'
import React from 'react'
import { connect } from 'react-redux';

function GalleryScreen(props) {
  var photoList = props.photo.map((image, i)=>{     
  return <Card key={i}>
      <Card.Image source={{uri: image.resultCloudinary.url}} style={{ width:'100%', height:250, marginBottom:20, marginTop:0}}/>
      <Badge status="success" value={<Text style={styles.badges}>{image.gender}</Text>}/>
      <Badge status="success" value={<Text style={styles.badges}>{image.age}</Text>}/>
    </Card>
  });
  return (
    <View style={styles.container}>
        <ScrollView>
            <Text style={styles.TitlePage}>Valentin's Gallery</Text>
            {photoList}
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

function mapStateToProps(state){
  return{
      photo: state.photo
  }
}
  
export default connect(mapStateToProps, null)
(GalleryScreen);