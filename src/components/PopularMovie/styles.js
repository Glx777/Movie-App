import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
  popularMovieContainer: {
    width: Dimensions.get('window').width * 0.32,
    marginRight: 10
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
