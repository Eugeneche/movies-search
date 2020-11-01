import React, { Fragment } from 'react';
import CustomedCarousel from './Carousel/Carousel';
import MovieItem from '../MovieItem/MovieItem';
import { posterBaseURL } from '../../API/API';
import movieImgPlaceholder from '../../img/movie_img_placeholder.jpg';
import { NavLink } from 'react-router-dom';
import HeaderContainer from '../Header/HeaderContainer';


class Dashboard extends React.Component {

    state = {
        popularCurrentPage: 1,
        seriesCurrentPage: 1,
        familyCurrentPage: 1,
        documentaryCurrentPage: 1
    }

    componentDidMount() {
        this.props.getPopularMovies(this.state.popularCurrentPage);
        this.props.getSeries(this.state.seriesCurrentPage);
        this.props.getFamilyMovies(this.state.familyCurrentPage);
        this.props.getDocumentaryMovies(this.state.documentaryCurrentPage);
    }

    addNewPopularMovies = () => {
        this.setState({popularCurrentPage: this.state.popularCurrentPage + 1});
        this.props.getPopularMovies(this.state.popularCurrentPage);
    }

    addNewSeriesMovies = () => {
        this.setState({seriesCurrentPage: this.state.seriesCurrentPage + 1});
        this.props.getSeries(this.state.seriesCurrentPage);
    }

    addNewFamilyMovies = () => {
        this.setState({familyCurrentPage: this.state.familyCurrentPage + 1});
        this.props.getFamilyMovies(this.state.familyCurrentPage);
    }

    addNewDocumentaryMovies = () => {
        this.setState({documentaryCurrentPage: this.state.documentaryCurrentPage + 1});
        this.props.getDocumentaryMovies(this.state.documentaryCurrentPage);
    }
    
    render() {
        let popularMovies = this.props.popularMovies.map(movie => {
            return <NavLink to={'/movie/' + movie.id} key={movie.id}> 
                    <MovieItem poster={ movie.poster_path !== null ? posterBaseURL + movie.poster_path : movieImgPlaceholder } alt={movie.title + ' movie poster'} title={movie.title} />
                </NavLink>
            
        });

        let series = this.props.popularSeries.map(movie => {
            return <div key={movie.id}>               
                <NavLink to={'/movie/' + movie.id}> 
                    <MovieItem poster={ movie.poster_path !== null ? posterBaseURL + movie.poster_path : movieImgPlaceholder } alt={movie.title + ' movie poster'} title={movie.title} />
                </NavLink>
            </div>
        });

         let familyMovies = this.props.familyMovies.map(movie => {
            return <div key={movie.id}>               
                <NavLink to={'/movie/' + movie.id}> 
                    <MovieItem poster={ movie.poster_path !== null ? posterBaseURL + movie.poster_path : movieImgPlaceholder } alt={movie.title + ' movie poster'} title={movie.title} />
                </NavLink>
            </div>
        });

        let documentaryMovies = this.props.documentaryMovies.map(movie => {
            return <div key={movie.id}>               
                <NavLink to={'/movie/' + movie.id}> 
                    <MovieItem poster={ movie.poster_path !== null ? posterBaseURL + movie.poster_path : movieImgPlaceholder } alt={movie.title + ' movie poster'} title={movie.title} />
                </NavLink>
            </div>
        });

        return <Fragment>
            <HeaderContainer />
            <h1>Popular movies</h1>
            <CustomedCarousel genreList={popularMovies} addNewMovies={this.addNewPopularMovies} />
            <h1>Popular series</h1>
            <CustomedCarousel genreList={series} addNewMovies={this.addNewSeriesMovies} />
            <h1>Family movies</h1>
            <CustomedCarousel genreList={familyMovies} addNewMovies={this.addNewFamilyMovies} /> 
            <h1>Documentary movies</h1>
            <CustomedCarousel genreList={documentaryMovies} addNewMovies={this.addNewDocumentaryMovies} />               
        </Fragment> 
    
    }
}

export default Dashboard;
