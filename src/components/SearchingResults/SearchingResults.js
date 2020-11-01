import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import CustomedCarousel from '../Dashboard/Carousel/Carousel';
import MovieItem from '../MovieItem/MovieItem';
import movieImgPlaceholder from '../../img/movie_img_placeholder.jpg';
import { posterBaseURL } from '../../API/API';
import HeaderContainer from '../Header/HeaderContainer';

class SearchingResults extends React.Component {

    render() {

        let searchList = this.props.results.map(movie => {
            return <NavLink to={'/movie/' + movie.id} key={movie.id}> 
                <MovieItem poster={ movie.poster_path !== null ? posterBaseURL + movie.poster_path : movieImgPlaceholder } alt={movie.title + ' movie poster'} title={movie.title} />
            </NavLink>
        });

        return <Fragment>
            <HeaderContainer />
            {/* Second title - no one parameter  */}
            <h2>The following movies were found on request '...'</h2>
            <CustomedCarousel genreList={searchList} addNewMovies={this.props.getSearchingResultsNextMovies} />               
        </Fragment>
    }
}

export default SearchingResults;