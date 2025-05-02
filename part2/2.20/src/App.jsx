import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'
import countryApiService from './services/connectCountryApi'

function App() {
  const [filterText, setFilterText] = useState('')
  const [countries, setCountries] = useState([])
  const [countriesToRender, setCountriesToRender] = useState([])

  useEffect(
    () => {
      countryApiService.getAll()
      .then((response) => {
        setCountries(response.data);
        setCountriesToRender(response.data);  
    });
  }, [])
  
  const handleFilterTextChange = (event) => {
    setFilterText(event.target.value);
    setCountriesToRender(countries.filter(country => 
      country.name.official.toLowerCase().includes(event.target.value.toLowerCase()) || 
      country.name.common.toLowerCase().includes(event.target.value.toLowerCase())
    ));
  }

  return (
    <div>
      <Filter filterText value={filterText} onChange={handleFilterTextChange} />
      <Countries countries={countriesToRender} handleChoice={setCountriesToRender}/>
    </div>

  )
}

export default App
