import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import AddNew from './components/AddNew'
import Numbers from './components/Numbers'
import Notification from './components/Notification'
import numbersService from './services/numbers'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterNames, SetFilterNames] = useState('')
  const [message, setMessage] = useState(null)
  const [isError, setIsError] = useState(false)


  const handleAddNameAndNumber = (event) => {
    event.preventDefault();
    if (newName === '') {
      alert("can't add empty name")
    } else {
      const foundPerson = persons.find(person => person.name === newName);
      if (foundPerson) {
        if (window.confirm(`${newName} is already added to phonebook. Replace the old number with a new one?`)) {
          const newPerson = {...foundPerson, number: newNumber };
          const res = numbersService.update(newPerson.id, newPerson);
          res.then(() => {
            setPersons(persons.map(person => person.id === newPerson.id ? newPerson : person));
            setIsError(false);
            setMessage(`Changed the number of ${newPerson.name}`);
          })
          .catch(error => {
            setIsError(true);
            setMessage(`The information of ${newPerson.name} has been already removed from server`)
          })
        }
      } else {
        const newPerson = { name: newName, number: newNumber};
        const res = numbersService.create(newPerson);
        
        res.then(data => {
          newPerson.id = data.id
          setPersons(persons.concat(newPerson));
          setIsError(false);
          setMessage(`Added ${newPerson.name}`);
        })
        .catch(error => () => console.log('failed to add new number'))
      }
      
      setNewName('');
      setNewNumber('');
      clearMessage();
    }
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterNameChange = (event) => SetFilterNames(event.target.value)
  const handleDelete = (personId) => {
    numbersService.remove(personId);
    setPersons(persons.filter(person => person.id !== personId));
  }
  
  const clearMessage = () => setTimeout(() => {setMessage(null)}, 5000)

  const namesToShow = persons.filter(person => person.name.toLowerCase().includes(filterNames.toLowerCase()))
  
  useEffect(() => {
    numbersService.getAll()
    .then(response => {
      setPersons(response.data)
    })
  }, [])
    
  return (
    <div>
    <h2>Phonebook</h2>
    <Notification message={message} error={isError} />
    <Filter value={filterNames} onChange={handleFilterNameChange} />
    <AddNew
      onSubmit={handleAddNameAndNumber}
      nameVal={newName}
      onNameChange={handleNameChange}
      numVal={newNumber}
      onNumChange={handleNumberChange}
    />
    <Numbers names={namesToShow} handleDelete={handleDelete} />
  </div>
  )
}

export default App