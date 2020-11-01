import React from 'react';
import SearchForm from '../Search/Search';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';


class Header extends React.Component {

/*     s = () => {
        let query = this.props.query;
        this.props.submit(query); 
      } */

/*       submit = values => {
        this.props.getSearchingResults(query); 
        alert(values);
      } */

    render() {
        return <header>
            <SearchForm onSubmit={this.submit} />
            <NavLink to='/'>
                <span className={styles.logo}>Movies<span className={styles.sublogo}>GO</span></span>
            </NavLink>
        </header>
    }
}

export default Header;