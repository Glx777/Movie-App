import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    height: Dimensions.get('window').height * 0.5,
    width: Dimensions.get('window').width,
    borderColor: 'red',
    borderWidth: 1
  }
})
