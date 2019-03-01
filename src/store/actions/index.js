// Movies
export const addPopularMovies = movies => ({
  type: 'ADD_POPULAR_MOVIES',
  payload: movies
})

export const addTopRatedMovies = movies => ({
  type: 'ADD_TOP_RATED_MOVIES',
  payload: movies
})

export const addUpcomingMovies = movies => ({
  type: 'ADD_UPCOMING_MOVIES',
  payload: movies
})

export const chooseMovie = movie => ({
  type: 'CHOOSE_MOVIE',
  payload: movie
})

export const addMovieDetails = details => ({
  type: 'ADD_MOVIE_DETAILS',
  payload: details
})

export const addMoviePoster = poster => ({
  type: 'ADD_MOVIE_POSTER',
  payload: poster
})

// TV Shows

export const addPopularTVShows = tvShows => ({
  type: 'ADD_POPULAR_TV_SHOWS',
  payload: tvShows
})

export const addTopRatedTVShows = tvShows => ({
  type: 'ADD_TOP_RATED_TV_SHOWS',
  payload: tvShows
})

export const addUpcomingTVShows = tvShows => ({
  type: 'ADD_UPCOMING_TV_SHOWS',
  payload: tvShows
})

export const chooseTVShow = tvShow => ({
  type: 'CHOOSE_TV_SHOW',
  payload: tvShow
})

export const addTVShowDetails = details => ({
  type: 'ADD_TV_SHOWS_DETAILS',
  payload: details
})

export const addTvShowPoster = poster => ({
  type: 'ADD_TV_SHOW_POSTER',
  payload: poster
})
