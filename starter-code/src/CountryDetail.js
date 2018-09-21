import React from 'react';
import { Link } from "react-router-dom";

import countriesArray from "./countries.json"

function findCountry(id) {
  // find one project whose ID matches the parameter
  return countriesArray.find(oneCountry => oneCountry.cca3 === id);
}

function CountryDetail(props) {
  const { params } = props.match;
  let countryItem = findCountry(params.countryId)
  console.log(countryItem)

  return (
    <div className="col-7">
      <h1>{countryItem.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            {/* <td style={"width": "30%"}>Capital</td> */}
            <td>{countryItem.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{countryItem.area}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {/* <li><a href="/AND">Andorra</a></li>
                <li><a href="/CHE">Switzerland</a></li> */}
                {countryItem.borders.map(el => {
                  return <Link to={`/${el}`} className="list-group-item list-group-item-action"> {findCountry(el).flag} {findCountry(el).name.common} </Link>
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>


  );
}

export default CountryDetail