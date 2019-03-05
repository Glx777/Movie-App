import React from 'react'
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import MoviesScreen from '../screens/TabScreens/MoviesScreen'
import TvShowsScreen from '../screens/TabScreens/TvShowsScreen'
import MovieScreen from '../screens/StackScreens/MovieScreen'
import TvShowScreen from '../screens/StackScreens/TvShowScreen'

const MoviesScreenStack = createStackNavigator({
  Movies: {
    screen: MoviesScreen,
    navigationOptions: {
      title: 'Movies',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#191919',
        borderBottomWidth: 0
      }
    }
  },
  Movie: {
    screen: MovieScreen,
    navigationOptions: {
      title: 'Movie Details',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#191919',
        borderBottomWidth: 0
      }
    }
  }
})

const TVShowsStack = createStackNavigator({
  Shows: {
    screen: TvShowsScreen,
    navigationOptions: {
      title: 'TV Shows',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#191919',
        borderBottomWidth: 0
      }
    }
  },
  Show: {
    screen: TvShowScreen,
    navigationOptions: {
      title: 'Show Details',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#191919',
        borderBottomWidth: 0
      }
    }
  }
})

const MainNavigator = createBottomTabNavigator(
  {
    Movies: {
      screen: MoviesScreenStack,
      navigationOptions: {
        tabBarLabel: 'Movies',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="film" size={30} color={tintColor} />
        )
      }
    },
    Shows: {
      screen: TVShowsStack,
      navigationOptions: {
        tabBarLabel: 'TV Shows',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="tv" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeBackgroundColor: '#191919',
      inactiveBackgroundColor: '#191919',
      activeTintColor: '#fff',
      style: {
        borderTopWidth: '0'
      }
    }
  }
)

export const AppContainer = createAppContainer(MainNavigator)
