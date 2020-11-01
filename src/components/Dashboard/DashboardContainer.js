import React from 'react';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import { getPopularMovies, getSeries, getFamilyMovies, getDocumentaryMovies } from '../../redux/reducers/dashboardReducer';


class DashboardContainer extends React.Component {

    render() {
        return <Dashboard {...this.props} />
    }
}

let mapStateToProps = state => ({
        popularMovies: state.dashboard.popularMovies,
        popularSeries: state.dashboard.popularSeries,
        familyMovies: state.dashboard.familyMovies,
        documentaryMovies: state.dashboard.documentaryMovies
    });

export default connect(mapStateToProps, {getPopularMovies, getSeries, getFamilyMovies, getDocumentaryMovies})(DashboardContainer);