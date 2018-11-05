import { StyleSheet } from 'react-native';

export const styles =  
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#2196f3",
        },
        firstRow: {
            flex: 1,
            flexDirection:"row",
            marginTop: 30,
            marginRight:10,
            marginLeft:10
        },
        seconRow: {
            flex:1
        },
        thirdRow: {
            flex:1
        },
        smallSquare: {
            flex: 1,
            height: 100,
            marginRight:5,          
            backgroundColor: "red"
        },
        mediumSquare: {
            flex: 1,
            height: 100,
            marginRight:5,
            marginLeft:5,          
            backgroundColor: "#673ab7"
        },
        largeSquare: {
            flex: 1,
            height: 100, 
            marginLeft:5,        
            backgroundColor: "white"
        },
        borderBoxes: {
            borderRadius: 5
        }
    })
