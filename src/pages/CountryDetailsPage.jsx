import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CountryDetails({ countries }) {
  const [country, setCountry] = useState(null);

  const { countryId } = useParams();

  useEffect(() => {

    if(countries.length) {
        let thisCountry = countries.find((country) => country.alpha3Code === countryId)
        setCountry(thisCountry)
    }

  }, [countryId, countries]);

  const getCountryName = (code) => {

   return countries.find((country) => country.alpha3Code === code).name.common

  }

  return (
    <>
      {country ? (
        <div className="container">
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>
            Country Details
          </p>

          <img src={`https://flagpedia.net/data/flags/icon/192x144/${country.alpha2Code.toLowerCase()}.png`} alt="country flag" />

          <h1>{country.name.common}</h1>

          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: "30%" }}>Capital</td>
                <td>{country.capital[0]}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {country.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                  {
                    country.borders.map((border) => {
                        return (
                            <li>
                                <Link to={`/${border}`}>{getCountryName(border)}</Link>
                            </li>
                        )
                    })
                  }

                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default CountryDetails;