import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles'
import { AppTextInput } from '../components/AppTextInput'
import { CostumButton } from '../components/CostumButton'

export class ComponentsImplement extends React.Component {
    constructor(props){
        super(props)
        this.state = { inputText: ''};
    }
    render() {
        return (
            <View style={styles.container}>
                <AppTextInput
                    placeholder='Type Text HERE!'
                    value = {this.state.inputText}
                    onChange ={ (newText) => this.setState({inputText: newText}) }
                    styles = {styles.textInput}
                />
               <CostumButton
                    onPress = {() => this.setState({inputText: ''}) }
                    type = 'primary' 
                    buttonText = 'deleteContent'

               />
                <Text
                    style= {styles.text}
                >{this.state.inputText}</Text>
                      
            </View>
        )
    }
}