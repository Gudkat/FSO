const Numbers = ({ names }) => {
  return (
    <div>
      <h2>Numbers</h2>
      {names.map(person => <div key={person.name}>{person.name} {person.number}</div>)}
    </div>
  )
}

export default Numbers