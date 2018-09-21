import React, { Component } from "react";
import "./App.css";

import countryArray from "./countries.json";

import { Route, Link } from "react-router-dom";

import CountryDetail from "./components/CountryDetail";

class App extends Component {
  render() {
    return (
      <div id="root">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div
              className="col-5"
              style={{
                maxHeight: "90vh",
                overflow: "scroll"
              }}
            >
              <div className="list-group">
                {countryArray.map(oneCountry => (
                  <Link
                    key={oneCountry.cca3}
                    to={`/CountryList/${oneCountry.cca3}`}
                    className="list-group-item list-group-item-action"
                  >
                    {oneCountry.flag} {oneCountry.name.common}
                  </Link>
                ))}
              </div>
            </div>
            <Route path="/CountryList/:countryId" component={CountryDetail} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
