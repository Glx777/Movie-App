import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

import { addTVShowDetails } from '../../../store/actions'
import ListItemDetails from '../../../components/ListItemDetails'

const Container = styled.View`
  flex: 1;
  background-color: #191919;
`

const Spinner = styled.ActivityIndicator`
  margin-top: ${responsiveHeight(20)};
`

class TvShowScreen extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true
    }
  }

  async componentDidMount() {
    const { token, currentTvShow, dispatch } = this.props
    await axios
      .get(
        `https://api.themoviedb.org/3/tv/${currentTvShow}?api_key=${token}&language=en-US`
      )
      .then(res => {
        dispatch(addTVShowDetails(res.data))
      })

    this.setState({ isLoading: false })
  }

  render() {
    const { isLoading } = this.state
    const { tvShowDetails } = this.props
    return (
      <Container>
        {isLoading ? (
          <Spinner size="large" color="#fff" />
        ) : (
          <ListItemDetails details={tvShowDetails} />
        )}
      </Container>
    )
  }
}

TvShowScreen.propTypes = {
  token: PropTypes.string.isRequired,
  currentTvShow: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  tvShowDetails: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  token: state.token,
  tvShowDetails: state.tvShowDetails,
  currentTvShow: state.currentTvShow
})

export default connect(mapStateToProps)(TvShowScreen)
