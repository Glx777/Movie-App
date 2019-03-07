import React from 'react'
import { connect } from 'react-redux'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

import {
  chooseMovie,
  chooseTVShow,
  addTvShowPoster,
  addMoviePoster
} from '../../store/actions'

const Container = styled.TouchableOpacity`
  width: ${responsiveWidth(35)};
  margin-right: ${responsiveWidth(4)};
`

const PosterContainer = styled.View`
  height: 86%;
`

const Poster = styled.Image`
  width: 100%;
  height: 100%;
`

const Title = styled.Text`
  color: #fff;
  margin-top: ${responsiveHeight(1)};
  align-self: center;
  font-size: ${responsiveFontSize(2)};
`

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
    <Container
      onPress={() => {
        if (type === 'Movie') {
          dispatch(chooseMovie(movieID))
          navigation.navigate(type)
          dispatch(addMoviePoster(poster))
        } else {
          dispatch(chooseTVShow(tvShowID))
          navigation.navigate(type)
          dispatch(addTvShowPoster(poster))
        }
      }}
    >
      <PosterContainer>
        <Poster
          activeOpacity={0.8}
          resizeMode="cover"
          source={{ uri: basePosterPath + poster }}
        />
      </PosterContainer>
      <Title>{title.length > 13 ? title.slice(0, 12) + '...' : title}</Title>
    </Container>
  )
}

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string,
  basePosterPath: PropTypes.string.isRequired,
  tvShowID: PropTypes.number,
  movieID: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired
}

ListItem.defaultProps = {
  tvShowID: null,
  movieID: null,
  poster: null
}

const mapStateToProps = state => ({
  basePosterPath: state.basePosterPath
})

export default connect(mapStateToProps)(ListItem)
