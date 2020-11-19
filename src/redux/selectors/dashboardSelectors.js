export const getPopularMoviesSelector = state => {
    return state.dashboard.popularMovies;
}

export const getPopularSeriesSelector = state => {
    return state.dashboard.popularSeries;
}

export const getFamilyMoviesSelector = state => {
    return state.dashboard.familyMovies;
}

export const getDocumentaryMoviesSelector = state => {
    return state.dashboard.documentaryMovies;
}

export const getIsFetchingDashboardSelector = state => {
    return state.dashboard.isFetching;
}