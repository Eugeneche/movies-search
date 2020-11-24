import React, { Fragment } from 'react';
import Player from '../Player/Player';
import style from './MovieCard.module.css';
import noTrailer from '../../img/no_trailer_placeholder.jpg';
import HeaderContainer from '../Header/HeaderContainer';

const MovieCard = props => {

    return <Fragment>
        <HeaderContainer />
        <h1 className={style.movieTitle}>{props.title}</h1>
        <div className={style.infoBlock}>
            <div className={style.description}>{props.description}</div>
            <div className={style.rating}>Rating: {props.rating}</div>
        </div>
        <div className={style.playerBlock}>
            {props.youtubeKey ? 
            <Player {...props} youtubeKey={props.youtubeKey} /> :
            <img src={noTrailer} alt='no trailer' /> }
            
        </div>
    </Fragment>
}

export default MovieCard;