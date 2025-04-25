import { useState } from 'react'
import Filter from './components/Filter'
import AddNew from './components/AddNew'
import Numbers from './components/Numbers'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterNames, SetFilterNames] = useState('')

  const addNameAndNumber = (event) => {
    event.preventDefault();
    if (newName === '') {
      alert("can't add empty name")
    } else {
      const names = persons.map(person => person.name);
      
      names.includes(newName) 
      ? alert(`${newName} is already added to phonebook`) 
      : setPersons(persons.concat({ name: newName, number: newNumber }));
      setNewName('');
      setNewNumber('');
    }
  }

  const handleNameChange = (event) => setNewName(event.target.value)  
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterNameChange = (event) => SetFilterNames(event.target.value)
  const namesToShow = persons.filter(person => person.name.toLowerCase().includes(filterNames.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filterNames} onChange={handleFilterNameChange}/>
      <AddNew 
        onSubmit={addNameAndNumber} 
        nameVal={newName} 
        onNameChange={handleNameChange}
        numVal={newNumber}
        onNumChange={handleNumberChange}
      />
      <Numbers names={namesToShow}/>
    </div>
  )
}

export default App