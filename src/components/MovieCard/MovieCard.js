import React, { Fragment } from 'react';
import Player from '../Player/Player';
import style from './MovieCard.module.css';

const MovieCard = props => {

    
    return <Fragment>
        <h1>{props.title}</h1>
        <div className={style.infoBlock}>
            <div className={style.description}>{props.description}</div>
            <div className={style.rating}>Rating: {props.rating}</div>
        </div>
        <div className={style.playerBlock}>
            <Player {...props} youtubeKey={props.youtubeKey} />
        </div>
    </Fragment>
}

export default MovieCard;