import React from "react";
import countriesArray from "./countries.json";
import { Link } from "react-router-dom";

function findCountry(cca3) {
  return countriesArray.find(oneCountry => oneCountry.cca3 === cca3);
}

function CountryDetails(props) {
  const { params } = props.match;

  const countryItems = findCountry(params.countryCca3);

  return (
    <div>
      <h1>{countryItems.name.common}</h1>

      <table className="table">
        <thead />
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{countryItems.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {countryItems.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {countryItems.borders.map((oneBorder, index) => {
                  const country = findCountry(oneBorder);

                  return (
                    <li key={index}>
                      <Link to={`/details/${oneBorder}`}>
                        {country.name.common}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
