import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import magnifier from '../../img/magnifier.svg';
import styles from './Search.module.css';

import React from 'react';

let SearchForm = props => {
    const { handleSubmit } = props;
    return <form onSubmit={handleSubmit} style={{display: 'inline'}}>
        <Field name='searching' component='input' type='text' />
{/*          {!props.query &&
                        <button className={styles.submitButton} type='submit' disabled>
                        <img src={magnifier} alt='magnifier'/>
         </button>}
         {props.query &&
                        <NavLink to='/results'>
                        <button className={styles.submitButton} type='submit'>
                                <img src={magnifier} alt='magnifier'/>
                        </button>
                    </NavLink>
        }  */}


                    <NavLink to='/results'>
                        <button className={styles.submitButton} type='submit'>
                                <img src={magnifier} alt='magnifier'/>
                        </button>
                    </NavLink> 

    </form>
}

SearchForm = reduxForm({form: 'search'})(SearchForm);

let mapStateToProps = state => ({
    query: state.form.search
})
SearchForm = connect(mapStateToProps, {})(SearchForm);



export default SearchForm;