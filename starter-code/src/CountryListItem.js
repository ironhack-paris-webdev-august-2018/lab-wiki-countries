import React from 'react';
import { Link } from "react-router-dom";

function CountryListItem(props) {
  // console.log(props)
  return (
    <div>
      {/* <a className="list-group-item list-group-item-action" href="/ZWE">Zimbabwe</a> */}
      <Link className="list-group-item list-group-item-action" to={`/${props.countryProp.cca3}`}>{props.countryProp.name.common}{props.countryProp.flag}</Link>
    </div>
  )
}

export default CountryListItem