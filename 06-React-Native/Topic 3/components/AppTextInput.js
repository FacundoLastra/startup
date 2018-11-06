import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';
import PropTypes from 'prop-types';

export class AppTextInput extends React.Component {
  
    constructor(props){
        super(props)
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    
    handleOnChange(event){
        this.props.onChange(event)
    }

    render() {
        return (
            <TextInput
                style = {this.props.styles}
                secureTextEntry = {this.props.type === 'password'? true : false}
                placeholder = {this.props.placeholder === undefined? '': this.props.placeholder}
                onChangeText = {this.handleOnChange}
                value = {this.props.value == undefined ? '' : this.props.value}
            />
        )
    }
}
AppTextInput.propTypes = {
    type: PropTypes.string
};

AppTextInput.defaultProps = {
    type: 'text'
}