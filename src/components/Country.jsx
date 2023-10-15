import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch'

import Header from './Header'
import Filter from './Filter'
import Popup from './Popup'

import loader from "../assets/loader.svg"

export default function Country() {
    const { response, loading, error } = useFetch('https://restcountries.com/v3.1/all')
  
    const [value, setValue] = useState('')
    const [region, setRegion] = useState('')
    const [id, setId] = useState('')
    const [isActive, setIsActive] = useState(false)

    const filterCountry = response && response.filter((country) => {
        return country.name.common.toLowerCase().includes(value.toLowerCase()) && country.region.toLowerCase().includes(region.toLowerCase())
    }).sort((a, b) => {
        return b.population - a.population
    })

    const countryId = response && response.find((country) => {
        return country.cca2 === id
    })

    const handleActiveId = (id) => {
        setIsActive(true)
        setId(id)
    }   

    return (
    <>
    <Header />
    <Filter value={value} setValue={setValue} region={region} setRegion={setRegion}/>
    <Popup countryId={countryId} isActive={isActive} setIsActive={setIsActive}/>
    <div className="country">

        {loading && <img src={loader} alt="loader" className="loader" />}
        {error && <p className="error">Error: {error}</p>}

        {response && filterCountry.map((country) => (
            <div className='card' key={country.cca2} onClick={() => handleActiveId(country.cca2)}>
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
