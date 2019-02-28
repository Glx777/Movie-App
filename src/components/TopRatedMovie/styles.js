import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
  topRatedMovieContainer: {
    width: Dimensions.get('window').width * 0.32,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  title: {
    color: '#fff',
    paddingBottom: 10,
    textAlign: 'center'
  }
})
