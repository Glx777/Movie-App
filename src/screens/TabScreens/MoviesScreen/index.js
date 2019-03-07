import React, { Component } from 'react'
import { ScrollView, StatusBar } from 'react-native'
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
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addInTheatersMovies
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

class MoviesScreen extends Component {
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
          `https://api.themoviedb.org/3/movie/popular?api_key=${token}&language=en-US&page=1`
        ),
        axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${token}&language=en-US&page=1`
        ),
        axios.get(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${token}&language=en-US&page=1`
        ),
        axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${token}&language=en-US&page=1`
        )
      ])
      .then(
        axios.spread((popular, topRated, upcoming, inTheaters) => {
          dispatch(addPopularMovies(popular.data.results))
          dispatch(addTopRatedMovies(topRated.data.results))
          dispatch(addUpcomingMovies(upcoming.data.results))
          dispatch(addInTheatersMovies(inTheaters.data.results))
        })
      )
    this.setState({ isLoading: false })
  }

  render() {
    const { isLoading } = this.state
    const {
      popularMovies,
      navigation,
      topRatedMovies,
      upcomingMovies,
      inTheatersMovies
    } = this.props
    return (
      <Wrapper>
        <StatusBar barStyle="light-content" />
        {isLoading ? (
          <Spinner size="large" color="#fff" />
        ) : (
          <ScrollView>
            <Title>Popular</Title>
            <Container horizontal={true}>
              {popularMovies.map(popularMovie => (
                <ListItem
                  poster={popularMovie.poster_path}
                  title={popularMovie.title}
                  key={popularMovie.id}
                  movieID={popularMovie.id}
                  navigation={navigation}
                  type="Movie"
                />
              ))}
            </Container>
            <Title>Top Rated</Title>
            <Container horizontal={true}>
              {topRatedMovies.map(topRatedMovie => (
                <ListItem
                  poster={topRatedMovie.poster_path}
                  title={topRatedMovie.title}
                  key={topRatedMovie.id}
                  movieID={topRatedMovie.id}
                  navigation={navigation}
                  type="Movie"
                />
              ))}
            </Container>
            <Title>Upcoming</Title>
            <Container horizontal={true}>
              {upcomingMovies.map(upcomingMovie => (
                <ListItem
                  poster={upcomingMovie.poster_path}
                  title={upcomingMovie.title}
                  key={upcomingMovie.id}
                  movieID={upcomingMovie.id}
                  navigation={navigation}
                  type="Movie"
                />
              ))}
            </Container>
            <Title>Now In Theaters</Title>
            <LastContainer horizontal={true}>
              {inTheatersMovies.map(inTheaters => (
                <ListItem
                  poster={inTheaters.poster_path}
                  title={inTheaters.title}
                  key={inTheaters.id}
                  movieID={inTheaters.id}
                  navigation={navigation}
                  type="Movie"
                />
              ))}
            </LastContainer>
          </ScrollView>
        )}
      </Wrapper>
    )
  }
}

MoviesScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  popularMovies: PropTypes.array.isRequired,
  token: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
  topRatedMovies: PropTypes.array.isRequired,
  upcomingMovies: PropTypes.array.isRequired,
  inTheatersMovies: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  popularMovies: state.popularMovies,
  token: state.token,
  topRatedMovies: state.topRatedMovies,
  upcomingMovies: state.upcomingMovies,
  inTheatersMovies: state.inTheatersMovies
})

export default connect(mapStateToProps)(MoviesScreen)
