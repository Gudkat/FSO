const Numbers = ({ names, handleDelete }) => {
  return (
    <div>
      <h2>Numbers</h2>
      {names.map(person => 
      <div key={person.name}>
        {person.name} {person.number} 
        <button 
          onClick={()=> {
            if (window.confirm(`Delete ${person.name} ?`)) 
              handleDelete(person.id);
          }}>
        delete
        </button> 
      </div>)}
    </div>
  )
}

export default Numbers