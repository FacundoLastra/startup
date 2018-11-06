import React from 'react';
import { View } from 'react-native';
//import { Exercise3 } from './components/Exercise3'
//import { Exercise3SeconView } from './components/Exercise3SeconView'
//import { Exercise4 } from './components/Exercise4'
import { Exercise7 } from './components/Exercise7'

export default class App extends React.Component {
  render() {
    return (
      <Exercise7
        title= 'Lorem ipsum dolor sit amet,consectetur adipiscing elit Morbi'
        autorName = 'facundo'
        articuleContent= 'Nullam luctus sollicitudin leo vitae maximus ipsum vulputate nec Proin quam mi luctus ac elementum a pellentesque non est Etiam lacinia elit nec arcu aliquam  a facilisis turpis porta Mauris mauris ipsum'
        commentsCount = '5'
      />     
    );
  }
}
