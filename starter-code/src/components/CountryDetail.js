import React from "react";
import countryArray from "../countries.json";

import { Link } from "react-router-dom";

function findCountry(cca3) {
  return countryArray.find(oneCountry => oneCountry.cca3 === cca3);
}

function CountryDetail(props) {
  const { params } = props.match;

  //   console.log(params.countryId);
  const countryItem = findCountry(params.countryId);

  return (
    <div className="col-7">
      <h2>{countryItem.name.common}</h2>
      <table className="table">
        <thead />
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{countryItem.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {countryItem.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {countryItem.borders.map(oneBorder => (
                  <li key={oneBorder}>
                    <Link to={`/CountryList/${oneBorder}`}>{oneBorder}</Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetail;
