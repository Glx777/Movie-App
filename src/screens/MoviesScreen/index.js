import React, { Component } from 'react'
import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import axios from 'axios'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies
} from '../../store/actions'
import PopularMovie from '../../components/PopularMovie'
import TopRatedMovie from '../../components/TopRatedMovie'
import UpcomingMovie from '../../components/UpcomingMovie'

import { styles } from './styles'

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
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${token}&language=en-US&page=1`
      )
      .then(res => {
        dispatch(addPopularMovies(res.data.results))
      })

    await axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${token}&language=en-US&page=1`
      )
      .then(res => {
        dispatch(addTopRatedMovies(res.data.results))
      })

    await axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${token}&language=en-US&page=1`
      )
      .then(res => {
        dispatch(addUpcomingMovies(res.data.results))
      })

    this.setState({ isLoading: false })
  }

  render() {
    const { isLoading } = this.state
    const {
      popularMovies,
      navigation,
      topRatedMovies,
      upcomingMovies
    } = this.props
    return (
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#222" />
        ) : (
          <ScrollView>
            <Text style={styles.heading}>Popular</Text>
            <ScrollView horizontal={true}>
              <View style={styles.moviesContainer}>
                {popularMovies.map(popularMovie => (
                  <PopularMovie
                    poster={popularMovie.poster_path}
                    title={popularMovie.title}
                    key={popularMovie.id}
                    movieID={popularMovie.id}
                    navigation={navigation}
                  />
                ))}
              </View>
            </ScrollView>
            <Text style={styles.heading}>Top Rated</Text>
            <ScrollView horizontal={true}>
              <View style={styles.moviesContainer}>
                {topRatedMovies.map(topRatedMovie => (
                  <TopRatedMovie
                    poster={topRatedMovie.poster_path}
                    title={topRatedMovie.title}
                    key={topRatedMovie.id}
                    movieID={topRatedMovie.id}
                    navigation={navigation}
                  />
                ))}
              </View>
            </ScrollView>
            <Text style={styles.heading}>Upcoming</Text>
            <ScrollView horizontal={true}>
              <View style={styles.moviesContainer}>
                {upcomingMovies.map(upcomingMovie => (
                  <UpcomingMovie
                    poster={upcomingMovie.poster_path}
                    title={upcomingMovie.title}
                    key={upcomingMovie.id}
                    movieID={upcomingMovie.id}
                    navigation={navigation}
                  />
                ))}
              </View>
            </ScrollView>
          </ScrollView>
        )}
      </View>
    )
  }
}

MoviesScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  popularMovies: PropTypes.array.isRequired,
  token: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
  topRatedMovies: PropTypes.array.isRequired,
  upcomingMovies: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  popularMovies: state.popularMovies,
  token: state.token,
  topRatedMovies: state.topRatedMovies,
  upcomingMovies: state.upcomingMovies
})

export default connect(mapStateToProps)(MoviesScreen)
