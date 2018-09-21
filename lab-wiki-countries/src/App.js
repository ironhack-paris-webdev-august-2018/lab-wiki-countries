import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import arrayCountries from "./countries.json"
import CountyDetails from './components/CountryDetails';

import {Switch, Route, Link} from "react-router-dom";

class App extends Component {
  render() {
    console.log(arrayCountries[0].cca3)
    const listCountiresStyle = {
      maxHeight: "90vh",
      overflow: "scroll"
    }
    return (
      <div className="App">
     
  

 
 
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-5" style={listCountiresStyle} >
            <div className="list-group">

              {arrayCountries.map(el => {
                return (
                  <Link key={el.cca2} className="list-group-item list-group-item-action" to={`/${el.cca3}`} > {el.flag} {el.name.common}  </Link>
                )
              })}
              
            </div>
          </div>

          <Route exact path="/:countrieId" component={CountyDetails} />
          
          
        </div>
      </div>
    </div>
  






      </div>
    );
  }
}

export default App;
