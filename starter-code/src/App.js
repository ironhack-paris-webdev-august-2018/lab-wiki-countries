import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import CountryDetails from "./CountryDetails";
import CountryList from "./CountryList";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <a className="navbar-brand" href="/">
                WikiCountries
              </a>
            </div>
          </nav>
        </header>

        <div className="row">
          <div className="col-5">
            <CountryList />
          </div>

          <div className="col-7">
            <Switch>
              <Route
                exact
                path="/details/:countryCca3"
                component={CountryDetails}
              />
            </Switch>
          </div>
        </div>

        <footer>
          <p>Made with 🦊 at Ironhack</p>
        </footer>
      </div>
    );
  }
}

export default App;
