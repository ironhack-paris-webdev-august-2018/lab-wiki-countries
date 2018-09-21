import React, { Component } from 'react';
import './App.css';
import CountryListItem from './components/CountryListItem';
import countryArray from "./countries.json"
import { Switch, Route, NavLink } from "react-router-dom";
import NotFound from './components/NotFound';
import CountryDetail from './components/CountryDetail';
import NoCountrySelected from './components/NoCountrySelected';

class App extends Component {
  render() {
    return (
      <main>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
              <div className="list-group">
                {countryArray.map((oneCountry) =>
                  <CountryListItem key={oneCountry.cca3} countryId={oneCountry.cca3} countryFlag={oneCountry.flag} countryName={oneCountry.name.common} />
                )}
              </div>
            </div>
            <div className="col-7">
              <Switch>
                <Route exact path="/" component={NoCountrySelected} />
                <Route path="/countries/:countryId" component={CountryDetail} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
