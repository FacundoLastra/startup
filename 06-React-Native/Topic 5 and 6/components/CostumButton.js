import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles'

export class CostumButton extends React.Component {
    constructor(props){
        super(props)
        this.handleOnPress = this.handleOnPress.bind(this);
    }
    handleOnPress(){
        if(!this.props.disable || this.props.disable === undefined){
            this.props.onPress();
        }
    }
    render() {
        let buttonStyle = [styles.button];
        let textStyle;
        switch (this.props.type) {
            case 'secundary':
                buttonStyle.push(styles.secundary);
                textStyle = styles.textSecundary;
                break;
            case 'disable':
                buttonStyle.push(styles.disable);
                textStyle = styles.textDisable;
                break;
            case 'primary':
                buttonStyle.push(styles.primary);
                textStyle = styles.textPrimary;
                break;
            default: 
                buttonStyle.push(styles.primary);
                textStyle = styles.textPrimary;
                break;
        }
        return (
            <TouchableOpacity onPress={ this.handleOnPress }>
                <View style = {[buttonStyle,styles.centerContent]} >
                    <Text style = {textStyle} >{this.props.buttonText}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}