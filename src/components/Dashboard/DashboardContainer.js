import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import { getPopularMovies, getSeries, getFamilyMovies, getDocumentaryMovies } from '../../redux/reducers/dashboardReducer';
import { getPopularMoviesSelector, getPopularSeriesSelector, getFamilyMoviesSelector, getDocumentaryMoviesSelector, getIsFetchingDashboardSelector, getGenresSelector } from '../../redux/selectors/dashboardSelectors';
import Preloader from '../../img/Preloader';



const DashboardContainer = props => {
    let [isFetching, setIsFetching] = useState(document.readyState === "loading" || 
                                               document.readyState === "interactive");

    useEffect(() => {
        //alert(document.readyState)
        document.onreadystatechange = function () {
            if (document.readyState === "complete") {
                setIsFetching(false);
            }
          }

        }, [isFetching]);

    return <Fragment>
          {isFetching && <Preloader />}
          <Dashboard {...props} />
        </Fragment>
}

let mapStateToProps = state => ({
        popularMovies: getPopularMoviesSelector(state),
        popularSeries: getPopularSeriesSelector(state),
        familyMovies: getFamilyMoviesSelector(state),
        documentaryMovies: getDocumentaryMoviesSelector(state),
        isFetching: getIsFetchingDashboardSelector(state),
        allGenres: getGenresSelector(state)
    });

export default connect(mapStateToProps, { getPopularMovies, getSeries, getFamilyMovies, getDocumentaryMovies })(DashboardContainer);