import { createSelector } from "reselect";

const getPopularMovies = state => {
    return state.dashboard.popularMovies;
}

export const getPopularMoviesSelector = createSelector(getPopularMovies, (popularMovies) => {
        return popularMovies;
    });

const getPopularSeries = state => {
    return state.dashboard.popularSeries;
}

export const getPopularSeriesSelector = createSelector(getPopularSeries,  (popularSeries) => {
        return popularSeries;
    })

const getFamilyMovies = state => {
    return state.dashboard.familyMovies;
}

export const getFamilyMoviesSelector = createSelector(getFamilyMovies, (familyMovies) => {
        return familyMovies;
    });

const getDocumentaryMovies = state => {
    return state.dashboard.documentaryMovies;
}

export const getDocumentaryMoviesSelector = createSelector(getDocumentaryMovies, (documentaryMovies) => {
        return documentaryMovies;
    });

const getIsFetchingDashboard = state => {
    return state.dashboard.isFetching;
}

export const getIsFetchingDashboardSelector = createSelector(getIsFetchingDashboard, (isFetching) => {
    return isFetching;
});

export const getGenres = state => {
    return state.dashboard.genres;
}

export const getGenresSelector = createSelector(getGenres, (genres) => {
    return genres;
});