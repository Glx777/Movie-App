import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { styles } from './styles'

class TvShowsScreen extends Component {
  render() {
    return (
      <View>
        <Text style={styles.heading}>Popular TV Shows</Text>
      </View>
    )
  }
}

export default TvShowsScreen
