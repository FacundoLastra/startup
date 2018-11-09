import { StyleSheet, Platform } from 'react-native';

export const styles =  
    StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            backgroundColor: Platform.OS === 'ios' ? "grey" : "green"
        },
        row1: {
            flex:1,
            flexDirection: "column",
            justifyContent:"flex-start"
        },
        row2: {
            flex:1,
            flexDirection: "column",
            justifyContent: "center"
        },
        row3: {
            flex:1,
            flexDirection: "column",
            justifyContent:"flex-end"
        },
        firstSquare: {      
            backgroundColor: "red",
            width:110,
            height: 110,
            marginTop: 30,
            marginLeft: 10
        },
        secondSquare: {       
            backgroundColor: "white",
            width:110,
            height: 110
        },
        thirdSquare: {    
            backgroundColor: "#673ab7",
            width:110,
            height: 110,
            marginBottom: 10
        },
        squareFixes: {
            borderRadius: 5
        }
    })
