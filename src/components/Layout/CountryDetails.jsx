import { useParams } from "react-router-dom";
import { useTransition, useState, useEffect } from "react";
import { getCountryIndData } from "../../api/PostApi";
import { Loader } from "../UI/Loader";
import { NavLink } from "react-router-dom";


export const CountryDetails = () => {
  const { id } = useParams();
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getCountryIndData(id);
        console.log("API Result:", res);

        if (res.status === 200 && res.data.length > 0) {
          setCountry(res.data[0]);
        } else {
          setError("No country found!");
        }
      } catch (err) {
        setError("Failed to fetch data");
      }
    });
  }, [id]);

  if (isPending) return <Loader />;
  if (error) return <h2 style={{ color: "red" }}>{error}</h2>;
  if (!country) return null;

  // Clean values
  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "N/A";

  const currencies = country.currencies
    ? Object.values(country.currencies)
        .map((c) => `${c.name} (${c.symbol})`)
        .join(", ")
    : "N/A";

  return (
    <section className="country-details container">
      <div className="details-grid">
        {/* LEFT: FLAG */}
        <div className="flag-box">
          <img src={country.flags?.png} alt={country.flags?.alt} />
        </div>

        {/* RIGHT: COUNTRY INFO */}
        <div className="info-box">
          <h1 className="title">{country.name?.official}</h1>

          <p>
            <strong>Common Name:</strong> {country.name?.common}
          </p>
          <p>
            <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
          </p>
          <p>
            <strong>Population:</strong> {country.population.toLocaleString()}
          </p>
          <p>
            <strong>Region:</strong> {country.region}
          </p>
          <p>
            <strong>Sub-Region:</strong> {country.subregion}
          </p>
          <p>
            <strong>Languages:</strong> {languages}
          </p>
          <p>
            <strong>Currencies:</strong> {currencies}
          </p>
          <p>
            <strong>Area:</strong> {country.area} km²
          </p>
          <p>
            <strong>Timezones:</strong> {country.timezones.join(", ")}
          </p>

          {country.borders && (
            <p>
              <strong>Borders:</strong> {country.borders.join(", ")}
            </p>
          )}

          {/* Maps */}
          <a
            href={country.maps.googleMaps}
            target="_blank"
            rel="noreferrer"
            className="map-btn"
          >
            View on Google Maps
          </a>
        </div>
      </div>

      <div className="country-card-backBtn">
        <NavLink to="/country" className="backBtn">
          <button>Go Back</button>
        </NavLink>
      </div>
    </section>
  );
};
