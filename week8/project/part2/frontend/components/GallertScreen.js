import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function GallertScreen() {
  return (
    <View style={styles.container}>
        <ScrollView>
            <View style={styles.scrollContainer}>
                <Text>GallertScreen</Text>
            </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#F3F3F3',
      paddingTop: 50
    },
    scrollContainer: {
        flex: 1,
        justifyContent: "center"
    }
});