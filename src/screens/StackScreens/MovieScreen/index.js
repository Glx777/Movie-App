import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'
import axios from 'axios'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { addMovieDetails } from '../../../store/actions'
import ListItemDetails from '../../../components/ListItemDetails'
import { styles } from '../styles'

class MovieScreen extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true
    }
  }

  async componentDidMount() {
    const { token, movieID, dispatch } = this.props
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieID}?api_key=${token}&language=en-US`
      )
      .then(res => {
        dispatch(addMovieDetails(res.data))
      })

    this.setState({ isLoading: false })
  }

  render() {
    const { isLoading } = this.state
    const { movieDetails } = this.props
    return (
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator style={styles.spinner} size="large" color="#fff" />
        ) : (
          <ListItemDetails details={movieDetails} />
        )}
      </View>
    )
  }
}

MovieScreen.propTypes = {
  token: PropTypes.string.isRequired,
  movieID: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  movieDetails: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  token: state.token,
  movieDetails: state.movieDetails,
  movieID: state.currentMovie
})

export default connect(mapStateToProps)(MovieScreen)
