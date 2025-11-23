export const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;

  return (
    <li className="country-card card">
      <div className="container-card card bg-white-box">
        <img src={flags.svg} alt={flags.alt} />
        <div className="countryInfo">
          <p className="card-title">{name.common}</p>
        </div>
      </div>
    </li>
  );
};
