import React from 'react';
import ReactPlayer from 'react-player';
import { trailerBaseURL } from '../../API/API';

const Player = props => {
    return <ReactPlayer
        width='100%'
        height='310px'
        url={trailerBaseURL+props.youtubeKey} 
    >
    </ReactPlayer> 
}

export default Player;