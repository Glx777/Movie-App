import { StyleSheet } from 'react-native'
import {
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions'

export const styles = StyleSheet.create({
  text: {
    color: '#fff',
    marginRight: responsiveWidth(5),
    fontSize: responsiveFontSize(2)
  }
})
