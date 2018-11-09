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
            marginTop:25,
            width: 100,
            height: 100,
        },
        secondSquare: {       
            backgroundColor: "white",
            width: 100,
            height: 100,
        },
        thirdSquare: {    
            backgroundColor: "#673ab7",
            width: 100,
            height: 100,
            marginBottom:25
        },
        squareFixes: {
            borderRadius: 5,
            marginLeft:15
        }
    })
