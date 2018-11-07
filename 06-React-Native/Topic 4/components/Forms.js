import React from 'react';
import { View, Text } from 'react-native';
import { CostumButton } from './CostumButton'

export default class Forms extends React.Component {
  render() {
    return (
        <View style= {{flex:1, alignItems:"center",justifyContent:'center'}}>
          <Text>This is the Forms</Text>   

          <CostumButton
            type = 'primary'
            onPress = {()=> this.props.navigation.navigate('Forms2')}
            buttonText = 'Next'
          />

        </View>
        
    );
  }
}
/*
const AppStackNavigator = createStackNavigator({
    Forms : Forms,
    Forms2: Forms2,
    Forms3: Forms3
})
*/