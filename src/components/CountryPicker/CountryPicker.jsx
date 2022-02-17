import React, { useState, useEffect} from 'react';
import './country.css';
import { Form } from 'react-bootstrap';
import { countries } from '../../api'; 

const CountryPicker = ({ handleCountryChange }) => {

  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      setFetchedCountries(await countries());
    }

    fetchCountries();
  }, [setFetchedCountries]);


  return (
    <div className="country-picker">
        <Form.Select aria-label="Default select example" onChange={(e) => handleCountryChange(e.target.value)}>
          <option value="global">Global</option>
          {
            fetchedCountries.map((country, i) => <option value={country}>{country}</option>)
          }
        </Form.Select>
    </div>
  )
}

export default CountryPicker;