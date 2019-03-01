import { StyleSheet } from 'react-native'
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight
} from 'react-native-responsive-dimensions'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    height: responsiveHeight(50),
    width: '100%',
    marginTop: responsiveHeight(1)
  },
  details: {
    marginLeft: responsiveWidth(5),
    marginRight: responsiveWidth(5)
  },
  heading: {
    fontSize: responsiveFontSize(4),
    marginTop: responsiveHeight(1)
  },
  row: {
    marginTop: responsiveHeight(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(50)
  },
  genreRow: {
    marginTop: responsiveHeight(1),
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  text: {
    color: '#fff',
    fontSize: responsiveFontSize(2),
    marginTop: responsiveHeight(0.7)
  }
})
