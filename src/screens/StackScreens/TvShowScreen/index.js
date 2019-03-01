import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'
import axios from 'axios'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { addTVShowDetails } from '../../../store/actions'
import ListItemDetails from '../../../components/ListItemDetails'
import { styles } from '../styles'

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
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator style={styles.spinner} size="large" color="#fff" />
        ) : (
          <ListItemDetails details={tvShowDetails} />
        )}
      </View>
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
