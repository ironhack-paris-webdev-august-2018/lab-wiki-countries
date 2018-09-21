import React from "react";
import countriesArray from "./countries.json";
import { NavLink } from "react-router-dom";

class CountryList extends React.Component {
  render() {
    return (
      <div>
        <div className="list-group">
          {countriesArray.map(oneCountry => (
            <NavLink
              exact
              to={`/details/${oneCountry.cca3}`}
              className="list-group-item list-group-item-action"
              key={oneCountry.cca3}
            >
              {oneCountry.flag} {oneCountry.name.common}
            </NavLink>
          ))}
        </div>
      </div>
    );
  }
}

export default CountryList;
