import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import { getPopularMovies, getSeries, getFamilyMovies, getDocumentaryMovies } from '../../redux/reducers/dashboardReducer';

let mapStateToProps = (state) => {
    return {
        popularMovies: state.dashboard.popularMovies,
        popularSeries: state.dashboard.popularSeries,
        familyMovies: state.dashboard.familyMovies,
        documentaryMovies: state.dashboard.documentaryMovies
    }
}

const DashboardContainer = connect(mapStateToProps, {getPopularMovies, getSeries, getFamilyMovies, getDocumentaryMovies})(Dashboard);

export default DashboardContainer;