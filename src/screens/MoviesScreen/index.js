import React, { Component } from 'react'
import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import axios from 'axios'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { addPopularMovies } from '../../store/actions'
import PopularMovie from '../../components/PopularMovie'

import { styles } from './styles'

class MoviesScreen extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    const { dispatch, token } = this.props
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${token}&language=en-US&page=1`
      )
      .then(res => {
        dispatch(addPopularMovies(res.data.results))
        this.setState({ isLoading: false })
      })
  }

  render() {
    const { isLoading } = this.state
    const { popularMovies, navigation } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Popular Movies</Text>
        <ScrollView horizontal={true}>
          <View style={styles.popularMoviesContainer}>
            {isLoading ? (
              <ActivityIndicator size="large" color="#222" />
            ) : (
              popularMovies.map(popularMovie => (
                <PopularMovie
                  poster={popularMovie.poster_path}
                  title={popularMovie.title}
                  key={popularMovie.id}
                  movieID={popularMovie.id}
                  navigation={navigation}
                />
              ))
            )}
          </View>
        </ScrollView>
      </View>
    )
  }
}

MoviesScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  popularMovies: PropTypes.array.isRequired,
  token: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  popularMovies: state.popularMovies,
  token: state.token
})

export default connect(mapStateToProps)(MoviesScreen)
