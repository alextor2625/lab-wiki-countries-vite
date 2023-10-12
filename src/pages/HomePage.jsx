import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function HomePage() {
  const apiURL = "https://ih-countries-api.herokuapp.com/countries";

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    console.log("useEffect - Initial render (Mounting)");
    axios
      .get(apiURL)
      .then((response) => {
       // console.log(response.data);
        setCountries(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <div
      className="container"
      style={{ maxHeight: "90vh", overflow: "scroll" }}
    >
      <h1 style={{ fontSize: "24px" }}>
        WikiCountries: Your Guide to the World
      </h1>

      <div className="list-group">
        {countries.map((country) => {
          return (
            <Link
              key={country._id}
              className="list-group-item list-group-item-action"
              to={{pathname: `/country/${country.alpha3Code.toLowerCase()}`, state: { country: country }}}
            >

              <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}></img>
              
              <p>{country.name.common}</p>
              
            </Link>
          );
        })}
      </div>
    </div>
  )
}

export default HomePage;
