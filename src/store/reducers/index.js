const initialState = {
  popularMovies: [],
  topRatedMovies: [],
  token: '57c6e6608ad0921c91f09ba247917582',
  basePosterPath: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2',
  currentMovie: null,
  movieDetails: {},
  poster: null,
  upcomingMovies: []
}

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_POPULAR_MOVIES':
      return { ...state, popularMovies: [...action.payload] }
      break
    case 'ADD_TOP_RATED_MOVIES':
      return { ...state, topRatedMovies: [...action.payload] }
      break
    case 'ADD_UPCOMING_MOVIES':
      return { ...state, upcomingMovies: [...action.payload] }
      break
    case 'CHOOSE_MOVIE':
      return { ...state, currentMovie: action.payload }
      break
    case 'ADD_MOVIE_DETAILS':
      return { ...state, movieDetails: { ...action.payload } }
      break
    case 'ADD_POSTER':
      return { ...state, poster: action.payload }
      break
    default:
      return state
  }
}
