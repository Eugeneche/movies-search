import { getSelectedMovieAPI, trailerAPI } from "../../API/API";

const GET_SELECTED_MOVIE_INFO = 'GET-SELECTED-MOVIE-INFO';
const PLAY_SELECTED_MOVIE_TRAILER = 'PLAY-SELECTED-MOVIE-TRAILER';

let initialState = {
    id: '',
    title: '',
    description: '',
    rating: '',
    youtubeKey: ''
}

export const selectedMovieReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_SELECTED_MOVIE_INFO:
            return {...state, id: action.movieInfo.id,
                    title: action.movieInfo.title,
                    description: action.movieInfo.overview,
                    rating: action.movieInfo.vote_average
                } 

        case PLAY_SELECTED_MOVIE_TRAILER:
            return {...state, youtubeKey: action.youtubeKey}
            
        default:
            return state;
    }
}

const setMovieInfo = (movieInfo) =>({type: GET_SELECTED_MOVIE_INFO, movieInfo});
const playTrailer = (youtubeKey) =>({type: PLAY_SELECTED_MOVIE_TRAILER, youtubeKey});

export const getMovieInfo = (id) => {
    return (dispatch) => {
        getSelectedMovieAPI.getSelectedMovie(id)
        .then(response => dispatch(setMovieInfo(response.data)))
    }  
}

export const getTrailer = (id) => {
    return dispatch => {
        trailerAPI.getTrailer(id)
        .then(response => dispatch(playTrailer(response.data.results[0].key)))
        //.then(response => console.log(response.data.results[0].key))
    }
}