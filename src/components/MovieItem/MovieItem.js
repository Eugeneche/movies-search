import React from 'react';
import styles from '../Dashboard/Dashboard.module.css';


const MovieItem = (props) => {
    
    return <div className={styles.movieItem}>
        <img src={props.poster} alt={props.alt} />
        <h2 className={styles.movieTitle}>{props.title}</h2>
        <div className={styles.genres}>

        </div>
    </div>
}

export default MovieItem;