import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import HeaderContainer from '../Header/HeaderContainer';

const NotFound = props => {

    return <Fragment>
        <HeaderContainer />
        <h1 style={{fontWeight: '300', margin: '200px auto'}}>Unfortunately this page does not exist&nbsp;&nbsp;
            <Link to='/'><span style={{fontWeight: '600', color: 'yellow'}}>Home</span></Link>
        </h1>
    </Fragment>
}

export default NotFound;