import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class MyListItem extends React.PureComponent {
      constructor(props){
        super(props)
        this.handleOnPress = this.handleOnPress.bind(this);
      }
  
  handleOnPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    return (
      <TouchableOpacity onPress={this.handleOnPress}>
        <View style={styles.container} >
          <Text style={styles.title}>
             {this.props.title}
          </Text>
          <Text style={styles.body}>
            {this.props.body}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles =  
    StyleSheet.create({
      container: {
        flex: 1,
        padding: 8,
        borderColor: '#5cbaa2',
        borderWidth: 1.2
      },
      title: {
          fontSize: 20,
          fontWeight: "bold",
          fontStyle: "italic",
          justifyContent: 'center',
          
      },
      body: {
        marginTop: 5
      }
    })