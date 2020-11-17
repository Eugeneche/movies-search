import { getMoviesAPI } from '../../API/API';

const LOAD_POPULAR_MOVIES = 'LOAD-POPULAR-MOVIES';
const LOAD_SERIES = 'LOAD-SERIES';
const LOAD_FAMILY_MOVIES = 'LOAD-FAMILY-MOVIES';
const LOAD_DOCUMENTARY_MOVIES = 'LOAD-DOCUMENTARY-MOVIES';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';



let initialState = {
    popularMovies: [],
    popularSeries: [],
    familyMovies: [],
    documentaryMovies: [],
    isFetching: false
};

export const dashboardReducer = (state = initialState, action) => {

    switch(action.type) {
        case LOAD_POPULAR_MOVIES:
            return { ...state, popularMovies: [...state.popularMovies, ...action.movies]}

        case LOAD_SERIES:
            return { ...state, popularSeries: [ ...state.popularSeries, ...action.movies]}

        case LOAD_FAMILY_MOVIES:
            return { ...state, familyMovies: [ ...state.familyMovies, ...action.movies]}

        case LOAD_DOCUMENTARY_MOVIES:
            return { ...state, documentaryMovies: [ ...state.documentaryMovies, ...action.movies]}

        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching}

        default:
            return state;
    }

}

//action creators to loading movies 
const loadPopularMovies = movies => ({type: LOAD_POPULAR_MOVIES, movies});
const loadSeries = movies => ({type: LOAD_SERIES, movies});
const loadFamilyMovies = movies => ({type: LOAD_FAMILY_MOVIES, movies});
const loadDocumentaryMovies = movies => ({type: LOAD_DOCUMENTARY_MOVIES, movies});
const toggleIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching});

//thunks
export const getPopularMovies = page => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        getMoviesAPI.getPopular(page)
        .then(response => {
            dispatch(loadPopularMovies(response.data.results))
            dispatch(toggleIsFetching(false));
        });
    }
} 

export const getSeries = page => {
    return (dispatch) => {
        getMoviesAPI.getSeries(page)
        .then(response => dispatch(loadSeries(response.data.results)));
    }
}

export const getFamilyMovies = page => {
    return (dispatch) => {
        getMoviesAPI.getFamilyMovies(page)
        .then(response => dispatch(loadFamilyMovies(response.data.results)));
    }
}

export const getDocumentaryMovies = page => {
    return (dispatch) => {
        getMoviesAPI.getDocumentaryMovies(page)
        .then(response => dispatch(loadDocumentaryMovies(response.data.results)));
    }
}