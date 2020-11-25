import React from 'react';
import styles from '../Dashboard/Dashboard.module.css';
import SimpleRating from '../SimpleRating/SimpleRating.js';

const MovieItem = (props) => {
    const genres = props.thisMovieGenres.map(genre => {
    return <span key={genre}>{props.allGenres[genre]}</span>
    });
    
    return <div className={styles.movieItem}>
        <img src={props.poster} alt={props.alt} />
        <h2 className={styles.movieTitle}>{props.title}</h2>
        <div className={styles.genres}>
            {genres}
        </div>
        <SimpleRating value={props.rating} />
    </div>
}

export default MovieItem;