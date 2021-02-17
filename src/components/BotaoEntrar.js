import React, {Component} from 'react';
import { Button, View, SafeAreaView, Alert } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const App = () => (
  <SafeAreaView style={styles.container}/>
);

export default class BotaoEntrar extends Component{
    render(){
        return(
            <View>            
            <Button
                title="Entrar"
                onPress={() => Alert.alert('Apenas Demonstração!')}               
            />
            </View>
        )
    }
}