import React from 'react';
import { connect } from 'react-redux';
import { getSearchingResults } from '../../redux/reducers/searchReducer';
import Header from './Header';

class HeaderContainer extends React.Component {

    /* restoreInitValuePageForNextMovies is passed from SearchingResulsContainer */

    render() {
        return <Header restoreInitValuePageForNextMovies={this.props.restoreInitValuePageForNextMovies} getSearchingResults={this.props.getSearchingResults} />
    }  
} 

const mapStateToProps = state => ({ });

export default HeaderContainer = connect(mapStateToProps, {getSearchingResults})(HeaderContainer);