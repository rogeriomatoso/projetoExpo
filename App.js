import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImagemCanyon from './src/components/ImagemCanyon';

export default class App extends Component{

 
    render(){
      let titulo1 = 'PROJETO EXPO';
      let titulo2 = 'APS - DSI II';
      let nome = 'Genivaldo Lacerda'
      return(
      
        <View style={styles.container}>
          <Text style={{color: '#FF0000', fontSize: 48}}>{titulo1}</Text>
          <Text style={{color: 'green', fontSize: 36}}>{titulo2}</Text>
          <ImagemCanyon largura={500} altura={500}/>

        </View>
      )
   }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',    
   
    }   
  }
)