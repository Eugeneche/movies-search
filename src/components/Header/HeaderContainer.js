import React from 'react';
import { connect } from 'react-redux';
import { getSearchingResults } from '../../redux/reducers/searchReducer';
import Header from './Header';

class HeaderContainer extends React.Component {

    render() {
        return <Header restoreInitValuePageForNextMovies={this.props.restoreInitValuePageForNextMovies} getSearchingResults={this.props.getSearchingResults} />
    }  
} 

const mapStateToProps = state => ({ 
    initPageForNextMovies: state.searchingResults.initPageForNextMovies
});

export default HeaderContainer = connect(mapStateToProps, {getSearchingResults})(HeaderContainer);