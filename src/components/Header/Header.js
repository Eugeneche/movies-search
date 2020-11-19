import React from 'react';
import SearchForm from '../Search/Search';
import { Link, useHistory } from 'react-router-dom';
import styles from './Header.module.css';


const Header = props => {
    
    let history = useHistory();

    const submit = values => {
        values && props.getSearchingResults(values.searching); 
        history.location.pathname === '/results' && props.restoreInitValuePageForNextMovies();
        history.push(`/results`); 
    }
        return <header>
            <SearchForm onSubmit={submit} />
            <Link to='/'>
                <span className={styles.logo}>Movies<span className={styles.sublogo}>GO</span></span>
            </Link>
        </header>
}

export default Header;