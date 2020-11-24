import React, { Fragment } from 'react';
import CustomedCarousel from './Carousel/Carousel';
import MovieItem from '../MovieItem/MovieItem';
import { posterBaseURL } from '../../API/API';
import movieImgPlaceholder from '../../img/movie_img_placeholder.jpg';
import { NavLink } from 'react-router-dom';
import HeaderContainer from '../Header/HeaderContainer';
//import Preloader from '../../img/Preloader';



class Dashboard extends React.Component {

    state = {
        popularCurrentPage: 1,
        seriesCurrentPage: 1,
        familyCurrentPage: 1,
        documentaryCurrentPage: 1,
        isFetching: this.props.isFetching
    }

    componentDidMount() {
        this.props.getPopularMovies(this.state.popularCurrentPage);
        this.props.getSeries(this.state.seriesCurrentPage);
        this.props.getFamilyMovies(this.state.familyCurrentPage);
        this.props.getDocumentaryMovies(this.state.documentaryCurrentPage);

        this.incrementPopularCurrentPage();
        this.incrementSeriesCurrentPage();
        this.incrementFamilyCurrentPage();
        this.incrementDocumentaryCurrentPage();
    }

/*     isFetchingTrue = () =>{
        this.setState( state => ({isFetching: state.isFetching = true}));
    }

    isFetchingFalse = () =>{
        this.setState( state => ({isFetching: state.isFetching = false}));
    } */

    incrementPopularCurrentPage = () => {
        this.setState( state => ({popularCurrentPage: state.popularCurrentPage + 1}));
    }

    incrementSeriesCurrentPage = () => {
        this.setState( state => ({seriesCurrentPage: state.seriesCurrentPage + 1}));
    }

    incrementFamilyCurrentPage = () => {
        this.setState( state => ({familyCurrentPage: state.familyCurrentPage + 1}));
    }

    incrementDocumentaryCurrentPage = () => {
        this.setState( state => ({documentaryCurrentPage: state.documentaryCurrentPage + 1}));
    }

    addNewPopularMovies = () => {
        this.incrementPopularCurrentPage();
        this.props.getPopularMovies(this.state.popularCurrentPage);
    }

    addNewSeriesMovies = () => {
        this.incrementSeriesCurrentPage();
        this.props.getSeries(this.state.seriesCurrentPage);
    }

    addNewFamilyMovies = () => {
        this.incrementFamilyCurrentPage();
        this.props.getFamilyMovies(this.state.familyCurrentPage);
    }

    addNewDocumentaryMovies = () => {
        this.incrementDocumentaryCurrentPage();
        this.props.getDocumentaryMovies(this.state.documentaryCurrentPage);
    }

    render() {
        let popularMovies = this.props.popularMovies.map(movie => {
            return <NavLink to={'/movie/' + movie.id} key={movie.id}> 
                    <MovieItem poster={ movie.poster_path !== null ? posterBaseURL + movie.poster_path : movieImgPlaceholder } alt={movie.title + ' movie poster'} title={movie.title} genres={this.props.genres} />
                </NavLink>           
        });

        let series = this.props.popularSeries.map(movie => {
            return <NavLink to={'/movie/' + movie.id} key={movie.id}> 
                    <MovieItem poster={ movie.poster_path !== null ? posterBaseURL + movie.poster_path : movieImgPlaceholder } alt={movie.title + ' movie poster'} title={movie.title} />
                </NavLink>
        });

        let familyMovies = this.props.familyMovies.map(movie => {
            return <NavLink to={'/movie/' + movie.id} key={movie.id}> 
                    <MovieItem poster={ movie.poster_path !== null ? posterBaseURL + movie.poster_path : movieImgPlaceholder } alt={movie.title + ' movie poster'} title={movie.title} />
                </NavLink>
        });

        let documentaryMovies = this.props.documentaryMovies.map(movie => {
            return <NavLink to={'/movie/' + movie.id} key={movie.id}> 
                    <MovieItem poster={ movie.poster_path !== null ? posterBaseURL + movie.poster_path : movieImgPlaceholder } alt={movie.title + ' movie poster'} title={movie.title} />
                </NavLink>
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
