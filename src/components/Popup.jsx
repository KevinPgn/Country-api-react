import React, { useState } from 'react'

export default function Popup({ countryId, isActive, setIsActive }) {
    return (
        <>
        {countryId && (
            <div className={`popup ${isActive ? 'active' : ''}`}>
                 <div className="popup-header">
                     <img src={countryId.flags.png} alt={countryId.name.common} />
                     <button onClick={() => setIsActive(false)}>X</button>   
                </div>
                <div className="popup-info">
                    <h3 className='country-name'>{countryId.name.common}</h3>
                    <p><strong>Native Name:</strong> {countryId.name.common}</p>
                    <p><strong>Population:</strong> {countryId.population.toLocaleString('en-US')}</p>
                    <p><strong>Region:</strong> {countryId.region}</p>
                    <p><strong>Sub Region:</strong> {countryId.subregion}</p>
                    <p><strong>Capital:</strong> {countryId.capital}</p>
                    <p><strong>Top Level Domain:</strong> {countryId.tld}</p>
                    <p><strong>Languages:</strong> {Object.values(countryId.languages).join(', ')}</p>
                </div>
        </div>
        )}
        </>
    );
}
