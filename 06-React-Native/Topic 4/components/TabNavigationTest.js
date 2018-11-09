import React from 'react';
import  Forms  from './Forms'
import { ScrollViewTest } from './ScrollViewTest'
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
  Other:{ screen: ScrollViewTest,
  navigationOptions: {
    tabBarLabel: 'Others',
    tabBarIcon: ({tintColor}) => (
      <SecondIcon name="question" color={tintColor} size={35}/>
    )
  }}   
})
