import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component{

 // lets (titulo1) = 'PROJETO EXPO';
    render(){
      return(
      
        <View style={styles.container}>
          <Text>titulo1</Text>

        </View>
      )
   }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    color: '#FFF0000',
   
    }   
  }
)