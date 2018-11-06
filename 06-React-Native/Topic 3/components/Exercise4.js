import React from 'react';
import { View } from 'react-native';
import { styles } from '../styles/styles'
import { CostumButton } from '../components/CostumButton'

export class Exercise4 extends React.Component {
    constructor(props){
        super(props)
        this.state = { inputText: ''};
    }
    render() {
        return (
            <View style={styles.container}>
                <CostumButton
                    type = 'primary'
                    buttonText = 'Primary' 
                   
                />
                <CostumButton
                    type = 'secundary' 
                    buttonText = 'Secundary'
                />
                <CostumButton
                    type = 'disable'
                    buttonText = 'Disable' 
                    disable = {true}
                />
                      
            </View>
        )
    }
}