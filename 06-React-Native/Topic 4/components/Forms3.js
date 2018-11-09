import React from 'react';
import { View, Text } from 'react-native';
import { CostumButton } from './CostumButton'

export default class Forms3 extends React.Component {
  render() {
    return (
        <View style= {{flex:1, alignItems:"center",justifyContent:'center'}}>
            <Text>This is The Forms3</Text>    
            <CostumButton
              type = 'primary'
              onPress = {()=> this.props.navigation.popToTop()}
              buttonText = 'Finish'
             />
        </View>
    );
  }
}