import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import CustomedCarousel from '../Dashboard/Carousel/Carousel';
import MovieItem from '../MovieItem/MovieItem';
import movieImgPlaceholder from '../../img/movie_img_placeholder.jpg';
import { posterBaseURL } from '../../API/API';
import HeaderContainer from '../Header/HeaderContainer';

class SearchingResults extends React.Component {

    addNextMovies = () => {
        let q = this.props.query;
        let p =this.props.page;
        this.props.getSearchingResultsNextMovies(q, p);
        this.props.incrementCurrentPage();
    }

    render() {

        let searchList = this.props.results.map(movie => {
            return <NavLink to={'/movie/' + movie.id} key={movie.id}> 
                    <MovieItem poster={ movie.poster_path !== null ? posterBaseURL + movie.poster_path : movieImgPlaceholder } alt={movie.title + ' movie poster'} title={movie.title}
                    thisMovieGenres={movie.genre_ids} allGenres={this.props.allGenres} rating={movie.vote_average}  />
            </NavLink>
        });

        return <Fragment>
            <HeaderContainer restoreInitValuePageForNextMovies={this.props.restoreInitValuePageForNextMovies}/>
            {/* Second title - no one parameter  */}
            <h2>The following movies were found on request '{this.props.query}'</h2>
            <CustomedCarousel genreList={searchList} addNewMovies={this.addNextMovies} />               
        </Fragment>
    }
}

export default SearchingResults;