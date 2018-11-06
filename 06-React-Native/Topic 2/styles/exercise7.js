import { StyleSheet } from 'react-native';

export const styles =  
    StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column'
        },
        row1: {
            flex:55,
            flexDirection: "row",
            marginTop: 20,
            borderColor: 'black',
            borderWidth: 2,
            margin:3,
            marginTop:25
        },
        row2: {
            flex:45,
        },
        articuleInformationArea: {
            flex:70
        },
        titleContainer: {
            flex: 2
        },
        autorContainer: {
            flex: 1
        },
        articuleContentContainer: {
            flex:3
        },
        iconsContainer: {
            flex:1,flexDirection:'row'
        },
        header:{
            fontWeight: "bold",
            fontStyle: "italic"
        },
        title: {
            fontSize: 20
        },
        autorName: {
            color: "#9fc8e2"
        },
        articuleContent: {
            fontStyle: "italic"
        },
        socialIcons: {
            width:30,
            height:30
        },
        commentsContainer: {
            backgroundColor: 'grey',
            flexDirection:'row' 
        },
        commentCounter: {
            color: 'white'
        },
        imageContainer: {
            flex:30,
            justifyContent:"center"
        },
        smallSize: {
            width: 100,
            height: 130
        }         
    })