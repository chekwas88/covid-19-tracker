import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';

import {fetchCountries} from '../../api';
import styles from './countrypicker.module.css';


const CountryPicker = ({handleCountryChange}) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const getCountries = async () => {
            setCountries( await fetchCountries());
        }
        getCountries()
    }, [setCountries])


    return(
      
            <FormControl className={styles.formcontrol}>
                <NativeSelect onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value=''>Global</option>
                    {countries.length ? countries.map(country => (<option key={country} value={country}>{country}</option>)): null}
                </NativeSelect>
            </FormControl>
    )

}

export default CountryPicker;