import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { CostumButton } from './CostumButton'

export default class ShowPhoto extends React.Component {
    render() {
        const photo = this.props.navigation.getParam('photo');
    return (
        <View style={styles.container}>
                <Image
                    resizeMode = 'cover'
                    source={{uri : photo.uri}}
                    style = {styles.image}
                />
                <View style={styles.buttonView}>
                <CostumButton
                    type = 'primary'
                    onPress = {() => this.props.navigation.popToTop()}
                    buttonText = 'Return'
                />
                </View>
        </View>
    )
   
        
    }
}

const styles =  
    StyleSheet.create({
        container: {
            flex:1
        },
        image: {
            width: 350,
            height: 400,
            marginLeft:5
        },
        buttonView: {
            alignItems: "center",
            justifyContent: 'center',
            marginTop:10
        }
    })
