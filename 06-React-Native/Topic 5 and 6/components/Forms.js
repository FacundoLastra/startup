import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CostumButton } from './CostumButton'

export default class Forms extends React.Component {
  render() {
    return (
        <View style = {styles.container}>
          <Text style = {styles.title}>This is the Forms</Text>   

          <CostumButton
            type = 'primary'
            onPress = {()=> this.props.navigation.navigate('Posts')}
            buttonText = 'Posts'
          />

        </View>
        
    );
  }
}
const styles =  
    StyleSheet.create({
      container: {
        flex:1,
        alignItems:"center",
        justifyContent:'center'
      },
      title: {
        fontSize: 40,
        marginBottom:40
      }
    })