import React from 'react';

import arrayCountries from "../countries.json"

import {Switch, Route, Link} from "react-router-dom";

function findCountrie(id){
  
    return arrayCountries.find(el => el.cca3 === id)
    }


const CountyDetails = (props) => {

    const projectItem = findCountrie(props.match.params.countrieId)
   
    
    return ( 
        
<div className="col-7">
            <h1>{projectItem.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: '30%'}}>Capital</td>
                  <td>{projectItem.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{projectItem.area}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {projectItem.borders.map(el=>{
                        return(
                            <li><Link to={`/${el}`}>{el}</Link></li>
                        )
                    })}
                      
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>







    );
}
 
export default CountyDetails;