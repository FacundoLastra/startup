import React from 'react';
import { View } from 'react-native';
import { styles } from '../styles/exercise3SeconView'

export class Exercise3SeconView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.firstSquare,styles.squareFixes]} />
                <View style={[styles.secondSquare,styles.squareFixes]} />
                <View style={[styles.thirdSquare,styles.squareFixes]} />
            </View>
        )
    }
}