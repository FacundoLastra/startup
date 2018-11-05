import React from 'react';
import { View } from 'react-native';
import { styles } from '../styles/exercise1'

export class Exercise1 extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.smallSquare,styles.borderBoxes]}/>
                <View style={[styles.mediumSquare,styles.borderBoxes]}/>
                <View style={[styles.largeSquare,styles.borderBoxes]}/>
                <View style={styles.simple}/>
            </View>
        
        )
    }
}