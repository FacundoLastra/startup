import React from 'react';
import { View, Text } from 'react-native';
import { CostumButton } from './CostumButton'


export default class Forms2 extends React.Component {
  render() {
    return (
        <View style= {{flex:1, alignItems:"center",justifyContent:'center'}}>
            <Text>This is the Forms2</Text>   
            <CostumButton
              type = 'primary'
              onPress = {()=> this.props.navigation.navigate('Forms3')}
              buttonText = 'Next'
             />
        </View>
        
    );
  }
}
