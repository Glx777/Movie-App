export const addPopularMovies = movies => ({
  type: 'ADD_POPULAR_MOVIES',
  payload: movies
})

export const chooseMovie = movie => ({
  type: 'CHOOSE_MOVIE',
  payload: movie
})
