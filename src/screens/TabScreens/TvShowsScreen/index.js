import React, { Component } from 'react'
import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import axios from 'axios'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
  addPopularTVShows,
  addTopRatedTVShows,
  addUpcomingTVShows
} from '../../../store/actions'
import ListItem from '../../../components/ListItem'
import { styles } from '../styles'

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
      <View style={styles.wrapper}>
        {isLoading ? (
          <ActivityIndicator style={styles.spinner} size="large" color="#fff" />
        ) : (
          <ScrollView>
            <Text style={styles.heading}>Popular</Text>
            <ScrollView horizontal={true}>
              <View style={styles.container}>
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
              </View>
            </ScrollView>
            <Text style={styles.heading}>Top Rated</Text>
            <ScrollView horizontal={true}>
              <View style={styles.container}>
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
              </View>
            </ScrollView>
            <Text style={styles.heading}>On The Air</Text>
            <ScrollView horizontal={true}>
              <View style={[styles.container, styles.lastContainer]}>
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
              </View>
            </ScrollView>
          </ScrollView>
        )}
      </View>
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
