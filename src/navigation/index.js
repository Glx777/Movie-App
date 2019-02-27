import React from 'react'
import {
  createBottomTabNavigator,
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import MoviesScreen from '../screens/MoviesScreen'
import TvShowsScreen from '../screens/TvShowsScreen'
import MovieScreen from '../screens/MovieScreen'

const MoviesScreenStack = createStackNavigator({
  Movies: {
    screen: MoviesScreen,
    navigationOptions: {
      title: 'Movies'
    }
  },
  Movie: {
    screen: MovieScreen,
    navigationOptions: {
      title: 'Movie'
    }
  }
})

const TVShowsStack = createStackNavigator({
  Shows: {
    screen: TvShowsScreen,
    navigationOptions: {
      title: 'TV Shows'
    }
  }
})

const MoviesScreenDrawer = createDrawerNavigator({
  Movies: {
    screen: MoviesScreenStack,
    navigationOptions: {
      drawerLabel: 'Movies'
    }
  }
})

const TVShowsDrawer = createDrawerNavigator({
  Shows: {
    screen: TVShowsStack,
    navigationOptions: {
      drawerLabel: 'TV Shows'
    }
  }
})

const MainNavigator = createBottomTabNavigator({
  Movies: {
    screen: MoviesScreenDrawer,
    navigationOptions: {
      tabBarLabel: 'Movies',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="film" size={30} color={tintColor} />
      )
    }
  },
  Shows: {
    screen: TVShowsDrawer,
    navigationOptions: {
      tabBarLabel: 'TV Shows',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="tv" size={30} color={tintColor} />
      )
    }
  }
})

export const AppContainer = createAppContainer(MainNavigator)
