import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";

import axios from "axios";

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    if (!countries.length) {
      axios
        .get("https://ih-countries-api.herokuapp.com/countries")
        .then((response) => {
          console.log("Countries ===>", response.data);
          setCountries(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      <h1>LAB | React WikiCountries</h1>

      <Routes>
        <Route path="/" element={<HomePage countries={countries} />} />
        <Route
          path="/:countryId"
          element={<CountryDetails countries={countries} />}
        />
      </Routes>
    </div>
  );
}

export default App;