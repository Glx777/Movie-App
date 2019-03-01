import React, { Component } from 'react'
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  StatusBar
} from 'react-native'
import axios from 'axios'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies
} from '../../../store/actions'
import ListItem from '../../../components/ListItem'
import { styles } from '../styles'

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
        )
      ])
      .then(
        axios.spread((popular, topRated, upcoming) => {
          dispatch(addPopularMovies(popular.data.results))
          dispatch(addTopRatedMovies(topRated.data.results))
          dispatch(addUpcomingMovies(upcoming.data.results))
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
      upcomingMovies
    } = this.props
    return (
      <View style={styles.wrapper}>
        <StatusBar barStyle="light-content" />
        {isLoading ? (
          <ActivityIndicator style={styles.spinner} size="large" color="#fff" />
        ) : (
          <ScrollView>
            <Text style={styles.heading}>Popular</Text>
            <ScrollView horizontal={true}>
              <View style={styles.container}>
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
              </View>
            </ScrollView>
            <Text style={styles.heading}>Top Rated</Text>
            <ScrollView horizontal={true}>
              <View style={styles.container}>
                {topRatedMovies.map(popularMovie => (
                  <ListItem
                    poster={popularMovie.poster_path}
                    title={popularMovie.title}
                    key={popularMovie.id}
                    movieID={popularMovie.id}
                    navigation={navigation}
                    type="Movie"
                  />
                ))}
              </View>
            </ScrollView>
            <Text style={styles.heading}>Upcoming</Text>
            <ScrollView horizontal={true}>
              <View style={[styles.container, styles.lastContainer]}>
                {upcomingMovies.map(popularMovie => (
                  <ListItem
                    poster={popularMovie.poster_path}
                    title={popularMovie.title}
                    key={popularMovie.id}
                    movieID={popularMovie.id}
                    navigation={navigation}
                    type="Movie"
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
