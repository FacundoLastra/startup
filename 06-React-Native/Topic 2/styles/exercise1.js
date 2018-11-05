import { StyleSheet } from 'react-native';

export const styles =  
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#2196f3",
            width: 500,
            height: 500,
            borderRadius: 5
        },
        smallSquare: {
            flex: 1,
          width: 80,
          marginBottom: 15,
          marginTop:30,
          marginLeft: 10,
         backgroundColor: "red"
        },
        mediumSquare: {
            flex: 2,
          width: 170,
          marginBottom: 15,
          marginLeft: 10,
            backgroundColor: "#673ab7"
        },
        largeSquare: {
            flex: 3,
          width: 260,
          marginLeft: 10,
            backgroundColor: "white"
        },
        simple: {
            flex: 2
        },
        borderBoxes: {
            borderRadius: 5
        }
    })
