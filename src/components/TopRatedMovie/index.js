import React from 'react'
import { TouchableOpacity, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { chooseMovie, addPoster } from '../../store/actions'

import { styles } from './styles'

const TopRatedMovie = ({
  title,
  poster,
  basePosterPath,
  movieID,
  dispatch,
  navigation
}) => {
  return (
    <TouchableOpacity
      style={styles.topRatedMovieContainer}
      onPress={() => {
        dispatch(chooseMovie(movieID))
        dispatch(addPoster(poster))
        navigation.navigate('Movie')
      }}
    >
      <Image
        activeOpacity={0.8}
        style={styles.image}
        resizeMode="cover"
        source={{ uri: basePosterPath + poster }}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

TopRatedMovie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  basePosterPath: PropTypes.string.isRequired,
  movieID: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  basePosterPath: state.basePosterPath
})

export default connect(mapStateToProps)(TopRatedMovie)
