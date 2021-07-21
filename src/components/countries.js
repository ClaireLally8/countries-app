import React from 'react';

const Countries = ({countryData}) => {
    return (
        <div>
            {countryData.map((country, index) => (
                <div key={index} className = "card">
                    <img src = {country.flag} className = "flag" alt = "flag"></img>
                    <h5>{country.name}</h5>
                    <h5>{country.capital}</h5>
                    <h5>{country.population}</h5>
                </div>
            ))}
        </div>
    )
};

export default Countries