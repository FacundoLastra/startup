import React from 'react';
import { View } from 'react-native';
import { styles } from '../styles/exercise5'

export class Exercise5 extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row1}>
                    <View style={[styles.firstSquare,styles.squareFixes]} />
                </View>
                <View style={styles.row2}>
                    <View style={[styles.secondSquare,styles.squareFixes]} />
                </View>
                <View style={styles.row3}>
                    <View style={[styles.thirdSquare,styles.squareFixes]} />    
                </View>            
            </View>
        )
    }
}
const borderLimits = (color) => {
    return {
        borderColor: color,
        borderWidth: 7
    }
}