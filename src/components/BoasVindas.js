import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class BoasVindas extends Component{
    render(){
        let msgBoasVindaas = 'Olá, seja Bem-Vindo!';
  
        return(
            <View>
                <Text style={{color: 'brown', fontSize: 24, marginBottom: 30}}>{msgBoasVindaas}</Text>
                    
            </View>
        )
    }
  }
