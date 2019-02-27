import React from 'react'
import { TouchableOpacity, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { chooseMovie } from '../../store/actions'

import { styles } from './styles'

const PopularMovie = ({
  title,
  poster,
  basePosterPath,
  movieID,
  dispatch,
  navigation
}) => {
  return (
    <TouchableOpacity
      style={styles.popularMovieContainer}
      onPress={() => {
        dispatch(chooseMovie(movieID))
        navigation.navigate('Movie')
      }}
    >
      <Image
        activeOpacity={0.8}
        style={styles.image}
        resizeMode="contain"
        source={{ uri: basePosterPath + poster }}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const mapStateToProps = state => ({
  basePosterPath: state.basePosterPath
})

PopularMovie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  basePosterPath: PropTypes.string.isRequired,
  movieID: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(PopularMovie)
