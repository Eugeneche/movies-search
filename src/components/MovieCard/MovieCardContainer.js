import React from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';
import { getMovieInfo, getTrailer } from '../../redux/reducers/selectedMovieReducer'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class MovieCardContainer extends React.Component {
    componentDidMount() {
        let movieId = this.props.match.params.movieId;
        this.props.getMovieInfo(movieId);
        this.props.getTrailer(movieId);
    }

    render() {  
        return <MovieCard {...this.props} id={this.props.id} title={this.props.title} description={this.props.description} rating={this.props.rating} youtubeKey={this.props.youtubeKey} />
    }
}

let mapStateToProps = (state) => ({
    id: state.selectedMovie.id,
    title: state.selectedMovie.title,
    description: state.selectedMovie.description,
    rating: state.selectedMovie.rating,
    youtubeKey: state.selectedMovie.youtubeKey
});

export default compose(
    connect(mapStateToProps, {getMovieInfo, getTrailer}),
    withRouter
)(MovieCardContainer);