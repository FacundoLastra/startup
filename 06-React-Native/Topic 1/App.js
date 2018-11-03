import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
     
      <ScrollView style={scrollViewStyle.container} horizontal={true} centerContent={true}>
        <View style={styles.container}>
          <Text>Holis soy una APP</Text>        
        </View>
        <View style={styles2.container}>
          <Text>Holis soy una APP</Text>        
        </View>
        <View style={styles2.container}>
          <Text>Holis soy una APP</Text>        
        </View>
        <View style={styles2.container}>
          <Text>Holis soy una APP</Text>        
        </View>
        <View style={styles2.container}>
          <Text>Holis soy una APP</Text>        
        </View>
      </ScrollView>
     
    );
  }
}
const scrollViewStyle = StyleSheet.create({
  container: {
    paddingVertical: 20
  }
})
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6ea0bf',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:'#000000',
    borderStyle:'solid',
    borderWidth: 2
  },
});

const styles2 = StyleSheet.create({
  container: {
    backgroundColor: '#e4e6ce',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:'#000000',
    borderStyle:'solid',
    borderWidth: 2
  },
});

