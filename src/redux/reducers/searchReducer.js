import { movieSearchingAPI } from '../../API/API';

const SEARCH_MOVIE = 'SEARCH-MOVIE';
const NEXT_SEARCHED_MOVIE = 'NEXT-SEARCHED-MOVIE';
const SET_QUERY = 'SET-QUERY';

let initialState = {
    searchingResults: [],
    query: '',
    isFetching: false
}

export const searchReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_MOVIE:
            return { ...state, 
                searchingResults: [ ...action.result]
            }

        case SET_QUERY:
            return { ...state,
                query: action.query
            }

        case NEXT_SEARCHED_MOVIE:
            return { ...state, searchingResults: [ ...state.searchingResults, ...action.result]}

        default:
            return state;
    }
}
//setting first 20 (or less) searched movies
const setSearchedMovies = result => ({type: SEARCH_MOVIE, result});
const setCurrentQuery = query => ({type: SET_QUERY, query});
//adding every next 20 searched movies (if they exist)
const addNextSearchedMovie = result => ({type: NEXT_SEARCHED_MOVIE, result});

export const getSearchingResults = query => {
    return dispatch => {
        dispatch(setCurrentQuery(query));
        movieSearchingAPI.searchMovie(query)      
        .then(response => dispatch(setSearchedMovies(response.data.results)))
    }
}

export const getSearchingResultsNextMovies = (query, page) => {
    return dispatch => {
        movieSearchingAPI.getNextSearchedMovies(query, page)
        .then(response => dispatch(addNextSearchedMovie(response.data.results)))
    }
}