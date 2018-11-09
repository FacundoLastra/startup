import React from 'react';
import { View, Text } from 'react-native';
//import { Exercise3 } from './components/Exercise3'
//import { Exercise3SeconView } from './components/Exercise3SeconView'
//import { Exercise4 } from './components/Exercise4'
import { Exercise7 } from './components/Exercise7'
import { styles } from './styles/exercise7';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row1}>
          <Exercise7
            title= 'Lorem ipsum dolor sit amet,consectetur adipiscing elit Morbi'
            autorName = 'facundo'
            articuleContent= 'Nullam luctus sollicitudin imus ipsum sollicitudin leo vitae leo vitae maximus ipsum sollicitudin leo vitae maximus ipsum vulputate nec Proin quam mi luctus ac elementum a pellentesque non est Etiam lacinia elit nec arcu aliquam  a facilisis turpis porta Mauris mauris ipsum'
            commentsCount = '5'
            imageUrl = 'http://www.stickpng.com/assets/images/580b585b2edbce24c47b249b.png'
          />
        </View>        
        <View style={styles.row2}>
         
        </View>  
      </View>  
    );
  }
}
