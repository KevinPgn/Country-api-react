import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch'

import Header from './Header'
import Filter from './Filter'

import loader from "../assets/loader.svg"

export default function Country() {
    const { response, loading, error } = useFetch('https://restcountries.com/v3.1/all')
  
    const [value, setValue] = useState('')
    const [region, setRegion] = useState('')

    const filterCountry = response && response.filter((country) => {
        return country.name.common.toLowerCase().includes(value.toLowerCase()) && country.region.toLowerCase().includes(region.toLowerCase())
    }).sort((a, b) => {
        return b.population - a.population
    })

    return (
    <>
    <Header />
    <Filter value={value} setValue={setValue} region={region} setRegion={setRegion}/>
    <div className="country">

        {loading && <img src={loader} alt="loader" className="loader" />}
        {error && <p className="error">Error: {error}</p>}

        {response && filterCountry.map((country) => (
            <div className='card' key={country.cca2}>
                <div className="top-card">
                    <img src={country.flags.png} alt={country.name.common} />
                </div>
                <div className="info">
                    <h3 className='country-name'>{country.name.common}</h3>
                    <p><strong>Population:</strong> {country.population.toLocaleString('en-US')}</p>
                    <p><strong>Region:</strong> {country.region}</p>
                    <p><strong>Capital:</strong> {country.capital}</p>
                </div>
            </div>
        ))}
    </div>
    </>
  )
}