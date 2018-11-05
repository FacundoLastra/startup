import { StyleSheet } from 'react-native';

export const styles =  
    StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: "#2196f3"
        },
        firstSquare: {      
            backgroundColor: "red",
            flex: 50,
            width: 100
        },
        secondSquare: {       
            backgroundColor: "white",
            flex:30,
            width: 100
        },
        thirdSquare: {    
            backgroundColor: "#673ab7",
            width: 100,
            flex:25
        },
        squareFixes: {
            borderRadius: 5,
            marginLeft:15
        }
    })
