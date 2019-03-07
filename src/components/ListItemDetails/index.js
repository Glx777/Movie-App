import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight
} from 'react-native-responsive-dimensions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components/native'

import Genre from '../Genre'

const Container = styled.View`
  flex: 1;
`

const Poster = styled.Image`
  height: ${responsiveHeight(50)};
  width: 100%;
  margin-top: ${responsiveHeight(1)};
`

const Text = styled.Text`
  color: #fff;
  font-size: ${responsiveFontSize(2)};
  margin-top: ${responsiveHeight(0.7)};
`

const RowItem = styled(Text)`
  margin-right: ${responsiveWidth(2)};
`

const Title = styled(Text)`
  font-size: ${responsiveFontSize(4)};
  margin-top: ${responsiveHeight(1)};
`

const Row = styled.View`
  margin-top: ${responsiveHeight(1)};
  flex-direction: row;
  flex-wrap: wrap;
`

const Details = styled.View`
  margin-left: ${responsiveWidth(5)};
  margin-right: ${responsiveWidth(5)};
  margin-bottom: ${responsiveHeight(2)};
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
          <Poster
            resizeMode="contain"
            source={{ uri: basePosterPath + poster }}
          />
          <Details>
            <Title>{details.title ? details.title : details.name}</Title>
            {details.title ? <Text>{details.tagline}</Text> : null}
            <Row>
              <RowItem>
                {details.release_date
                  ? details.release_date.slice(0, 4)
                  : details.first_air_date.slice(0, 4)}
              </RowItem>
              {details.runtime ? (
                <RowItem>{this.transformTime(details.runtime)}</RowItem>
              ) : null}
              <RowItem>Adult: {details.adult ? 'Yes' : 'No'}</RowItem>
            </Row>
            <Row>
              {details.genres
                ? details.genres.map((genre, i) => (
                    <Genre genre={genre} key={i} />
                  ))
                : ''}
            </Row>
            {details.vote_average ? (
              <Text>
                Rating: {details.vote_average} out of 10. Total votes:
                {' ' + details.vote_count}
              </Text>
            ) : null}
            {details.budget ? (
              <Text>
                Budget:{' '}
                {details.budget.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                {' $'}
              </Text>
            ) : null}
            {details.revenue ? (
              <Text>
                Revenue:{' '}
                {details.revenue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                {' $'}
              </Text>
            ) : null}
            {details.overview ? (
              <Text>Description: {details.overview}</Text>
            ) : null}
          </Details>
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
