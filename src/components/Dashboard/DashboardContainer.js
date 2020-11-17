import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import { getPopularMovies, getSeries, getFamilyMovies, getDocumentaryMovies } from '../../redux/reducers/dashboardReducer';
//import Preloader from '../../img/Preloader';



const DashboardContainer = props => {

    return <Fragment>
          {/* {props.isFetching && <Preloader />} */}
            <Dashboard {...props} isFetching={props.isFetching} />
        </Fragment>
}

let mapStateToProps = state => ({
        popularMovies: state.dashboard.popularMovies,
        popularSeries: state.dashboard.popularSeries,
        familyMovies: state.dashboard.familyMovies,
        documentaryMovies: state.dashboard.documentaryMovies,
        isFetching: state.dashboard.isFetching
    });

export default connect(mapStateToProps, {getPopularMovies, getSeries, getFamilyMovies, getDocumentaryMovies})(DashboardContainer);