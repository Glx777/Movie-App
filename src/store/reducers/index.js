const initialState = {
  popularMovies: [],
  topRatedMovies: [],
  token: '57c6e6608ad0921c91f09ba247917582',
  basePosterPath: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2',
  currentMovie: null,
  movieDetails: {},
  poster: null,
  upcomingMovies: [],
  popularTvShows: [],
  topRatedTvShows: [],
  onTheAirTvShows: [],
  currentTvShow: null,
  tvShowDetails: {},
  moviePoster: null,
  tvShowPoster: null
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
    case 'ADD_MOVIE_POSTER':
      return { ...state, moviePoster: action.payload }
      break
    case 'ADD_POPULAR_TV_SHOWS':
      return { ...state, popularTvShows: [...action.payload] }
      break
    case 'ADD_TOP_RATED_TV_SHOWS':
      return { ...state, topRatedTvShows: [...action.payload] }
      break
    case 'ADD_UPCOMING_TV_SHOWS':
      return { ...state, onTheAirTvShows: [...action.payload] }
      break
    case 'CHOOSE_TV_SHOW':
      return { ...state, currentTvShow: action.payload }
      break
    case 'ADD_TV_SHOWS_DETAILS':
      return { ...state, tvShowDetails: { ...action.payload } }
      break
    case 'ADD_TV_SHOW_POSTER':
      return { ...state, tvShowPoster: action.payload }
      break
    default:
      return state
  }
}
