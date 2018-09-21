import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import countries from "../countries.json"

function findDetail(id){
    return countries.find(oneCountry => oneCountry.cca3 === id)
}

function findCountryName(code){
    const countryName = findDetail(code)
    return countryName.name.common
}

function CountryDetail(props){
    const {params} = props.match
    const countryItem = findDetail(params.countryCode)
    
    
    return(
        <div className="col-7">
        <h1>{countryItem.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{countryItem.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{countryItem.area} km
                <sup>2</sup>
              </td>
            </tr>
                {countryItem.borders.length>0  &&
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                    {countryItem.borders.map(oneBorder =>
                        <li key={oneBorder}><Link to={oneBorder}>{findCountryName(oneBorder)}</Link></li>
                        )}
                        
                </ul>
              </td>
            </tr>
            }
          </tbody>
        </table>
      </div>
    )
}

export default CountryDetail