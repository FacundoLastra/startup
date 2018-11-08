import React from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import MyListItem from './MyListItem'

export default class Posts extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isLoading: true }
    this.renderItem = this.renderItem.bind(this);
    this.keyExtractor = this.keyExtractor.bind(this);
    this.handleOnPressItem = this.handleOnPressItem.bind(this);
  }

  componentDidMount() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        const arrayItems = responseJson.map((item) => item)
        setTimeout(() => { /// to demonstrate operation of the spinner
          this.setState({
            isLoading: false,
            dataSource: arrayItems
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
  }

  handleOnPressItem(id) {
    this.props.navigation.navigate('Post', { userId: id })
  }

  renderItem = ({ item }) => (
    <MyListItem
      id={item.userId}
      title={item.title}
      body={item.body}
      onPressItem={this.handleOnPressItem}
    />
  )


  keyExtractor = ((item) => item.id.toString()) ///for warning solution


  render() {
    let renderView = <View style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
      <ActivityIndicator size='large' color="#1abc9c" />
    </View>
    if (!this.state.isLoading && this.state.dataSource) {
      renderView = <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.dataSource}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          refreshing={this.state.isLoading}
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
