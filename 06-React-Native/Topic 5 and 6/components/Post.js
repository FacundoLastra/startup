import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { CostumButton } from './CostumButton'
import { PostInformation } from './PostInformation'

export default class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isLoading: true }
  }

  componentDidMount() {
    const autorID = this.props.navigation.getParam('userId');
    if (autorID) {
      const userInformationUrl = 'https://jsonplaceholder.typicode.com/users' + '/' + autorID
      return fetch(userInformationUrl)
      .then((response) => response.json())
      .then((responseJson) => {
        setTimeout(() => { /// to demonstrate operation of the spinner
          this.setState({
            isLoading: false,
            dataSource: responseJson
          })
        }, 1000)
      })
      .catch((error) => {
        console.log(error)
        this.setState({
          isLoading: false,
          error: 'Server Error'
        })
      });
    } else {
      this.setState({
        isLoading: false,
        error: 'Invalid Prop'
      })
    }
  }   
  render() {
    let renderView = <View style={styles.container}>
      <ActivityIndicator size='large' color="#1abc9c" />
    </View>
    if (!this.state.isLoading && this.state.dataSource) {
      const userInformation = this.state.dataSource;
      const postInformation = this.props.navigation.getParam('post');
      console.log(postInformation)
      renderView = <View style={styles.container}>
        
        <View style={styles.postData}>
          <PostInformation
            title= {postInformation.title}
            autorName = {userInformation.username}
            articuleContent = {postInformation.body}
            commentsCount = {Math.floor(Math.random() * 10)}
            imageUrl = 'http://www.stickpng.com/assets/images/580b585b2edbce24c47b249b.png'
          />
        </View>
        <View style={styles.userInformation}>
          <View style={styles.autorInformationFlex}>
            <View style={styles.autorInformationRow}>
              <Text style={styles.grandTitle}>Autor Information : </Text>
              <Text style={styles.userItem}>UserName: {userInformation.username}</Text>
              <Text style={styles.userItem}>Name: {userInformation.name}</Text>
              <Text style={styles.userItem}>Email: {userInformation.email}</Text>
              <Text style={styles.userItem}>WebSite: {userInformation.website}</Text>
              <Text style={styles.userItem}>Phone: {userInformation.phone}</Text>
              <Text style={styles.userItem}>City: {userInformation.address.city}</Text>
              <Text style={styles.userItem}>Company: {userInformation.company.name}</Text>    
            </View>
            <View style={styles.button}>
              <CostumButton
                type='primary'
                onPress={() => this.props.navigation.popToTop()}
                buttonText='Finish'
              />
            </View>
          </View>
        </View>

      </View>

    } else if (this.state.error) {
      renderView = <View>
        <Text>Error: {this.state.error}</Text>
      </View>
    }
    return (
      renderView
    );
  }
}

const styles =
  StyleSheet.create({
    container: {
      flex: 1,
    },
    userInformation: {
      flex:1,
      marginLeft: 5,
      marginRight: 5
    },
    postData:{
      flex:1.5
    },
    grandTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    userItem: {
      marginBottom: 2,
      fontSize: 13
    },
    autorInformationFlex: {
      flexDirection:'row'
    },
    autorInformationRow: {
      flex: 1
    },
    button:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }

  })