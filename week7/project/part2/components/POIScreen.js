import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import {connect} from 'react-redux';
import { Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

export function POIScreen(props) {
    if(props.ListPOI.length === 0){
        return (
            <View style={styles.container}>
                <Text style={styles.textEmpty}>Aucun Point d'intéret enregistré</Text>
            </View>
        )
    }else {
        return (
          <View style={styles.container}>
              <ScrollView>
                  {props.ListPOI.map((list,i) => (
                      <ListItem bottomDivider key={i}>
                          <ListItem.Content style={styles.contentList}>
                              <View>
                                  <ListItem.Title style={styles.title}>{list.title}</ListItem.Title>
                                  <ListItem.Subtitle>{list.description}</ListItem.Subtitle>
                              </View>
                              <Button
                                  title="Delete"
                                  icon={{
                                  name: 'trash',
                                  type: 'ionicon',
                                  size: 12,
                                  color: '#FFF',
                                  }}
                                  iconContainerStyle={{ marginRight: 10 }}
                                  titleStyle={{ fontWeight: '700', fontSize: 12 }}
                                  buttonStyle={{ backgroundColor: '#eb4d4b' }}
                                  onPress={() => props.onDeletePOI(list)}
                              />
                          </ListItem.Content>
                      </ListItem>
                  ))}
              </ScrollView>
          </View>
        )
    }
}

function mapStateToProps(state) {
    return { ListPOI: state.POIList }
}

function mapDispatchToPropsDelete(dispatch) {
    return {
      onDeletePOI: function(position) {
        dispatch({type: 'delete', position: position})
      }
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F3F3F3',
      justifyContent: 'center',
      paddingTop: 50
    },
    textEmpty: {
        textAlign: 'center'
    },
    contentList: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center' 
    },
    title: {
        fontWeight: '700',
        fontSize: 20
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToPropsDelete,
    null
)(POIScreen);