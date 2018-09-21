import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, NavLink } from "react-router-dom";
import CountryDetail from "./components/CountryDetail";
import countries from "./countries.json"

class App extends Component {
  render() {
    return (
  <div id="root">
        <div>
          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <a className="navbar-brand" href="/">WikiCountries</a>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col-5">
                <div className="list-group">
                
                  {countries.map(oneCountry => 
                    <NavLink to={`/${oneCountry.cca3}`} key={oneCountry.cca3} className="list-group-item list-group-item-action">
                      {oneCountry.cca2} {oneCountry.name.common}
                    </NavLink>
                  )}
                
                </div>
              </div>
              <Switch>
                <Route path ="/:countryCode" component={CountryDetail}/>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
