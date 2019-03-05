import { StyleSheet } from 'react-native'
import {
  responsiveHeight,
  responsiveFontSize
} from 'react-native-responsive-dimensions'

export const styles = StyleSheet.create({
  spinner: {
    marginTop: responsiveHeight(40)
  },
  heading: {
    alignSelf: 'center',
    fontSize: responsiveFontSize(3.5),
    marginBottom: 10,
    marginTop: 10,
    color: '#fff'
  },
  container: {
    flexDirection: 'row',
    marginLeft: 10,
    height: responsiveHeight(32)
  },
  lastContainer: {
    marginBottom: responsiveHeight(2)
  }
})
