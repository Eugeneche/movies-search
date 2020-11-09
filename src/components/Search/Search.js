import { Field, reduxForm } from 'redux-form';
import magnifier from '../../img/magnifier.svg';
import styles from './Search.module.css';

import React from 'react';

let SearchForm = props => {
    const { handleSubmit } = props;
    return <form onSubmit={handleSubmit} style={{display: 'inline'}}>
        <Field name='searching' component='input' type='text' />
            <button className={styles.submitButton} type='submit'>
                    <img src={magnifier} alt='magnifier'/>
            </button> 
    </form>

    //the submit function is in the Header component 
}

SearchForm = reduxForm({form: 'search'})(SearchForm);

export default SearchForm;