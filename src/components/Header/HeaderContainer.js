import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { getSearchingResults } from '../../redux/reducers/searchReducer';
import Header from './Header';
//import SearchForm from '../Search/Search';

class HeaderContainer extends React.Component {

/*     state={
        request: ''
    } */



/*     submit = query => {
        this.props.getSearchingResults(query); 
        alert(query);
      }
      
    componentDidMount() {
        if(!this.props.query) {
            return false
        } else {
            let q = this.props.query.values.searching;
            this.submit(q);
        } 
    } */

/*     componentDidUpdate(prevProps, prevState) {
        if(!this.props.query.values) {
            return false
        } if(prevProps.query !== this.props.query) {
            let q = this.props.query.values.searching;
            this.submit(q);
        }

    } */


    render() {
        return <Fragment><Header query={this.props.query} submit={this.props.submit} getSearchingResults={this.props.getSearchingResults} />       
        </Fragment>
    }  
} 

const mapStateToProps = state => ({
    query: state.form.search
})

export default HeaderContainer = connect(mapStateToProps, {getSearchingResults})(HeaderContainer);