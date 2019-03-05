import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import {
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions'

const GenreText = styled.Text`
  color: #fff;
  margin-right: ${({ marginRight }) => marginRight};
  font-size: ${({ fontSize }) => fontSize};
`

const Genre = ({ genre: { name } }) => {
  return (
    <GenreText
      fontSize={responsiveFontSize(2)}
      marginRight={responsiveWidth(10)}
    >
      {name}
    </GenreText>
  )
}

Genre.propTypes = {
  genre: PropTypes.object.isRequired
}

export default Genre
