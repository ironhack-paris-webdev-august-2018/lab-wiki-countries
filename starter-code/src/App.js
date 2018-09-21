import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import CountryDetail from "./CountryDetail.js";
import CountryListItem from "./CountryListItem.js";
import welcome from "./welcome.js";
import MyTest from "./MyTest.js";

import countriesArray from "./countries.json"
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      countriesArray: countriesArray
    }
  }

  render() {

    const CountryListItems = this.state.countriesArray.map((el, idx) => {
      return <CountryListItem key={el.name.common} countryProp={el} />
    })
    // const { countriesArray } = this.state

    return (
      <main>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            {/* <div className="col-5" style={"max-height": "90vh"; "overflow": "scroll"}> */}
            <div className="col-5">
              <div className="list-group">
                {/* <a className="list-group-item list-group-item-action" href="/ABW">🇦🇼 Aruba</a>
                <a className="list-group-item list-group-item-action" href="/ABW">🇦🇼 Aruba</a>
                <a className="list-group-item list-group-item-action" href="/AFG">🇦🇫 Afghanistan</a>
                <a className="list-group-item list-group-item-action" href="/AGO">🇦🇴 Angola</a>
                <a className="list-group-item list-group-item-action" href="/AIA">🇦🇮 Anguilla</a>
                <a className="list-group-item list-group-item-action" href="/ALA">🇦🇽 Åland Islands</a>
                <a className="list-group-item list-group-item-action" href="/ALB">🇦🇱 Albania</a>
                <a className="list-group-item list-group-item-action" href="/AND">🇦🇩 Andorra</a>
                <a className="list-group-item list-group-item-action" href="/ARE">🇦🇪 United Arab Emirates</a>
                <a className="list-group-item list-group-item-action" href="/ARG">🇦🇷 Argentina</a>
                <a className="list-group-item list-group-item-action" href="/ARM">🇦🇲 Armenia</a>
                <a className="list-group-item list-group-item-action" href="/ASM">🇦🇸 American Samoa</a>
                <a className="list-group-item list-group-item-action" href="/ATA">🇦🇶 Antarctica</a>
                <a className="list-group-item list-group-item-action" href="/FLK">🇫🇰 Falkland Islands</a>
                <a className="list-group-item list-group-item-action active" href="/FRA">🇫🇷 France</a>
                <a className="list-group-item list-group-item-action" href="/ZWE">🇿🇼 Zimbabwe</a> */}


                {/* <CountryListItem /> */}
                {CountryListItems}
              </div>
            </div>
            <Switch>
              {/* NOT PASSING ANY PROPS TO THE ROUTE : */}
              <Route exact path="/" component={welcome} />
              <Route exact path="/myTest" render={() => <MyTest proppyProp={this.state.countriesArray} />} />
              <Route path="/:countryId" component={CountryDetail} />
              {/* PASSING DOWN THE STATE : */}
            </Switch>
          </div>
        </div>

      </main>
    );
  }
}

export default App;
