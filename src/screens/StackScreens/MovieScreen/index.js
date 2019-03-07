import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

import { addMovieDetails } from '../../../store/actions'
import ListItemDetails from '../../../components/ListItemDetails'

const Container = styled.View`
  flex: 1;
  background-color: #191919;
`

const Spinner = styled.ActivityIndicator`
  margin-top: ${responsiveHeight(20)};
`

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
      <Container>
        {isLoading ? (
          <Spinner size="large" color="#fff" />
        ) : (
          <ListItemDetails details={movieDetails} />
        )}
      </Container>
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
