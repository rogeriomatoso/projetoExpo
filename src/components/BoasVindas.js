import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class BoasVindas extends Component{
    render(){
        let msgBoasVindas = 'Olá, seja Bem-Vindo!';
  
        return(
            <View>
                <Text style={{color: 'brown', fontSize: 24, marginTop: 50, marginBottom: 30}}>{msgBoasVindas}</Text>                    
            </View>
        )
    }
}
