import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function CountryDetails({country}) {

  const { countryId } = useParams();

  const [foundCountry, setFoundCountry] = useState(null)
    console.log(country);
//   const thisCountry = country.find(country => country.id === countryId)

    return (

        <div className="container">
        <p style={{fontSize: '24px', fontWeight: 'bold'}}>Country Details</p>

        <h1>Project details</h1>

        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: '30%'}}>Capital</td>
              <td>Paris</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                551695 km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  <li><Link to="/AND">Andorra</Link></li>
                  <li><Link to="/BEL">Belgium</Link></li>
                  <li><Link to="/DEU">Germany</Link></li>
                  <li><Link to="/ITA">Italy</Link></li>
                  <li><Link to="/LUX">Luxembourg</Link></li>
                  <li><Link to="/MCO">Monaco</Link></li>
                  <li><Link to="/ESP">Spain</Link></li>
                  <li><Link to="/CHE">Switzerland</Link></li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}

export default CountryDetails;
