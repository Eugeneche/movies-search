import { Field, reduxForm } from 'redux-form';
import magnifier from '../../img/magnifier.svg';
import styles from './Search.module.css';
import { required, maxLength15, minLength3, renderField } from '../../helpers/validators/FieldValidation';


import React from 'react';

let SearchForm = props => {
    const { handleSubmit } = props;
    return <form onSubmit={handleSubmit}>
        <Field 
            name='searching' 
            component={renderField} 
            type='text' 
            placeholder='min 3 characters'
            validate={[required, maxLength15, minLength3]}
        />
            <button className={styles.submitButton} type='submit' disabled={!props.valid}>
                    <img src={magnifier} alt='magnifier'/>
            </button> 
    </form>

    //the submit function is in the Header component 
}

SearchForm = reduxForm({form: 'search'})(SearchForm);

export default SearchForm;