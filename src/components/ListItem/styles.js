import { StyleSheet } from 'react-native'
import {
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions'

export const styles = StyleSheet.create({
  listItemContainer: {
    width: responsiveWidth(35),
    marginRight: responsiveWidth(5)
  },
  imageContainer: {
    height: '86%'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  title: {
    color: '#fff',
    marginTop: '5%',
    alignSelf: 'center',
    fontSize: responsiveFontSize(2)
  }
})
