import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import { getPopularMovies, getSeries, getFamilyMovies, getDocumentaryMovies } from '../../redux/reducers/dashboardReducer';
import { getPopularMoviesSelector, getPopularSeriesSelector, getFamilyMoviesSelector, getDocumentaryMoviesSelector, getIsFetchingDashboardSelector } from '../../redux/selectors/dashboardSelectors';
//import Preloader from '../../img/Preloader';



const DashboardContainer = props => {

    return <Fragment>
          {/* {props.isFetching && <Preloader />} */}
            <Dashboard {...props} isFetching={props.isFetching} />
        </Fragment>
}

let mapStateToProps = state => ({
        popularMovies: getPopularMoviesSelector(state),
        popularSeries: getPopularSeriesSelector(state),
        familyMovies: getFamilyMoviesSelector(state),
        documentaryMovies: getDocumentaryMoviesSelector(state),
        isFetching: getIsFetchingDashboardSelector(state)
    });

export default connect(mapStateToProps, {getPopularMovies, getSeries, getFamilyMovies, getDocumentaryMovies})(DashboardContainer);