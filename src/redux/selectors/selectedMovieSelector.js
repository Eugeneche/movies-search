export const getSelectedMovieIdSelector = state => {
    return state.selectedMovie.id;
}

export const getSelectedMovieTitleSelector = state => {
    return state.selectedMovie.title;
}

export const getSelectedMovieDescriptionSelector = state => {
    return state.selectedMovie.description;
}

export const getSelectedMovieRatingSelector = state => {
    return state.selectedMovie.rating;
}

export const getSelectedMovieYoutubeKeySelector = state => {
    return state.selectedMovie.youtubeKey;
}