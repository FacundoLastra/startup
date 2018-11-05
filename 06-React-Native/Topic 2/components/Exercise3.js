import React from 'react';
import { View } from 'react-native';
import { styles } from '../styles/exercise3'

export class Exercise3 extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.firstRow}>
                    <View style={[styles.firstSquare,styles.borderBoxes]}/>
                    <View style={[styles.secondSquare,styles.borderBoxes]}/>
                    <View style={[styles.thirdSquare,styles.borderBoxes]}/>
                </View>
                <View style={styles.seconRow}/>
                <View style={styles.thirdRow}/>
            </View>
        
        )
    }
}