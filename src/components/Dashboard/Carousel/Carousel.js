import React from 'react';
import styles from './Carousel.module.css';
import MovieItem from '../../MovieItem/MovieItem';

const Carousel = (props) => {

    return(
        <div className={styles.carousel}>
            <MovieItem />
            <MovieItem />
            <MovieItem />
            <MovieItem />
            <MovieItem />
            <MovieItem />
            <MovieItem />
            <MovieItem />
            <MovieItem />
            <MovieItem />
            <MovieItem />
            <MovieItem />
        </div>
    )
}

export default Carousel;


