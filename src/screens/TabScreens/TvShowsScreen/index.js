import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions'
import axios from 'axios'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

import {
  addPopularTVShows,
  addTopRatedTVShows,
  addUpcomingTVShows
} from '../../../store/actions'
import ListItem from '../../../components/ListItem'

const Wrapper = styled.View`
  flex: 1;
  background-color: #191919;
`

const Spinner = styled.ActivityIndicator`
  margin-top: ${responsiveHeight(40)};
`

const Title = styled.Text`
  align-self: center;
  font-size: ${responsiveFontSize(3.5)};
  margin-bottom: ${responsiveHeight(2)};
  margin-top: ${responsiveHeight(2)};
  color: #fff;
`

const Container = styled.ScrollView`
  flex-direction: row;
  margin-left: ${responsiveWidth(2)};
  height: ${responsiveHeight(32)};
`

const LastContainer = styled(Container)`
  margin-bottom: ${responsiveHeight(3)};
`

class TvShowsScreen extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true
    }
  }

  async componentDidMount() {
    const { dispatch, token } = this.props
    await axios
      .all([
        axios.get(
          `https://api.themoviedb.org/3/tv/popular?api_key=${token}&language=en-US&page=1`
        ),
        axios.get(
          `https://api.themoviedb.org/3/tv/top_rated?api_key=${token}&language=en-US&page=1`
        ),
        axios.get(
          `https://api.themoviedb.org/3/tv/on_the_air?api_key=${token}&language=en-US&page=1`
        )
      ])
      .then(
        axios.spread((popular, topRated, upcoming) => {
          dispatch(addPopularTVShows(popular.data.results))
          dispatch(addTopRatedTVShows(topRated.data.results))
          dispatch(addUpcomingTVShows(upcoming.data.results))
        })
      )
    this.setState({ isLoading: false })
  }

  render() {
    const { isLoading } = this.state
    const {
      popularTvShows,
      navigation,
      topRatedTvShows,
      onTheAirTvShows
    } = this.props
    return (
      <Wrapper>
        {isLoading ? (
          <Spinner size="large" color="#fff" />
        ) : (
          <ScrollView>
            <Title>Popular</Title>
            <Container horizontal={true}>
              {popularTvShows.map(popularTvShow => (
                <ListItem
                  poster={popularTvShow.poster_path}
                  title={popularTvShow.name}
                  key={popularTvShow.id}
                  tvShowID={popularTvShow.id}
                  navigation={navigation}
                  type="Show"
                />
              ))}
            </Container>
            <Title>Top Rated</Title>
            <Container horizontal={true}>
              {topRatedTvShows.map(topRatedTvShows => (
                <ListItem
                  poster={topRatedTvShows.poster_path}
                  title={topRatedTvShows.name}
                  key={topRatedTvShows.id}
                  tvShowID={topRatedTvShows.id}
                  navigation={navigation}
                  type="Show"
                />
              ))}
            </Container>
            <Title>On The Air</Title>
            <LastContainer horizontal={true}>
              {onTheAirTvShows.map(onTheAirTvShow => (
                <ListItem
                  poster={onTheAirTvShow.poster_path}
                  title={onTheAirTvShow.name}
                  key={onTheAirTvShow.id}
                  tvShowID={onTheAirTvShow.id}
                  navigation={navigation}
                  type="Show"
                />
              ))}
            </LastContainer>
          </ScrollView>
        )}
      </Wrapper>
    )
  }
}

TvShowsScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  popularTvShows: PropTypes.array.isRequired,
  token: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
  topRatedTvShows: PropTypes.array.isRequired,
  onTheAirTvShows: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  popularTvShows: state.popularTvShows,
  token: state.token,
  topRatedTvShows: state.topRatedTvShows,
  onTheAirTvShows: state.onTheAirTvShows
})

export default connect(mapStateToProps)(TvShowsScreen)
