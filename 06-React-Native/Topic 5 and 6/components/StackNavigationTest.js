import React from 'react';
import  Forms  from './Forms'
import  Posts  from './Posts'
import  Post  from './Post'
import CameraExpoTest from './CameraExpoTest'
import ShowPhoto from './ShowPhoto'

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
  Home : {
    screen: TabNavigationTest,
  },
  Forms : {
    screen: Forms,
  },
  Posts: {
    screen: Posts,
    navigationOptions: () => ({
      title: 'List of Posts'
    })
  },
  Post:{
    screen: Post,
    navigationOptions: () =>({
      title: 'Post and User Information '
    })
  },
  CameraExpoTest:{
    screen: CameraExpoTest
  },
  ShowPhoto: {
    screen: ShowPhoto,
    navigationOptions: () => ({
      title: 'Your Photo'
    })
  }
})