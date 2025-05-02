import OneCountry from './OneCountry'

const Countries = ({ countries, handleChoice }) => {
  if (countries.length === 1) {
    return OneCountry(countries[0])
  }
  if (countries.length < 11) {
    return (
      <div>
        {countries.map(country => (
          <div key={country.name.official}>
            {country.name.common || country.name.official}
            <button onClick={() => handleChoice([country])}>Show</button>
          </div>
        ))}
      </div>
    )
  }

  return <div>
    Too many matches, specify another filter
  </div>
}

export default Countries