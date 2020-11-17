import React from 'react';
import { connect } from 'react-redux';
import SearchingResults from './SearchingResults';
import { getSearchingResults, getSearchingResultsNextMovies } from '../../redux/reducers/searchReducer';


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
    results: state.searchingResults.searchingResults,
    query: state.searchingResults.query,
    isFetching: state.searchingResults.isFetching
})

export default connect(mapStateToProps, {getSearchingResults, getSearchingResultsNextMovies})(SearchingResultsContainer);