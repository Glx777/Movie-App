import React from 'react'
import { TouchableOpacity, Text, Image, View } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
  chooseMovie,
  addMoviePoster,
  addTvShowPoster,
  chooseTVShow
} from '../../store/actions'

import { styles } from './styles'

const ListItem = ({
  title,
  poster,
  basePosterPath,
  movieID,
  tvShowID,
  dispatch,
  navigation,
  type
}) => {
  return (
    <TouchableOpacity
      style={styles.listItemContainer}
      onPress={() => {
        if (type === 'Movie') {
          dispatch(chooseMovie(movieID))
          dispatch(addMoviePoster(poster))
          navigation.navigate(type)
        } else {
          dispatch(chooseTVShow(tvShowID))
          dispatch(addTvShowPoster(poster))
          navigation.navigate(type)
        }
      }}
    >
      <View style={styles.imageContainer}>
        <Image
          activeOpacity={0.8}
          style={styles.image}
          resizeMode="cover"
          source={{ uri: basePosterPath + poster }}
        />
      </View>
      <Text style={styles.title}>
        {title.length > 13 ? title.slice(0, 12) + '...' : title}
      </Text>
    </TouchableOpacity>
  )
}

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  basePosterPath: PropTypes.string.isRequired,
  tvShowID: PropTypes.number,
  movieID: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired
}

ListItem.defaultProps = {
  tvShowID: null,
  movieID: null
}

const mapStateToProps = state => ({
  basePosterPath: state.basePosterPath
})

export default connect(mapStateToProps)(ListItem)
