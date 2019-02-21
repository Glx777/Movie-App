import { createBottomTabNavigator, createAppContainer } from 'react-navigation'

import MoviesScreen from '../screens/MoviesScreen'
import TvShowsScreen from '../screens/TvShowsScreen'

const MainNavigator = createBottomTabNavigator({
  Movies: {
    screen: MoviesScreen
  },
  Shows: {
    screen: TvShowsScreen
  }
})

export const AppContainer = createAppContainer(MainNavigator)
