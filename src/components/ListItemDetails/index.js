import React, { Component } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components/native'

import Genre from '../Genre'

import { styles } from './styles'

const Container = styled.View`
  flex: 1;
`

class ListItemDetails extends Component {
  transformTime(time) {
    const hours = time / 60
    const minutes = time % 60
    return Math.floor(hours) + 'h ' + minutes + 'm'
  }

  render() {
    const { details, basePosterPath, moviePoster, tvShowPoster } = this.props
    const poster = details.title ? moviePoster : tvShowPoster
    return (
      <Container>
        <ScrollView>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={{ uri: basePosterPath + poster }}
          />
          <View style={styles.details}>
            <Text style={[styles.text, styles.heading]}>
              {details.title ? details.title : details.name}
            </Text>
            <Text style={styles.text}>{details.tagline}</Text>
            <View style={styles.row}>
              <Text style={styles.text}>
                {details.release_date
                  ? details.release_date.slice(0, 4)
                  : details.first_air_date.slice(0, 4)}
              </Text>
              {details.runtime ? (
                <Text style={styles.text}>
                  {this.transformTime(details.runtime)}
                </Text>
              ) : null}
              <Text style={styles.text}>
                Adult: {details.adult ? 'Yes' : 'No'}
              </Text>
            </View>
            <View style={styles.genreRow}>
              {details.genres
                ? details.genres.map((genre, i) => (
                    <Genre genre={genre} key={i} />
                  ))
                : ''}
            </View>
            {details.budget ? (
              <Text style={styles.text}>
                Budget:{' '}
                {details.budget.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                {' $'}
              </Text>
            ) : null}
            {details.revenue ? (
              <Text style={styles.text}>
                Revenue:{' '}
                {details.revenue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                {' $'}
              </Text>
            ) : null}
            {details.overview ? (
              <Text style={styles.text}>Description: {details.overview}</Text>
            ) : null}
          </View>
        </ScrollView>
      </Container>
    )
  }
}

ListItemDetails.propTypes = {
  details: PropTypes.object.isRequired,
  basePosterPath: PropTypes.string.isRequired,
  moviePoster: PropTypes.string,
  tvShowPoster: PropTypes.string
}

ListItemDetails.defaultProps = {
  moviePoster: '',
  tvShowPoster: ''
}

const mapStateToProps = state => ({
  basePosterPath: state.basePosterPath,
  moviePoster: state.moviePoster,
  tvShowPoster: state.tvShowPoster
})

export default connect(mapStateToProps)(ListItemDetails)
