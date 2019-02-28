import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222'
  },
  heading: {
    alignSelf: 'center',
    fontSize: 22,
    paddingTop: 10,
    marginBottom: 10,
    color: '#fff'
  },
  moviesContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    height: Dimensions.get('window').height * 0.25
  }
})
