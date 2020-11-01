import React from 'react';
import { connect } from 'react-redux';
import SearchingResults from './SearchingResults';
import { getSearchingResults, getSearchingResultsNextMovies } from '../../redux/reducers/searchReducer';


class SearchingResultsContainer extends React.Component {

    state={
        currentQuery: this.props.query.values.searching,
        searchedCurrentPage: 1
    }

    submit = query => {
        this.setState({
            currentQuery: query
        })
        this.incrementCurrentPage();
        this.props.getSearchingResults(query); 
        //alert(query);
      }

    componentDidMount() {
/*         if(!this.state.currentQuery) {
            return false
        } else {
            let q = this.state.currentQuery;
            this.submit(q);
            alert(q.length);
        }  */
        this.submit(this.state.currentQuery);
    }

    incrementCurrentPage = () => {
        this.setState({
            searchedCurrentPage: this.state.searchedCurrentPage + 1
        })
    }

/*     componentDidUpdate(prevProps, prevState) {
        if(prevProps.query !== this.props.query) {
            this.props.getSearchingResultsNextMovies('', this.state.searchedCurrentPage);
        }

    } */
/* form: {
    search: {
        values: {
            searching: '...'
        }
    }
} */
    render() {
        return <SearchingResults {...this.props} query={this.props.query} results={this.props.results} getSearchingResults={this.props.getSearchingResults} getSearchingResultsNextMovies={this.props.getSearchingResultsNextMovies} /> 
    }
}

const mapStateToProps = state => ({
    results: state.searchingResults.searchingResults,
    query: state.form.search
})

export default connect(mapStateToProps, {getSearchingResults, getSearchingResultsNextMovies})(SearchingResultsContainer);