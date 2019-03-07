import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import {
  responsiveFontSize,
  responsiveWidth
} from 'react-native-responsive-dimensions'

const GenreText = styled.Text`
  color: #fff;
  font-size: ${responsiveFontSize(2)};
  margin-right: ${responsiveWidth(2)};
`

const Genre = ({ genre: { name } }) => {
  return <GenreText>{name}</GenreText>
}

Genre.propTypes = {
  genre: PropTypes.object.isRequired
}

export default Genre
