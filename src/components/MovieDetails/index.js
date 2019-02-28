import React from 'react'
import { View, Text, Image } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { styles } from './styles'

const MovieDetails = ({
  basePosterPath,
  poster,
  details: { original_title }
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          resizeMode="stretch"
          source={{ uri: basePosterPath + poster }}
        />
      </View>
      <Text>{original_title}</Text>
    </View>
  )
}

MovieDetails.propTypes = {
  details: PropTypes.object.isRequired,
  basePosterPath: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  basePosterPath: state.basePosterPath,
  poster: state.poster
})

export default connect(mapStateToProps)(MovieDetails)
