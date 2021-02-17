import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import ImagemCanyon from './src/components/ImagemCanyon';
import BoasVindas from './src/components/BoasVindas';
import BotaoEntrar from './src/components/BotaoEntrar';

export default class App extends Component{ 
    render(){      
      let nomeUsuario = 'Genival Lacerda';
      return(
      
        <View style={styles.container}>
         
          <BoasVindas />
          <Text style={{fontSize: 18 }}>Aprecie uma das maiores maravilhas do mundo, {nomeUsuario}</Text>
          <ImagemCanyon largura={400} altura={500}/>
          <BotaoEntrar/>
          
         
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