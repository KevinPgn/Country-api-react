import React from 'react'

export default function Filter({ value, setValue, region, setRegion }) {
  return (
    <>
        <div className="content-filter">
            <div className="search">
                <input type="text" placeholder="Search for a country..." value={value} onChange={e => setValue(e.target.value)}/>
            </div>
            <div className="select">
                <select value={region} onChange={e => setRegion(e.target.value)}>
                    <option value="">Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </div>
    </>
  )
}
