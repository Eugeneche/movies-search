import { movieSearchingAPI } from '../../API/API';
const SEARCH_MOVIE = 'SEARCH-MOVIE';
const NEXT_SEARCHED_MOVIE = 'NEXT-SEARCHED-MOVIE';

let initialState = {
    searchingResults: [],
    query: ''
}

export const searchReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_MOVIE:
            return { ...state, searchingResults: [ ...action.result]}

        case NEXT_SEARCHED_MOVIE:
            return { ...state, searchingResults: [ ...state.searchingResults, ...action.result]}

        default:
            return state;
    }
}
//setting first 20 (or less) searched movies
const setSearchedMovies = result => ({type: SEARCH_MOVIE, result});
//adding every next 20 searched movies (if they exist)
const addNextSearchedMovie = result => ({type: NEXT_SEARCHED_MOVIE, result});

export const getSearchingResults = query => {
    return dispatch => {
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