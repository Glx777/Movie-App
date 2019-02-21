import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { styles } from './styles'

class MoviesScreen extends Component {
  static navigationOptions = {
    title: 'Movies'
  }
  render() {
    return (
      <View>
        <Text>App</Text>
      </View>
    )
  }
}

export default MoviesScreen
