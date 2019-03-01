import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import { styles } from './styles'

const Genre = ({ genre: { name } }) => {
  return (
    <View>
      <Text style={styles.text}>{name}</Text>
    </View>
  )
}

Genre.propTypes = {
  genre: PropTypes.object.isRequired
}

export default Genre
