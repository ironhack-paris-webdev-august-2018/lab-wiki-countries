import React from 'react';
import countryArray from "../countries.json"

function findCountry(id) {
    return countryArray.find(oneCountry => oneCountry.cca3 === id);
}


const CountryDetail = (props) => {
    const { params } = props.match;
    const countryItem = findCountry(params.countryId);
    console.log (countryItem);
    return ( 
        <section className="col-7">
            <h1>{countryItem.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{countryItem.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{countryItem.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {countryItem.borders.map(oneID => {
                        const countryNameList= findCountry(oneID);
                        return(
                      <li key={oneID}><a href={`/countries/${oneID}`}>{countryNameList.name.common}</a></li>
                    )})}  
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
        </section>
     );
}
 
export default CountryDetail;






