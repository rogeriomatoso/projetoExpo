import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImagemCanyon from './src/components/ImagemCanyon';
import BoasVindas from './src/components/BoasVindas';

export default class App extends Component{ 
    render(){      
      let nomeUsuario = 'Genival Lacerda';
      return(
      
        <View style={styles.container}>
         
          <BoasVindas />
          <Text style={{fontSize: 18 }}>{nomeUsuario}</Text>
          <ImagemCanyon largura={400} altura={500}/>
          
         
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