import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

export default class ImagemCanyon extends Component{
    render(){
        let imagem = 'https://viagemeturismo.abril.com.br/wp-content/uploads/2016/10/grand-canyon-north-rim-grand-canyon-nps.jpeg';
        return(
            <View>
                <Image
                    source={{uri: imagem}}
                    sytle={{width: this.props.largura, height: this.props.altura}}      
                />
            </View>
        )
    }
}