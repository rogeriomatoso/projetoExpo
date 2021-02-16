import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImagemCanyon from './src/components/ImagemCanyon';
import BoasVindas from './src/components/BoasVindas';

export default class App extends Component{ 
    render(){
      let titulo1 = 'PROJETO EXPO';
      let titulo2 = 'APS - DSI II';
      let nomeUsuario = 'Genival Lacerda';
      return(
      
        <View style={styles.container}>
         
          <BoasVindas />
          <Text style={{fontSize: 24 }}>{nomeUsuario}</Text>
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