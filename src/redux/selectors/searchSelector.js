export const getSearchingResultsSelector = state => {
    return state.searchingResults.searchingResults;
}

export const getQuerySelector = state => {
    return state.searchingResults.query;
}

export const getIsFetchingSearchingResultsSelector = state => {
    return state.searchingResults.isFetching;
}