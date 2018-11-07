import React from 'react';
import  Forms  from './Forms'
import  CameraExpoTest  from './CameraExpoTest'
import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Feather'
import SecondIcon from 'react-native-vector-icons/EvilIcons'


export default createBottomTabNavigator({
  Forms:{ 
      screen: Forms,
    navigationOptions: {
    tabBarLabel: 'Forms',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="triangle" color={tintColor} size={24} />
    )
  }},
  Other:{ screen: CameraExpoTest,
  navigationOptions: {
    tabBarLabel: 'Camera',
    tabBarIcon: ({tintColor}) => (
      <SecondIcon name="camera" color={tintColor} size={35}/>
    )
  }}   
})
