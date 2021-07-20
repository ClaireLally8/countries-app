import React from 'react';

const Countries = ({countryData}) => {
    return (
        <div>
            {countryData.map((country, index) => (
                <div key={index}>
                    <img src = {country.flag} className = "flag"></img>
                </div>
            ))}
        </div>
    )
};

export default Countries