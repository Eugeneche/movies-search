import React from 'react';
import styles from '../Dashboard/Dashboard.module.css';
import Bar from '../Rating/Rating';

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
        <div className={styles.rating} >
            <Bar rating={props.rating} />
        </div>
    </div>
}

export default MovieItem;