import React from 'react';
import styles from './Dashboard.module.css';
import Carousel from './Carousel/Carousel';


const Dashboard = (props) => {

    return(
        <div className={styles.dashboard}>
            <Carousel />
        </div>
    )
}

export default Dashboard;
