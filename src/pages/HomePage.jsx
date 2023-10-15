import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage({ countries }) {
  return (
    <div
      className="container"
      style={{ maxHeight: "90vh", overflow: "scroll" }}
    >
      <h1 style={{ fontSize: "24px" }}>
        WikiCountries: Your Guide to the World
      </h1>

      <div className="list-group country-card-container">
        <>
          {countries.length ? (
            <>
              {countries.map((country) => {
                return (
                  <Link
                    to={`/${country.alpha3Code}`}
                    className="list-group-item list-group-item-action country-card-container"
                  >
                    <div className="country-card">
                      <img
                        src={`https://flagpedia.net/data/flags/icon/40x30/${country.alpha2Code.toLowerCase()}.png`}
                        alt="country flag"
                      />
                      <span>{country.name.common}</span>
                    </div>
                  </Link>
                );
              })}
            </>
          ) : (
            <p>Loading...</p>
          )}
        </>
      </div>
    </div>
  );
}

export default HomePage;