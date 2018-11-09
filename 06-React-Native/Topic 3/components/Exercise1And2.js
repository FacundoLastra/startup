import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles'

export class Exercise1And2 extends React.Component {
    constructor(props){
        super(props)
        this.state = { inputText: ''};
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style = {styles.textInput}
                    placeholder='Type text HERE!'
                    onChangeText= {(inputText) => this.setState({inputText})}
                    value= {this.state.inputText}
                />
               <TouchableOpacity onPress={() => this.setState({inputText: ''}) } >
                   <View>
                       <Text>ClearInput</Text>
                   </View>
               </TouchableOpacity>
                <Text
                    style= {styles.text}
                >{this.state.inputText}</Text>
                      
            </View>
        )
    }
}