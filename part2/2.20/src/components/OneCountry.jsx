import Weather from "./Weather";

const OneCountry = (country) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>Capital: {country.capital}</div>
      <div>Population: {country.population}</div>
      <h1>Languages</h1>
      <ul>
        {Object.values(country.languages).map(lang => <li key={lang}>{lang}</li>)}
      </ul>
      <img src={country.flags.png} alt="flag"/>
      <Weather capital={country.capital[0]}/>
    </div>
  );
}

export default OneCountry