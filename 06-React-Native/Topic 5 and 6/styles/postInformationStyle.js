import { StyleSheet } from 'react-native';

export const styles =  
    StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column'
        },
        articuleContainer: {
            flex:1,
            flexDirection: "row",
            borderColor: 'black',
            borderWidth: 1,
            margin:3,
            padding:10,         
            
        },
        row1:{
            flex:55
        },
        row2: {
            flex: 45
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
            flex:4
        },
        iconsContainer: {
            flex:1,
            flexDirection:'row'
        },
        header:{
            fontWeight: "bold",
            fontStyle: "italic"
        },
        title: {
            fontSize: 18
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
            flexDirection:'row',
            width:40,
            height:40 
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
            height: 150,
            marginLeft:5
        }         
    })