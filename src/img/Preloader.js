import React from 'react';
import styles from './Preloader.module.css';
import preloader from '../img/preloader.gif';

const Preloader = (props) => {

    return <div className={styles.loader}>
        <img src={preloader} alt='preloader' />
    </div>
}

export default Preloader;