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

export const addPoster = poster => ({
  type: 'ADD_POSTER',
  payload: poster
})
