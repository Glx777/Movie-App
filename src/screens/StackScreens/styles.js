import { StyleSheet } from 'react-native'
import { responsiveHeight } from 'react-native-responsive-dimensions'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919'
  },
  spinner: {
    marginTop: responsiveHeight(40)
  }
})
