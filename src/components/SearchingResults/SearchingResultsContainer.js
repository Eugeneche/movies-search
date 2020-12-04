import React from 'react';
import { connect } from 'react-redux';
import SearchingResults from './SearchingResults';
import { getSearchingResults, getSearchingResultsNextMovies } from '../../redux/reducers/searchReducer';
import { getSearchingResultsSelector, getQuerySelector, getIsFetchingSearchingResultsSelector } from '../../redux/selectors/searchSelector';
import { getGenres } from '../../redux/selectors/dashboardSelectors';



class SearchingResultsContainer extends React.Component {

    state={
        currentQuery: this.props.query,
        searchedCurrentPage: 2
    }

    restoreInitValuePageForNextMovies = () => {
        this.setState( state => ({searchedCurrentPage: state.searchedCurrentPage = 2}));
    }

    incrementCurrentPage = () => {
        this.setState( state => ({searchedCurrentPage: state.searchedCurrentPage + 1}));
    }

    componentDidUpdate(prevProps) {
        if(prevProps.query !== this.props.query) {
            this.setState({ currentQuery: this.props.query });
        }       
    }

    render() {
        return <SearchingResults {...this.props} 
            query={this.state.currentQuery} 
            page={this.state.searchedCurrentPage} 
            incrementCurrentPage={this.incrementCurrentPage} 
            restoreInitValuePageForNextMovies={this.restoreInitValuePageForNextMovies} 
            results={this.props.results} 
            getSearchingResults={this.props.getSearchingResults} 
            getSearchingResultsNextMovies={this.props.getSearchingResultsNextMovies} /> 
    }
}

const mapStateToProps = state => ({
    results: getSearchingResultsSelector(state),
    query: getQuerySelector(state),
    isFetching: getIsFetchingSearchingResultsSelector(state),
    allGenres: getGenres(state)
})

export default connect(mapStateToProps, {getSearchingResults, getSearchingResultsNextMovies})(SearchingResultsContainer);