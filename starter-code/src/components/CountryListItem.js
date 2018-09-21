import React from 'react';
import { Link } from "react-router-dom";

const CountryListItem = (props) => {
    const { countryId, countryFlag, countryName } = props;
    return ( 
        <Link to={`/countries/${countryId}`} className="list-group-item list-group-item-action" >
            { countryFlag } {countryName }
        </Link>
     );
}
 
export default CountryListItem;