import React from 'react';
import { View } from 'react-native';
import  Forms  from './Forms'
import  Forms2  from './Forms2'
import  Forms3  from './Forms3'
import { createStackNavigator } from 'react-navigation'
import TabNavigationTest from './TabNavigationTest';

export default class StackNavigationTest extends React.Component {
  render() {
    return (  
      <AppStackNavigator/>
    );
  }
}
const AppStackNavigator = createStackNavigator({
  Home : TabNavigationTest,
  Forms : Forms,
  Forms2: Forms2,
  Forms3: Forms3
})