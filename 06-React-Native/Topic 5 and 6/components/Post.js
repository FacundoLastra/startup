import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { CostumButton } from './CostumButton'

export default class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isLoading: true }
  }

  componentDidMount() {
    const autorID = this.props.navigation.getParam('userId');
    if (autorID) {
      const url = 'https://jsonplaceholder.typicode.com/users' + '/' + autorID
      return fetch(url)
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
      console.log(userInformation)
      renderView = <View style={styles.container}>
        <View style={styles.userInformation}>
          <Text style={styles.grandTitle}>Autor Information : </Text>

          <Text style={styles.userItem}>UserName: {userInformation.username}</Text>
          <Text style={styles.userItem}>Name: {userInformation.name}</Text>
          <Text style={styles.userItem}>Email: {userInformation.email}</Text>
          <Text style={styles.userItem}>WebSite: {userInformation.website}</Text>
          <Text style={styles.userItem}>Phone: {userInformation.phone}</Text>
          <Text style={styles.userItem}>City: {userInformation.address.city}</Text>
          <Text style={styles.userItem}>Company: {userInformation.company.name}</Text>

        </View>

        <CostumButton
          type='primary'
          onPress={() => this.props.navigation.popToTop()}
          buttonText='Finish'
        />

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
      alignItems: "center",
      justifyContent: 'center'
    },
    userInformation: {
      marginBottom: 50
    },
    grandTitle: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 30
    },
    userItem: {
      marginBottom: 10,
      fontSize: 20
    }
  })