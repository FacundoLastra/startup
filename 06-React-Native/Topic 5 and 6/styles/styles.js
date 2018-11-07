import { StyleSheet } from 'react-native';

export const styles =  
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#e6e5e6",
            justifyContent: 'center',
            alignItems: 'center'
            
        },
        textInput: {
            height: 40,
            width: 200
        },
        text: {
            height: 40
        },
        button: {
            height: 60,
            width: 180,
            borderRadius: 50
        },
        primary: {
            backgroundColor: '#5cbaa2',
        },
        textPrimary: {
            color: 'white',
            fontSize: 25
        },
        secundary: {
            borderWidth: 3,
            borderColor: '#7c8ca1'
        },
        textSecundary: {
            color: '#7c8ca1',
            fontSize: 25
        },
        disable: {
            borderWidth: 3,
            borderColor: '#c3ccd2'
        },
        textDisable: {
            color: '#c3ccd2',
            fontSize: 25
        },
        centerContent: {
            justifyContent:'center',
            alignItems: 'center'
        } 
    })
